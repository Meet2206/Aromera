import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg" 
          alt="Aromera Perfumes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Nature's Essence in Every Bottle
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-emerald-50 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Discover our collection of organic perfumes that are gentle on your skin and last all day.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a 
              href="/products" 
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-emerald-900 font-medium rounded-md transition-colors duration-300 text-center"
            >
              Shop Now
            </a>
            <a 
              href="/about" 
              className="px-6 py-3 bg-transparent hover:bg-white/10 border border-white text-white font-medium rounded-md transition-colors duration-300 text-center"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-2 bg-white rounded-full mt-2"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;