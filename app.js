/**
 * Ward Alshaheen Portfolio - Interactive Logic & Bilingual Translation Engine
 * Complete Arabic (RTL) & English (LTR) Support
 */

const translations = {
  en: {
    // Nav
    nav_home: "Home",
    nav_about: "About",
    nav_recommendation: "Recommendation",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_references: "References",
    nav_contact: "Contact",
    nav_download_cv: "CV",
    
    // Hero
    hero_available: "Available for new opportunities & freelance projects",
    hero_greeting: "Hello, I'm",
    hero_name: "Ward Alshaheen",
    hero_role: "Laravel Developer & Software Engineer",
    hero_desc: "Software Engineering graduate from Damascus University with mid-level expertise in Back-End development using Laravel. Passionate about building scalable, resilient, and secure applications. Dedicated to clean architecture and high-performance engineering standards to drive impactful business results.",
    hero_btn_projects: "Explore Projects",
    hero_btn_rec: "View Recommendation",
    hero_btn_cv: "Download CV",
    hero_btn_contact: "Get In Touch",

    // Stats
    stat_exp_val: "4+",
    stat_exp_lbl: "Years Engineering & Dev",
    stat_proj_val: "7+",
    stat_proj_lbl: "Production & Major Projects",
    stat_hours_val: "208+",
    stat_hours_lbl: "Scientific Volunteer Hours",
    stat_arch_val: "100%",
    stat_arch_lbl: "Clean Architecture & Scalable APIs",

    // Recommendation Spotlight
    rec_tag: "Executive Endorsement",
    rec_title: "Letter of Recommendation",
    rec_subtitle: "Official testimonial from Reparametrize Foundation (Non-profit listed nº 2246 - Ministry of Social Affairs and Labor)",
    rec_badge: "Verified Institutional Recommendation",
    rec_quote: "\"Ward has demonstrated exceptional technical expertise and commitment during his time at the Reparametrize Research Platform, consistently delivering high-quality, scalable backend solutions. As a Senior Leader, Ward analyzed complex datasets, translated technical findings into actionable outputs, and ensured efficient execution across systems and workflows with precision and efficiency. Overall, Ward Alshaheen has been an asset to our Foundation, leaving a lasting impact through their dedication and expertise.\"",
    rec_stat_1_val: "208+ Hours",
    rec_stat_1_lbl: "Dedicated Volunteer & R&D Hours in IT & AI Department",
    rec_stat_2_val: "Senior Leader",
    rec_stat_2_lbl: "Promoted in record time from Junior Researcher to Senior Leadership",
    rec_stat_3_val: "Keynote Speaker",
    rec_stat_3_lbl: "Lectured on 'The Role of AI in Post-Conflict City Reconstruction'",
    rec_btn_full: "Read Full Recommendation Letter",
    rec_btn_pdf: "Open Signed PDF Letter",
    rec_author_name: "Mhd Ziwar Al Nouri, M.Arch, PhD Candidate",
    rec_author_title: "Founder and Executive Director",
    rec_author_org: "Reparametrize Foundation",

    // About Section
    about_tag: "Background",
    about_title: "About Ward Alshaheen",
    about_desc: "Bridging solid software engineering principles with robust backend systems to deliver dependable software.",
    about_p1: "I am a Software Engineering graduate from Damascus University (2019 – 2024), specialized in backend development with Laravel and modern relational database architectures. My focus centers on architecting clean, maintainable, and high-load web systems that can seamlessly evolve over time.",
    about_p2: "Throughout my career at HabApps, Nuhieh, and freelance environments, as well as my leadership role at the Reparametrize Research Platform, I have engineered RESTful APIs, GraphQL endpoints, real-time WebSocket communications, automated CI/CD pipelines, and secure transaction systems.",
    about_degree_title: "B.Sc. in Software Engineering",
    about_degree_sub: "Damascus University (2019 – 2024)",
    about_degree_desc: "Comprehensive coursework in algorithms, data structures, software architecture, database management systems, distributed systems, and network security.",

    // Skills Section
    skills_tag: "Technical Stack",
    skills_title: "Core Competencies & Tooling",
    skills_desc: "A battle-tested stack oriented towards clean code, high concurrency, and reliable backend engineering.",
    skill_cat_backend: "Backend & Core",
    skill_cat_arch: "Architecture & Patterns",
    skill_cat_db: "Databases & Real-Time",
    skill_cat_devops: "DevOps, Tools & Quality",

    // Experience Section
    exp_tag: "Career Roadmap",
    exp_title: "Work & Leadership Journey",
    exp_desc: "Delivering real-world solutions across ed-tech, real estate, scientific research, and enterprise systems.",
    exp_role_1: "Back-end Developer",
    exp_comp_1: "Nuhieh",
    exp_date_1: "July 2026 – August 2026",
    exp_desc_1: "Lead back-end development for a hybrid electronic school platform bridging self-paced and classroom learning. Built end-to-end backend architecture, database schemas, and RESTful APIs connecting administrators, teachers, parents, and students with timetable, assessment, and assignment management.",
    
    exp_role_2: "Full-Time Laravel Developer",
    exp_comp_2: "HabApps",
    exp_date_2: "February 2026 – July 2026",
    exp_desc_2: "Backend, Server, and Database Lead for the Kozee real estate application. Developed high-throughput RESTful APIs, optimized complex MySQL queries, managed cloud server infrastructure, and integrated map-based discovery and short-form property video reels.",

    exp_role_3: "Senior Leader & Backend Developer (Volunteer)",
    exp_comp_3: "Reparametrize Research Platform",
    exp_date_3: "July 2025 – Present",
    exp_desc_3: "Contributing to an open-source scientific platform for post-crisis smart city development. Built scalable Laravel APIs and AI-driven data processing tools analyzing urban socio-economic structures. Promoted to Senior Leader in record time; presented a keynote lecture at the Recovery Pathways conference.",

    exp_role_4: "Freelance Laravel Developer",
    exp_comp_4: "Dotnokta",
    exp_date_4: "August 2023 – April 2024",
    exp_desc_4: "Developed and maintained full-scale Laravel web applications following clean architecture patterns. Partnered with engineering teams to provide software architecture consulting and performance optimizations.",

    exp_role_5: "Active Member",
    exp_comp_5: "JCI Damascus (Junior Chamber International)",
    exp_date_5: "April 2026 – Present",
    exp_desc_5: "Contributing to international cooperation, business & entrepreneurship initiatives, community impact projects, and personal leadership development.",

    // Projects Section
    proj_tag: "Portfolio",
    proj_title: "Featured Projects & Platforms",
    proj_desc: "A curated selection of backend architectures, enterprise systems, and scientific applications I have designed and engineered.",
    filter_all: "All Projects",
    filter_backend: "Backend & APIs",
    filter_platforms: "Platforms & EdTech",
    filter_realtime: "Real-time & FinTech",
    filter_research: "AI & Research",

    btn_view_details: "View Architecture & Details",

    // Project 1: Kozee
    proj_kozee_title: "Kozee Real Estate Platform",
    proj_kozee_cat: "Enterprise & Mobile APIs",
    proj_kozee_desc: "A comprehensive real estate ecosystem featuring smart geo-location map exploration, short-form video reels, and high-performance property query caching.",
    proj_kozee_b1: "Designed and scaled RESTful APIs and database schemas for thousands of active properties.",
    proj_kozee_b2: "Implemented map-based discovery algorithms and video reels feeds connecting owners with buyers.",
    proj_kozee_b3: "Optimized MySQL indexing and managed server-side infrastructure.",

    // Project 2: Nuhieh
    proj_nuhieh_title: "Nuhieh Hybrid Learning Platform",
    proj_nuhieh_cat: "EdTech Platform",
    proj_nuhieh_desc: "Hybrid educational management platform synchronizing self-paced digital modules with in-classroom learning for administrators, teachers, parents, and students.",
    proj_nuhieh_b1: "Architected multi-tier RBAC (Role-Based Access Control) supporting 4 distinct user personas.",
    proj_nuhieh_b2: "Built robust class scheduling, automated grading matrices, and assignment workflows.",
    proj_nuhieh_b3: "Followed Clean Architecture principles ensuring modularity and rapid test coverage.",

    // Project 3: Dream Shop
    proj_dream_title: "Dream Shop Multi-User E-Commerce",
    proj_dream_cat: "E-Commerce & Mobile",
    proj_dream_desc: "Scalable multi-user e-commerce mobile application platform empowering merchants to list, manage inventory, and sell products with secure order processing.",
    proj_dream_b1: "Engineered high-performance RESTful APIs for shopping cart, catalog filtering, and multi-tier checkout.",
    proj_dream_b2: "Implemented role-based permissions for buyers, vendors, and marketplace managers.",
    proj_dream_b3: "Architected relational database with atomic transaction integrity.",

    // Project 4: Care Me
    proj_care_title: "Care Me Healthcare & Clinic Suite",
    proj_care_cat: "Healthcare & Real-time",
    proj_care_desc: "Modern clinic management application featuring real-time patient-doctor communication, appointment booking, and GraphQL queries for flexible data fetching.",
    proj_care_b1: "Built WebSocket real-time live chat and instantaneous push notifications.",
    proj_care_b2: "Integrated GraphQL API endpoints alongside REST for flexible medical records retrieval.",
    proj_care_b3: "Designed appointment calendar scheduling with conflict-prevention locking.",

    // Project 5: AdVance
    proj_advance_title: "AdVance Advertising Marketplace",
    proj_advance_cat: "FinTech & AdTech",
    proj_advance_desc: "Digital marketplace connecting advertisers looking to run campaigns with host applications seeking to monetize ad inventory.",
    proj_advance_b1: "Architected digital wallet infrastructure handling internal credit transactions and balances.",
    proj_advance_b2: "Designed an auditable double-entry ledger database for financial settlements.",
    proj_advance_b3: "Implemented fraud prevention mechanisms and real-time impression analytics.",

    // Project 6: BriefCode
    proj_brief_title: "BriefCode Low-Code Engine",
    proj_brief_cat: "System Architecture",
    proj_brief_desc: "Low-code application development platform designed for mobile software creation with aspect-oriented programming and compiler parsing mechanics.",
    proj_brief_b1: "Applied Aspect-Oriented Programming (AOP) for clean separation of cross-cutting concerns.",
    proj_brief_b2: "Implemented resource competition schedulers and custom AST compiler parsing algorithms.",
    proj_brief_b3: "Utilized Advanced Design Patterns (Repository, Façade, Factory, Strategy).",

    // Project 7: Mosaic Recoding Syria
    proj_reparam_title: "Mosaic Recoding Syria Platform",
    proj_reparam_cat: "AI & Scientific Research",
    proj_reparam_desc: "Open-source scientific research initiative by Reparametrize Foundation utilizing AI-driven data processing for post-crisis smart city reconstruction.",
    proj_reparam_b1: "Built scalable Laravel APIs integrating AI analysis pipelines on urban social and economic structures.",
    proj_reparam_b2: "Contributed 208+ research hours leading to promotion as Senior Leader.",
    proj_reparam_b3: "Presented lecture at official open-source database launch during Recovery Pathways event.",

    // References Section
    ref_tag: "Professional Endorsement",
    ref_title: "Professional References",
    ref_desc: "Direct contact references who can verify my technical proficiency, leadership, and work ethic.",
    ref_1_name: "Dr. Mhd Ziwar Al Nouri",
    ref_1_title: "Founder and Executive Director",
    ref_1_org: "Reparametrize Foundation",
    ref_2_name: "Mr. Saria Habbab",
    ref_2_title: "Technical Lead & CEO",
    ref_2_org: "HabApps",
    ref_phone_lbl: "Phone",
    ref_email_lbl: "Email",

    // Contact Section
    contact_tag: "Get In Touch",
    contact_title: "Let's Build Something Exceptional",
    contact_desc: "Whether you need a senior Laravel backend engineer, system architecture consulting, or have a project in mind, I am ready to collaborate.",
    contact_email_title: "Direct Email",
    contact_phone_title: "Phone & WhatsApp",
    contact_loc_title: "Location",
    contact_loc_val: "Damascus, Syria",
    contact_copy_btn: "Copy",
    contact_copied: "Copied to clipboard!",

    // Form
    form_name_lbl: "Your Name",
    form_name_ph: "John Doe",
    form_email_lbl: "Your Email",
    form_email_ph: "john@example.com",
    form_subject_lbl: "Subject",
    form_subject_ph: "Project Collaboration / Job Opportunity",
    form_message_lbl: "Message",
    form_message_ph: "Hello Ward, I would like to discuss...",
    form_submit_btn: "Send Message",
    form_whatsapp_btn: "Quick Chat on WhatsApp",
    form_success_msg: "Thank you! Your message draft has been prepared. You can also chat directly on WhatsApp.",

    // Footer
    footer_rights: "All rights reserved.",
    footer_built_with: "Crafted with precision using modern web standards & clean architecture.",

    // Recommendation Modal
    modal_rec_title: "Official Letter of Recommendation",
    modal_rec_org: "Reparametrize Foundation — IT & AI Department",
    modal_rec_date: "Damascus, 04/07/2026",
    modal_rec_btn_en: "English Original",
    modal_rec_btn_ar: "Arabic Translation",
    modal_rec_dl_pdf: "Download Original Signed PDF",
    modal_close: "Close"
  },

  ar: {
    // Nav
    nav_home: "الرئيسية",
    nav_about: "من أنا",
    nav_recommendation: "التوصية",
    nav_skills: "المهارات",
    nav_experience: "الخبرات",
    nav_projects: "المشاريع",
    nav_references: "المعرفون",
    nav_contact: "تواصل",
    nav_download_cv: "الـ CV",

    // Hero
    hero_available: "متاح لفرص العمل الجديدة والمشاريع البرمجية",
    hero_greeting: "مرحباً، أنا",
    hero_name: "ورد الشاهين",
    hero_role: "مطور لارافيل ومهندس برمجيات",
    hero_desc: "خريج هندسة البرمجيات من جامعة دمشق بخبرة متقدمة في تطوير الأنظمة الخلفية (Back-End) باستخدام Laravel. شغوف ببناء تطبيقات قابلة للتوسع، عالية الكفاءة والأمان. ملتزم بالمعمارية النظيفة (Clean Architecture) وأعلى معايير جودة الكود لتحقيق أفضل النتائج التقنية والتجارية.",
    hero_btn_projects: "استعراض المشاريع",
    hero_btn_rec: "عرض التوصية",
    hero_btn_cv: "تحميل السيرة الذاتية (CV)",
    hero_btn_contact: "تواصل معي مباشرة",

    // Stats
    stat_exp_val: "+4",
    stat_exp_lbl: "سنوات هندسة وبرمجة",
    stat_proj_val: "+7",
    stat_proj_lbl: "مشاريع وأنظمة متكاملة",
    stat_hours_val: "+208",
    stat_hours_lbl: "ساعة بحث وتطوع علمي",
    stat_arch_val: "100%",
    stat_arch_lbl: "معمارية نظيفة وواجهات قوية",

    // Recommendation Spotlight
    rec_tag: "توصية واعتماد مؤسسي",
    rec_title: "خطاب التوصية المهنية",
    rec_subtitle: "توصية رسمية من مؤسسة ريبارامتريز (Reparametrize Foundation - مشهرة برقم 2246 بوزارة الشؤون الاجتماعية والعمل)",
    rec_badge: "توصية مؤسسية موثقة",
    rec_quote: "«أظهر ورد خبرة تقنية والتزاماً استثنائيين خلال فترة عمله في منصة ريبارامتريز للأبحاث، مقدماً باستمرار حلولاً خلفية قابلة للتوسع وعالية الجودة. وبصفته قائداً تقنياً أول (Senior Leader)، قام ورد بتحليل مجموعات البيانات المعقدة، وترجمة النتائج التقنية إلى مخرجات عملية قابلة للتنفيذ، وضمان التنفيذ الفعال عبر الأنظمة وسير العمل بكل دقة واقتدار. لقد كان ورد الشاهين مكسباً حقيقياً لمؤسستنا وترك أثراً دائماً من خلال تفانيه وخبرته.»",
    rec_stat_1_val: "+208 ساعات",
    rec_stat_1_lbl: "ساعات تطوع وبحث وتطوير في قسم تقانة المعلومات والذكاء الاصطناعي",
    rec_stat_2_val: "قائد فريق أول",
    rec_stat_2_lbl: "ترقية في وقت قياسي من باحث مبتدئ إلى Senior Leader",
    rec_stat_3_val: "محاضر رئيسي",
    rec_stat_3_lbl: "إلقاء محاضرة عامة حول دور الذكاء الاصطناعي في إعادة إعمار المدن",
    rec_btn_full: "قراءة خطاب التوصية الكامل",
    rec_btn_pdf: "فتح ملف الـ PDF المعتمد",
    rec_author_name: "م. محمد زوار النوري (M.Arch, مرشح دكتوراه)",
    rec_author_title: "المؤسس والمدير التنفيذي",
    rec_author_org: "مؤسسة ريبارامتريز (Reparametrize Foundation)",

    // About Section
    about_tag: "نبذة عني",
    about_title: "من هو ورد الشاهين؟",
    about_desc: "الجمع بين الأسس الأكاديمية لهندسة البرمجيات والخبرة العملية في بناء بنى تحتية رقمية متينة وقابلة للتوسع.",
    about_p1: "أنا مهندس برمجيات متخرج من جامعة دمشق (2019 – 2024)، متخصص في هندسة وتطوير الأنظمة الخلفية (Backend) بالاعتماد على إطار العمل Laravel وقواعد البيانات العلائقية الحديثة. أركز بشكل أساسي على بناء أنظمة نظيفة، قابلة للصيانة، وتتحمل الضغط العالي مع قابلية التطوير المستقبلي.",
    about_p2: "من خلال خبرتي في شركات مثل HabApps و Nuhieh والعمل الحر، إلى جانب دوري القيادي في منصة أبحاث Reparametrize، قمت بتصميم وتطوير واجهات برمجة التطبيقات RESTful APIs، ونقاط GraphQL، والاتصالات اللحظية عبر WebSockets، وخطوط الإنتاج والتسليم المستمر CI/CD، وأنظمة المحافظ والمعاملات المالية.",
    about_degree_title: "إجازة في هندسة البرمجيات",
    about_degree_sub: "جامعة دمشق (2019 – 2024)",
    about_degree_desc: "دراسة شاملة للخوارزميات، هياكل البيانات، هندسة البرمجيات، إدارة قواعد البيانات، النظم الموزعة، وأمن الشبكات.",

    // Skills Section
    skills_tag: "المهارات والتقنيات",
    skills_title: "الترسانة التقنية والأدوات",
    skills_desc: "مجموعة أدوات احترافية متكاملة تهدف إلى كتابة كود نظيف وتطوير أنظمة خلفية عالية الاعتمادية.",
    skill_cat_backend: "الباك إند واللغات الأساسية",
    skill_cat_arch: "المعمارية وأنماط التصميم",
    skill_cat_db: "قواعد البيانات والاتصال اللحظي",
    skill_cat_devops: "الـ DevOps، الأدوات وضمان الجودة",

    // Experience Section
    exp_tag: "المسار المهني",
    exp_title: "الخبرات والمسؤوليات التقنية",
    exp_desc: "تطوير أنظمة واقعية في قطاعات التعليم الإلكتروني، العقارات، البحث العلمي، والمشاريع البرمجية.",
    exp_role_1: "مطور أنظمة خلفية (Back-end Developer)",
    exp_comp_1: "منصة نُحيه (Nuhieh)",
    exp_date_1: "يوليو 2026 – أغسطس 2026",
    exp_desc_1: "قيادة تطوير الباك إند لمنصة مدرسية إلكترونية هجينة تجمع بين التعليم الذاتي والتعليم الصفي. تصميم قواعد البيانات، التخطيط المعماري للنظام، وبناء واجهات برمجية لربط الإداريين والمعلمين وأولياء الأمور والطلاب مع أدوات إدارة الحصص والجداول والتقييمات والواجبات.",

    exp_role_2: "مطور لارافيل بدوام كامل (Full-time Laravel Developer)",
    exp_comp_2: "شركة HabApps",
    exp_date_2: "فبراير 2026 – يوليو 2026",
    exp_desc_2: "قائد الأنظمة الخلفية وقواعد البيانات والسيرفرات لتطبيق Kozee العقاري. بناء واجهات RESTful APIs عالية الكفاءة، تحسين استعلامات MySQL المعقدة، إدارة البنية التحتية للخوادم، وتطوير خاصية الاستكشاف عبر الخرائط وموجز فيديوهات الريلز العقارية.",

    exp_role_3: "قائد فريق تقني أول ومطور باك إند (تطوع علمي)",
    exp_comp_3: "منصة ريبارامتريز للأبحاث (Reparametrize)",
    exp_date_3: "يوليو 2025 – حتى الآن",
    exp_desc_3: "المساهمة في منصة أبحاث علمية مفتوحة المصدر لتطوير المدن الذكية في مرحلة ما بعد الأزمات. بناء واجهات برمجية قابلة للتوسع وأدوات لمعالجة البيانات مدعومة بالذكاء الاصطناعي لتحليل الهياكل الحضرية. الترقية لقيادة الفريق وتقديم محاضرة عامة في فعالية مسارات التعافي.",

    exp_role_4: "مطور لارافيل مستقل (Freelance Laravel Developer)",
    exp_comp_4: "شركة Dotnokta",
    exp_date_4: "أغسطس 2023 – أبريل 2024",
    exp_desc_4: "تطوير وصيانة مشاريع متكاملة باستخدام Laravel وفق مبادئ المعمارية النظيفة (Clean Architecture). تقديم الاستشارات التقنية والحلول البرمجية بالتعاون مع فريق العمل.",

    exp_role_5: "عضو نشط",
    exp_comp_5: "الغرفة الفتية الدولية بدمشق (JCI Damascus)",
    exp_date_5: "أبريل 2026 – حتى الآن",
    exp_desc_5: "المشاركة الفعالة في مبادرات التعاون الدولي، ريادة الأعمال، تنمية المجتمع، وتطوير المهارات القيادية.",

    // Projects Section
    proj_tag: "معرض الأعمال",
    proj_title: "المشاريع والأنظمة المنفذة",
    proj_desc: "مجموعة مختارة من البنى التحتية والتطبيقات المتكاملة التي صممتها ونفذتها وفق أعلى المعايير الهندسية.",
    filter_all: "كافة المشاريع",
    filter_backend: "أنظمة الباك إند و APIs",
    filter_platforms: "المنصات والتعليم",
    filter_realtime: "الزمن الحقيقي والمالية",
    filter_research: "الذكاء الاصطناعي والأبحاث",

    btn_view_details: "عرض تفاصيل البنية والميزات",

    // Project 1: Kozee
    proj_kozee_title: "منصة كوزي العقارية (Kozee)",
    proj_kozee_cat: "تطبيقات مؤسسية & APIs",
    proj_kozee_desc: "منصة عقارية متكاملة تتيح استكشاف العقارات عبر الخرائط الذكية، وفيديوهات الريلز القصيرة، ونظام كاش متطور لسرعة الاستعلامات.",
    proj_kozee_b1: "تصميم وبناء واجهات RESTful APIs وقواعد بيانات تخدم آلاف العقارات والوسطاء.",
    proj_kozee_b2: "تطبيق خوارزميات الاستكشاف الجغرافي ونظام الريلز لربط أصحاب العقارات والعملاء.",
    proj_kozee_b3: "تحسين فهارس MySQL وإدارة بنية الخوادم لضمان أداء مستقر وسريع.",

    // Project 2: Nuhieh
    proj_nuhieh_title: "منصة نُحيه التعليمية الهجينة",
    proj_nuhieh_cat: "تكنولوجيا التعليم (EdTech)",
    proj_nuhieh_desc: "نظام تعليمي هجين يوفق بين التعلم الذاتي الرقمي والتعليم داخل الفصول، ويخدم 4 فئات: الإدارة، المعلمين، الأهالي، والطلاب.",
    proj_nuhieh_b1: "هندسة نظام أذونات متعدد المستويات (RBAC) يدير أربع صلاحيات مختلفة بدقة وأمان.",
    proj_nuhieh_b2: "بناء أدوات الجداول الدراسية التفاعلية، حساب الدرجات الآلي، ورفع الواجبات.",
    proj_nuhieh_b3: "تطبيق المعمارية النظيفة لضمان سهولة الفحص والاختبارات والتوسع المستقبلي.",

    // Project 3: Dream Shop
    proj_dream_title: "منصة دريم شوب (Dream Shop)",
    proj_dream_cat: "تجارة إلكترونية متعددة التجار",
    proj_dream_desc: "تطبيق هاتف متكامل للتجارة الإلكترونية يتيح لعدة بائعين عرض منتجاتهم، مع سلة شراء متطورة ونظام معالجة طلبات آمن.",
    proj_dream_b1: "هندسة واجهات RESTful APIs عالية الأداء لإدارة السلة والفلترة والطلبات.",
    proj_dream_b2: "نظام مصادقة وتفويض دقيق يفصل بين حسابات المشترين والتجار ومديري النظام.",
    proj_dream_b3: "تصميم قاعدة بيانات علائقية متماسكة تحافظ على سلامة العمليات المالية والطلبات.",

    // Project 4: Care Me
    proj_care_title: "نظام كير مي لإدارة العيادات (Care Me)",
    proj_care_cat: "الرعاية الصحية والزمن الحقيقي",
    proj_care_desc: "تطبيق ذكي لإدارة العيادات الطبية يتيح التواصل اللحظي بين الطبيب والمريض، حجز المواعيد، وواجهة استعلام مرنة عبر GraphQL.",
    proj_care_b1: "محادثة فورية مباشرة عبر WebSockets وإشعارات لحظية للرسائل والمواعيد.",
    proj_care_b2: "دمج واجهات GraphQL بجانب REST لتوفير استعلامات مرنة وسريعة للسجلات الطبية.",
    proj_care_b3: "نظام جدولة مواعيد دقيق يمنع التعارض ويدير أوقات الكشف بسلاسة.",

    // Project 5: AdVance
    proj_advance_title: "منصة آد فانس الإعلانية (AdVance)",
    proj_advance_cat: "التكنولوجيا المالية والإعلانية",
    proj_advance_desc: "سوق رقمي يربط بين المعلنين الراغبين بنشر حملاتهم والتطبيقات المستضيفة الراغبة في تحقيق عوائد بعرض الإعلانات.",
    proj_advance_b1: "بناء بنية محفظة رقمية متكاملة لإدارة الأرصدة والتحويلات المالية داخل المنصة.",
    proj_advance_b2: "تصميم سجل مالي محاسبي دقيق وقابل للتدقيق لضمان سلامة العمليات.",
    proj_advance_b3: "تحليل المشاهدات في الوقت الفعلي وأنظمة لمنع التلاعب والنقرات الوهمية.",

    // Project 6: BriefCode
    proj_brief_title: "بيئة بريف كود (BriefCode Low-Code)",
    proj_brief_cat: "معمارية الأنظمة والمترجمات",
    proj_brief_desc: "بيئة تطوير برمجيات منخفضة الكود (Low-Code) لتطبيقات الهواتف تعتمد على البرمجة موجهة الجوانب وتقنيات المترجمات.",
    proj_brief_b1: "تطبيق البرمجة موجهة الجوانب (AOP) لفصل الاهتمامات المشتركة عبر النظام.",
    proj_brief_b2: "خوارزميات إدارة التنافس على الموارد وتحليل شجرة النحو المجردة (AST Parsing).",
    proj_brief_b3: "استخدام أنماط التصميم المتقدمة (Repository, Façade, Factory, Strategy).",

    // Project 7: Mosaic Recoding Syria
    proj_reparam_title: "منصة موزاييك لإعادة تسجيل سوريا",
    proj_reparam_cat: "الذكاء الاصطناعي والأبحاث",
    proj_reparam_desc: "مبادرة علمية مفتوحة المصدر لمؤسسة ريبارامتريز لتوظيف الذكاء الاصطناعي ومعالجة البيانات في التخطيط الحضري بعد الأزمات.",
    proj_reparam_b1: "تطوير واجهات Laravel متقدمة تتكامل مع نماذج الذكاء الاصطناعي لتحليل البيانات الحضرية.",
    proj_reparam_b2: "المساهمة بأكثر من 208 ساعة بحثية والترقية السريعة لقيادة الفريق التقني.",
    proj_reparam_b3: "تقديم محاضرة علمية رسمية في مؤتمر إطلاق قاعدة البيانات المفتوحة بمشروع مسارات التعافي.",

    // References Section
    ref_tag: "المعرفون المهنيون",
    ref_title: "المراجع والتوصيات المباشرة",
    ref_desc: "شخصيات مهنية وأكاديمية يمكن التواصل معها للتحقق من الكفاءة التقنية والتفاني في العمل.",
    ref_1_name: "م. محمد زوار النوري",
    ref_1_title: "المؤسس والمدير التنفيذي",
    ref_1_org: "مؤسسة ريبارامتريز (Reparametrize Foundation)",
    ref_2_name: "أ. سارية حباب",
    ref_2_title: "المدير التقني والتنفيذي",
    ref_2_org: "شركة HabApps",
    ref_phone_lbl: "الهاتف",
    ref_email_lbl: "البريد الإلكتروني",

    // Contact Section
    contact_tag: "تواصل معي",
    contact_title: "لنبدأ العمل على مشروعك القادم",
    contact_desc: "سواء كنت تبحث عن مهندس أنظمة خلفية متمرس بلارافيل، أو استشارة معمارية برمجية، يسعدني دائماً التواصل والتعاون.",
    contact_email_title: "البريد الإلكتروني",
    contact_phone_title: "الهاتف والواتساب",
    contact_loc_title: "الموقع",
    contact_loc_val: "دمشق، سوريا (جرمانا)",
    contact_copy_btn: "نسخ",
    contact_copied: "تم النسخ إلى الحافظة بنجاح!",

    // Form
    form_name_lbl: "الاسم الكامل",
    form_name_ph: "مثال: أحمد محمد",
    form_email_lbl: "البريد الإلكتروني",
    form_email_ph: "name@example.com",
    form_subject_lbl: "الموضوع",
    form_subject_ph: "فرصة عمل / استشارة / مشروع جديد",
    form_message_lbl: "الرسالة",
    form_message_ph: "مرحباً ورد، أود التحدث معك بخصوص...",
    form_submit_btn: "إرسال الرسالة",
    form_whatsapp_btn: "محادثة فورية عبر واتساب",
    form_success_msg: "شكراً لتواصلك! تم تجهيز نص الرسالة، ويمكنك أيضاً التحدث معي مباشرة عبر واتساب.",

    // Footer
    footer_rights: "جميع الحقوق محفوظة.",
    footer_built_with: "صُمم وبُني بدقة وفق أحدث معايير الويب والمعمارية النظيفة.",

    // Recommendation Modal
    modal_rec_title: "خطاب التوصية المهنية الرسمي",
    modal_rec_org: "مؤسسة ريبارامتريز — قسم تقانة المعلومات والذكاء الاصطناعي",
    modal_rec_date: "دمشق، 04/07/2026",
    modal_rec_btn_en: "النص الإنجليزي الأصلي",
    modal_rec_btn_ar: "الترجمة العربية المعتمدة",
    modal_rec_dl_pdf: "تحميل ملف التوصية الموقع (PDF)",
    modal_close: "إغلاق"
  }
};

