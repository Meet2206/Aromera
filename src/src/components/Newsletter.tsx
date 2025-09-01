import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-16 md:py-24 bg-amber-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4">
              Join Our Fragrance Community
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for exclusive offers, new fragrance launches, and aromatherapy tips.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
              <button 
                type="submit"
                className="whitespace-nowrap px-6 py-3 bg-amber-500 hover:bg-amber-600 text-emerald-900 font-medium rounded-md transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;