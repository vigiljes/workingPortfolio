import logo from "../assets/kevinRushLogo.gif";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-4 w-10" src={logo} alt="logo" />
        </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaSoundcloud />
        <FaInstagram />
        </div>
    </nav>
  );
};

export default Navbar;
