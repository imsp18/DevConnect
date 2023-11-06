import logo from '../assets/logo.png';
import '../App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
const Navbar = () => {
    return (
        <nav className="flex flex-row items-center justify-between mt-9 max-sm:mt-4">
            {/* Logo */}
            <div className="flex flex-row items-center justify-center">
                <img src={logo} alt="Logo" className="w-[46px] h-[51px] max-sm:w-[23px] max-sm:h-[25px]" />
                <h1 className="font-Poppins font-bold text-3xl text-white ml-2 max-sm:text-lg">DevConnect</h1>
            </div>
            {/* Button */}
            <LoginButton />
            <LogoutButton />
        </nav>
    );
}

export default Navbar;