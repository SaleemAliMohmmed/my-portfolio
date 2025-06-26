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
        content: "I'm an IT Engineer specializing in web development and AI research, with a passion for teaching. I build and maintain responsive websites, optimize performance, and explore innovative AI solutions. I also enjoy sharing knowledge and mentoring students, fostering their growth in technical, educational, and research environments.",
        experience: "3+ Years Experience",
        projects: "10+ Projects Completed",
        clients: "15+ Happy Clients",
        awards: "2+ Awards Won"
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
        }
      },
      testimonials: {
        title: "Testimonials",
        subtitle: "What clients say",
        client1: {
          text: "Outstanding work! John delivered exactly what we needed and exceeded our expectations.",
          name: "Sarah Johnson",
          position: "CEO, Tech Solutions"
        },
        client2: {
          text: "Professional, creative, and reliable. I highly recommend John for any web project.",
          name: "Michael Chen",
          position: "Marketing Director"
        },
        client3: {
          text: "The attention to detail and quality of work is exceptional. Great communication throughout.",
          name: "Emma Davis",
          position: "Product Manager"
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
          address: "123 Developer Street, Tech City, TC 12345",
          phone: "+1 (555) 123-4567",
          email: "john@example.com"
        }
      },
      footer: {
        copyright: "© 2025 Saleem Ali. All rights reserved.",
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
        content: "أنا مهندس تكنولوجيا معلومات متخصص في تطوير الويب وبحوث الذكاء الاصطناعي، ولدي شغف بالتدريس. أقوم ببناء وصيانة مواقع الويب سريعة الاستجابة، وتحسين الأداء، واستكشاف حلول الذكاء الاصطناعي المبتكرة. أستمتع أيضًا بمشاركة المعرفة وتوجيه الطلاب، مما يعزز نموهم في البيئات التقنية والتعليمية والبحثية.",
        experience: "خبرة أكثر من 3 سنوات",
        projects: "أكثر من 10 مشروع مكتمل",
        clients: "أكثر من 20 عميل راضي",
        awards: "أكثر من 2 جوائز"
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
        }
      },
      testimonials: {
        title: "آراء العملاء",
        subtitle: "ما يقوله العملاء",
        client1: {
          text: "عمل رائع! جون قدم بالضبط ما نحتاجه وتجاوز توقعاتنا.",
          name: "سارة جونسون",
          position: "الرئيس التنفيذي، حلول التقنية"
        },
        client2: {
          text: "محترف، مبدع، وموثوق. أنصح بشدة بجون لأي مشروع ويب.",
          name: "مايكل تشين",
          position: "مدير التسويق"
        },
        client3: {
          text: "الاهتمام بالتفاصيل وجودة العمل استثنائية. تواصل ممتاز طوال الوقت.",
          name: "إيما ديفيس",
          position: "مدير المنتج"
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
          address: "123 شارع المطورين، مدينة التقنية، TC 12345",
          phone: "+1 (555) 123-4567",
          email: "john@example.com"
        }
      },
      footer: {
        copyright: "© 2025 سليم علي. جميع الحقوق محفوظة.",
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