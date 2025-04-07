import logo from "../assets/kevinRushLogo.gif";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSoundcloud } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-28" src={logo} alt="logo" />
        </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/jesus-vigil313/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/vigiljes" target="_blank"><FaGithub /></a>
        <a href="https://soundcloud.com/jaymv313" target="_blank"><FaSoundcloud /></a>
        <a href="https://www.instagram.com/chuy_vii/" target="_blank"><FaInstagram /></a>
        </div>
    </nav>
  );
};

export default Navbar;
