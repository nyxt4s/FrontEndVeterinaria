import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/axios';


const AuthContext = createContext();

const AuthProvider = ({ children }) =>{

    const [auth, setAuth] = useState();
    const [cargando, setCargando] = useState(true);
   
    const cerrarSesion = ()=> {
        localStorage.removeItem('token');
        setAuth({});
    }

    const autenticarUsuario = async () => {
  
        const token = localStorage.getItem('DATA_UTOKEN');
       
        if (!token) {
            setCargando(false)
            return
        }

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
        
        }catch(error){
            console.log(error.response.data.msg);
            setAuth({});
        }
        setCargando(false);
    }
 

    useEffect(()=>{
        autenticarUsuario();
    },[])

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesion
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
