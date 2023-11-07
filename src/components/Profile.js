import { useAuth0 } from "@auth0/auth0-react";
const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <div className="text-white text-center flex flex-row items-center justify-center gap-2">
                {user?.picture && <img src={user.picture} alt={user?.name} className="rounded-full w-12 h-12"/>}
                <h2 className="font-Poppins text-white font-medium text-xl">{user?.name}</h2>
            </div>
        )

    )
}
export default Profile;