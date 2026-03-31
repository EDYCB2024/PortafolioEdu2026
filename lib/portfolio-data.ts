import {
  User,
  MapPin,
  Calendar,
  Mail,
  Github,
  Linkedin,
  Zap,
  Code,
  Smartphone,
  PenTool,
  Activity
} from 'lucide-react'

export const translations = {
  en: {
    profile: {
      title: 'Electronics Technician & Full-Stack Developer',
      location: 'Caracas, Venezuela',
      ageLabel: 'Age',
    },
    nav: {
      about: 'About',
      resume: 'Resume',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    about: {
      title: 'About Me',
      description: [
        "I am Eduardo Castillo, an Electronics Technician with a focus on electronic repair and technical analysis. I possess excellent problem-solving skills and the ability to perform well in a team environment.",
        "My background includes extensive experience in point-of-sale (POS) systems, mining equipment maintenance, and industrial electrical technology. I am also expanding my skills into Data Analysis and Full-Stack Development, bringing a technical and analytical approach to every project.",
      ],
      servicesTitle: "What I'm Doing",
      services: [
        {
          title: 'Data Analysis',
          description: 'Transforming complex data into actionable insights for strategic decision making.',
        },
        {
          title: 'Full-Stack Development',
          description: 'Building robust, scalable web applications from end-to-end using modern technologies.',
        },
        {
          title: 'PCB & Electronics Repair',
          description: 'Expertise in component-level diagnosis and advanced repair of electronic boards.',
        },
        {
          title: 'Process Automation',
          description: 'Optimizing workflows and organizational efficiency through digital tools and scripts.',
        },
      ],
      experienciaTitle: "Work Experience",
      experiencia: [
        {
          avatar: '/vatech_logo.png',
          name: 'VA & Technology',
          role: 'Technical Service Analyst',
          text: 'Specialized in the diagnosis, repair, and preventive maintenance of a wide range of point-of-sale (POS) systems and electronic hardware.'
        },
        {
          avatar: '/ubii_logo.png',
          name: 'Ubiipagos',
          role: 'Operation Analyst',
          text: 'Responsible for the diagnosis, configuration, and operational optimization of electronic payment terminals to ensure service continuity.'
        },
        {
          avatar: '/cryptonica_logo.png',
          name: 'Cryptonica',
          role: 'Mining Equipment Repair Technician',
          text: 'Component-level repair, installation, and technical maintenance of digital mining hardware and power systems.'
        },
        {
          avatar: '/rpg_logo.png',
          name: 'RPG Soluciones',
          role: 'Point of Sale (POS) Technician',
          text: 'Specialized technical service in the physical repair and logical configuration of various POS terminal models for commercial clients.'
        },
      ],
      clientsTitle: "Projects",
    },
    resume: {
      title: 'Resume',
      educationLabel: 'Education',
      education: [
        { title: 'National Institute of Socialist Training and Education (INCES)', description: 'Maintenance Electrician Certification.' },
        { title: 'U.E Colegio Jardin Franciscano', description: 'High School Diploma.' },
      ],
      experienceLabel: 'Experience',
      experience: [
        { title: 'Technical Service Analyst - VA & Technology', description: 'Responsible for the repair and maintenance of point-of-sale (POS) systems.' },
        { title: 'Mining Equipment Repair Technician - Cryptonica', description: 'Repair, installation, and maintenance of digital mining equipment.' },
        { title: 'Operation Analyst - Ubiipagos', description: 'Diagnosis and configuration of points of sale, ensuring operational efficiency.' },
        { title: 'Point of Sale (POS) Technician - RPG Soluciones', description: 'Specialized in the repair and servicing of various POS terminals.' },
        { title: 'Maintenance Electrician - Escuela Campo Alegre', description: 'Assistant in electrical systems, refrigeration, and air conditioning maintenance.' },
      ],
      skillsLabel: 'My Skills',
      skills: [
        {
          category: 'Technical & Electronics',
          items: ['PCB & Electronic Board Repair', 'Industrial Electrical Technology'],
        },
        {
          category: 'Development & AI',
          items: ['Next.js', 'React', 'LangChain', 'TypeScript', 'Tailwind CSS'],
        },
        {
          category: 'Analysis & Tools',
          items: ['Data Analysis', 'SQL & PostgreSQL', 'Git & GitHub', 'Technical Documentation'],
        },
        {
          category: 'Languages',
          items: ['English (C2 Professional)', 'Spanish (Native)'],
        },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      categoriesTrans: {
        all: 'All',
        'web development': 'Web Development',
      },
      previewLabel: 'More info',
      visitLabel: 'Visit',
      descriptionTitle: 'Description',
      techTitle: 'Technologies Used',
      projects: [
        { title: 'AI Virtual Assistant', description: 'An advanced AI virtual assistant capable of natural language processing, answering complex queries, and task automation with a friendly personality.' },
        { title: 'Pos manager', description: 'Comprehensive Point of Sale management system for businesses, featuring inventory tracking and sales reports.' },
        { title: 'Maravilla Peluches', description: 'Online store for high-quality plush toys with a friendly interface and secure checkout.' },
        { title: 'Currency Monitor & Dashboard', description: 'A high-end financial dashboard that tracks the Venezuelan Bolívar across multiple exchange rates (BCV, Paralelo, Binance P2P) with real-time updates and arbitrage analysis.' },
      ],
    },
    contact: {
      title: 'Contact',
      labels: {
        name: 'Full Name',
        email: 'Email address',
        message: 'Your message',
        send: 'Send message',
      },
      placeholders: {
        name: 'Your Name',
        email: 'your.email@example.com',
        message: 'Type your message here...',
      },
      sendingLabel: 'Sending...',
      successLabel: 'Message Sent!',
      errorLabel: 'Error!',
      successMessage: 'Thank you for your message. I will get back to you soon.',
      errorMessage: 'There was a problem. Please try again.',
    },
  },
  es: {
    profile: {
      title: 'Técnico en Electrónica y Desarrollador Full Stack',
      location: 'Caracas, Venezuela',
      ageLabel: 'Edad',
    },
    nav: {
      about: 'Sobre mí',
      resume: 'Currículum',
      portfolio: 'Portafolio',
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
          title: 'Análisis de Datos',
          description: 'Transformación de datos complejos en información valiosa para la toma de decisiones.',
        },
        {
          title: 'Desarrollo Front y Back',
          description: 'Creación de aplicaciones web robustas y escalables de extremo a extremo.',
        },
        {
          title: 'Reparación de Tarjetas Electrónicas',
          description: 'Diagnóstico a nivel de componentes y reparación de tarjetas electrónicas.',
        },
        {
          title: 'Automatización de Procesos',
          description: 'Optimización de flujos de trabajo mediante herramientas digitales y scripts.',
        },
      ],
      experienciaTitle: "Experiencia Laboral",
      experiencia: [
        {
          avatar: '/vatech_logo.png',
          name: 'VA & Technology',
          role: 'Analista de Servicio Técnico',
          text: 'Especialista en diagnóstico, reparación y mantenimiento preventivo de una amplia gama de sistemas de puntos de venta (POS) y hardware electrónico.'
        },
        {
          avatar: '/ubii_logo.png',
          name: 'Ubiipagos',
          role: 'Analista de Operaciones',
          text: 'Encargado del diagnóstico, configuración y optimización operativa de terminales de pago electrónicos para garantizar la continuidad del servicio.'
        },
        {
          avatar: '/cryptonica_logo.png',
          name: 'Cryptonica',
          role: 'Técnico en Reparación de Equipos de Minería',
          text: 'Reparación a nivel de componentes, instalación y mantenimiento técnico de hardware de minería digital y sistemas de potencia.'
        },
        {
          avatar: '/rpg_logo.png',
          name: 'RPG Soluciones',
          role: 'Técnico de Puntos de Venta (POS)',
          text: 'Servicio técnico especializado en la reparación física y configuración lógica de diversos modelos de terminales POS para clientes comerciales.'
        },
      ],
      clientsTitle: "Proyectos",
    },
    resume: {
      title: 'Currículum',
      educationLabel: 'Educación',
      education: [
        { title: 'Instituto Nacional de Capacitación y Educación Socialista (INCES)', description: 'Certificación de Electricista de Mantenimiento.' },
        { title: 'U.E Colegio Jardin Franciscano', description: 'Título de Bachiller.' },
      ],
      experienceLabel: 'Experiencia laboral',
      experience: [
        { title: 'Analista de Servicio Técnico - VA & Technology', description: 'Responsable de la reparación y mantenimiento de sistemas de puntos de venta (POS).' },
        { title: 'Técnico de Reparación de Equipos de Minería - Cryptonica', description: 'Reparación, instalación y mantenimiento de equipos de minería digital.' },
        { title: 'Analista de Operaciones - Ubiipagos', description: 'Diagnóstico y configuración de puntos de venta, asegurando la eficiencia operativa.' },
        { title: 'Técnico de Puntos de Venta (POS) - RPG Soluciones', description: 'Especializado en la reparación y servicio de diversos terminales POS.' },
        { title: 'Electricista de Mantenimiento - Escuela Campo Alegre', description: 'Asistente en mantenimiento de sistemas eléctricos, refrigeración y aire acondicionado.' },
      ],
      skillsLabel: 'Mis Habilidades',
      skills: [
        {
          category: 'Técnica & Electrónica',
          items: ['Reparación de tarjetas electrónicas', 'Tecnología Eléctrica Industrial'],
        },
        {
          category: 'Desarrollo & IA',
          items: ['Next.js', 'React', 'LangChain', 'TypeScript', 'Tailwind CSS'],
        },
        {
          category: 'Análisis & Herramientas',
          items: ['Análisis de Datos', 'SQL & PostgreSQL', 'Git & GitHub', 'Documentación Técnica'],
        },
        {
          category: 'Idiomas',
          items: ['Inglés (C2 Profesional)', 'Español (Nativo)'],
        },
      ],
    },
    portfolio: {
      title: 'Proyectos',
      categoriesTrans: {
        all: 'Todos',
        'web development': 'Desarrollo Web',
      },
      previewLabel: 'Más información',
      visitLabel: 'Visitar',
      descriptionTitle: 'Descripción',
      techTitle: 'Tecnologías Usadas',
      projects: [
        { title: 'Asistente Virtual IA', description: 'Un asistente virtual de IA avanzado capaz de procesar lenguaje natural, responder consultas complejas y automatizar tareas con una personalidad amigable.' },
        { title: 'Pos manager', description: 'Sistema integral de gestión de puntos de venta para empresas, con seguimiento de inventario y reportes de ventas.' },
        { title: 'Maravilla Peluches', description: 'Tienda en línea de peluches de alta calidad con una interfaz amigable y pago seguro.' },
        { title: 'Monitor de Divisas & Calculadora', description: 'Tablero financiero de alta gama para el seguimiento del valor del Bolívar frente a diversas divisas en tiempo real, con análisis de brecha cambiaria.' },
      ],
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
        name: 'Tu Nombre',
        email: 'tu.correo@ejemplo.com',
        message: 'Escribe tu mensaje aquí...',
      },
      sendingLabel: 'Enviando...',
      successLabel: '¡Mensaje Enviado!',
      errorLabel: '¡Error!',
      successMessage: 'Gracias por tu mensaje. Te responderé pronto.',
      errorMessage: 'Hubo un problema. Por favor intenta de nuevo.',
    },
  },
}

