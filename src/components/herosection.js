import arrow1 from "../assets/arrow-1.svg";
import arrow2 from "../assets/arrow-2.svg";
import image1 from "../assets/image-1.svg";
import image2 from "../assets/image-2.svg";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-40">
            <div className="flex flex-row items-center justify-center">
                <img src={arrow1} alt="arrow1" className="max-sm:hidden" />
                <div className="flex flex-col items-center justify-center gap-4">
                    <h1 className="font-Poppins bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent font-bold text-6xl max-sm:text-3xl">DevConnect</h1>
                    <p className="font-Poppins font-regular text-center text-lg text-white max-sm:text-sm">Empowering developers to seamlessly connect, collaborate, and organize tech events within a vibrant and supportive community.</p>
                </div>
                <img src={arrow2} alt="arrow2" className="max-sm:hidden"  />
            </div>
            <div className="flex flex-row items-center justify-center gap-4 mt-20 max-sm:flex-col">
                <img src={image1} alt="image1" />
                <img src={image2} alt="image2" className="max-sm:hidden"/>
            </div>
        </div>
    );
}

export default HeroSection;