import { SiCodersrank } from "react-icons/si";

const Navbar = () => {
    return (
        <>
            <nav className="bg-black text-white px-8 md:px-16 lg:px-24 opacity-85">
                <div className="  container py-2 flex justify-center md:justify-between items-center">
                    <div className="text-2xl font-bold hidden md:inline "><SiCodersrank /></div>
                    <div className="  space-x-6">
                        <a href="#home" className="hover:text-amber-300" >Home</a>
                        <a href="#about" className="hover:text-amber-300" >About Me</a>
                        <a href="#service" className="hover:text-amber-300" >Services</a>
                        <a href="#project" className="hover:text-amber-300" >Projects</a>
                        <a href="#Contact" className="hover:text-amber-300" >Contact</a>
                    </div>
                    <button
                        className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full" onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })} >contact me</button>
                </div>
            </nav>



        </>
    )
}

export default Navbar