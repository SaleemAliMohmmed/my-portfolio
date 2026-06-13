import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Smartphone, Server, Globe, Zap, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'JavaScript/TypeScript', level: 95 },
        { name: 'React JS', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Bootstrap/jQuery', level: 85 }
      ]
    },
    {
      title: t('skills.backend'),
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'PHP (Laravel)', level: 95 },
        { name: 'Python (Flask)', level: 90 },
        { name: 'C++/Java/C#', level: 85 },
        { name: 'RESTful APIs', level: 92 }
      ]
    },
    {
      title: t('skills.design'),
      icon: Cpu,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Machine Learning', level: 88 },
        { name: 'Deep Learning', level: 85 },
        { name: 'NLP & LLMs', level: 90 },
        { name: 'Hugging Face', level: 85 }
      ]
    },
    {
      title: t('skills.mobile'),
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Flutter', level: 92 },
        { name: 'Dart', level: 90 },
        { name: 'Cross-Platform', level: 88 },
        { name: 'Android', level: 80 }
      ]
    }
  ];

  const tools = [
    { name: 'MySQL/SQL Server', icon: Database },
    { name: 'Oracle/PLSQL', icon: Shield },
    { name: 'Git/GitHub', icon: Globe },
    { name: 'Postman/Swagger', icon: Zap }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
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
            {t('skills.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            {t('skills.subtitle')}
          </motion.p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4 rtl:mr-0 rtl:ml-4`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="relative"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 min-w-[120px]"
                >
                  <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {tool.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Certifications & Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'AWS Certified Developer',
              'Google Cloud Professional',
              'Meta React Specialist'
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl border border-blue-200 dark:border-gray-600"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {cert}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;