export const profileData = {
  name: 'Eduardo Castillo',
  title: 'Técnico en Electrónica y Desarrollador Full Stack',
  avatar: '/eduardo-photo.png',
  email: 'edcastilloblanco@gmail.com',
  age: '28 years',
  location: 'Caracas, Venezuela',
  social: {
    github: 'https://github.com/EDYCB2024',
    linkedin: 'https://linkedin.com/in/eduardo-castillo',
  },
}

export const aboutData = {
  services: [
    {
      icon: 'Activity',
      title: 'Análisis de Datos',
    },
    {
      icon: 'Code',
      title: 'Desarrollo Front y Back',
    },
    {
      icon: 'Smartphone',
      title: 'Reparación de Tarjetas Electrónicas',
    },
    {
      icon: 'Zap',
      title: 'Automatización de Procesos',
    },
  ],
  experiencia: [
    {
      avatar: '/vatech_logo.png',
      name: 'VA & Technology',
      role: 'Technical Service Analyst',
      text: 'Specialized in the diagnosis, repair, and preventive maintenance of a wide range of point-of-sale (POS) systems and electronic hardware.',
    },
    {
      avatar: '/ubii_logo.png',
      name: 'Ubiipagos',
      role: 'Operation Analyst',
      text: 'Responsible for the diagnosis, configuration, and operational optimization of electronic payment terminals to ensure service continuity.',
    },
    {
      avatar: '/cryptonica_logo.png',
      name: 'Cryptonica',
      role: 'Mining Equipment Repair Technician',
      text: 'Component-level repair, installation, and technical maintenance of digital mining hardware and power systems.',
    },
    {
      avatar: '/rpg_logo.png',
      name: 'RPG Soluciones',
      role: 'Point of Sale (POS) Technician',
      text: 'Specialized technical service in the physical repair and logical configuration of various POS terminal models for commercial clients.',
    },
  ],
  clients: [
    { name: 'VA & Technology', logo: '/vatech_logo.png' },
    { name: 'Ubiipagos', logo: '/ubii_logo.png' },
    { name: 'Cryptonica', logo: '/cryptonica_logo.png' },
    { name: 'Inces', logo: '/client-logo-4.png' },
    { name: 'RPG Soluciones', logo: '/rpg_logo.png' },
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
    {
      category: 'Technical & Electronics',
      items: ['PCB & Electronic Board Repair', 'Industrial Electrical Technology'],
    },
    {
      category: 'Development & AI',
      items: ['Next.js', 'React', 'LangChain', 'TypeScript', 'Tailwind CSS'],
    },
    {
      category: 'Analysis & Tools',
      items: ['Data Analysis', 'SQL & PostgreSQL', 'Git & GitHub', 'Technical Documentation'],
    },
    {
      category: 'Languages',
      items: ['English (C2 Professional)', 'Spanish (Native)'],
    },
  ],
}