// Full Recommendation Letter text content
const recommendationLetterData = {
  en: {
    header: "Re-coding Post-Crisis Platform — An initiative by Reparametrize Foundation",
    subHeader: "Advancing urban resilience through data-driven, sustainable solutions for post-crisis recovery.\nReparametrize Foundation is a non-profit organization listed nº 2246 in the Ministry of Social Affairs and Labor of the Government of Syria.",
    contactInfo: "www.reparametrize.com | T: +96 9477 1 6969 | recoding@reparametrize.com",
    date: "Damascus, 04/07/2026",
    salutation: "To Whom It May Concern,",
    paragraphs: [
      "I am pleased to recommend Ward Alshaheen, who served as a dedicated volunteer in the IT & AI Department at Reparametrize Foundation from July 2025 until now, contributing a total of 208 volunteer hours. During this period, Ward was actively engaged in Re-coding Post-Crisis Platform, one of the Foundation’s pioneering initiatives established in 2018 to advance urban recovery in post-crisis areas through AI-driven data, research, and sustainable solutions. Through this initiative, our mission is to transform affected cities into resilient, intelligent, and inclusive urban environments.",
      "Ward Alshaheen joined us as a Junior Researcher during the Brainstorming phase into our current work, Mosaic Recoding Syria. He quickly proved himself in record time, leading to his promotion as a Senior Leader. During their time with us, Ward displayed outstanding commitment, professionalism, and skill, greatly benefitting our department and the overall mission of the Re-coding Post-Crisis Platform.",
      "As a Senior Leader, Ward analyzed complex datasets, translated technical findings into actionable outputs, and ensured efficient execution across systems and workflows with precision and efficiency.",
      "His contributions during the \"Recovery Pathways\" Event—which showcased the results of the Re-coding Summer School and marked the official announcement of the Reparametrize open-source database—were outstanding. Ward delivered a compelling public lecture on \"The Role of Artificial Intelligence in Post-Conflict City Reconstruction Methodologies\" and provided insightful contributions to the event's public debate, effectively bridging the gap between emerging technology and on-the-ground urban resilience.",
      "Notably, Ward excelled in teamwork, frequently collaborating with and supporting peers, as well as demonstrating an admirable level of initiative. Their adaptability and problem-solving abilities proved essential in the dynamic environment of post-crisis work, and their positive influence helped elevate team morale and productivity.",
      "Overall, Ward Alshaheen has been an asset to our Foundation, leaving a lasting impact through their dedication and expertise. I am confident they will bring the same level of commitment to any future endeavors. I highly recommend Ward Alshaheen and I am happy to provide further details if needed at our contact details below."
    ],
    closing: "Sincerely,",
    signee: "Mhd Ziwar Al Nouri, M.Arch, PhD Candidate",
    signeeTitle: "Founder and Executive Director",
    signeeOrg: "Reparametrize Foundation"
  },
  ar: {
    header: "منصة إعادة ترميز ما بعد الأزمات — مبادرة من مؤسسة ريبارامتريز (Reparametrize Foundation)",
    subHeader: "تعزيز المرونة الحضرية من خلال حلول مستدامة تعتمد على البيانات للتعافي بعد الأزمات.\nمؤسسة ريبارامتريز هي منظمة غير ربحية مشهرة برقم 2246 في وزارة الشؤون الاجتماعية والعمل لدى حكومة الجمهورية العربية السورية.",
    contactInfo: "www.reparametrize.com | هاتف: 6969 9477 96+ | البريد: recoding@reparametrize.com",
    date: "دمشق، 04/07/2026",
    salutation: "إلى من يهمه الأمر،",
    paragraphs: [
      "يسعدني ويشرفني أن أوصي بالسيد ورد الشاهين، الذي عمل كمتطوع متفانٍ في قسم تقانة المعلومات والذكاء الاصطناعي (IT & AI Department) في مؤسسة ريبارامتريز منذ يوليو 2025 وحتى الآن، مساهماً بما مجموعه 208 ساعات تطوعية. وخلال هذه الفترة، شارك ورد بفاعلية في «منصة إعادة ترميز ما بعد الأزمات» (Re-coding Post-Crisis Platform)، إحدى المبادرات الرائدة للمؤسسة التي تأسست عام 2018 لتعزيز التعافي الحضري في المناطق المتضررة من خلال أبحاث وبيانات مدفوعة بالذكاء الاصطناعي والحلول المستدامة لتحويل المدن المتضررة إلى بيئات حضرية مرنة وذكية وشاملة.",
      "انضم إلينا ورد الشاهين كباحث مبتدئ (Junior Researcher) خلال مرحلة العصف الذهني في عملنا الحالي «موزاييك إعادة ترميز سوريا» (Mosaic Recoding Syria). وقد أثبت كفاءته العالية في وقت قياسي، مما أدى إلى ترقيته لمرتبة قائد فريق أول (Senior Leader). وخلال فترة تواجده معنا، أظهر ورد التزاماً استثنائياً ومهنية ومهارة عالية عادت بنفع كبير على قسمنا والمهمة الشاملة للمنصة.",
      "وبصفته قائداً أول، قام ورد بتحليل مجموعات البيانات المعقدة، وترجمة الاستنتاجات التقنية إلى مخرجات عملية قابلة للتنفيذ، وضمان التنفيذ الفعال عبر مختلف الأنظمة ومسارات العمل بدقة وكفاءة بالغة.",
      "كانت مساهماته خلال حدث «مسارات التعافي» (Recovery Pathways) — والذي استعرض نتائج المدرسة الصيفية لإعادة الترميز وشهد الإعلان الرسمي عن قاعدة بيانات ريبارامتريز مفتوحة المصدر — مساهمات بارزة واستثنائية. حيث قدم ورد محاضرة عامة ملهمة بعنوان «دور الذكاء الاصطناعي في منهجيات إعادة إعمار مدن ما بعد النزاع»، وقدم مداخلات قيّمة في النقاش العام للحدث، رابطاً بنجاح بين التقنيات الناشئة ومتطلبات المرونة الحضرية على أرض الواقع.",
      "كما تميز ورد بالعمل الجماعي وروح المبادرة العالية ودعم زملائه، وكانت قدرته العالية على التكيف وحل المشكلات عاملاً حاسماً في بيئة العمل الديناميكية بعد الأزمات، وأسهم حضوره الإيجابي في رفع معنويات الفريق وإنتاجيته.",
      "بشكل عام، كان ورد الشاهين مكسباً كبيراً لمؤسستنا، تاركاً بصمة وأثراً دائماً بتفانيه وخبرته. وأنا على ثقة تامة بأنه سيقدم نفس المستوى من الالتزام والتميز في أي مهام ومساعٍ مستقبلية. أوصي بورد الشاهين بشدة، ويسعدني تقديم أي تفاصيل إضافية عند الطلب عبر وسائل التواصل الموضحة أدناه.",
    ],
    closing: "مع فائق التقدير والاحترام،",
    signee: "م. محمد زوار النوري (M.Arch, مرشح دكتوراه)",
    signeeTitle: "المؤسس والمدير التنفيذي",
    signeeOrg: "مؤسسة ريبارامتريز (Reparametrize Foundation)"
  }
};

