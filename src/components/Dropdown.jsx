import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative flex flex-col items-center dropdown-container group">
      {/* Dropdown Button - Opens on Hover */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-2 bg-[#2e176c] text-white rounded-md font-bold text-lg"
      >
        ☰
      </button>

      {/* Dropdown Menu - Hover & Click Activation */}
      <div
        className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-40 sm:w-48 bg-[#4a267d] text-white rounded-md shadow-lg z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } group-hover:opacity-100 group-hover:visible`}
      >
        <ul className="flex flex-col">
          <li>
            <Link to="/" className="block px-4 py-2 hover:bg-[#530306]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/resume" className="block px-4 py-2 hover:bg-[#530306]">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/about" className="block px-4 py-2 hover:bg-[#530306]">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;