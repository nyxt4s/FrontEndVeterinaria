import { Outlet } from "react-router"

const AuthLayout = () => {
  return (
    <>
        <h1>Desde AuthLayout</h1>
          dasdasdasdas
        <main className="container mx-auto md:grid  md:grid-cols-2 mt-6 gap-10 p-5 items-center">

        <Outlet></Outlet>
        </main>
    </>
  )
}

export default AuthLayout