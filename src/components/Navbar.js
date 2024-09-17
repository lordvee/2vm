import { useState } from 'react';
import Image from "next/image";




export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { sel: [selection, setSelection], pickSection } = props;

  const Buttons = () => {
    return ['home', 'about', 'services', 'product', 'contact'].map((item) => (
      <button
        key={item}
        onClick={() => pickSection(item)}
        className="hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </button>
    ))
  }
  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Image src="/img/logo_compact.png" width={120} height={50} alt="2VM Logo" />
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-400 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          <Buttons />
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800">
          <div className="flex flex-col items-center space-y-2 py-4">
            <Buttons />
          </div>
        </div>
      )}
    </nav>
  );
}
