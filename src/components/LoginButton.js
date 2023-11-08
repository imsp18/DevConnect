import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <button onClick={()=> loginWithRedirect()} className="rounded-xl max-sm:rounded-lg border-white border flex flex-row items-center justify-center px-10 py-2 max-sm:px-4 max-sm:py-1 hover:cursor-pointer">
                <h1 className="font-Poppins font-medium text-2xl bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent relative max-sm:text-sm">Login</h1>
            </button>
        )

    )
}

export default LoginButton;
