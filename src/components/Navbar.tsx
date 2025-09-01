import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-serif font-bold text-amber-900"
          >
            Aromera
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm uppercase tracking-wide ${
                location.pathname === '/' 
                  ? 'text-emerald-800 font-medium' 
                  : 'text-gray-700 hover:text-emerald-700'
              }`}
            >
              Home
            </Link>
            <Link s
              to="/products" 
              className={`text-sm uppercase tracking-wide ${
                location.pathname.includes('/products') 
                  ? 'text-emerald-800 font-medium' 
                  : 'text-gray-700 hover:text-emerald-700'
              }`}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className={`text-sm uppercase tracking-wide ${
                location.pathname === '/about' 
                  ? 'text-emerald-800 font-medium' 
                  : 'text-gray-700 hover:text-emerald-700'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm uppercase tracking-wide ${
                location.pathname === '/contact' 
                  ? 'text-emerald-800 font-medium' 
                  : 'text-gray-700 hover:text-emerald-700'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Cart Icon & Mobile Menu Button */}
          <div className="flex items-center">
            <Link 
              to="/cart" 
              className="relative p-2 text-gray-700 hover:text-emerald-700"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-amber-500 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button 
              className="ml-4 md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-64 opacity-100 mt-4' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col py-2 space-y-4">
            <Link 
              to="/" 
              className={`text-sm uppercase tracking-wide ${
                location.pathname === '/' 
                  ? 'text-emerald-800 font-medium' 
                  : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`text-sm uppercase tracking-wide ${
                location.pathname.includes('/products') 
                  ? 'text-emerald-800 font-medium' 
                  : 'text-gray-700'
              }`}
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className={`text-sm uppercase tracking-wide ${
                location.pathname === '/about' 
                  ? 'text-emerald-800 font-medium' 
                  : 'text-gray-700'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm uppercase tracking-wide ${
                location.pathname === '/contact' 
                  ? 'text-emerald-800 font-medium' 
                  : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;