import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const featuredProducts = products.filter(product => 
    product.isNew || product.isBestSeller
  );
  
  const filteredProducts = activeTab === 'all' 
    ? featuredProducts 
    : activeTab === 'new' 
      ? products.filter(product => product.isNew)
      : products.filter(product => product.isBestSeller);

  return (
    <section className="py-16 md:py-24 bg-emerald-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Fragrances
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our most popular organic perfumes, crafted with care and designed to last all day.
          </motion.p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'all'
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'text-gray-600 hover:text-emerald-700'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Featured
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'new'
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'text-gray-600 hover:text-emerald-700'
              }`}
              onClick={() => setActiveTab('new')}
            >
              New Arrivals
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'bestseller'
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'text-gray-600 hover:text-emerald-700'
              }`}
              onClick={() => setActiveTab('bestseller')}
            >
              Best Sellers
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="/products" 
            className="inline-block px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-md transition-colors duration-300"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;