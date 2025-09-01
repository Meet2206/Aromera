import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img 
              src="https://images.pexels.com/photos/5618034/pexels-photo-5618034.jpeg" 
              alt="Aromera Perfumes Process"
              className="w-full h-auto rounded-lg shadow-xl z-10 relative"
            />
            <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-emerald-200 rounded-lg -z-10"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mt-2 mb-6">
              Crafted with Nature, Designed for You
            </h2>
            <p className="text-gray-600 mb-6">
              At Aromera, we believe that perfume should be a connection to nature, not a departure from it. Our journey began with a simple question: Why can't fragrance be both luxurious and natural?
            </p>
            <p className="text-gray-600 mb-6">
              Founded in 2019, we set out to create perfumes using only organic ingredients sourced from sustainable farms around the world. Our master perfumers blend these precious ingredients using traditional methods that preserve their natural essence.
            </p>
            <p className="text-gray-600 mb-6">
              Each bottle of Aromera perfume represents our commitment to creating fragrances that are gentle on your skin, kind to the planet, and designed to last all day.
            </p>
            <a 
              href="/about" 
              className="inline-block px-6 py-3 bg-transparent border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white font-medium rounded-md transition-colors duration-300"
            >
              Learn More About Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;