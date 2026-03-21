export const translations = {
  en: {
    profile: {
      name: 'Eduardo Castillo',
      title: 'Electronics Technician',
      birthday: '28 years',
      location: 'Caracas, Venezuela',
      labels: {
        email: 'Email',
        birthday: 'Age',
        location: 'Location',
      },
    },
    nav: {
      about: 'About',
      resume: 'Resume',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Contact',
    },
    about: {
      title: 'About Me',
      description: [
        "I'm Eduardo Castillo, an Electronics Technician with a focus on electronic repair and technical analysis. I have excellent problem-solving skills and the ability to perform well in a team environment.",
        "My background includes extensive experience in point-of-sale (POS) systems, mining equipment maintenance, and industrial electrical technology. I'm also expanding my skills into Data Analysis and Full-Stack Development, bringing a technical and analytical approach to every project.",
      ],
      servicesTitle: "What I'm Doing",
      services: [
        {
          title: 'Electronic Systems Repair',
          description: 'Expertise in diagnosing and repairing POS systems and complex electronic equipment.',
        },
        {
          title: 'Technical Analysis',
          description: 'Analytical approach to operational processes and hardware configuration.',
        },
        {
          title: 'Hardware Maintenance',
          description: 'Preventive and corrective maintenance for industrial and digital mining machinery.',
        },
        {
          title: 'Electrical Technology',
          description: 'Installation and maintenance of electrical systems, refrigeration, and air conditioning.',
        },
      ],
    },
    resume: {
      title: 'Resume',
      educationLabel: 'Education',
      experienceLabel: 'Experience',
      skillsLabel: 'My Skills',
    },
    portfolio: {
      title: 'Portfolio',
      categoriesTrans: {
        all: 'All',
        'web design': 'Web Design',
        applications: 'Applications',
        'web development': 'Web Development',
      },
    },
    blog: {
      title: 'Blog',
    },
    contact: {
      title: 'Contact',
      labels: {
        name: 'Full Name',
        email: 'Email Address',
        message: 'Your Message',
        send: 'Send Message',
      },
      placeholders: {
        name: 'Eduardo Castillo',
        email: 'edcastilloblanco@gmail.com',
        message: 'Write your message here...',
      },
    },
  },
  es: {
    profile: {
      name: 'Eduardo Castillo',
      title: 'Técnico en Electrónica',
      birthday: '28 años',
      location: 'Caracas, Venezuela',
      labels: {
        email: 'Correo',
        birthday: 'Edad',
        location: 'Ubicación',
      },
    },
    nav: {
      about: 'Sobre mí',
      resume: 'Currículum',
      portfolio: 'Portafolio',
      blog: 'Blog',
      contact: 'Contacto',
    },
    about: {
      title: 'Sobre mí',
      description: [
        "Soy Eduardo Castillo, un Técnico en Electrónica con enfoque en reparación electrónica y análisis técnico. Poseo excelentes habilidades para la resolución de problemas y capacidad para desempeñarme en equipo.",
        "Mi trayectoria incluye experiencia extensiva en sistemas de puntos de venta (POS), mantenimiento de equipos de minería y tecnología eléctrica industrial. También estoy expandiendo mis habilidades hacia el Análisis de Datos y el Desarrollo Full-Stack, aportando un enfoque técnico y analítico a cada proyecto.",
      ],
      servicesTitle: 'Lo que hago',
      services: [
        {
          title: 'Reparación de Sistemas Electrónicos',
          description: 'Experiencia en diagnóstico y reparación de sistemas POS y equipos electrónicos complejos.',
        },
        {
          title: 'Análisis Técnico',
          description: 'Enfoque analítico para procesos operativos y configuración de hardware.',
        },
        {
          title: 'Mantenimiento de Hardware',
          description: 'Mantenimiento preventivo y correctivo para maquinaria industrial y de minería digital.',
        },
        {
          title: 'Tecnología Eléctrica',
          description: 'Instalación y mantenimiento de sistemas eléctricos, refrigeración y aire acondicionado.',
        },
      ],
    },
    resume: {
      title: 'Currículum',
      educationLabel: 'Educación',
      experienceLabel: 'Experiencia',
      skillsLabel: 'Mis Habilidades',
    },
    portfolio: {
      title: 'Portafolio',
      categoriesTrans: {
        all: 'Todos',
        'web design': 'Diseño Web',
        applications: 'Aplicaciones',
        'web development': 'Desarrollo Web',
      },
    },
    blog: {
      title: 'Blog',
    },
    contact: {
      title: 'Contacto',
      labels: {
        name: 'Nombre completo',
        email: 'Correo electrónico',
        message: 'Tu mensaje',
        send: 'Enviar mensaje',
      },
      placeholders: {
        name: 'Eduardo Castillo',
        email: 'edcastilloblanco@gmail.com',
        message: 'Escribe tu mensaje aquí...',
      },
    },
  },
}

