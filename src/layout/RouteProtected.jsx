import { Outlet, Navigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth  from "../hooks/useAuth";

const RouteProtected = ()=>{
    const  { auth, cargando } = useAuth();

    if(cargando){
        console.log('cargando trues', cargando)
    }

    return (
        <>
            <Header/>   
                {/* { auth?._id ? (
                    <main className='container mx-auto mt-10'>
                        <Outlet></Outlet>
                    </main>) : <Navigate to="/"></Navigate>} */}
                    <Outlet></Outlet>
            <Footer/>
        </>
    )
}

export default RouteProtected;