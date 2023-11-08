import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { user, logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <button onClick={()=> logout()} className="rounded-full max-sm:rounded-lg border-white border flex flex-row items-center justify-between px-4 py-2 max-sm:px-4 max-sm:py-1 hover:cursor-pointer gap-2">
                {/* <h1 className="font-Poppins font-medium text-2xl bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent relative max-sm:text-sm">Logout</h1> */}
                {user?.picture && <img src={user.picture} alt={user?.name} className="rounded-full w-10 h-10"/>}
                <h2 className="font-Poppins text-white font-medium text-sm">{user?.name}</h2>
            </button>
        )

    )
}

export default LogoutButton;
