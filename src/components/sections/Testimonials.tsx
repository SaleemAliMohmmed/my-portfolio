import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: t('testimonials.client1.text'),
      name: t('testimonials.client1.name'),
      position: t('testimonials.client1.position'),
      rating: 5,
      avatar: '/images/profile-headshot.jpg' // Using the same image as placeholder
    },
    {
      text: t('testimonials.client2.text'),
      name: t('testimonials.client2.name'),
      position: t('testimonials.client2.position'),
      rating: 5,
      avatar: '/images/profile-headshot.jpg'
    },
    {
      text: t('testimonials.client3.text'),
      name: t('testimonials.client3.name'),
      position: t('testimonials.client3.position'),
      rating: 5,
      avatar: '/images/profile-headshot.jpg'
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t('testimonials.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 100 : -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center mb-8"
              >
                <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </motion.div>

              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center mb-6"
              >
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Testimonial Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed italic"
              >
                "{testimonials[currentIndex].text}"
              </motion.p>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center space-x-4 rtl:space-x-reverse"
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-600 shadow-lg"
                />
                <div className={`text-center ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.05, x: isRTL ? 5 : -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <ChevronLeft className={`w-6 h-6 text-gray-600 dark:text-gray-400 ${isRTL ? 'rotate-180' : ''}`} />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2 rtl:space-x-reverse">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.05, x: isRTL ? -5 : 5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <ChevronRight className={`w-6 h-6 text-gray-600 dark:text-gray-400 ${isRTL ? 'rotate-180' : ''}`} />
            </motion.button>
          </div>

          {/* Background Decorations */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 -left-5 w-12 h-12 bg-pink-200 dark:bg-pink-800 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          {[
            { number: '50+', label: 'Happy Clients' },
            { number: '100+', label: 'Projects Done' },
            { number: '5★', label: 'Average Rating' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-700/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;