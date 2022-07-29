import { BrowserRouter, Routes, Route} from 'react-router-dom'
// layout
import AuthLayout from './layout/AuthLayout'
import RouteProtected from './layout/routeProtected.jsx'
// pages
import Login from './paginas/Login'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import Registrar from './paginas/Registrar'
import OlvidePassword from './paginas/OlvidePassword'
import OlvidePasswordP2 from './paginas/OlvidePasswordP2'
import { AuthProvider } from './context/AuthProvider'
import Administrador from './paginas/administrator/administrador'


function App() {


  return (
    <BrowserRouter>
        <AuthProvider>
            <Routes>
              <Route path='/' element={<AuthLayout/>}>
                  <Route index element={<Login/>}></Route>
                  <Route path='registrar' element={<Registrar/>}></Route>
                  <Route path='OlvidePassword' element={<OlvidePassword/>}></Route>
                  <Route path='OlvidePassword/:token' element={<OlvidePasswordP2/>}></Route>
                  <Route path='confirmar/:id' element={<ConfirmarCuenta/>}></Route>
              </Route>
              <Route path='/admin' element={<RouteProtected/>}>
                  <Route index element={<Administrador/>}></Route>
              </Route>
            </Routes>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App
