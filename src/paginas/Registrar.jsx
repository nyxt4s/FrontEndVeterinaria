import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert'
import clienteAxios from '../config/axios'

const Registrar = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [segundaPassword, setsegundaPassword] = useState('');
    const [alerta, setAlerta] = useState({});

    const handleSubmit = async e => {
       
        e.preventDefault();
        if ([nombre.trimStart(), email. password, segundaPassword].includes('')){
            setAlerta({msg: 'se tienen que rellenar todos los campos', error : true});
            return;
        }

        if (password !== segundaPassword){
            setAlerta({msg: 'las contraseñas ingresadas deben ser iguales', error : true});
            return;
        }

        if (password.length < 6 ){
            setAlerta({msg: 'la contraseña debe tener mas de 6 caracteres', error : true});
            return;
        }

        setAlerta({});

        // crear usuario en la api
        try {
           
            const respuesta =  await clienteAxios.post('registrar', { nombre, email, password});
            setAlerta({ msg: 'Usuario creado correctamente, Revise su email', error:false})
        }catch(error) {
            console.log(error);
            setAlerta({ msg: error.response.data.msg, error:true})
            

        }
        
    }

    const { msg } = alerta;

  return (
        <>
            <div className='h-auto'>
              <h2 className="text-emerald-300 font-black text-5xl md:text-7xl">Crea tu cuenta y administra tus <span className="text-emerald-600">Pacientes</span></h2>
            </div>
            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 mr-12 rounded-xl bg-white'>
               
                { msg && <Alert alert={alerta}/>}
                
                <form className='mr-5 h-auto' onSubmit={handleSubmit}>
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-base font-bold">
                            Nombre
                        </label>
                    <input
                            type='text'
                            placeholder="Ingrese su nombre"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl md:w-12/12"
                            value={nombre}
                            onChange = {e => setNombre(e.target.value)}></input>
                    </div>  
                  
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-base font-bold">
                            Email
                        </label>
                    <input
                            type='email'
                            placeholder="Ingrese su correo electronico"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl md:w-12/12"
                            value = {email}
                            onChange = { e => setEmail(e.target.value)}></input>
                    </div>  

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-base font-bold">
                            Contraseña
                        </label>
                        <input
                            type='password'
                            placeholder="Ingrese su Contraseña"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl md:w-12/12"
                            value = {password}
                            onChange = { e => setPassword(e.target.value)} ></input>
                    </div>
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-base font-bold">
                            Ingrese su contraseña nuevamente
                        </label>
                        <input
                            type='password'
                            placeholder="Ingrese su Contraseña"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl md:w-12/12"
                            value = {segundaPassword}
                            onChange = { e => setsegundaPassword(e.target.value)}></input>
                    </div>
                    <div className='w-full h-auto flex justify-center'>
                    
                        <input 
                            type="submit"
                            value="Registrar"
                            className="bg-emerald-300 w-full py-3 px-12 rounded-xl text-white uppercase font-bold mt-5  hover:cursor-pointer hover:bg-emerald-400 md:w-4/5"></input>
                    </div>
                </form>

                <nav className='py-4 lg:flex  lg:justify-between'>
                    <Link to="/" 
                            title='Registrar'
                            className='block text-center my-5 text-gray-500 w-full md:w-3/11'
                            >¿si ya tiene una cuenta? ingrese Aquí</Link>
                    <Link to="../OlvidePassword" 
                            title='Recuperar Contraseña'
                            className='block text-center my-5 text-gray-500 w-full md:w-3/7'
                            >¿Olvido su Contraseña?, restablezca Aqui</Link>
               </nav>
            </div>
            
        </>
  )
}

export default Registrar