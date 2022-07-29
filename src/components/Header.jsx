import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Header = () => {
    const  { cerrarSesion } = useAuth(); 

  return (
        <header className="py-10 bg-indigo-600">
            <div className="container mx-auto flex flex-col justify-between items-center lg:flex-row">
                <h1 className="font-bold text-3xl text-indigo-200 text-center">Administrador de pacientes de {''} <span className="text-white font-black">Veterinaria</span></h1>
                <nav className='flex flex-col gap-4 mt-5 items-center lg:flex-row lg:mt-0'>
                    <Link to="/admin" className='text-white text-sm uppercase font-bold'>Pacientes</Link>
                    <Link to="/admin" className='text-white text-sm uppercase font-bold'>Perfil</Link>
                <button 
                    type="button"
                    className='text-white text-sm uppercase font-bold'
                    onClick={cerrarSesion}>Cerrar Sesión</button>
                </nav>
            </div>

        </header>
  )
}

export default Header