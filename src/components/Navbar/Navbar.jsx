import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent px-8 py-5 font-neue fixed w-full">
      <div className="flex justify-between items-center">
        <div className="text-[#0B1014] text-[1.6rem] font-medium">Taha Ali</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-[#0B1014] text-[1.6rem] text-xl">
          <h3 className="cursor-pointer hover:text-[#3E4945] transition duration-300">
            <Link to="/">Index</Link>
          </h3>
          <h3 className="cursor-pointer hover:text-[#3E4945] transition duration-300">
            <Link to="/profile">Profile</Link>
          </h3>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col items-end gap-4 mt-4 md:hidden text-[#0B1014] text-lg">
          <h3 className="cursor-pointer hover:text-[#3E4945] transition duration-300">
            <Link to="/">Index</Link>
          </h3>
          <h3 className="cursor-pointer hover:text-[#3E4945] transition duration-300">
             <Link to="/profile">Profile</Link>
          </h3>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