export const profileData = {
  name: 'Eduardo Castillo',
  title: 'Electronics Technician',
  avatar: '/eduardo-photo.png',
  email: 'edcastilloblanco@gmail.com',
  birthday: '28 years',
  location: 'Caracas, Venezuela',
  social: {
    github: 'https://github.com/EDYCB2024',
    linkedin: 'https://linkedin.com/in/eduardo-castillo',
  },
}

export const aboutData = {
  services: [
    {
      icon: 'Zap',
      title: 'Electronic Systems Repair',
      description: 'Expertise in diagnosing and repairing POS systems and complex electronic equipment.',
    },
    {
      icon: 'Code',
      title: 'Technical Analysis',
      description: 'Analytical approach to operational processes and hardware configuration.',
    },
    {
      icon: 'Smartphone',
      title: 'Hardware Maintenance',
      description: 'Preventive and corrective maintenance for industrial and digital mining machinery.',
    },
    {
      icon: 'PenTool',
      title: 'Electrical Technology',
      description: 'Installation and maintenance of electrical systems, refrigeration, and air conditioning.',
    },
  ],
  testimonials: [
    {
      avatar: '/professional-man.jpg',
      name: 'VA & Technology',
      text: 'Eduardo is a highly skilled technician who solved our POS issues efficiently.',
    },
    {
      avatar: '/professional-woman-diverse.png',
      name: 'Ubiipagos',
      text: 'Great team player with excellent technical knowledge.',
    },
  ],
  clients: [
    { name: 'VA & Technology', logo: '/client-logo-1.png' },
    { name: 'Ubiipagos', logo: '/client-logo-2.png' },
    { name: 'Cryptonica', logo: '/client-logo-3.png' },
    { name: 'Inces', logo: '/client-logo-4.png' },
  ],
}

export const resumeData = {
  education: [
    {
      title: 'Instituto Nacional de Capacitación y Educación Socialista (INCES)',
      period: '2015 — 2016',
      description: 'Maintenance Electrician Certification.',
    },
    {
      title: 'U.E Colegio Jardin Franciscano',
      period: '2010 — 2015',
      description: 'High School Diploma.',
    },
  ],
  experience: [
    {
      title: 'Technical Service Analyst - VA & Technology',
      period: 'Dec 2023 — Present',
      description: 'Responsible for the repair and maintenance of point-of-sale (POS) systems.',
    },
    {
      title: 'Mining Equipment Repair Technician - Cryptonica',
      period: 'Apr 2021 — May 2022',
      description: 'Repair, installation, and maintenance of digital mining equipment.',
    },
    {
      title: 'Operation Analyst - Ubiipagos',
      period: 'Jul 2019 — Apr 2021',
      description: 'Diagnosis and configuration of points of sale, ensuring operational efficiency.',
    },
    {
      title: 'Point of Sale (POS) Technician - RPG Soluciones',
      period: 'Feb 2019 — Jun 2019',
      description: 'Specialized in the repair and servicing of various POS terminals.',
    },
    {
      title: 'Maintenance Electrician - Escuela Campo Alegre',
      period: 'Sep 2016 — Dec 2018',
      description: 'Assistant in electrical systems, refrigeration, and air conditioning maintenance.',
    },
  ],
  skills: [
    { name: 'POS Systems Repair', level: 95 },
    { name: 'Electronics & Hardware', level: 90 },
    { name: 'Electrical Technology', level: 85 },
    { name: 'Data Analysis', level: 75 },
    { name: 'English (C2)', level: 100 },
  ],
}

