import logo from '../assets/logo.png';
import '../App.css';
const Navbar = () => {
    return (
        <nav className="flex flex-row items-center justify-between mt-9 max-sm:mt-4">
            {/* Logo */}
            <div className="flex flex-row items-center justify-center">
                <img src={logo} alt="Logo" className="w-[46px] h-[51px] max-sm:w-[23px] max-sm:h-[25px]" />
                <h1 className="font-Poppins font-bold text-3xl text-white ml-2 max-sm:text-lg">DevConnect</h1>
            </div>
            {/* Login Button */}
            <div class="rounded-full border-white border flex flex-row items-center justify-center px-10 py-2 max-sm:px-4 max-sm:py-1 hover:cursor-pointer">
                <h1 className="font-Poppins font-medium text-white text-2xl bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent relative max-sm:text-lg">Login</h1>
            </div>
        </nav>
    );
}

export default Navbar;