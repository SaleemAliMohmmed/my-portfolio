import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        services: "Services", 
        projects: "Projects",
        testimonials: "Testimonials",
        skills: "Skills",
        contact: "Contact"
      },
      hero: {
        greeting: "Hello, I'm",
        name: "Saleem Ali",
        title: "Full Stack Developer & AI Researcher & Educator",
        subtitle: "Creating beautiful and functional digital experiences that make a difference",
        viewWork: "View My Work",
        getInTouch: "Get In Touch"
      },
      about: {
        title: "About Me",
        subtitle: "Get to know me better",
        content: "I am an Information Technology Engineer, graduated from Taiz University with a GPA of 91.93%. I specialize in Full Stack development and AI research, with a strong focus on building scalable web applications and innovative AI solutions. I have a deep passion for academic and educational work and have developed several learning platforms, aiming to bridge the gap between technology and learning. My expertise spans across Laravel, Flutter, Python, and Generative AI.",
        experience: "More than 4 Years Experience",
        projects: "15+ Projects Completed",
        clients: "20+ Happy Clients",
        awards: "3+ Awards Won"
      },
      services: {
        title: "Services",
        subtitle: "What I offer",
        webDev: {
          title: "Web Development",
          description: "Custom web applications built with modern technologies and best practices"
        },
        uiux: {
          title: "AI Research & Development",
          description: "AI research and development solutions tailored to your business needs"
        },
        marketing: {
          title: "Digital Marketing",
          description: "Strategic digital marketing solutions to grow your online presence"
        }
      },
      projects: {
        title: "Projects",
        subtitle: "My recent work",
        viewProject: "View Project",

        project4: {
          title: "Portfolio Website",
          description: "Responsive portfolio website showcasing creative work and achievements"
        },
        project5: {
          title: "Al Baraq Learning Platform",
          description: "Full Stack | Nov 2024-present | Saudi Arabia | Developed an educational platform for Gulf countries and the Middle East. It offers a wide range of services for students and teachers, including professional training camps, university-level courses, and specialized programs for high school students."
        },
        project6: {
          title: "Farhm org",
          description: "Full Stack developer | Developed dynamic web applications with CRUD operations. Managed bilingual support (Arabic & English). Handled video, image uploads, and file management. Created mobile-friendly UI using HTML, CSS, and Bootstrap."
        },
        project7: {
          title: "Mazaya Learning",
          description: "Back-end programmer | 2024 | Taiz, Yemen | Worked as a Back-end Web Developer using the Laravel framework for the Mazaya educational platform. Database management using MySQL to ensure data integrity and smooth platform operations."
        },
        project8: {
          title: "Todawini",
          description: "Back-end programmer | 2024 | Taiz, Yemen | Worked as a Back-end Web Developer using the Laravel framework for Todawini, a medical platform. Developed features for doctor search, appointment booking, and user notifications. Enabled doctors to publish medical articles on the platform."
        },
        project9: {
          title: "Sentiment Analysis API",
          description: "Natural Language Processing | 2023 | Taiz, Yemen | Built a RESTful API for sentiment analysis of text data. Implemented pre-trained transformer models using Hugging Face. Deployed the API on a cloud platform for easy integration. Python, Flask, NLTK, Hugging Face."
        },
        project10: {
          title: "Dawafast",
          description: "Back-end programmer | Aug 2022– Dec 2022 | Saudi Arabia | Worked as a Back-end Web Developer using the Laravel framework for DawaFast, a webhook platform. Developed systems to receive pharmacy orders and manage deliveries by nearby workers. Streamlined the process of order placement and delivery coordination."
        },
        project11: {
          title: "GYM Management System",
          description: "Desktop programmer | 2022 | Developed and maintained application features for gym operations and data management using C# and SQL Server."
        },
        project12: {
          title: "Survey System",
          description: "Full Stack Developer | Developed a survey system to collect and analyze user feedback for various organizations. Designed and implemented a user-friendly interface for survey creation and response collection. Integrated data visualization tools to generate insightful reports from survey results. Ensured secure data handling and storage for sensitive survey responses."
        },
        project13: {
          title: "AwAERP - Cloud ERP & Accounting System",
          description: "Full Stack Developer | 2026 | Saudi Arabia | Architected a comprehensive cloud-based ERP and accounting platform using Laravel, PHP, and Tailwind CSS, featuring multi-branch management and full compliance with Saudi ZATCA standards. Engineered robust cybersecurity protocols and data governance, implementing AES-256 encryption, Role-Based Access Control (RBAC), SQL injection prevention, and detailed automated audit trails. Developed highly integrated modules for POS, automated financial reporting, inventory tracking (FIFO/LIFO/AVG), and scalable RESTful APIs to ensure cross-device compatibility."
        },
        project14: {
          title: "Smart Expense Management Application",
          description: "Mobile & Full Stack Developer | 2025 | Yemen | Designed and engineered a cross-platform mobile application for real-time financial tracking and expense management utilizing the Flutter framework and the Dart programming language. Architected a secure, scalable backend using Laravel, developing robust RESTful APIs to handle seamless data synchronization, user authentication, and financial records storage."
        },
        project15: {
          title: "Smart Assessment and Personalized Learning Platform",
          description: "AI Developer | Jan 2025 | Saudi Arabia | Developing a full-stack, AI-powered web platform tailored for adaptive learning and smart educational assessment. Leveraging advanced NLP and Generative AI (LLMs) to provide personalized study resources, dynamically generate multiple-choice questions, and deploy an interactive student-support chatbot."
        },
        project16: {
          title: "Intelligent Employee Attendance and Management System",
          description: "AI Developer | 2025 | Yemen | Engineered a real-time deep learning pipeline in Python utilizing MTCNN for robust multi-face detection. Integrated a pre-trained FaceNet model to generate high-accuracy 512-dimension facial embeddings. Developed a scalable and secure backend RESTful API using Flask to handle attendance verification."
        },
        project17: {
          title: "CMS for a Professional Accountant",
          description: "Full Stack Developer | 2025 | Yemen | Engineered a complete website and backend solution utilizing a high-performance PHP/MySQL stack. Built a secure, custom CMS from scratch with full CRUD functionality, enabling non-technical clients to seamlessly manage site content, SEO keywords, and visual styles."
        }
      },
      testimonials: {
        title: "Testimonials",
        subtitle: "What clients say",
        client1: {
          text: "Saleem is an exceptional developer. He delivered our ERP system with high professionalism and full compliance with ZATCA standards.",
          name: "Eng. Ahmed Al-Saeedi",
          position: "CEO, Tech Solutions - Yemen"
        },
        client2: {
          text: "Professional, creative, and reliable. The educational platform he developed for us has transformed our training programs.",
          name: "Dr. Mohammed Al-Amri",
          position: "Academic Director - Saudi Arabia"
        },
        client3: {
          text: "The attention to detail in the AI attendance system is exceptional. Great communication and technical expertise.",
          name: "Abdullah Ba-Wazir",
          position: "Operations Manager - Yemen"
        }
      },
      skills: {
        title: "Skills",
        subtitle: "My expertise",
        frontend: "Frontend Development",
        backend: "Backend Development", 
        design: "UI/UX Design",
        mobile: "Mobile Development"
      },
      contact: {
        title: "Contact",
        subtitle: "Get in touch",
        form: {
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message",
          send: "Send Message"
        },
        info: {
          address: "Jeddah, Al-Rayyan, Kingdom of Saudi Arabia",
          phone: "+966 539779728",
          email: "saleemaliquid@gmail.com"
        }
      },
      footer: {
        copyright: "© 2026 Saleem Ali. All rights reserved.",
        madeWith: "Made with ❤️ using React & Tailwind CSS"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        about: "عني",
        services: "الخدمات",
        projects: "المشاريع", 
        testimonials: "آراء العملاء",
        skills: "المهارات",
        contact: "التواصل"
      },
      hero: {
        greeting: "مرحباً، أنا",
        name: "سليم علي",
        title: "مطور ويب متكامل  و باحث في مجال الذكاء الاصطناعي و تعليمي",
        subtitle: "أقوم بإنشاء تجارب رقمية جميلة وعملية تحدث فرقاً",
        viewWork: "عرض أعمالي",
        getInTouch: "تواصل معي"
      },
      about: {
        title: "عني",
        subtitle: "تعرف علي أكثر",
        content: "أنا مهندس تكنولوجيا معلومات، خريج جامعة تعز بمعدل 91.93%. أتخصص في تطوير الويب المتكامل (Full Stack) وبحوث الذكاء الاصطناعي، مع تركيز قوي على بناء تطبيقات ويب قابلة للتوسع وحلول ذكاء اصطناعي مبتكرة. لدي شغف عميق بالعمل الأكاديمي التعليمي وقد قمت بتطوير العديد من المنصات التعليمية، بهدف سد الفجوة بين التكنولوجيا والتعلم. تشمل خبرتي Laravel و Flutter و Python والذكاء الاصطناعي التوليدي.",
        experience: "أكثر من 4 سنوات خبرة",
        projects: "أكثر من 15 مشروع مكتمل",
        clients: "أكثر من 25 عميل راضي",
        awards: "أكثر من 3 جوائز"
      },
      services: {
        title: "الخدمات",
        subtitle: "ما أقدمه",
        webDev: {
          title: "تطوير الويب",
          description: "تطبيقات ويب مخصصة مبنية بتقنيات حديثة وأفضل الممارسات"
        },
        uiux: {
          title: "  مطور ذكاء الاصطناعي",
          description: " حلول الذكاء الاصطناعي المبتكرة لتحسين الأداء  "
        },
        marketing: {
          title: "التسويق الرقمي",
          description: "حلول تسويق رقمي استراتيجية لتنمية حضورك على الإنترنت"
        }
      },
      projects: {
        title: "المشاريع",
        subtitle: "أعمالي الحديثة",
        viewProject: "عرض المشروع",

        project4: {
          title: "موقع ملف شخصي",
          description: "موقع ملف شخصي متجاوب يعرض الأعمال الإبداعية والإنجازات"
        },
        project5: {
          title: "منصة البراق التعليمية",
          description: "مطور ويب متكامل | نوفمبر 2024-الآن | المملكة العربية السعودية | قمت بتطوير منصة تعليمية لدول الخليج والشرق الأوسط. تقدم مجموعة واسعة من الخدمات للطلاب والمعلمين، بما في ذلك معسكرات التدريب المهني، ودورات على مستوى الجامعة، وبرامج متخصصة لطلاب المدارس الثانوية."
        },
        project6: {
          title: "منظمة فرهم",
          description: "مطور ويب متكامل | قمت بتطوير تطبيقات ويب ديناميكية مع عمليات CRUD. أدرت الدعم ثنائي اللغة (العربية والإنجليزية). تعاملت مع تحميل الفيديو والصور وإدارة الملفات. أنشأت واجهة مستخدم متوافقة مع الجوال باستخدام HTML و CSS و Bootstrap."
        },
        project7: {
          title: "مزايا التعليم",
          description: "مبرمج خلفية | 2024 | تعز، اليمن | عملت كمطور ويب خلفي باستخدام إطار عمل Laravel لمنصة مزايا التعليمية. إدارة قواعد البيانات باستخدام MySQL لضمان سلامة البيانات وعمليات المنصة بسلاسة."
        },
        project8: {
          title: "تداويني",
          description: "مبرمج خلفية | 2024 | تعز، اليمن | عملت كمطور ويب خلفي باستخدام إطار عمل Laravel لتداويني، وهي منصة طبية. طورت ميزات للبحث عن الأطباء، وحجز المواعيد، وإشعارات المستخدمين. مكنت الأطباء من نشر المقالات الطبية على المنصة."
        },
        project9: {
          title: "واجهة برمجة تطبيقات تحليل المشاعر",
          description: "معالجة اللغة الطبيعية | 2023 | تعز، اليمن | بنيت واجهة برمجة تطبيقات RESTful لتحليل المشاعر للبيانات النصية. طبقت نماذج المحولات المدربة مسبقًا باستخدام Hugging Face. نشرت واجهة برمجة التطبيقات على منصة سحابية لسهولة التكامل. بايثون، فلاسك، NLTK، Hugging Face."
        },
        project10: {
          title: "دوا فاست",
          description: "مبرمج خلفية | أغسطس 2022 - ديسمبر 2022 | المملكة العربية السعودية | عملت كمطور ويب خلفي باستخدام إطار عمل Laravel لدوا فاست، وهي منصة ويب هوك. طورت أنظمة لاستقبال طلبات الصيدليات وإدارة عمليات التسليم من قبل العمال القريبين. قمت بتبسيط عملية تقديم الطلبات وتنسيق التسليم."
        },
        project11: {
          title: "نظام إدارة الصالة الرياضية",
          description: "مبرمج سطح مكتب | 2022 | طورت وصيانت ميزات التطبيق لعمليات الصالة الرياضية وإدارة البيانات باستخدام C# و SQL Server."
        },
        project12: {
          title: "نظام الاستبيان",
          description: "مطور ويب متكامل | طورت نظام استبيان لجمع وتحليل ملاحظات المستخدمين لمختلف المنظمات. صممت ونفذت واجهة مستخدم سهلة لإنشاء الاستبيانات وجمع الردود. دمجت أدوات تصور البيانات لإنشاء تقارير ثاقبة من نتائج الاستبيانات. ضمنت معالجة وتخزين آمن للبيانات لردود الاستبيانات الحساسة."
        },
        project13: {
          title: "AwAERP - نظام سحابي لإدارة الموارد والمحاسبة",
          description: "مطور ويب متكامل | 2026 | المملكة العربية السعودية | تصميم وتطوير منصة شاملة لإدارة الموارد والمحاسبة قائمة على السحابة باستخدام Laravel و PHP و Tailwind CSS، تتميز بإدارة الفروع المتعددة والامتثال الكامل لمعايير ZATCA السعودية. تم تصميم بروتوكولات قوية للأمن السيبراني وحوكمة البيانات، مع تنفيذ تشفير AES-256، والتحكم في الوصول القائم على الأدوار (RBAC)، ومنع حقن SQL، وسجلات تدقيق مؤتمتة مفصلة. تطوير وحدات متكاملة للغاية لنقاط البيع، والتقارير المالية المؤتمتة، وتتبع المخزون (FIFO/LIFO/AVG)، وواجهات برمجة تطبيقات RESTful قابلة للتوسع لضمان التوافق عبر الأجهزة."
        },
        project14: {
          title: "تطبيق ذكي لإدارة المصروفات",
          description: "مطور تطبيقات جوال وويب | 2025 | اليمن | تصميم وهندسة تطبيق جوال متعدد المنصات لتتبع الشؤون المالية وإدارة المصروفات في الوقت الفعلي باستخدام إطار عمل Flutter ولغة البرمجة Dart. تم بناء واجهة خلفية آمنة وقابلة للتوسع باستخدام Laravel، مع تطوير واجهات برمجة تطبيقات RESTful قوية للتعامل مع مزامنة البيانات السلسة، ومصادقة المستخدم، وتخزين السجلات المالية."
        },
        project15: {
          title: "منصة التقييم الذكي والتعلم الشخصي",
          description: "مطور ذكاء اصطناعي | يناير 2025 | المملكة العربية السعودية | تطوير منصة ويب متكاملة مدعومة بالذكاء الاصطناعي مصممة للتعلم التكيفي والتقييم التعليمي الذكي. الاستفادة من معالجة اللغات الطبيعية المتقدمة (NLP) والذكاء الاصطناعي التوليدي (LLMs) لتوفير موارد دراسية شخصية، وتوليد أسئلة اختيار من متعدد ديناميكيًا، ونشر روبوت دردشة تفاعلي لدعم الطلاب."
        },
        project16: {
          title: "نظام ذكي لإدارة وحضور الموظفين",
          description: "مطور ذكاء اصطناعي | 2025 | اليمن | هندسة خط معالجة للتعلم العميق في الوقت الفعلي بلغة Python باستخدام MTCNN للكشف القوي عن الوجوه المتعددة. دمج نموذج FaceNet مُدرب مسبقًا لإنشاء تضمينات وجهية بدقة عالية تبلغ 512 بعدًا. تطوير واجهة برمجة تطبيقات RESTful خلفية آمنة وقابلة للتوسع باستخدام Flask للتعامل مع التحقق من الحضور."
        },
        project17: {
          title: "نظام إدارة محتوى لمحاسب قانوني",
          description: "مطور ويب متكامل | 2025 | اليمن | هندسة موقع ويب كامل وحل خلفي باستخدام تقنيات PHP/MySQL عالية الأداء. بناء نظام إدارة محتوى (CMS) مخصص وآمن من الصفر مع وظائف CRUD كاملة، مما يمكن العملاء غير التقنيين من إدارة محتوى الموقع وكلمات SEO والأنماط المرئية بسلاسة."
        }
      },
      testimonials: {
        title: "آراء العملاء",
        subtitle: "ما يقوله العملاء",
        client1: {
          text: "سليم مطور استثنائي. لقد أنجز نظام ERP الخاص بنا باحترافية عالية والتزام كامل بمعايير هيئة الزكاة والضريبة والجمارك.",
          name: "م. أحمد السعيدي",
          position: "المدير التنفيذي، حلول التقنية - اليمن"
        },
        client2: {
          text: "محترف ومبدع وموثوق. المنصة التعليمية التي طورها لنا أحدثت نقلة نوعية في برامجنا التدريبية.",
          name: "د. محمد العمري",
          position: "المدير الأكاديمي - السعودية"
        },
        client3: {
          text: "الاهتمام بالتفاصيل في نظام الحضور بالذكاء الاصطناعي كان استثنائياً. تواصل ممتاز وخبرة تقنية واسعة.",
          name: "عبد الله باوزير",
          position: "مدير العمليات - اليمن"
        }
      },
      skills: {
        title: "المهارات",
        subtitle: "خبرتي",
        frontend: "تطوير الواجهة الأمامية",
        backend: "تطوير الواجهة الخلفية",
        design: "تصميم واجهات المستخدم",
        mobile: "تطوير التطبيقات"
      },
      contact: {
        title: "التواصل",
        subtitle: "تواصل معي",
        form: {
          name: "الاسم",
          email: "البريد الإلكتروني",
          subject: "الموضوع",
          message: "الرسالة",
          send: "إرسال الرسالة"
        },
        info: {
          address: "جدة، حي الريان، المملكة العربية السعودية",
          phone: "+966 539779728",
          email: "saleemaliquid@gmail.com"
        }
      },
      footer: {
        copyright: "© 2026 سليم علي. جميع الحقوق محفوظة.",
        madeWith: "صنع بحب باستخدام React & Tailwind CSS"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;