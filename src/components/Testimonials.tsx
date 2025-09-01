import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sophia Anderson',
    location: 'New York, NY',
    quote: "I've tried many natural perfumes before, but they never lasted more than an hour. Aromera's organic perfumes stay with me all day while being gentle on my sensitive skin.",
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'San Francisco, CA',
    quote: "The Cedar & Sage perfume has become my signature scent. I get compliments everywhere I go, and it's amazing to know that it's made from sustainable, organic ingredients.",
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    location: 'Miami, FL',
    quote: "As someone who cares deeply about environmental impact, I'm thrilled to finally find luxurious perfumes that align with my values. Aromera is the perfect blend of quality and conscience.",
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Customers Say
          </motion.h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <img 
                    src={testimonials[current].image} 
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                <div className="flex-grow">
                  <div className="mb-4">
                    <svg className="text-amber-400 h-6 w-6 inline-block" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.216 2c-1.6.016-3.239.521-4.538 1.767C1.978 6.049 2 9.986 2 10v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H7c0-2 .1-3.256 1.02-4.182.9-.9 2.134-.718 2.271-.7.427.046.81-.284.955-.684.155-.414-.058-.878-.479-1.058-.173-.075-1.088-.399-1.551-.376zm10 0c-1.6.016-3.239.521-4.538 1.767C11.978 6.049 12 9.986 12 10v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-2c0-2 .1-3.256 1.02-4.182.9-.9 2.134-.718 2.271-.7.427.046.81-.284.955-.684.155-.414-.058-.878-.479-1.058-.173-.075-1.088-.399-1.551-.376z" />
                    </svg>
                  </div>
                  
                  <p className="text-lg text-gray-700 italic mb-6">
                    {testimonials[current].quote}
                  </p>
                  
                  <div>
                    <h4 className="text-emerald-800 font-medium text-lg">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-gray-500">
                      {testimonials[current].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === current ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={prev}
            className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-emerald-800" />
          </button>
          
          <button
            onClick={next}
            className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-emerald-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;