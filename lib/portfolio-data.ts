export const portfolioData = {
  en: {
    name: "Harentsoa Sarobidy MAHERINIAINA",
    title: "Full-Stack Developer",
    location: "Antananarivo, Madagascar",
    email: "hei.harentsoa@gmail.com",
    description: "Passionate software developer from Madagascar, focused on building clean, useful, and modern web applications. Deeply interested in Artificial Intelligence, AI agents, and intelligent web systems.",

    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      services: "Services",
      contact: "Contact",
    },

    hero: {
      subtitle: "Full-Stack Developer & AI Enthusiast",
      description: "Building modern web applications powered by AI, with expertise in React, Node.js, and cloud technologies.",
      cta: "View My Work",
      ctaSecondary: "Get In Touch",
    },


    about: {
      title: "About Me",
      intro:
        "I’m 20 years old and currently a third-year Computer Science student at Haute École d’Informatique de Madagascar (HEI).",
      description:
        "I’m passionate about building modern, scalable applications that solve real-world problems. My main focus is full-stack development, AI-powered applications, and SaaS platforms. I enjoy writing clean, maintainable code while following best practices in every project. I work with technologies such as Next.js, React, Node.js, and AI integrations to create useful and impactful products. From designing elegant user interfaces to building robust backends, I’m committed to delivering high-quality solutions.",
    },



    skills: {
      title: "Technical Skills",
      categories: {
        frontend: {
          title: "Frontend",
          items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Vite", "Tailwind CSS", "shadcn UI"],
        },
        backend: {
          title: "Backend",
          items: ["Node.js", "Express.js", "C#", "ASP.NET Core", "Java", "Spring Boot"],
        },
        databases: {
          title: "Databases",
          items: ["MongoDB", "PostgreSQL", "SQLite", "Entity Framework", "Prisma"],
        },
        tools: {
          title: "Tools & DevOps",
          items: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
        },
      },
    },

    projects: [
      {
        id: "docchat",
        title: "DocChat",
        description: "Full-stack document chat application with RAG pipeline for PDF analysis.",
        longDescription: "Users can create projects, upload PDF files, and ask questions about indexed documents using a Retrieval-Augmented Generation pipeline with OpenAI embeddings.",
        image: "/projects/docchat.png",
        technologies: ["Next.js 16", "React 19", "FastAPI", "PostgreSQL", "Pinecone", "OpenAI", "TanStack Query"],
        github: "https://github.com/Harentsoa2/docChat-project",
        liveDemo: "https://doc-chat-project-06.vercel.app",
        highlights: ["PDF OCR & table extraction", "Vector search with Pinecone", "Real-time file indexing"],
      },
      {
        id: "whopchat",
        title: "Whop Chat Platform",
        description: "Real-time messaging platform with AI assistant integration.",
        longDescription: "Full-stack real-time messaging with Socket.IO, authentication, image sharing, threaded replies, and Google Generative AI responses.",
        image: "/projects/whop-chat.png",
        technologies: ["React 19", "Node.js", "Express", "MongoDB", "Socket.IO", "Google AI", "Cloudinary"],
        github: "https://github.com/Harentsoa2/chat-project",
        liveDemo: "https://chat-project-87h8.onrender.com",
        highlights: ["Real-time chat with Socket.IO", "AI chat assistant", "Image sharing & storage"],
      },
      {
        id: "flowai",
        title: "flowAi",
        description: "AI-powered web app builder - generate Next.js applications from text descriptions.",
        longDescription: "Turn product ideas into live applications in an isolated E2B sandbox. Features conversation history, live preview, and code generation with background jobs.",
        image: "/projects/flowai.png",
        technologies: ["Next.js 15", "React 19", "tRPC", "Prisma", "PostgreSQL", "Clerk", "E2B", "Inngest", "OpenAI"],
        github: "https://github.com/Harentsoa2/flowAi-project",
        liveDemo: "https://flow-ai-project.vercel.app",
        highlights: ["AI-assisted code generation", "Isolated E2B sandboxes", "Live preview with conversation history"],
      },
      {
        id: "tessa",
        title: "Tessa",
        description: "Collaborative project management SaaS platform.",
        longDescription: "Team workspace management with member management, projects, tasks, and analytics dashboard. React + Vite frontend with Java Spring Boot backend.",
        image: "/projects/tessa.png",
        technologies: ["React 18", "Vite", "Java 17", "Spring Boot", "PostgreSQL", "TanStack Query", "Tailwind CSS"],
        liveDemo: "https://tessa-project-beta.vercel.app",
        highlights: ["Workspace management", "Team collaboration", "Analytics dashboard"],
      },
      {
        id: "owntalk",
        title: "ownTalkAI",
        description: "AI-assisted video conversation workspace with sessions and agents.",
        longDescription: "Create custom AI agents, run live video sessions, generate summaries, browse transcripts. Built with Stream Video SDK and premium billing with Polar.",
        image: "/projects/owntalkAI.png",
        technologies: ["Next.js 15", "React 19", "Drizzle ORM", "Neon", "Stream Video", "Better Auth", "Inngest", "Polar"],
        github: "https://github.com/Harentsoa2/ownTalk-project",
        liveDemo: "https://own-talk-project.vercel.app",
        highlights: ["Live video sessions", "AI agent integration", "Session transcripts & summaries"],
      },
      {
        id: "myai",
        title: "MyAI",
        description: "Premium AI companion with custom characters and persistent memory.",
        longDescription: "Chat with custom AI characters with backstories, welcome messages, and ice breakers. Memory-aware with semantic retrieval and subscription management.",
        image: "/projects/myai.png",
        technologies: ["Next.js", "React", "Prisma", "Neon", "Clerk", "Stripe", "OpenRouter", "Pinecone", "Redis"],
        github: "https://github.com/Harentsoa2/MyAI-project",
        liveDemo: "https://my-ai-project-tau.vercel.app",
        highlights: ["Custom AI characters", "Persistent memory", "Subscription management"],
      },
      {
        id: "visotro",
        title: "Visotro",
        description: "Full-stack AI SaaS with chat, image generation, and credit system.",
        longDescription: "Modern SaaS with Gemini-powered text chat, image generation mode, credit-based access, and community gallery. Includes responsive landing page and authentication.",
        image: "/projects/visotro.png",
        technologies: ["React 19", "Vite", "Express", "MongoDB", "Stripe", "Google Gemini", "ImageKit", "Tailwind CSS"],
        github: "https://github.com/Harentsoa2/visotro-project",
        liveDemo: "https://ai-chat-project-two.vercel.app",
        highlights: ["Gemini AI chat", "Image generation", "Credit system with Stripe"],
      },
    ],

    experience: [
      {
        title: "Full Stack Developer",
        company: "Empiranatra School Management Platform",
        description: "Developed and implemented full-stack features for school management system including user interface, backend logic, and authentication management.",
        skills: ["Full-stack development", "Frontend development", "Backend development", "UI implementation", "Authentication", "Web applications"],
      },
      {
        title: "Frontend Developer",
        company: "AutoDKService Garage Website",
        description: "Built responsive showcase website for automotive garage with deployment and DevOps management.",
        skills: ["Responsive design", "DevOps", "Web deployment", "UI implementation"],
      },
    ],

    education: {
      title: "Education",
      degree: "Third Year (L3)",
      school: "Haute École d'Informatique de Madagascar (HEI)",
      level: "Computer Science",
      location: "Madagascar",
      focus: "Software development, full-stack web development, backend systems, databases, and modern application architecture.",
    },

    certifications: [
      {
        title: "Microsoft Back-End Developer Professional Certificate",
        platform: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/05BUH7FIQGQO",
      },
      {
        title: "Meta Front-End Developer Professional Certificate",
        platform: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/P2EJ7EWZ7TKB",
      },
      {
        title: "Build Intelligent Agents Using DeepSeek & N8N",
        platform: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/certificate/6OE5TA6K3HCS",
      },
      {
        title: "Programming with JavaScript",
        platform: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/certificate/3NU8L08M00OV",
      },
      {
        title: "React Basics",
        platform: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/certificate/L811S31E2WQQ",
      },
      {
        title: "The Complete OpenAI JS APIs Course",
        platform: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/certificate/U4DZW5XO4FGY",
      },
    ],

    services: {
      title: "Services",
      items: [
        "Building modern websites",
        "Creating responsive frontend interfaces",
        "Developing full-stack web applications",
        "Building REST APIs",
        "Creating AI-powered applications",
        "Integrating authentication systems",
        "Working with databases",
        "Deploying web applications",
        "Creating SaaS-style platforms",
      ],
    },

    contact: {
      title: "Get In Touch",
      description: "Have a project in mind? Let&apos;s work together.",
      email: "hei.harentsoa@gmail.com",
      github: "https://github.com/Harentsoa2",
      linkedin: "#",
      social: [
        { name: "GitHub", url: "https://github.com/Harentsoa2", icon: "github" },
      ],
    },
  },

  fr: {
    name: "Harentsoa Sarobidy MAHERINIAINA",
    title: "Développeur Full-Stack",
    location: "Antananarivo, Madagascar",
    email: "hei.harentsoa@gmail.com",
    description: "Développeur passionné de Madagascar, axé sur la création d'applications web modernes et utiles. Très intéressé par l'intelligence artificielle, les agents IA et les systèmes web intelligents.",

    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      experience: "Expérience",
      education: "Formation",
      certifications: "Certifications",
      services: "Services",
      contact: "Contact",
    },

    hero: {
      subtitle: "Développeur Full-Stack & Passionné d'IA",
      description: "Construction d'applications web modernes alimentées par l'IA, avec expertise en React, Node.js et technologies cloud.",
      cta: "Voir mes travaux",
      ctaSecondary: "Me contacter",
    },

    about: {
      title: "À propos",
      intro: "J'ai 20 ans et je suis actuellement en troisième année d'informatique à la Haute École d'Informatique de Madagascar (HEI).",
      description: "Je suis passionné par la création d'applications évolutives et modernes qui résolvent des problèmes concrets. Mon objectif principal est le développement full-stack, les applications alimentées par l'IA et les plateformes SaaS. Je crois à l'importance de la qualité du code et des bonnes pratiques dans tous les projets. Je travaille avec des technologies modernes comme Next.js, React, Node.js et les intégrations d'IA pour construire des produits qui comptent. Que ce soit en concevant des interfaces utilisateur élégantes ou en architecturant des backends robustes, je suis engagé à fournir l'excellence dans chaque projet.",
    },

    skills: {
      title: "Compétences techniques",
      categories: {
        frontend: {
          title: "Frontend",
          items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Vite", "Tailwind CSS", "shadcn UI"],
        },
        backend: {
          title: "Backend",
          items: ["Node.js", "Express.js", "C#", "ASP.NET Core", "Java", "Spring Boot"],
        },
        databases: {
          title: "Bases de données",
          items: ["MongoDB", "PostgreSQL", "SQLite", "Entity Framework", "Prisma"],
        },
        tools: {
          title: "Outils & DevOps",
          items: ["Git", "GitHub", "VS Code", "Postman", "Docker"],
        },
      },
    },

    projects: [
      {
        id: "docchat",
        title: "DocChat",
        description: "Application full-stack de chat sur documents avec pipeline RAG pour l'analyse de PDF.",
        longDescription: "Les utilisateurs peuvent créer des projets, télécharger des fichiers PDF et poser des questions sur les documents indexés en utilisant un pipeline d'augmentation de récupération avec les intégrations OpenAI.",
        image: "/projects/docchat.png",
        technologies: ["Next.js 16", "React 19", "FastAPI", "PostgreSQL", "Pinecone", "OpenAI", "TanStack Query"],
        github: "https://github.com/Harentsoa2/docChat-project",
        liveDemo: "https://doc-chat-project-06.vercel.app",
        highlights: ["OCR PDF et extraction de tableaux", "Recherche vectorielle avec Pinecone", "Indexation de fichiers en temps réel"],
      },
      {
        id: "whopchat",
        title: "Plateforme Whop Chat",
        description: "Plateforme de messagerie en temps réel avec intégration d'assistant IA.",
        longDescription: "Messagerie full-stack en temps réel avec Socket.IO, authentification, partage d'images, réponses avec filetage et Google Generative AI.",
        image: "/projects/whop-chat.png",
        technologies: ["React 19", "Node.js", "Express", "MongoDB", "Socket.IO", "Google AI", "Cloudinary"],
        github: "https://github.com/Harentsoa2/chat-project",
        liveDemo: "https://chat-project-87h8.onrender.com",
        highlights: ["Chat en temps réel avec Socket.IO", "Assistant IA conversationnel", "Partage et stockage d'images"],
      },
      {
        id: "flowai",
        title: "flowAi",
        description: "Générateur d'applications web alimenté par l'IA - créez des applications Next.js à partir de descriptions textuelles.",
        longDescription: "Transformez les idées de produits en applications en direct dans un sandbox E2B isolé. Historique de conversation, aperçu en direct et génération de code avec travaux en arrière-plan.",
        image: "/projects/flowai.png",
        technologies: ["Next.js 15", "React 19", "tRPC", "Prisma", "PostgreSQL", "Clerk", "E2B", "Inngest", "OpenAI"],
        github: "https://github.com/Harentsoa2/flowAi-project",
        liveDemo: "https://flow-ai-project.vercel.app",
        highlights: ["Génération de code assistée par IA", "Sandboxes E2B isolés", "Aperçu en direct avec historique de conversation"],
      },
      {
        id: "tessa",
        title: "Tessa",
        description: "Plateforme SaaS collaborative de gestion de projets.",
        longDescription: "Gestion d'espace de travail d'équipe avec gestion des membres, projets, tâches et tableau de bord d'analyse. Frontend React + Vite avec backend Java Spring Boot.",
        image: "/projects/tessa.png",
        technologies: ["React 18", "Vite", "Java 17", "Spring Boot", "PostgreSQL", "TanStack Query", "Tailwind CSS"],
        liveDemo: "https://tessa-project-beta.vercel.app",
        highlights: ["Gestion des espaces de travail", "Collaboration d'équipe", "Tableau de bord d'analyse"],
      },
      {
        id: "owntalk",
        title: "ownTalkAI",
        description: "Espace de travail conversationnel vidéo assisté par IA avec sessions et agents.",
        longDescription: "Créez des agents IA personnalisés, lancez des sessions vidéo en direct, générez des résumés, parcourez les transcriptions. Construit avec Stream Video SDK et facturation premium avec Polar.",
        image: "/projects/owntalkAI.png",
        technologies: ["Next.js 15", "React 19", "Drizzle ORM", "Neon", "Stream Video", "Better Auth", "Inngest", "Polar"],
        github: "https://github.com/Harentsoa2/ownTalk-project",
        liveDemo: "https://own-talk-project.vercel.app",
        highlights: ["Sessions vidéo en direct", "Intégration d'agents IA", "Transcriptions et résumés de sessions"],
      },
      {
        id: "myai",
        title: "MyAI",
        description: "Compagnon IA premium avec personnages personnalisés et mémoire persistante.",
        longDescription: "Discutez avec des personnages IA personnalisés avec histoires de fond, messages de bienvenue et brise-glace. Mémoire consciente avec récupération sémantique et gestion des abonnements.",
        image: "/projects/myai.png",
        technologies: ["Next.js", "React", "Prisma", "Neon", "Clerk", "Stripe", "OpenRouter", "Pinecone", "Redis"],
        github: "https://github.com/Harentsoa2/MyAI-project",
        liveDemo: "https://my-ai-project-tau.vercel.app",
        highlights: ["Personnages IA personnalisés", "Mémoire persistante", "Gestion des abonnements"],
      },
      {
        id: "visotro",
        title: "Visotro",
        description: "SaaS IA full-stack avec chat, génération d'images et système de crédits.",
        longDescription: "SaaS moderne avec chat alimenté par Gemini, mode de génération d'images, accès basé sur les crédits et galerie communautaire. Inclut une page de destination réactive et une authentification.",
        image: "/projects/visotro.png",
        technologies: ["React 19", "Vite", "Express", "MongoDB", "Stripe", "Google Gemini", "ImageKit", "Tailwind CSS"],
        github: "https://github.com/Harentsoa2/visotro-project",
        liveDemo: "https://ai-chat-project-two.vercel.app",
        highlights: ["Chat Gemini AI", "Génération d'images", "Système de crédits avec Stripe"],
      },
    ],

    experience: [
      {
        title: "Développeur Full Stack",
        company: "Plateforme de gestion d'école Empiranatra",
        description: "Développement et implémentation de fonctionnalités full-stack pour le système de gestion scolaire, y compris l'interface utilisateur, la logique backend et la gestion de l'authentification.",
        skills: ["Développement full-stack", "Développement frontend", "Développement backend", "Implémentation UI", "Authentification", "Applications web"],
      },
      {
        title: "Développeur Frontend ",
        company: "Site Web du Garage AutoDKService",
        description: "Construction d'un site vitrine pour un garage automobile avec gestion du déploiement.",
        skills: ["Design réactif", "DevOps", "Déploiement web", "Implémentation UI"],
      },
    ],

    education: {
      title: "Formation",
      degree: "Troisième Année (L3)",
      school: "Haute École d'Informatique de Madagascar (HEI)",
      level: "Informatique",
      location: "Madagascar",
      focus: "Développement logiciel, développement web full-stack, systèmes backend, bases de données et architecture d'applications modernes.",
    },

    certifications: [
      {
        title: "Certificat Professionnel Développeur Backend Microsoft",
        platform: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/05BUH7FIQGQO",
      },
      {
        title: "Certificat Professionnel Développeur Frontend Meta",
        platform: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/specialization/certificate/P2EJ7EWZ7TKB",
      },
      {
        title: "Construire des agents intelligents avec DeepSeek et N8N",
        platform: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/certificate/6OE5TA6K3HCS",
      },
      {
        title: "Programmation avec JavaScript",
        platform: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/certificate/3NU8L08M00OV",
      },
      {
        title: "Bases de React",
        platform: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/certificate/L811S31E2WQQ",
      },
      {
        title: "Le cours complet des API OpenAI JS",
        platform: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/certificate/U4DZW5XO4FGY",
      },
    ],

    services: {
      title: "Services",
      items: [
        "Construction de sites web modernes",
        "Création d'interfaces frontend réactives",
        "Développement d'applications web full-stack",
        "Construction d'API REST",
        "Création d'applications alimentées par l'IA",
        "Intégration de systèmes d'authentification",
        "Travail avec les bases de données",
        "Déploiement d'applications web",
        "Création de plateformes de style SaaS",
      ],
    },

    contact: {
      title: "Me contacter",
      description: "Vous avez un projet en tête ? Travaillons ensemble.",
      email: "hei.harentsoa@gmail.com",
      github: "https://github.com/Harentsoa2",
      linkedin: "#",
      social: [
        { name: "GitHub", url: "https://github.com/Harentsoa2", icon: "github" },
      ],
    },
  },
};
