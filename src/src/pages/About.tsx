import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="pt-16 md:pt-20 pb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="bg-emerald-800 py-12 md:py-20 mb-12">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white text-center">
            Our Story
          </h1>
          <p className="text-emerald-100 text-center mt-4 max-w-xl mx-auto">
            How Aromera was born from a passion for natural fragrances and sustainable practices.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8">
        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl font-serif font-bold text-emerald-900 mt-2 mb-6">
                Reconnecting Fragrance with Nature
              </h2>
              <p className="text-gray-700 mb-6">
                Aromera was founded with a clear mission: to create luxurious perfumes that harness the power of nature without compromising on quality or longevity. We believe that fragrance should be an extension of nature's beauty, not a synthetic imitation.
              </p>
              <p className="text-gray-700 mb-6">
                For too long, the perfume industry has relied on synthetic chemicals that can cause skin irritation and environmental harm. We set out to prove that organic perfumes can be just as sophisticated and long-lasting as their conventional counterparts.
              </p>
              <p className="text-gray-700">
                Every bottle of Aromera perfume represents our commitment to this mission: creating fragrances that are better for your skin, better for the planet, and uncompromising in quality.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg" 
                alt="Aromera Perfumes Mission"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-amber-300 rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </section>
        
        {/* Founder's Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src="https://images.pexels.com/photos/3014860/pexels-photo-3014860.jpeg" 
                alt="Aromera Founder"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-2 border-emerald-200 rounded-lg -z-10"></div>
            </motion.div>
            
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Founder's Story</span>
              <h2 className="text-3xl font-serif font-bold text-emerald-900 mt-2 mb-6">
                From Botanist to Perfumer
              </h2>
              <p className="text-gray-700 mb-6">
                Aromera was founded by Sofia Rodriguez, a botanist with a passion for perfumery. After years of studying plant essences and their properties, Sofia was frustrated by the lack of truly natural fragrances that could compete with conventional perfumes in terms of complexity and longevity.
              </p>
              <p className="text-gray-700 mb-6">
                "I kept encountering the same problem," Sofia explains. "The natural perfumes I found were either too simple or they faded within an hour. Meanwhile, the long-lasting conventional perfumes were full of synthetic chemicals that often caused skin reactions."
              </p>
              <p className="text-gray-700">
                This gap in the market inspired Sofia to create Aromera, combining her botanical expertise with traditional perfumery techniques to create organic fragrances that are both sophisticated and long-lasting.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Our Process */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mt-2 mb-6">
              From Plant to Perfume
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Every Aromera perfume begins with the highest quality organic ingredients, carefully selected for their aromatic properties and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-emerald-800 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-medium text-emerald-900 mb-3">
                Ethical Sourcing
              </h3>
              <p className="text-gray-700">
                We work directly with organic farms around the world to source the highest quality botanical ingredients. Our partnerships ensure fair compensation for farmers and sustainable harvesting practices.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-emerald-800 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-medium text-emerald-900 mb-3">
                Traditional Extraction
              </h3>
              <p className="text-gray-700">
                We use traditional methods like steam distillation and cold pressing to extract essential oils without harsh chemicals. These methods preserve the natural properties of each botanical ingredient.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-emerald-800 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-medium text-emerald-900 mb-3">
                Artisanal Blending
              </h3>
              <p className="text-gray-700">
                Our master perfumers blend these precious essences by hand, creating complex, layered fragrances that evolve beautifully on the skin. Each perfume is aged to perfection before bottling.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Sustainability */}
        <section className="bg-emerald-50 py-16 px-4 md:px-8 rounded-lg mb-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Our Commitment</span>
              <h2 className="text-3xl font-serif font-bold text-emerald-900 mt-2 mb-6">
                Sustainability at Every Step
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-emerald-900 mb-2">
                    Recyclable Packaging
                  </h3>
                  <p className="text-gray-700">
                    All of our bottles and packaging are made from recyclable or biodegradable materials. We're constantly exploring new ways to reduce our packaging footprint.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-emerald-900 mb-2">
                    Carbon-Neutral Shipping
                  </h3>
                  <p className="text-gray-700">
                    We offset 100% of the carbon emissions from our shipping through investments in verified conservation projects around the world.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-emerald-900 mb-2">
                    Reforestation Projects
                  </h3>
                  <p className="text-gray-700">
                    For every bottle sold, we contribute to reforestation efforts to help preserve the biodiversity that makes our natural fragrances possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-amber-500 text-sm font-medium uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mt-2 mb-6">
              The People Behind Aromera
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our passionate team combines expertise in botany, perfumery, and sustainable business practices to create fragrances that are good for you and the planet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto" style={{ maxWidth: '200px' }}>
                <img 
                  src="https://images.pexels.com/photos/3014860/pexels-photo-3014860.jpeg" 
                  alt="Sofia Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-emerald-900 mb-1">
                Sofia Rodriguez
              </h3>
              <p className="text-gray-600 mb-3">Founder & Lead Perfumer</p>
              <p className="text-gray-700 px-4">
                A botanist with a passion for fragrance, Sofia combines scientific knowledge with artistic sensibility.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto" style={{ maxWidth: '200px' }}>
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                  alt="Marco Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-emerald-900 mb-1">
                Marco Chen
              </h3>
              <p className="text-gray-600 mb-3">Sustainability Director</p>
              <p className="text-gray-700 px-4">
                Marco oversees our environmental initiatives and ensures our business practices meet the highest standards.
              </p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto" style={{ maxWidth: '200px' }}>
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                  alt="Leila Patel"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-medium text-emerald-900 mb-1">
                Leila Patel
              </h3>
              <p className="text-gray-600 mb-3">Master Perfumer</p>
              <p className="text-gray-700 px-4">
                With over 15 years of experience, Leila brings traditional perfumery techniques to our organic creations.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="text-center py-16 md:py-20 bg-emerald-800 text-white rounded-lg">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Experience Aromera Today
          </h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
            Discover the difference that organic, long-lasting fragrances can make in your daily life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/products" 
              className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-emerald-900 font-medium rounded-md transition-colors duration-300"
            >
              Shop Our Collection
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 bg-transparent hover:bg-white/10 border border-white text-white font-medium rounded-md transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;