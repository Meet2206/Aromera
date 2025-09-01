import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products, scentFamilies, categories } from '../data/products';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedScentFamily, setSelectedScentFamily] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  useEffect(() => {
    let result = products;
    
    // Search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Category filter
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Scent family filter
    if (selectedScentFamily) {
      result = result.filter(product => product.scentFamily === selectedScentFamily);
    }
    
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, selectedScentFamily]);
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedScentFamily('');
  };
  
  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <motion.div
      className="pt-16 md:pt-20 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="bg-emerald-800 py-12 md:py-20 mb-8">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white text-center">
            Our Collection
          </h1>
          <p className="text-emerald-100 text-center mt-4 max-w-xl mx-auto">
            Discover our organic perfumes, crafted with care using natural ingredients for a fragrance experience that's better for you and the planet.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search perfumes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={toggleFilters}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-md hover:bg-emerald-200 transition-colors md:hidden"
            >
              <SlidersHorizontal size={18} />
              Filters
            </button>
            
            {(searchTerm || selectedCategory || selectedScentFamily) && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                <X size={18} />
                Clear Filters
              </button>
            )}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-medium text-lg mb-4 text-emerald-900">Filters</h3>
              
              <div className="mb-6">
                <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wider mb-3">
                  Product Type
                </h4>
                <div className="space-y-2">
                  <button
                    className={`block w-full text-left px-3 py-2 rounded-md ${
                      selectedCategory === ''
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedCategory('')}
                  >
                    All Types
                  </button>
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        selectedCategory === category.id
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wider mb-3">
                  Scent Family
                </h4>
                <div className="space-y-2">
                  <button
                    className={`block w-full text-left px-3 py-2 rounded-md ${
                      selectedScentFamily === ''
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedScentFamily('')}
                  >
                    All Scents
                  </button>
                  {scentFamilies.map(scent => (
                    <button
                      key={scent.id}
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        selectedScentFamily === scent.id
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => setSelectedScentFamily(scent.id)}
                    >
                      {scent.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Filters - Mobile */}
          {isFilterOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
              <div className="h-full w-80 max-w-full bg-white p-6 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-medium text-lg text-emerald-900">Filters</h3>
                  <button onClick={toggleFilters}>
                    <X size={24} />
                  </button>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wider mb-3">
                    Product Type
                  </h4>
                  <div className="space-y-2">
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        selectedCategory === ''
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        setSelectedCategory('');
                        toggleFilters();
                      }}
                    >
                      All Types
                    </button>
                    {categories.map(category => (
                      <button
                        key={category.id}
                        className={`block w-full text-left px-3 py-2 rounded-md ${
                          selectedCategory === category.id
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'hover:bg-gray-100'
                        }`}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          toggleFilters();
                        }}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wider mb-3">
                    Scent Family
                  </h4>
                  <div className="space-y-2">
                    <button
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        selectedScentFamily === ''
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        setSelectedScentFamily('');
                        toggleFilters();
                      }}
                    >
                      All Scents
                    </button>
                    {scentFamilies.map(scent => (
                      <button
                        key={scent.id}
                        className={`block w-full text-left px-3 py-2 rounded-md ${
                          selectedScentFamily === scent.id
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'hover:bg-gray-100'
                        }`}
                        onClick={() => {
                          setSelectedScentFamily(scent.id);
                          toggleFilters();
                        }}
                      >
                        {scent.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Product Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 py-16 text-center">
                  <p className="text-gray-500 text-lg">
                    No products found matching your criteria. Try adjusting your filters.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Products;