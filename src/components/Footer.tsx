import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
            >
              Saleem Ali
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Full Stack Developer & UI/UX Designer passionate about creating beautiful and functional digital experiences that make a difference.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: isRTL ? -5 : 5 }}
                className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Mail size={16} />
                <span>john@example.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: isRTL ? -5 : 5 }}
                className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: isRTL ? -5 : 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 block"
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Web Development',
                'UI/UX Design',
                'Mobile Apps',
                'Digital Marketing'
              ].map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: isRTL ? -5 : 5 }}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 rtl:space-x-reverse mb-4 md:mb-0">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-300 text-gray-400 hover:text-white"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-2 md:mb-0"
            >
              {t('footer.copyright')}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-1 rtl:space-x-reverse"
            >
              <span>{t('footer.madeWith').split('❤️')[0]}</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span>{t('footer.madeWith').split('❤️')[1]}</span>
            </motion.p>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
            }}
            style={{
              left: `${20 + i * 30}%`,
              bottom: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;