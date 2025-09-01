import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4">Aromera</h3>
            <p className="text-emerald-100 mb-6">
              Organic perfumes that are gentle on your skin and last all day.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/aromera.perfumes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-amber-300 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-amber-300 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-amber-300 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:info@aromera.com" 
                className="text-white hover:text-amber-300 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-emerald-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-emerald-100 hover:text-white transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-emerald-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-emerald-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Collections</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-emerald-100 hover:text-white transition-colors">
                  Floral
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-emerald-100 hover:text-white transition-colors">
                  Citrus
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-emerald-100 hover:text-white transition-colors">
                  Woody
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-emerald-100 hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-emerald-100 hover:text-white transition-colors">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Subscribe</h4>
            <p className="text-emerald-100 mb-4">
              Join our mailing list for updates on new fragrances and special offers.
            </p>
            <form className="flex flex-col">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 mb-2 rounded bg-emerald-800 border border-emerald-700 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button 
                type="submit"
                className="px-4 py-2 rounded bg-amber-500 hover:bg-amber-600 transition-colors text-emerald-900 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-emerald-800 mt-12 pt-8 text-center text-emerald-300 text-sm">
          <p>&copy; {currentYear} Aromera Perfumes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;