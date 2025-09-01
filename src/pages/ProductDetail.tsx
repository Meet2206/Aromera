import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Minus, Plus, ShoppingBag } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === Number(id));
  
  if (!product) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-8">Sorry, the product you are looking for does not exist.</p>
        <Link 
          to="/products"
          className="px-6 py-3 bg-emerald-700 text-white rounded-md hover:bg-emerald-800"
        >
          Back to Products
        </Link>
      </div>
    );
  }
  
  const relatedProducts = products
    .filter(p => p.scentFamily === product.scentFamily && p.id !== product.id)
    .slice(0, 3);
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <motion.div
      className="pt-16 md:pt-20 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="py-4 mb-8">
          <ol className="flex items-center text-sm">
            <li className="flex items-center">
              <Link to="/" className="text-gray-500 hover:text-emerald-700">Home</Link>
            </li>
            <li className="flex items-center mx-2">
              <ChevronRight size={16} className="text-gray-400" />
            </li>
            <li className="flex items-center">
              <Link to="/products" className="text-gray-500 hover:text-emerald-700">Products</Link>
            </li>
            <li className="flex items-center mx-2">
              <ChevronRight size={16} className="text-gray-400" />
            </li>
            <li className="text-emerald-800 font-medium">{product.name}</li>
          </ol>
        </nav>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {product.isNew && (
              <span className="inline-block bg-amber-500 text-emerald-900 text-xs font-bold uppercase px-2 py-1 rounded mb-4">
                New
              </span>
            )}
            
            {product.isBestSeller && (
              <span className="inline-block bg-emerald-700 text-white text-xs font-bold uppercase px-2 py-1 rounded mb-4 ml-2">
                Best Seller
              </span>
            )}
            
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-2">
              {product.name}
            </h1>
            
            <p className="text-gray-500 mb-4">
              {product.volume} · {product.scentFamily} · {
                categories.find(c => c.id === product.category)?.name
              }
            </p>
            
            <div className="text-2xl font-medium text-emerald-800 mb-6">
              ${product.price.toFixed(2)}
            </div>
            
            <p className="text-gray-700 mb-8">
              {product.description}
            </p>
            
            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="text-gray-700 mr-4">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button
                  onClick={decreaseQuantity}
                  className="px-3 py-1 text-gray-500 hover:text-emerald-700 focus:outline-none"
                >
                  <Minus size={18} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-12 text-center py-1 border-x border-gray-300 focus:outline-none"
                  min="1"
                />
                <button
                  onClick={increaseQuantity}
                  className="px-3 py-1 text-gray-500 hover:text-emerald-700 focus:outline-none"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
            >
              <ShoppingBag size={20} className="mr-2" />
              Add to Cart
            </button>
            
            {/* Ingredients */}
            <div className="mt-12">
              <h3 className="text-lg font-medium text-emerald-900 mb-3">Ingredients</h3>
              <p className="text-gray-700 mb-2">
                100% Organic. Made with natural ingredients:
              </p>
              <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif font-bold text-emerald-900 mb-8">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductDetail;