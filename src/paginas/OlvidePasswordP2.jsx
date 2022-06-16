import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import Alert from '../components/Alert';
import clienteAxios from '../config/axios';

const OlvidePasswordP2 = () => {
    const [alerta, setAlerta] = useState({});
    const [newPassword, setnewPassword] = useState('');
    const [newPassword2, setnewPassword2] = useState('');
    const [tokenValido, setTokenValido] = useState(false);
    const params = useParams();
    const { token } = params;
    

    const validateToken = async () => {
        try {
            const respuesta = await clienteAxios(`/recuperar-password/${token}`);
            setAlerta({msg: "token valido, ingrese su nueva contraseña", error: false});
            setTokenValido(true);
        }catch (ex){
            setAlerta({msg: "token invalido, vuelva a realizar la operacion nuevamente para cambiar su contraseña", error: true});
            setTokenValido(false);
        }

    }
    
    useEffect (()=>{
        validateToken();
    },[])

    const handleSubmit = async (e) =>{
        e.preventDefault();
    
        if (newPassword < 6 || newPassword2 < 6){
            setAlerta({msg: 'la contraseña debe tener mas de 6 caracteres', error : true});
            return;
        }

        if (newPassword !== newPassword2) {
            setAlerta({msg: 'la contraseña deben ser iguales', error : true});
            return;
        }

        try {
        const url = `recuperar-password/${token}`; 
        const { data } = clienteAxios.post(url, { password: newPassword });
        console.log(data);
        setAlerta({ msg: "contraseña modificada correctamente" , error:false});
        }catch(ex){

            setAlerta({msg: ex, error: true});
            console.log(ex);
        }

    }

    const { msg } = alerta;


  

  return (
    <>
        <div>
            <h2 className="text-emerald-300 font-black text-5xl md:text-7xl ml-5">Cree una nueva contraseña y para administrar sus <span className="text-emerald-600">Pacientes</span></h2>
        </div>

        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 mr-12 rounded-xl bg-white'>
                { msg && <Alert alert={alerta}/>}
               
                { !tokenValido && <div className='flex justify-center'><Link to="../"
                   title='Inicio'
                   className='block bg-emerald-300 p-3 rounded-xl justify-center  text-center my-5 text-gray-500 w-full md:w-2/4'
                   >Ingrese Sesión Aquí.</Link></div>
                }

                { tokenValido &&  <form className='mr-5 h-auto'
                    onSubmit={handleSubmit} >
                  
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Ingrese una nueva contraseña
                        </label>
                    <input
                            type='password'
                            placeholder="Ingrese nueva contraseña"
                            value={newPassword}
                            onChange={e => setnewPassword(e.target.value)}
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl md:w-12/12"></input>
                    </div>  
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Ingrese nuevamente su contraseña
                        </label>
                    <input
                            type='password'
                            placeholder="Ingrese nueva contraseña"
                            value={newPassword2}
                            onChange={e => setnewPassword2(e.target.value)}
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl md:w-12/12"></input>
                    </div>  
                 
                    <div className='w-full h-auto flex justify-center'>
                    
                        <input 
                            type="submit"
                            value="Cree su nueva contraseña Aqui"
                            className="bg-emerald-300 w-full py-3 px-12 rounded-xl text-white uppercase font-bold mt-5  hover:cursor-pointer hover:bg-emerald-400 md:w-4/5">

                        </input>
                    </div>
                </form> }
               
                <nav className='py-4 lg:flex  lg:justify-between'>
                   
                    <Link to="../" 
                        title='Recuperar Contraseña'
                        className='block text-center my-5 text-gray-500 w-full md:w-3/7'
                        >¿Tienes una cuenta? Ingresa Aquí</Link>
                    <Link to="../Registrar" 
                        title='Registrar'
                        className='block text-center my-5 text-gray-500 w-full md:w-3/11'
                        >¿No tienes una cuenta? Registrate Aquí</Link>
                </nav>
            </div>
    </>
  )
}

export default OlvidePasswordP2