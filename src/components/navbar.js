import logo from '../assets/logo.png';
import '../App.css';
const Navbar = () => {
    return (
        <nav className="flex flex-row items-center justify-between mt-9">
            {/* Logo */}
            <div className="flex flex-row items-center">
                <img src={logo} alt="Logo" className="w-[46px] h-[51px]" />
                <h1 className="font-Poppins font-bold text-3xl text-white ml-2">DevConnect</h1>
            </div>
            {/* Login Button */}
            <div class="rounded-full bg-gradient-to-r from-primary to-secondary flex flex-row items-center justify-center px-10 py-2 hover:cursor-pointer">
                <h1 className="font-Poppins font-medium text-white text-2xl relative">Login</h1>
            </div>
        </nav>
    );
}

export default Navbar;