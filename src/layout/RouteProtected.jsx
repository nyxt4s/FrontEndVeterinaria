import { Outlet } from "react-router";

const RouteProtected = ()=>{
    console.log('funciona');
    return (
        <>
         <h1>route protected</h1>
        <Outlet></Outlet>
        </>
    )
}

export default RouteProtected;