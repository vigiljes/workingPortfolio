import { useState, useEffect } from "react";
import logo from "../assets/kevinRushLogo.gif";
import { FaLinkedin, FaGithub, FaSoundcloud, FaInstagram } from "react-icons/fa";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Scroll position:", window.scrollY); // Debugging

      if (window.scrollY > 100) { // Changed threshold for better effect
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 text-white z-[100] bg-transparent backdrop-blur-md ${
      isShrunk ? "py-2" : "py-6"
    } text-white z-[100] bg-transparent backdrop-blur-md transition-all duration-500`}>
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/"><img className={`mx-2 ${isShrunk ? "w-16" : "w-28"} transition-all duration-500`} src={logo} alt="logo" /></a>
      </div>

      {/* Center Dropdown */}
      <div className="flex-1 flex justify-center">
        <Dropdown />
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-3 text-lg sm:gap-4 sm:text-2xl">
        <a href="https://www.linkedin.com/in/jesus-vigil313/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/vigiljes" target="_blank"><FaGithub /></a>
        <a href="https://soundcloud.com/jaymv313" target="_blank"><FaSoundcloud /></a>
        <a href="https://www.instagram.com/chuy_vii/" target="_blank"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;