import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { Button } from "./ui/button"
import { useAuth, useSigninCheck } from "reactfire"
import { useNavigate } from "react-router-dom"


const Header = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const { status, data: signInCheckResult } = useSigninCheck()

    const handleClickSignIn = async () => {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
        navigate("/dashboard");
    };

    const handleClickSignOut = async () => {
        await signOut(auth);
    };

    return (
        <div className='bg-gray-700 py5'>

            <div className="container flex items-center">
                <p className="text-white">React Firebase</p>
                <nav className="ml-auto py-5">
                    {status === "loading" ? (
                        <Button disabled>Loading...</Button>
                    ) : signInCheckResult.signedIn ? (
                        <Button onClick={handleClickSignOut}>Sign Out</Button>
                    ) : (
                        <Button onClick={handleClickSignIn}>Sign In Google </Button>
                    )}
                </nav>
            </div>

        </div>
    )
}

export default Header