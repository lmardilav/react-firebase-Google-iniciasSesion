import { Navigate, Outlet } from "react-router-dom"
import { useSigninCheck } from "reactfire"

const PrivateLayout = () => {
    const { status, data: signInCheckResult } = useSigninCheck()
    if (status === "loading") {
        return <div>loading...</div>
    }
    //si esto es verdadero vamos a retornar el uotlet
    if (signInCheckResult.signedIn) {
        return <Outlet />

    }
    //si es falto vamos a retonrarl a la raiz 
    return <Navigate to="/" />;
}

export default PrivateLayout