export const portfolioData = {
  categories: ['all', 'web development'],
  projects: [
    {
      title: 'AI Virtual Assistant',
      category: 'web development',
      image: '/ai_assistant.png',
      description: 'An advanced AI virtual assistant capable of natural language processing, answering complex queries, and task automation with a friendly personality.',
      tech: ['Next.js', 'LangChain', 'OpenAI', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://github.com/EDYCB2024/ai-assistant',
      githubUrl: 'https://github.com/EDYCB2024/ai-assistant',
    },
    {
      title: 'Pos manager 2026',
      category: 'web development',
      image: '/pos_manager_real.png',
      description: 'Comprehensive Point of Sale management system for businesses, featuring inventory tracking and sales reports.',
      tech: ['Next.js', 'Tailwind CSS', 'Supabase', 'SQL & PostgreSQL'],
      liveUrl: 'https://posmanager2026.vercel.app/login',
      githubUrl: 'https://github.com/EDYCB2024/pos-manager1234',
    },
    {
      title: 'Maravilla Peluches',
      category: 'web development',
      image: '/maravilla_peluches.png',
      description: 'Online store for high-quality plush toys with a friendly interface and secure checkout.',
      tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://maravilla-peluches-v2.vercel.app/',
      githubUrl: 'https://github.com/EDYCB2024/maravilla-peluches',
    },
    {
      title: 'Monitor de Divisas & Calculadora',
      category: 'web development',
      image: '/calculadora_divisas.png',
      description: 'Calculadora en tiempo real para el valor del Bolívar frente a diferentes divisas, con múltiples tasas de referencia y soporte para Cashea.',
      tech: ['Next.js', 'Tailwind CSS', 'Material Symbols', 'Vercel'],
      liveUrl: 'https://calculadora-de-diferencias.vercel.app/',
      githubUrl: 'https://github.com/EDYCB2024/CALCULADORA-DE-DIFERENCIAS',
    },
  ],
}

export const contactData = {
  email: 'edcastilloblanco@gmail.com',
  location: 'Caracas, Venezuela',
  formId: 'xpwajolv',
}
