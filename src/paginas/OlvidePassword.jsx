import { Link } from 'react-router-dom'
import { useState } from 'react'
import Alert from '../components/Alert';
import clienteAxios from '../config/axios';


const OlvidePassword = () => {
    const [email, setEmail] = useState('');
    const [alerta, setAlerta] = useState({});

    const handleSubmit = async e => {
        e.preventDefault();

        try {
         
            // if (email === '') {
            //     setAlerta({ msg: 'Ingrese un correo, no se permiten campos vacios', error: true});
            // }
            const url = `recuperar-password`;
            const { data } = await clienteAxios.post(url, { email })
            setAlerta({ msg: data.msg, error: false});
        }catch(ex){
            setAlerta({msg: ex.response.data.msg, error: true});
        }
    }

    const { msg } = alerta;

  return (
        <>
            <div>
                <h2 className="text-emerald-300 font-black text-5xl md:text-7xl ml-5">Recupera tu contraseña y no pierdas tus <span className="text-emerald-600">Pacientes</span></h2>
            </div>
                <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 mr-12 rounded-xl bg-white'>
                <form className='mr-5 h-auto'
                    onSubmit={handleSubmit} >
                        { msg && <Alert alert={alerta}/>}
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Email
                        </label>
                    <input
                            type='email'
                            placeholder="Ingrese su mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl md:w-12/12"></input>
                    </div>  
                 
                    <div className='w-full h-auto flex justify-center'>
                    
                        <input 
                            type="submit"
                            value="Recuperar contraseña Aquí"
                            className="bg-emerald-300 w-full py-3 px-12 rounded-xl text-white uppercase font-bold mt-5  hover:cursor-pointer hover:bg-emerald-400 md:w-4/5">

                        </input>
                    </div>
                </form>
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

export default OlvidePassword