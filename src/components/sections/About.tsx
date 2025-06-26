import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Briefcase, Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  const stats = [
    {
      icon: Briefcase,
      value: "3+",
      label: t('about.experience'),
      color: "text-blue-600"
    },
    {
      icon: Trophy,
      value: "10+",
      label: t('about.projects'),
      color: "text-green-600"
    },
    {
      icon: Users,
      value: "10+",
      label: t('about.clients'),
      color: "text-purple-600"
    },
    {
      icon: Award,
      value: "2+",
      label: t('about.awards'),
      color: "text-orange-600"
    }
  ];

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
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
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
            {t('about.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            {t('about.subtitle')}
          </motion.p>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8"
          >
            {t('about.content')}
          </motion.p>

          {/* Skills/Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {['React', 'Laravel', 'Python', 'Git/Github', 'Docker'].map((tech, index) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
          >
            {t('hero.getInTouch')}
          </motion.button>

          {/* Stats Row Full Width */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-row gap-6 mt-8 justify-center w-full"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 text-center min-w-[160px] flex-1"
                >
                  <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;