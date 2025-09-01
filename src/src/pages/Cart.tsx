import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  // ✅ Scroll to top when Cart page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      className="pt-16 md:pt-20 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-6">
          Your Cart
        </h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-10 w-10 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-medium text-emerald-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any perfumes to your cart yet. Explore our collection to find your perfect scent.
            </p>
            <Link 
              to="/products"
              className="px-6 py-3 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-medium text-emerald-900">
                    {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
                  </h2>
                </div>
                
                <ul>
                  {cart.map((item) => (
                    <li 
                      key={item.product.id}
                      className="p-6 border-b border-gray-200 last:border-0"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center">
                        <div className="sm:w-20 sm:h-20 rounded-md overflow-hidden mb-4 sm:mb-0 flex-shrink-0">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-grow sm:ml-6">
                          <Link 
                            to={`/products/${item.product.id}`}
                            className="text-lg font-medium text-emerald-900 hover:text-emerald-700 transition-colors"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-sm text-gray-500 mb-2">
                            {item.product.volume} · {item.product.scentFamily}
                          </p>
                          <p className="text-emerald-800 font-medium">
                            ${item.product.price.toFixed(2)}
                          </p>
                        </div>
                        
                        <div className="mt-4 sm:mt-0 flex flex-col sm:items-end">
                          <div className="flex items-center border border-gray-300 rounded-md mb-4">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="px-3 py-1 text-gray-500 hover:text-emerald-700 focus:outline-none"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={16} />
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                              className="w-10 text-center py-1 border-x border-gray-300 focus:outline-none"
                              min="1"
                            />
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="px-3 py-1 text-gray-500 hover:text-emerald-700 focus:outline-none"
                              aria-label="Increase quantity"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="flex items-center text-sm text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Trash2 size={16} className="mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="p-6 border-t border-gray-200">
                  <Link
                    to="/products"
                    className="flex items-center text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <ChevronLeft size={16} className="mr-1" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-lg font-medium text-emerald-900 mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between text-lg font-medium text-emerald-900">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Including all taxes
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  Proceed to Checkout
                </button>
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    We Accept
                  </h3>
                  <div className="flex space-x-2">
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
                      Visa
                    </div>
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
                      MC
                    </div>
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
                      Amex
                    </div>
                    <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-xs">
                      PayPal
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
