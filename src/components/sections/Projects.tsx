import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [

    {
      title: t('projects.project4.title'),
      description: t('projects.project4.description'),
      image: '/images/portfolio.png',
      technologies: ['React JS', 'Tailwind CSS'],
      github: 'https://github.com/SaleemAliMohmmed',
      live: '#',
      category: 'UI/UX Design'
    },
    {
      title: t('projects.project5.title'),
      description: t('projects.project5.description'),
      image: '/images/buraqplus.png',
      technologies: ['Full Stack', 'Education'],
      github: '#',
      live: 'https://al-buraqplus.com',
      category: 'Web Development'
    },
    {
      title: t('projects.project6.title'),
      description: t('projects.project6.description'),
      image: '/images/farham-web.png',
      technologies: ['Full Stack', 'CRUD', 'Bilingual'],
      github: '#',
      live: 'https://farhm.org',
      category: 'Web Development'
    },
    {
      title: t('projects.project7.title'),
      description: t('projects.project7.description'),
      image: '/images/maza-web.png',
      technologies: ['Laravel', 'MySQL', 'Back-end'],
      github: '#',
      live: 'https://a.mazaya.academy',
      category: 'Back-end Development'
    },
    {
      title: t('projects.project8.title'),
      description: t('projects.project8.description'),
      image: '/images/todawini.png',
      technologies: ['Laravel', 'Back-end', 'Medical'],
      github: '#',
      live: 'https://todawini.com',
      category: 'Back-end Development'
    },
    {
      title: t('projects.project9.title'),
      description: t('projects.project9.description'),
      image: '/images/Sentiment-Analysis.png',
      technologies: ['Python', 'Flask', 'NLP'],
      github: '#',
      live: '#',
      category: 'AI/ML'
    },
    {
      title: t('projects.project10.title'),
      description: t('projects.project10.description'),
      image: '/images/project-web-development.png',
      technologies: ['Laravel', 'Back-end', 'Webhook'],
      github: '#',
      live: '#',
      category: 'Back-end Development'
    },
    {
      title: t('projects.project11.title'),
      description: t('projects.project11.description'),
      image: '/images/project-web-development.png',
      technologies: ['C#', 'SQL Server', 'Desktop'],
      github: '#',
      live: '#',
      category: 'Desktop Development'
    },
    {
      title: t('projects.project12.title'),
      description: t('projects.project12.description'),
      image: '/images/project-web-development.png',
      technologies: ['Full Stack', 'Survey', 'Data Visualization'],
      github: '#',
      live: '#',
      category: 'Web Development'
    },
    {
      title: t('projects.project13.title'),
      description: t('projects.project13.description'),
      image: '/images/project-dashboard.png',
      technologies: ['Laravel', 'PHP', 'Tailwind CSS', 'ZATCA'],
      github: '#',
      live: 'https://hesabatipro.com',
      category: 'Full Stack Development'
    },
    {
      title: t('projects.project14.title'),
      description: t('projects.project14.description'),
      image: '/images/project-mobile-app.jpg',
      technologies: ['Flutter', 'Dart', 'Laravel', 'RESTful API'],
      github: '#',
      live: '#',
      category: 'Mobile Development'
    },
    {
      title: t('projects.project15.title'),
      description: t('projects.project15.description'),
      image: '/images/project-web-development.png',
      technologies: ['AI', 'NLP', 'LLMs', 'React', 'Python'],
      github: '#',
      live: '#',
      category: 'AI Development'
    },
    {
      title: t('projects.project16.title'),
      description: t('projects.project16.description'),
      image: '/images/project-dashboard.png',
      technologies: ['Python', 'MTCNN', 'FaceNet', 'Flask'],
      github: '#',
      live: '#',
      category: 'AI Development'
    },
    {
      title: t('projects.project17.title'),
      description: t('projects.project17.description'),
      image: '/images/project-web-development.png',
      technologies: ['PHP', 'MySQL', 'CMS', 'SEO'],
      github: '#',
      live: 'https://yemenlegalaccountant.com',
      category: 'Web Development'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={cardVariants}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t('projects.title')}
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            {t('projects.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.length > 0 ? projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(index)}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                  {project.category}
                </div>

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 rtl:space-x-reverse"
                >
                  <button
                    className="p-3 bg-white text-blue-600 rounded-full shadow-lg transform transition-transform hover:scale-110"
                  >
                    <Eye size={20} />
                  </button>
                  <button
                    className="p-3 bg-white text-blue-600 rounded-full shadow-lg transform transition-transform hover:scale-110"
                  >
                    <Github size={20} />
                  </button>
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-blue-600 rounded-full shadow-lg transform transition-transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className="text-blue-600 dark:text-blue-400 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 flex items-center"
                >
                  {t('projects.viewProject')} <span className="ml-2 rtl:mr-2">→</span>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              No projects found.
            </div>
          )}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    ×
                  </button>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {projects[selectedProject].description}
                  </p>
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    {projects[selectedProject].live !== '#' && (
                      <a
                        href={projects[selectedProject].live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 rtl:space-x-reverse"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-2 rtl:space-x-reverse">
                      <Github size={16} />
                      <span>Source Code</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;