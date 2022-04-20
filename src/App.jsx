import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import Login from './paginas/Login'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import OlvidePasswordP2 from './paginas/OlvidePasswordP2'



function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<AuthLayout/>}>
              <Route index element={<Login/>}></Route>
              <Route path='registrar' element={<Registrar/>}></Route>
              <Route path='OlvidePassword' element={<OlvidePassword/>}></Route>
              <Route path='OlvidePassword/:token' element={<OlvidePasswordP2/>}></Route>
              <Route path='confirmar/:id' element={<ConfirmarCuenta/>}></Route>
            </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