// Application State
let currentLang = localStorage.getItem('ward_portfolio_lang') || 'ar';
let currentTheme = localStorage.getItem('ward_portfolio_theme') || 'dark';
let activeLetterLang = 'ar';

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage(currentLang);
  initProjectFilters();
  initModals();
  initContactActions();
  initScrollSpy();
  initMobileNav();
  initStatsObserver();
});

// Theme Management
function initTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('ward_portfolio_theme', currentTheme);
      updateThemeIcon();
    });
  }
}

function updateThemeIcon() {
  const themeBtn = document.getElementById('themeToggle');
  if (!themeBtn) return;
  if (currentTheme === 'dark') {
    themeBtn.setAttribute('title', currentLang === 'ar' ? 'التحويل إلى الوضع المضيء' : 'Switch to Light Mode');
    themeBtn.setAttribute('aria-label', currentLang === 'ar' ? 'الوضع المضيء' : 'Light Mode');
    themeBtn.innerHTML = `
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    `;
  } else {
    themeBtn.setAttribute('title', currentLang === 'ar' ? 'التحويل إلى الوضع الليلي' : 'Switch to Dark Mode');
    themeBtn.setAttribute('aria-label', currentLang === 'ar' ? 'الوضع الليلي' : 'Dark Mode');
    themeBtn.innerHTML = `
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `;
  }
}

