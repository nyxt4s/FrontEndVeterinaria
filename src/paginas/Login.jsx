import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import Alert from '../components/Alert';
import clienteAxios from '../config/axios';

const Login = () => {

    const {auth, setAuth } = useAuth();
    const [alerta, setAlerta] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        
        if ([email, password].includes('')){
           
            setAlerta({
                msg : 'Todos los campos son obligatorios',
                error: true
            });
            return
        }

        try {
            const url = 'login';
            const data = await clienteAxios.post(url, { email, password});
            localStorage.setItem('DATA_UTOKEN', data.data.token);

            navigate("./admin");
        }catch(ex){
            setAlerta({msg: ex.response.data.msg, error: true});
        }
    }

    const { msg } = alerta;

  return (
    <>
        <div>
            <h2 className="text-emerald-300 font-black text-5xl md:text-7xl ml-5">Inicia sesión y administra tus <span className="text-emerald-600">Pacientes</span></h2>
        </div>
        <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 mr-12 rounded-xl bg-white'>
           {msg && <Alert alert={alerta}></Alert>}
            <form className='mr-5 h-auto' onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Email
                    </label>
                  <input
                        type='email'
                        placeholder="Ingrese su mail"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl md:w-12/12"
                        value={email}
                        onChange={e =>setEmail(e.target.value)}></input>
                </div>  
                <div className="my-5">
                    <label className="uppercase text-gray-600 block text-xl font-bold">
                        Password
                    </label>
                    <input
                        type='password'
                        placeholder="Ingrese su Contraseña"
                        className="border w-full p-3 mt-3 bg-gray-50 rounded-xl md:w-12/12"
                        value={password}
                        onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div className='w-full h-auto flex justify-center'>
                  
                    <input 
                        type="submit"
                        value="iniciar Sesión"
                        className="bg-emerald-300 w-full py-3 px-12 rounded-xl text-white uppercase font-bold mt-5  hover:cursor-pointer hover:bg-emerald-400 md:w-4/5"></input>
                </div>
            </form>
            <nav className='py-4 lg:flex  lg:justify-between'>
                <Link to="../Registrar" 
                        title='Registrar'
                        className='block text-center my-5 text-gray-500 w-full md:w-3/11'
                        >¿No tienes una cuenta? Registrate Aquí</Link>
                <Link to="../OlvidePassword" 
                        title='Recuperar Contraseña'
                        className='block text-center my-5 text-gray-500 w-full md:w-3/7'
                        >¿Olvido su Contraseña?, restablezca Aqui</Link>
            </nav>
        </div>
    
    </>
  )
}

export default Login