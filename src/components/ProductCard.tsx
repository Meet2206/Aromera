import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <motion.div 
      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {product.isNew && (
        <div className="absolute top-4 left-4 z-10 bg-amber-500 text-emerald-900 text-xs font-bold uppercase px-2 py-1 rounded">
          New
        </div>
      )}
      
      {product.isBestSeller && (
        <div className="absolute top-4 right-4 z-10 bg-emerald-700 text-white text-xs font-bold uppercase px-2 py-1 rounded">
          Best Seller
        </div>
      )}
      
      <Link to={`/products/${product.id}`}>
        <div className="h-64 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-5">
        <div className="mb-2 flex justify-between items-center">
          <Link to={`/products/${product.id}`}>
            <h3 className="text-lg font-medium text-gray-900 hover:text-emerald-700 transition-colors">
              {product.name}
            </h3>
          </Link>
          <span className="font-medium text-emerald-800">
            ${product.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          {product.description.substring(0, 80)}...
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">
            {product.scentFamily}
          </span>
        </div>
        
        <button
          onClick={() => addToCart(product, 1)}
          className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white py-3 px-4 rounded-md transition-all duration-300 transform hover:scale-[1.02] active:scale-95 font-medium"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;