// Language Engine
function initLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('ward_portfolio_lang', lang);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update text elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update language toggle button text
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.setAttribute('title', lang === 'ar' ? 'Switch to English' : 'التحويل للغة العربية');
    langToggle.innerHTML = `
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
      <span class="lang-text" style="font-weight: 700; font-size: 0.8rem; letter-spacing: 0.02em;">${lang === 'ar' ? 'EN' : 'عربي'}</span>
    `;
  }

  // Update modal letter if open
  activeLetterLang = lang;
  renderRecommendationLetter(activeLetterLang);
  updateThemeIcon();
}

// Lang toggle button click listener
const langToggleBtn = document.getElementById('langToggle');
if (langToggleBtn) {
  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'ar' ? 'en' : 'ar';
    initLanguage(nextLang);
  });
}

// Project Filtering Logic
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterVal === 'all' || categories.includes(filterVal)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

// Modals Management
function initModals() {
  // Recommendation Modal
  const recModal = document.getElementById('recModal');
  const openRecBtns = document.querySelectorAll('.open-rec-modal');
  const closeRecBtn = document.getElementById('closeRecModal');

  if (openRecBtns && recModal) {
    openRecBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        renderRecommendationLetter(currentLang);
        recModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
  }

  if (closeRecBtn && recModal) {
    closeRecBtn.addEventListener('click', () => {
      recModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Modal backdrop click close
  if (recModal) {
    recModal.addEventListener('click', (e) => {
      if (e.target === recModal) {
        recModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Recommendation letter internal language switcher (AR / EN)
  const letterEnBtn = document.getElementById('letterEnBtn');
  const letterArBtn = document.getElementById('letterArBtn');

  if (letterEnBtn && letterArBtn) {
    letterEnBtn.addEventListener('click', () => {
      activeLetterLang = 'en';
      letterEnBtn.classList.add('active');
      letterArBtn.classList.remove('active');
      renderRecommendationLetter('en');
    });

    letterArBtn.addEventListener('click', () => {
      activeLetterLang = 'ar';
      letterArBtn.classList.add('active');
      letterEnBtn.classList.remove('active');
      renderRecommendationLetter('ar');
    });
  }

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (recModal && recModal.classList.contains('active')) {
        recModal.classList.remove('active');
        document.body.style.overflow = '';
      }
      const projectModal = document.getElementById('projectModal');
      if (projectModal && projectModal.classList.contains('active')) {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  // Project Detail Modal
  initProjectDetailModal();
}

// Render Recommendation Letter inside Modal
function renderRecommendationLetter(lang) {
  const data = recommendationLetterData[lang];
  const container = document.getElementById('letterContent');
  if (!container || !data) return;

  const isRtl = lang === 'ar';
  container.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  container.style.textAlign = isRtl ? 'right' : 'left';

  let paragraphsHtml = data.paragraphs.map(p => `<p>${p}</p>`).join('');

  container.innerHTML = `
    <div class="official-letterhead">
      <div class="letter-top-bar">
        <div>
          <h3 class="letter-title">${data.header}</h3>
          <p class="letter-org-meta" style="white-space: pre-line; margin-top: 0.35rem;">${data.subHeader}</p>
          <p class="letter-org-meta" style="margin-top: 0.45rem; font-weight: 600; color: #10b981;">${data.contactInfo}</p>
        </div>
        <div class="letter-meta-date">
          <span>${data.date}</span>
        </div>
      </div>

      <div style="font-weight: 700; margin-bottom: 1.25rem; font-size: 1.05rem; color: #f8fafc;">
        ${data.salutation}
      </div>

      <div class="letter-paragraphs">
        ${paragraphsHtml}
      </div>

      <div class="letter-signature-box">
        <div>
          <div style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0.25rem;">${data.closing}</div>
          <div style="font-size: 1.15rem; font-weight: 800; color: #f8fafc;">${data.signee}</div>
          <div style="font-size: 0.85rem; color: var(--text-muted);">${data.signeeTitle}</div>
          <div style="font-size: 0.85rem; color: var(--accent-emerald); font-weight: 600;">${data.signeeOrg}</div>
        </div>

        <div class="letter-seal">
          <span>OFFICIAL</span>
          <span>SEAL</span>
          <span style="font-size: 0.55rem; opacity: 0.8;">No. 2246</span>
        </div>
      </div>
    </div>
  `;
}

// Project Details Modal Deep Dive
const projectDetailsData = {
  kozee: {
    en: {
      title: "Kozee Real Estate Platform",
      badge: "Production Backend & Lead Infrastructure",
      summary: "High-performance property discovery application engineered for HabApps, catering to thousands of active buyers and property agencies.",
      techStack: ["Laravel", "MySQL", "RESTful APIs", "Geo-Spatial Queries", "Video Streaming Backend", "Ubuntu / Nginx"],
      challenges: [
        "Handling spatial map queries with millisecond response times under heavy concurrent filtering.",
        "Managing video reel assets, streaming bandwidth, and thumbnail generation pipeline.",
        "Implementing a role-based CMS for real estate agents with granular permissions."
      ],
      solutions: [
        "Implemented indexed bounding-box geo-caching in MySQL and Redis for instantaneous map viewport updates.",
        "Engineered chunked video upload pipelines with optimized background processing and delivery.",
        "Designed clean repository pattern architectures separating persistence from business domain logic."
      ]
    },
    ar: {
      title: "منصة كوزي العقارية (Kozee)",
      badge: "الباك إند الرئيسي وإدارة السيرفرات في HabApps",
      summary: "تطبيق عقاري عالي الأداء مصمم ومطور لشركة HabApps لخدمة آلاف المستخدمين والوسطاء والشركات العقارية.",
      techStack: ["Laravel", "MySQL", "RESTful APIs", "Geo-Spatial Queries", "Video Streaming Backend", "Ubuntu / Nginx"],
      challenges: [
        "معالجة الاستعلامات الجغرافية والخرائط في أجزاء من الثانية مع فلاتر متعددة وضغط متزامن.",
        "إدارة تدفق فيديوهات الريلز العقارية وتحسين استهلاك الباندويث وإنشاء الصور المصغرة.",
        "بناء لوحة تحكم وصلاحيات دقيقة للوسطاء وأصحاب العقارات مع حماية البيانات."
      ],
      solutions: [
        "بناء خوارزميات فهارس جغرافية Bounding-Box مع تخزين مؤقت (Caching) لسرعة استجابة فائقة.",
        "تطوير مسار رفع الفيديوهات المجزأ وعمليات المعالجة الخلفية لضمان تجربة تصفح سلسة.",
        "تطبيق نمط المستودع (Repository Pattern) لفصل منطق العمل عن قواعد البيانات وتسهيل الصيانة."
      ]
    }
  },
  nuhieh: {
    en: {
      title: "Nuhieh Hybrid Learning Platform",
      badge: "Full-Stack Backend & Architecture Lead",
      summary: "Next-generation electronic hybrid school platform bridging self-paced digital learning with direct classroom participation.",
      techStack: ["Laravel", "Clean Architecture", "RBAC", "MySQL", "RESTful APIs", "Automated Assessments"],
      challenges: [
        "Unifying 4 complex user journeys (Admins, Teachers, Parents, and Students) in a cohesive, modular backend.",
        "Automating scheduling algorithms to prevent teacher and classroom conflicts across academic terms.",
        "Safeguarding student academic records and real-time attendance tracking."
      ],
      solutions: [
        "Architected a granular Role-Based Access Control (RBAC) middleware verifying permissions per endpoint.",
        "Engineered intelligent scheduling matrices detecting clashes in timetable generation dynamically.",
        "Structured clean domain-driven service layers ensuring testability and modular maintenance."
      ]
    },
    ar: {
      title: "منصة نُحيه التعليمية الهجينة",
      badge: "تطوير الباك إند بالكامل والتخطيط المعماري",
      summary: "منصة مدرسية إلكترونية هجينة تربط بين التعليم الذاتي والرقمي والتعليم داخل الفصول، مع لوحات تحكم متخصصة.",
      techStack: ["Laravel", "Clean Architecture", "RBAC", "MySQL", "RESTful APIs", "Automated Assessments"],
      challenges: [
        "توحيد مسارات العمل لأربع فئات مختلفة (الإدارة، المعلمون، أولياء الأمور، والطلاب) في نظام متماسك.",
        "أتمتة خوارزميات الجداول الدراسية لمنع التعارض الزمني بين المدرسين والقاعات الصفية.",
        "توفير بيئة آمنة وعالية الموثوقية لحفظ السجلات الأكاديمية والواجبات ورصد الحضور اليومي."
      ],
      solutions: [
        "تصميم نظام تحكم بالصلاحيات (RBAC Middleware) يفحص الأذونات بدقة فائقة لكل مسار.",
        "بناء مصفوفة برمجية ذكية تكشف وتمنع أي تعارض في مواعيد الحصص والامتحانات بشكل فوري.",
        "تطبيق المعمارية النظيفة (Clean Architecture) وفصل طبقات الخدمات لتحقيق أقصى درجات المرونة."
      ]
    }
  },
  care: {
    en: {
      title: "Care Me Healthcare Suite",
      badge: "Real-time WebSockets & GraphQL Integration",
      summary: "Medical clinic automation platform offering real-time patient-doctor telemedicine, instant messaging, and automated bookings.",
      techStack: ["Laravel", "GraphQL", "WebSockets / Pusher", "MySQL", "Push Notifications", "Clean Architecture"],
      challenges: [
        "Achieving real-time bidirectional communication between patients and medical staff with low latency.",
        "Enabling flexible query schemas for varied medical history and lab records without over-fetching.",
        "Preventing appointment double-bookings during peak hours."
      ],
      solutions: [
        "Configured robust WebSocket channels for real-time messaging, typing indicators, and presence states.",
        "Implemented GraphQL endpoints allowing frontend clients to query exact fields needed for clinical charts.",
        "Built database-level transactions with pessimistic locking to guarantee appointment integrity."
      ]
    },
    ar: {
      title: "نظام كير مي لإدارة العيادات (Care Me)",
      badge: "الاتصال اللحظي WebSockets وواجهات GraphQL",
      summary: "تطبيق متطور لإدارة العيادات الطبية، يوفر محادثات فورية بين المرضى والأطباء، حجز المواعيد، واستعلامات مرنة.",
      techStack: ["Laravel", "GraphQL", "WebSockets / Pusher", "MySQL", "Push Notifications", "Clean Architecture"],
      challenges: [
        "تأمين اتصال فوري لحظي ثنائي الاتجاه بين المرضى والكوادر الطبية بأقل زمن استجابة ممكن.",
        "توفير استعلامات مرنة للسجلات الطبية والتحاليل دون استهلاك غير مبرر للبيانات.",
        "منع تعارض الحجوزات الطبية في ساعات الذروة وضمان دقة المواعيد."
      ],
      solutions: [
        "بناء قنوات WebSocket للدردشة المباشرة مع مؤشرات الكتابة والتنبيهات الفورية.",
        "دمج تقنية GraphQL لتمكين واجهات المستخدم من طلب الحقول الطبية المحددة فقط بدقة وسرعة.",
        "استخدام المعاملات الذرية وقفل البيانات (Pessimistic Locking) لضمان عدم تكرار الحجوزات."
      ]
    }
  },
  advance: {
    en: {
      title: "AdVance Digital Advertising Marketplace",
      badge: "FinTech Ledger & In-App Digital Wallet",
      summary: "High-scale marketplace enabling advertisers to launch ad campaigns while host applications monetize their digital inventory.",
      techStack: ["Laravel", "Double-Entry Ledger", "RESTful APIs", "Digital Wallet", "MySQL", "Anti-Fraud Algorithms"],
      challenges: [
        "Ensuring complete financial accuracy and atomicity for in-app wallet balances and transactions.",
        "Preventing automated bot clicks and fraudulent impression inflation.",
        "Providing real-time analytics dashboards for campaign ROI."
      ],
      solutions: [
        "Architected an immutable double-entry bookkeeping ledger ensuring debits and credits always balance.",
        "Created rate-limiting and fingerprinting checks to filter invalid ad impressions.",
        "Implemented summarized data aggregation tables for near real-time analytics reporting."
      ]
    },
    ar: {
      title: "منصة آد فانس الإعلانية (AdVance)",
      badge: "محفظة رقمية ونظام محاسبي متطور (FinTech)",
      summary: "سوق رقمي يربط بين المعلنين والتطبيقات المستضيفة مع إدارة دقيقة للمحافظ المالية والحملات الإعلانية.",
      techStack: ["Laravel", "Double-Entry Ledger", "RESTful APIs", "Digital Wallet", "MySQL", "Anti-Fraud Algorithms"],
      challenges: [
        "ضمان الدقة المالية المطلقة والتماسك الذري لجميع حركات المحفظة الرقمية والأرصدة.",
        "مكافحة النقرات الوهمية والتلاعب في احتساب المشاهدات الإعلانية.",
        "توفير لوحات تحكم وإحصائيات فورية للأرباح وعوائد الحملات الإعلانية."
      ],
      solutions: [
        "هندسة نظام قيد مزدوج (Double-Entry Ledger) غير قابل للتعديل يضمن مطابقة الحسابات تماماً.",
        "تطبيق خوارزميات كشف البوتات وفلترة الزيارات غير الحقيقية اعتماداً على البصمة الرقمية ومعدل الطلبات.",
        "بناء جداول تجميعية محسنة لعرض الإحصائيات والأرقام المالية في الوقت الفعلي."
      ]
    }
  },
  brief: {
    en: {
      title: "BriefCode Low-Code Mobile Engine",
      badge: "Aspect-Oriented Programming (AOP) & Compilers",
      summary: "Low-code system built to accelerate mobile software creation with aspect separation, resource competition schedulers, and design patterns.",
      techStack: ["PHP Core", "AOP Concepts", "Compiler / AST Parsing", "Factory & Façade Patterns", "Architecture Patterns"],
      challenges: [
        "Decoupling cross-cutting logic (logging, security, performance audits) from core logic without bloat.",
        "Scheduling competitive resource allocations without deadlock in simulated execution environments.",
        "Parsing low-code graphical representations into clean executable artifacts."
      ],
      solutions: [
        "Leveraged Aspect-Oriented Programming (AOP) interceptors and decorators for clean cross-cutting execution.",
        "Designed resource competition locks and priority scheduling algorithms.",
        "Built a modular compiler and parsing pipeline utilizing Façade, Factory, and Strategy patterns."
      ]
    },
    ar: {
      title: "بيئة بريف كود (BriefCode Low-Code)",
      badge: "البرمجة موجهة الجوانب (AOP) وهندسة المترجمات",
      summary: "بيئة تطوير منخفضة الكود لتسريع إنشاء تطبيقات الهواتف، تعتمد على فصل الاهتمامات وجدولة الموارد وأنماط التصميم.",
      techStack: ["PHP Core", "AOP Concepts", "Compiler / AST Parsing", "Factory & Façade Patterns", "Architecture Patterns"],
      challenges: [
        "فصل الاهتمامات المشتركة (التسجيل، الأمان، وتتبع الأداء) عن منطق البرنامج الأساسي دون تعقيد الكود.",
        "جدولة التنافس على الموارد البرمجية ومنع حالات التعليق (Deadlocks).",
        "تحويل المكونات المرئية إلى شفرات برمجية تنفيذية نظيفة وعالية الكفاءة."
      ],
      solutions: [
        "تطبيق مبادئ AOP ومستمعات الاعتراض (Interceptors) لتنفيذ الإجراءات المشتركة بنظافة.",
        "بناء خوارزمية لإدارة أولويات الموارد البرمجية وحل التنافس بذكاء.",
        "تطبيق أنماط التصميم المتقدمة (Façade, Factory, Strategy) لبناء خط معالجة وتصريف مرن."
      ]
    }
  },
  dream: {
    en: {
      title: "Dream Shop Multi-User E-Commerce",
      badge: "Scalable E-Commerce & Multi-Vendor APIs",
      summary: "Multi-user e-commerce platform powering mobile clients with real-time stock management, cart sync, and secure transactions.",
      techStack: ["Laravel", "RESTful APIs", "Relational Database Design", "Sanctum Auth", "MySQL"],
      challenges: [
        "Synchronizing inventories in real-time across multiple concurrent buyer carts.",
        "Designing clear authorization barriers between buyers, vendors, and marketplace admins.",
        "Ensuring idempotent order payment completions."
      ],
      solutions: [
        "Implemented database transactions with inventory reservation locks during checkout flows.",
        "Configured role & permission policies preventing privilege escalation.",
        "Architected clean REST endpoints adhering strictly to HTTP specs and standard response envelopes."
      ]
    },
    ar: {
      title: "منصة دريم شوب (Dream Shop)",
      badge: "تجارة إلكترونية متعددة المستخدمين والبائعين",
      summary: "منصة تجارة إلكترونية متكاملة تخدم تطبيقات الهاتف مع إدارة دقيقة للمخزون وسلة المشتريات والطلبات.",
      techStack: ["Laravel", "RESTful APIs", "Relational Database Design", "Sanctum Auth", "MySQL"],
      challenges: [
        "مزامنة المخزون في الوقت الفعلي عند إضافة المنتجات لعدة سلال تسوق في نفس اللحظة.",
        "بناء جدار حماية وصلاحيات صارم يفصل بين حسابات المشترين والتجار وإدارة المتجر.",
        "ضمان عدم تكرار الخصم أو إنشاء الطلبات عند انقطاع الاتصال أثناء الدفع."
      ],
      solutions: [
        "استخدام المعاملات البرمجية (Transactions) مع حجز مؤقت للمخزون أثناء إتمام الطلب.",
        "تطبيق سياسات وصلاحيات (Policies & Gates) تمنع أي وصول غير مصرح للمعلومات.",
        "هندسة واجهات RESTful بمخرجات قياسية وحماية متقدمة عبر Laravel Sanctum."
      ]
    }
  },
  mosaic: {
    en: {
      title: "Mosaic Recoding Syria Platform",
      badge: "Open-Source AI & Urban Research Platform",
      summary: "Scientific data research platform by Reparametrize Foundation advancing post-crisis urban reconstruction and resilient city design through AI data analytics.",
      techStack: ["Laravel Backend", "AI Data Pipelines", "Open Database APIs", "Urban Resilience Analytics", "Data Visualization"],
      challenges: [
        "Processing large heterogeneous datasets regarding damaged urban structures and socio-economic markers.",
        "Exposing open-source research data securely for global scientists and reconstruction agencies.",
        "Coordinating cross-disciplinary technical research teams in a fast-paced environment."
      ],
      solutions: [
        "Engineered scalable Laravel API endpoints feeding AI models with sanitized urban metrics in real-time.",
        "Designed the Reparametrize open-source public database announced at Recovery Pathways.",
        "Promoted to Senior Leader leading technical workflows and presenting public lectures on AI urban recovery."
      ]
    },
    ar: {
      title: "منصة موزاييك لإعادة تسجيل سوريا",
      badge: "منصة علمية مفتوحة المصدر مدعومة بالذكاء الاصطناعي",
      summary: "منصة أبحاث علمية تابعة لمؤسسة ريبارامتريز لتوظيف الذكاء الاصطناعي في إعادة إعمار المدن المتضررة وتخطيط المرونة الحضرية.",
      techStack: ["Laravel Backend", "AI Data Pipelines", "Open Database APIs", "Urban Resilience Analytics", "Data Visualization"],
      challenges: [
        "معالجة مجموعات بيانات ضخمة ومتباينة حول الأضرار الحضرية والمؤشرات الاجتماعية والاقتصادية للمدن.",
        "إتاحة قاعدة بيانات علمية مفتوحة المصدر ومحمية تخدم الباحثين ومنظمات إعادة الإعمار حول العالم.",
        "التنسيق بين الفرق التقنية ومتطلبات البحث الأكاديمي الحرج في بيئة سريعة التطور."
      ],
      solutions: [
        "بناء واجهات برمجية بلارافيل تمد نماذج الذكاء الاصطناعي ببيانات مدققة للتحليل الفوري.",
        "المساهمة في بناء قاعدة البيانات المفتوحة للمؤسسة والإعلان عنها رسمياً في مؤتمر مسارات التعافي.",
        "الترقية إلى قائد فريق أول (Senior Leader) وتقديم محاضرات علمية حول توظيف الذكاء الاصطناعي في التخطيط الحضري."
      ]
    }
  }
};

function initProjectDetailModal() {
  const projectModal = document.getElementById('projectModal');
  const closeProjBtn = document.getElementById('closeProjectModal');
  const triggerBtns = document.querySelectorAll('.open-project-modal');

  if (triggerBtns && projectModal) {
    triggerBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projKey = btn.getAttribute('data-project');
        renderProjectDetails(projKey);
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });
  }

  if (closeProjBtn && projectModal) {
    closeProjBtn.addEventListener('click', () => {
      projectModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

function renderProjectDetails(key) {
  const modalBody = document.getElementById('projectModalBody');
  const modalTitle = document.getElementById('projectModalTitle');
  if (!modalBody || !projectDetailsData[key]) return;

  const data = projectDetailsData[key][currentLang];
  const isRtl = currentLang === 'ar';

  if (modalTitle) {
    modalTitle.textContent = data.title;
  }

  const tagsHtml = data.techStack.map(t => `<span class="tag-pill" style="color: #ff2d20; border-color: rgba(255,45,32,0.25);">${t}</span>`).join('');
  const challengesHtml = data.challenges.map(c => `<li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;"><span style="color: #f59e0b;">▸</span> <span>${c}</span></li>`).join('');
  const solutionsHtml = data.solutions.map(s => `<li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;"><span style="color: #10b981;">✓</span> <span>${s}</span></li>`).join('');

  modalBody.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
  modalBody.style.textAlign = isRtl ? 'right' : 'left';

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="project-category-badge" style="color: #34d399; background: rgba(16, 185, 129, 0.1); border-color: rgba(16, 185, 129, 0.3);">
        ${data.badge}
      </span>
      <p style="font-size: 1.1rem; color: #f8fafc; margin-top: 1rem; line-height: 1.6;">
        ${data.summary}
      </p>
    </div>

    <div style="margin-bottom: 1.75rem;">
      <div style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); margin-bottom: 0.6rem;">
        ${isRtl ? 'التقنيات المستخدمة:' : 'Technologies & Architecture:'}
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
        ${tagsHtml}
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
      <div style="background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 0.85rem; padding: 1.25rem;">
        <h4 style="color: #fbbf24; font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          ${isRtl ? 'التحديات التقنية:' : 'Key Engineering Challenges:'}
        </h4>
        <ul style="list-style: none; font-size: 0.925rem; color: #cbd5e1; padding: 0;">
          ${challengesHtml}
        </ul>
      </div>

      <div style="background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 0.85rem; padding: 1.25rem;">
        <h4 style="color: #34d399; font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
          ${isRtl ? 'الحلول والنتائج المنفذة:' : 'Implemented Architectural Solutions:'}
        </h4>
        <ul style="list-style: none; font-size: 0.925rem; color: #cbd5e1; padding: 0;">
          ${solutionsHtml}
        </ul>
      </div>
    </div>
  `;
}

// Contact Actions & Copy to Clipboard
function initContactActions() {
  // Copy Email
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      copyToClipboard('wardalshaheen1@gmail.com');
    });
  }

  // Copy Phone
  const copyPhoneBtn = document.getElementById('copyPhoneBtn');
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', (e) => {
      e.preventDefault();
      copyToClipboard('+963946552865');
    });
  }

  // Interactive Form Submission
  const contactForm = document.getElementById('portfolioContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName').value;
      const email = document.getElementById('formEmail').value;
      const subject = document.getElementById('formSubject').value;
      const message = document.getElementById('formMessage').value;

      // Construct mailto link as fallback to client mail
      const mailtoUrl = `mailto:wardalshaheen1@gmail.com?subject=${encodeURIComponent(subject || 'Inquiry from Portfolio')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      
      showToast(translations[currentLang].form_success_msg);

      // Open mail client or WhatsApp
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 700);

      contactForm.reset();
    });
  }

  // WhatsApp Direct Buttons (both card & form button)
  const openWhatsApp = (e) => {
    e.preventDefault();
    const text = currentLang === 'ar' 
      ? 'مرحباً مهندس ورد، لقد اطلعت على معرض أعمالك وأرغب في التواصل معك.'
      : 'Hello Eng. Ward, I checked your portfolio and would like to connect with you.';
    window.open(`https://wa.me/963946552865?text=${encodeURIComponent(text)}`, '_blank');
  };

  const waBtn = document.getElementById('whatsappDirectBtn');
  if (waBtn) waBtn.addEventListener('click', openWhatsApp);

  const waCard = document.getElementById('whatsappDirectCard');
  if (waCard) waCard.addEventListener('click', openWhatsApp);
}

function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(translations[currentLang].contact_copied);
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try {
    document.execCommand('copy');
    showToast(translations[currentLang].contact_copied);
  } catch (err) {
    showToast('Failed to copy');
  }
  document.body.removeChild(ta);
}

// Toast Notification
function showToast(message) {
  let toast = document.getElementById('portfolioToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portfolioToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ScrollSpy & Back to top
function initScrollSpy() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }

    // Nav active link highlighting
    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 120;
      const sectionId = sec.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Mobile Nav Toggle
function initMobileNav() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    const updateIcon = (isOpen) => {
      if (isOpen) {
        mobileToggle.innerHTML = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        `;
      } else {
        mobileToggle.innerHTML = `
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
      }
    };

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('open');
      updateIcon(isOpen);
    });

    // Close when clicking any nav link
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        updateIcon(false);
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        updateIcon(false);
      }
    });
  }
}

// Animated Counter for Stats
function initStatsObserver() {
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(el => {
          const target = el.getAttribute('data-val');
          if (target) {
            el.textContent = target;
          }
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-bar');
  if (statsSection) {
    observer.observe(statsSection);
  }
}
