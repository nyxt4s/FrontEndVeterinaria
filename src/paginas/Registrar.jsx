import { Link } from 'react-router-dom'

const Registrar = () => {
  return (
        <>
            <div className='h-auto'>
              <h2 className="text-emerald-300 font-black text-5xl md:text-7xl">Crea tu cuenta y administra tus <span className="text-emerald-600">Pacientes</span></h2>
            </div>
            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10 mr-12 rounded-xl bg-white'>
                <form className='mr-5 h-auto' >
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-base font-bold">
                            Nombre
                        </label>
                    <input
                            type='text'
                            placeholder="Ingrese su nombre"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl md:w-12/12"></input>
                    </div>  
                  
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-base font-bold">
                            Email
                        </label>
                    <input
                            type='email'
                            placeholder="Ingrese su correo electronico"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl md:w-12/12"></input>
                    </div>  

                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-base font-bold">
                            Contraseña
                        </label>
                        <input
                            type='password'
                            placeholder="Ingrese su Contraseña"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl md:w-12/12"></input>
                    </div>
                    <div className="my-5">
                        <label className="uppercase text-gray-600 block text-base font-bold">
                            Ingrese su contraseña nuevamente
                        </label>
                        <input
                            type='password'
                            placeholder="Ingrese su Contraseña"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl md:w-12/12"></input>
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