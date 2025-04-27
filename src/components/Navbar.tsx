
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-green-600">ЭкоЖизнь</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors duration-200">
              Главная
            </Link>
            <Link to="/principles" className="text-gray-700 hover:text-green-600 transition-colors duration-200">
              Принципы
            </Link>
            <Link to="/tips" className="text-gray-700 hover:text-green-600 transition-colors duration-200">
              Советы
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors duration-200">
              О проекте
            </Link>
            <Button className="bg-green-600 hover:bg-green-700">
              Присоединиться
            </Button>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white pb-3 px-4">
          <div className="space-y-1 pt-2 pb-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/principles" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Принципы
            </Link>
            <Link 
              to="/tips" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Советы
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              О проекте
            </Link>
            <Button className="mt-3 w-full bg-green-600 hover:bg-green-700">
              Присоединиться
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