export const portfolioData = {
  categories: ['all', 'electronics', 'maintenance', 'analysis'],
  projects: [
    {
      title: 'POS Diagnostic System',
      category: 'analysis',
      image: '/modern-ecommerce-website.png',
      description: 'Implementation of a specialized diagnostic system for POS terminal maintenance.',
      tech: ['Hardware', 'Analysis', 'Systems'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/EDYCB2024/pos-diagnostic',
    },
    {
      title: 'Mining Rig Optimization',
      category: 'maintenance',
      image: '/task-management-interface.png',
      description: 'Preventive maintenance plan for a digital mining equipment fleet.',
      tech: ['Electronics', 'Maintenance', 'Planning'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/EDYCB2024/mining-ops',
    },
  ],
}

export const blogData = {
  posts: [
    {
      title: 'Building Modern Web Applications with Next.js 15',
      category: 'Development',
      date: 'Mar 15, 2024',
      readTime: '8 min',
      image: '/web-development-coding.png',
      excerpt: 'Deep dive into Next.js 15 features and App Router enhancements.',
      tags: ['Next.js', 'React', 'Web Development'],
      slug: 'building-modern-web-apps-nextjs-15',
    },
    {
      title: 'Microservices Architecture: A Complete Guide',
      category: 'Architecture',
      date: 'Mar 8, 2024',
      readTime: '12 min',
      image: '/software-architecture.jpg',
      excerpt: 'Design scalable microservices with real-world examples.',
      tags: ['Architecture', 'Backend', 'DevOps'],
      slug: 'microservices-architecture-guide',
    },
    {
      title: 'The Art of UI/UX: Creating Delightful Experiences',
      category: 'Design',
      date: 'Feb 28, 2024',
      readTime: '6 min',
      image: '/ui-ux-design-concept.png',
      excerpt: 'Principles of exceptional UI/UX design for interfaces users love.',
      tags: ['Design', 'UI/UX', 'Frontend'],
      slug: 'art-of-uiux-delightful-experiences',
    },
    {
      title: 'TypeScript Best Practices for Large-Scale Applications',
      category: 'Development',
      date: 'Feb 20, 2024',
      readTime: '10 min',
      image: '/web-development-coding.png',
      excerpt: 'Master TypeScript patterns for maintainable, type-safe code.',
      tags: ['TypeScript', 'JavaScript', 'Best Practices'],
      slug: 'typescript-best-practices',
    },
    {
      title: 'Building Real-Time Applications with WebSockets',
      category: 'Development',
      date: 'Feb 12, 2024',
      readTime: '9 min',
      image: '/software-architecture.jpg',
      excerpt: 'Implement real-time features using WebSockets and modern frameworks.',
      tags: ['WebSockets', 'Real-time', 'Backend'],
      slug: 'realtime-apps-websockets',
    },
    {
      title: 'Mastering CSS Grid and Flexbox Layouts',
      category: 'Design',
      date: 'Feb 5, 2024',
      readTime: '7 min',
      image: '/ui-ux-design-concept.png',
      excerpt: 'Modern CSS layout techniques with practical examples.',
      tags: ['CSS', 'Layout', 'Frontend'],
      slug: 'mastering-css-grid-flexbox',
    },
  ],
}

export const contactData = {
  email: 'edcastilloblanco@gmail.com',
  location: 'Caracas, Venezuela',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14220298434!2d-122.50764017406082!3d37.75767381338211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
}
