import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/axios';


const AuthContext = createContext();

const AuthProvider = ({ children }) =>{

    const [auth, setAuth] = useState();

    

    const autenticarUsuario = async () => {
  
        const token = localStorage.getItem('DATA_UTOKEN');
       
        if (!token) return

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization : `Bearer ${token}`
            }
        }

        try{
            let url = 'perfil';
            const { data } = await clienteAxios(url, config); 
            setAuth(data);
            console.log(data);
        }catch(error){
            console.log(error.response.data.msg);
            setAuth({});
        }

        console.log('si hay token', token);

    }
 

    useEffect(()=>{

        autenticarUsuario();
    },[])

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext
