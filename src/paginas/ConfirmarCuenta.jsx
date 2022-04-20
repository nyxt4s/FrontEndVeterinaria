import React, { useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Alert from '../components/Alert';
import clienteAxios from '../config/axios'

const ConfirmarCuenta = (props) => {
    const params = useParams();
    const { id } = params;
    const [cuentaConfirmada, setcuentaConfirmada] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [alerta, setAlerta] = useState({});

    const confirmarCuenta = async () => {
    
        try {
          const url = `confirmar/${id}`;
          const { data } = await clienteAxios (url);
     
          setcuentaConfirmada(true);
          setAlerta({msg : data.msg,
                     error: false
                    });

        }catch(error) {  
             setAlerta({
                 msg: error.response.data.msg,
                 error: true
             })
        }
        setCargando(false);
    }


    useEffect(() => {
         confirmarCuenta();
    
    }, [])
    

  return (
    <>
            <div>
                <h2 className="text-emerald-300 font-black text-5xl md:text-7xl ml-2">Confirme tu cuenta y administre sus <span className="text-emerald-600">Pacientes</span></h2>
            </div>

            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 mr-12 rounded-xl bg-white'>
               
                {!cargando &&  <Alert alert={alerta}/>}
               

                {!cuentaConfirmada && ( <Link to="../" 
                        title='Recuperar Contraseña'
                        className='block text-center my-5 text-gray-700 no-underline hover:underline  text-xl w-full md:w-3/7'
                        >Iniciar Sesión<nav></nav></Link>
                      )
                }
                
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

export default ConfirmarCuenta