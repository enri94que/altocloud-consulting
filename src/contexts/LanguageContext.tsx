import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.solutions": "Soluciones",
    "nav.licenses": "Licencias",
    "nav.contact": "Contacto",
    "nav.requestDemo": "Solicitar Demo",
    "nav.prices": "Precios",
    "nav.login": "Acceder",

    // Hero Section
    "hero.badge": "Consultor Certificado Salesforce",
    "hero.title": "Transforma tu empresa con el poder de",
    "hero.description": "Consultor Salesforce España especializado en implementación CRM profesional. Impulsa tus ventas, mejora tu atención al cliente y optimiza tus procesos con automatización de ventas Salesforce.",
    "hero.cta": "Contactar",
    "hero.intro": "Soy",
    "hero.name": "Enrique",
    "hero.subtitle": "experto en soluciones empresariales Salesforce",
    "hero.certified": "✓ Consultor Certificado",
    "hero.experience": "✓ +5 años de experiencia",
    "hero.projects": "✓ Proyectos exitosos",

    // Services Grid
    "services.label": "Nuestros Servicios",
    "services.title": "Soluciones Salesforce a tu medida",
    "services.salesCloud.description": "Acelera tus ventas con automatización inteligente y gestión completa del ciclo de ventas.",
    "services.salesCloud.link": "Implementar Sales Cloud",
    "services.serviceCloud.description": "Ofrece un servicio al cliente excepcional con herramientas omnicanal y atención personalizada.",
    "services.serviceCloud.link": "Descubrir Service Cloud",
    "services.nonprofitCloud.description": "Gestiona donantes, voluntarios y programas con soluciones diseñadas para ONGs.",
    "services.nonprofitCloud.link": "Explorar Nonprofit Cloud",
    "services.starterSuite.description": "La solución perfecta para pequeñas empresas que quieren empezar con Salesforce.",
    "services.starterSuite.link": "Ver Starter Suite",

    // Why Salesforce
    "why.label": "¿Por qué Salesforce?",
    "why.title": "El CRM #1 del mundo por una razón",
    "why.description": "Salesforce no es solo un CRM, es la plataforma líder en automatización de ventas Salesforce y gestión de clientes empresarial. Con más de 150.000 empresas confiando en Salesforce, es la elección preferida para la transformación digital España. Como consultor Salesforce España, te ayudo con la implementación CRM profesional que tu negocio necesita.",
    "why.companies": "Empresas",
    "why.globalCRM": "CRM Global",
    "why.cloud": "100% en la nube",
    "why.cloud.desc": "Accede a tus datos desde cualquier lugar y dispositivo.",
    "why.security": "Seguridad empresarial",
    "why.security.desc": "Cumplimiento normativo y protección de datos de primer nivel.",
    "why.analytics": "Análisis avanzado",
    "why.analytics.desc": "Dashboards e informes en tiempo real para tomar mejores decisiones.",
    "why.vision": "Visión 360° del cliente",
    "why.vision.desc": "Unifica toda la información de tus clientes en un solo lugar.",
    "why.ai": "IA integrada",
    "why.ai.desc": "Aprovecha Einstein AI para predicciones y automatizaciones inteligentes.",
    "why.scalability": "Escalabilidad",
    "why.scalability.desc": "Crece sin límites. Salesforce se adapta a empresas de cualquier tamaño.",

    // Contact Strip
    "contactStrip.title": "¿Listo para transformar tu negocio?",
    "contactStrip.description": "Agenda una consulta Salesforce gratuita y descubre cómo la implementación CRM profesional puede impulsar tu empresa.",
    "contactStrip.cta": "Contactar ahora",

     // Licenses Banner
     "licensesBanner.title": "¿Quieres saber cuánto cuestan las licencias de Salesforce?",
     "licensesBanner.description": "Consulta los precios oficiales de las diferentes ediciones.",
     "licensesBanner.cta": "Ver precios de licencias",

    // Footer
    "footer.description": "Consultores especializados en Salesforce. Ayudamos a empresas a transformar sus procesos de negocio con las mejores soluciones CRM del mercado.",
    "footer.services": "Servicios",
    "footer.contact": "Contacto",
    "footer.location": "España",
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",

    // Contact Page
    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes preguntas sobre nuestros servicios? Estamos aquí para ayudarte.",
    "contact.info.title": "Información de contacto",
    "contact.info.email": "Email",
    "contact.info.phone": "Teléfono",
    "contact.info.location": "Ubicación",
    "contact.form.title": "Envíanos un mensaje",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.phone": "Teléfono",
    "contact.form.company": "Empresa",
    "contact.form.message": "Mensaje",
    "contact.form.messagePlaceholder": "Cuéntanos sobre tu proyecto...",
    "contact.form.privacy": "He leído y acepto la",
    "contact.form.privacyLink": "Política de Privacidad",
    "contact.form.submit": "Enviar mensaje",
    "contact.form.sending": "Enviando...",

    // Pricing Page
    "pricing.badge": "Precios oficiales Salesforce 2025",
    "pricing.title": "Precios de Licencias",
    "pricing.subtitle": "Conoce los precios oficiales de las licencias de Salesforce para los servicios que implanto. Como consultor certificado, te ayudo a elegir la mejor opción para tu negocio.",
    "pricing.starterTab": "Starter & Pro",
    "pricing.salesTab": "Sales Cloud",
    "pricing.serviceTab": "Service Cloud",
    "pricing.nonprofitTab": "Nonprofit",
    "pricing.starterTitle": "Starter & Pro Suite",
    "pricing.starterSubtitle": "Soluciones todo en uno perfectas para pymes",
    "pricing.salesTitle": "Sales Cloud",
    "pricing.salesSubtitle": "Potencia tu equipo de ventas con el CRM #1 del mundo",
    "pricing.serviceTitle": "Service Cloud",
    "pricing.serviceSubtitle": "Ofrece un servicio al cliente excepcional en todos los canales",
    "pricing.nonprofitTitle": "Nonprofit Cloud",
    "pricing.nonprofitSubtitle": "CRM diseñado específicamente para organizaciones sin ánimo de lucro",
    "pricing.requestInfo": "Solicitar información",
    "pricing.disclaimer.title": "Información importante sobre precios",
    "pricing.disclaimer.1": "Los precios mostrados son los precios de lista de Salesforce y pueden variar.",
    "pricing.disclaimer.2": "Todos los precios están en euros y no incluyen IVA.",
    "pricing.disclaimer.3": "La facturación es anual salvo que se indique lo contrario.",
    "pricing.disclaimer.4": "Consulta los precios actualizados en",
    "pricing.cta.title": "¿No sabes qué edición elegir?",
    "pricing.cta.subtitle": "Como consultor certificado de Salesforce, te ayudo a elegir la licencia que mejor se adapte a las necesidades de tu negocio y presupuesto.",
    "pricing.cta.button": "Solicitar asesoramiento gratuito",
    "pricing.nonprofit.note": "Las organizaciones sin ánimo de lucro pueden acceder a 10 licencias gratuitas a través del programa Power of Us de Salesforce.org",
    "pricing.perUser": "/usuario/mes",
    "pricing.annualBilling": "Facturación anual",
    "pricing.monthlyAnnual": "Facturación mensual o anual",
    "pricing.idealStart": "Ideal para empezar",
    "pricing.mostPopular": "Más popular",
    "pricing.forGrowth": "Para empresas en crecimiento",
    "pricing.maxPower": "Máxima potencia",
    "pricing.startFree": "Empezar gratis",
    "pricing.toGrow": "Para crecer",
    "pricing.maxUsers": "Máximo 2 usuarios",

    // Service Pages Common
    "service.mainBenefits": "Principales beneficios",
    "service.contact": "Contactar",
    "service.requestDemo": "Solicitar Demo Gratuita",

    // Sales Cloud
    "salesCloud.title": "Sales Cloud",
    "salesCloud.description": "Acelera tus ventas con la plataforma CRM #1 del mundo. Sales Cloud te ayuda a gestionar leads, cerrar más negocios y hacer crecer tus ingresos.",
    "salesCloud.benefit1.title": "Gestión de leads y oportunidades",
    "salesCloud.benefit1.desc": "Captura, califica y convierte leads en clientes con un pipeline visual y automatizado.",
    "salesCloud.benefit2.title": "Previsiones de ventas precisas",
    "salesCloud.benefit2.desc": "Obtén proyecciones de ingresos fiables basadas en datos reales de tu equipo.",
    "salesCloud.benefit3.title": "Colaboración en tiempo real",
    "salesCloud.benefit3.desc": "Mantén a todo el equipo de ventas alineado con actualizaciones instantáneas.",
    "salesCloud.benefit4.title": "Automatización inteligente",
    "salesCloud.benefit4.desc": "Automatiza tareas repetitivas y enfócate en lo que importa: cerrar ventas.",
    "salesCloud.features.title": "Todo lo que necesitas para vender más",
    "salesCloud.features.desc": "Sales Cloud ofrece un conjunto completo de herramientas diseñadas para ayudar a tu equipo de ventas a ser más productivo y cerrar más negocios.",
    "salesCloud.feature1": "Gestión completa del ciclo de ventas",
    "salesCloud.feature2": "Integración con email y calendario",
    "salesCloud.feature3": "App móvil para ventas sobre la marcha",
    "salesCloud.feature4": "Informes y dashboards personalizables",
    "salesCloud.feature5": "IA Einstein para predicciones de ventas",
    "salesCloud.feature6": "Integración con herramientas de marketing",
    "salesCloud.ideal.title": "¿Es Sales Cloud para ti?",
    "salesCloud.ideal.desc": "Sales Cloud es ideal para empresas que buscan:",
    "salesCloud.ideal1": "Aumentar la productividad del equipo de ventas",
    "salesCloud.ideal2": "Mejorar la visibilidad del pipeline",
    "salesCloud.ideal3": "Automatizar procesos de ventas",
    "salesCloud.ideal4": "Tomar decisiones basadas en datos",
    "salesCloud.cta.title": "¿Listo para potenciar tus ventas?",
    "salesCloud.cta.desc": "Agenda una demostración personalizada de Sales Cloud.",

    // Service Cloud
    "serviceCloud.title": "Service Cloud",
    "serviceCloud.description": "Ofrece un servicio al cliente excepcional con herramientas omnicanal. Resuelve casos más rápido y aumenta la satisfacción de tus clientes.",
    "serviceCloud.benefit1.title": "Soporte omnicanal",
    "serviceCloud.benefit1.desc": "Atiende a tus clientes por email, chat, teléfono y redes sociales desde un solo lugar.",
    "serviceCloud.benefit2.title": "Resolución más rápida",
    "serviceCloud.benefit2.desc": "Reduce tiempos de respuesta con automatización y base de conocimientos.",
    "serviceCloud.benefit3.title": "Mejora la satisfacción",
    "serviceCloud.benefit3.desc": "Ofrece experiencias personalizadas que fidelizan a tus clientes.",
    "serviceCloud.benefit4.title": "Automatización inteligente",
    "serviceCloud.benefit4.desc": "Automatiza casos rutinarios y libera tiempo para consultas complejas.",
    "serviceCloud.features.title": "Transforma tu atención al cliente",
    "serviceCloud.features.desc": "Service Cloud te proporciona todas las herramientas para ofrecer un servicio al cliente de primera clase que fideliza y genera valor.",
    "serviceCloud.feature1": "Gestión de casos centralizada",
    "serviceCloud.feature2": "Base de conocimientos",
    "serviceCloud.feature3": "Chat en vivo y chatbots",
    "serviceCloud.feature4": "Portal de autoservicio",
    "serviceCloud.feature5": "Encuestas de satisfacción",
    "serviceCloud.feature6": "Métricas y SLAs",
    "serviceCloud.ideal.title": "¿Es Service Cloud para ti?",
    "serviceCloud.ideal.desc": "Service Cloud es ideal para empresas que buscan:",
    "serviceCloud.ideal1": "Centralizar todos los canales de atención",
    "serviceCloud.ideal2": "Reducir tiempos de resolución de casos",
    "serviceCloud.ideal3": "Mejorar la satisfacción del cliente",
    "serviceCloud.ideal4": "Escalar el soporte sin perder calidad",
    "serviceCloud.cta.title": "¿Listo para mejorar tu servicio al cliente?",
    "serviceCloud.cta.desc": "Agenda una demostración personalizada de Service Cloud.",

    // Nonprofit Cloud
    "nonprofitCloud.title": "Nonprofit Cloud",
    "nonprofitCloud.description": "Potencia el impacto de tu ONG con herramientas diseñadas específicamente para organizaciones sin ánimo de lucro. Gestiona donantes, voluntarios y programas.",
    "nonprofitCloud.benefit1.title": "Gestión de donantes",
    "nonprofitCloud.benefit1.desc": "Construye relaciones duraderas con donantes y aumenta la recaudación.",
    "nonprofitCloud.benefit2.title": "Coordinación de voluntarios",
    "nonprofitCloud.benefit2.desc": "Organiza, asigna y motiva a tu base de voluntarios de forma eficiente.",
    "nonprofitCloud.benefit3.title": "Gestión de programas",
    "nonprofitCloud.benefit3.desc": "Planifica, ejecuta y mide el impacto de tus programas y proyectos.",
    "nonprofitCloud.benefit4.title": "Automatización de campañas",
    "nonprofitCloud.benefit4.desc": "Crea campañas de fundraising efectivas con herramientas automatizadas.",
    "nonprofitCloud.features.title": "Maximiza tu impacto social",
    "nonprofitCloud.features.desc": "Nonprofit Cloud está diseñado para ayudar a las organizaciones sin ánimo de lucro a gestionar sus operaciones y amplificar su misión.",
    "nonprofitCloud.feature1": "Gestión integral de donantes",
    "nonprofitCloud.feature2": "Seguimiento de voluntarios",
    "nonprofitCloud.feature3": "Gestión de subvenciones",
    "nonprofitCloud.feature4": "Informes de impacto",
    "nonprofitCloud.feature5": "Integración con plataformas de donación",
    "nonprofitCloud.feature6": "Comunicación personalizada",
    "nonprofitCloud.ideal.title": "¿Es Nonprofit Cloud para ti?",
    "nonprofitCloud.ideal.desc": "Nonprofit Cloud es ideal para organizaciones que buscan:",
    "nonprofitCloud.ideal1": "Aumentar la recaudación de fondos",
    "nonprofitCloud.ideal2": "Mejorar la gestión de voluntarios",
    "nonprofitCloud.ideal3": "Medir y comunicar el impacto",
    "nonprofitCloud.ideal4": "Profesionalizar sus operaciones",
    "nonprofitCloud.cta.title": "¿Listo para amplificar tu impacto?",
    "nonprofitCloud.cta.desc": "Agenda una demostración personalizada de Nonprofit Cloud.",

    // Starter Pro Suite
    "starterSuite.title": "Starter & Pro Suite",
    "starterSuite.description": "La solución perfecta para pequeñas y medianas empresas. Toda la potencia de Salesforce con una implementación rápida y un precio accesible.",
    "starterSuite.benefit1.title": "Rápida implementación",
    "starterSuite.benefit1.desc": "Empieza a usar Salesforce en días, no meses. Configuración simplificada.",
    "starterSuite.benefit2.title": "Precio accesible",
    "starterSuite.benefit2.desc": "Todas las funcionalidades esenciales a un precio diseñado para PYMEs.",
    "starterSuite.benefit3.title": "Fácil de usar",
    "starterSuite.benefit3.desc": "Interfaz intuitiva que no requiere formación técnica avanzada.",
    "starterSuite.benefit4.title": "Escalable",
    "starterSuite.benefit4.desc": "Crece con tu negocio. Actualiza a productos más avanzados cuando lo necesites.",
    "starterSuite.features.title": "Empieza tu transformación digital",
    "starterSuite.features.desc": "Starter y Pro Suite ofrecen todo lo que necesitas para empezar a gestionar tu negocio de forma profesional sin complicaciones.",
    "starterSuite.feature1": "Gestión de contactos y cuentas",
    "starterSuite.feature2": "Seguimiento de oportunidades",
    "starterSuite.feature3": "Email integrado",
    "starterSuite.feature4": "Informes básicos",
    "starterSuite.feature5": "App móvil incluida",
    "starterSuite.feature6": "Soporte técnico",
    "starterSuite.ideal.title": "¿Es Starter & Pro Suite para ti?",
    "starterSuite.ideal.desc": "Estas soluciones son ideales para empresas que buscan:",
    "starterSuite.ideal1": "Dar el primer paso con un CRM profesional",
    "starterSuite.ideal2": "Implementación rápida sin complicaciones",
    "starterSuite.ideal3": "Precio accesible para PYMEs",
    "starterSuite.ideal4": "Capacidad de crecer con el negocio",
    "starterSuite.cta.title": "¿Listo para empezar con Salesforce?",
    "starterSuite.cta.desc": "Agenda una demostración personalizada de Starter & Pro Suite.",

    // Implementación Salesforce
    "implementation.navName": "Implementación",
    "implementation.title": "Implementación Salesforce",
    "implementation.description": "Metodología ágil de implementación en 5 fases que garantiza el éxito de tu proyecto Salesforce. Desde el discovery hasta el go live, te acompaño en cada paso.",
    "implementation.methodology.title": "Metodología de Implementación",
    "implementation.methodology.desc": "El proyecto se divide en 5 fases claramente definidas, siguiendo una metodología ágil que permite adaptarse a los cambios y garantizar resultados.",
    "implementation.phase": "Fase",
    
    // Phase 1
    "implementation.phase1.title": "Definición del Alcance + Discovery",
    "implementation.phase1.period": "Semana 1-2",
    "implementation.phase1.step1": "Kick-off: comunicación del proyecto y su alcance a los Business Owners.",
    "implementation.phase1.step2": "Identificación y definición de requerimientos a modo de User Stories a través de entrevistas y exploración del sistema.",
    "implementation.phase1.step3": "Elaboración de User Stories con diseño de la solución a alto nivel, criterios de aceptación y tamaño medido en horas.",
    "implementation.phase1.step4": "Revisión de los requerimientos y acuerdo para su desarrollo.",
    "implementation.phase1.step5": "Planificación de User Stories en Sprints de 1-2 semanas y desarrollo evolutivo.",
    
    // Phase 2
    "implementation.phase2.title": "Desarrollo",
    "implementation.phase2.period": "Variable según alcance",
    "implementation.phase2.step1": "Ejecución del diseño de la solución de las User Stories de cada Sprint.",
    "implementation.phase2.step2": "Desarrollo conjunto con los Business Owners y Revisión del Sprint para confirmar el progreso.",
    "implementation.phase2.step3": "En caso de haber un sandbox intermedio para UAT, se despliega la solución a este entorno.",
    
    // Phase 3
    "implementation.phase3.title": "UAT Iterable",
    "implementation.phase3.period": "Variable según alcance",
    "implementation.phase3.step1": "Los Business Owners realizan tests de la solución y elevan errores, mejoras necesarias y mejoras evolutivas.",
    "implementation.phase3.step2": "Reparación de errores detectados durante las pruebas.",
    "implementation.phase3.step3": "Iteración del proceso para mejoras necesarias no consideradas, elaborando y planificando nuevas User Stories.",
    "implementation.phase3.step4": "Las mejoras evolutivas se planifican para después del Go Live o se realiza una iteración adicional.",
    
    // Phase 4
    "implementation.phase4.title": "Training",
    "implementation.phase4.period": "Según número de roles",
    "implementation.phase4.step1": "Realización de sesiones de Training por cada rol a los usuarios que utilizarán la plataforma.",
    
    // Phase 5
    "implementation.phase5.title": "Go Live",
    "implementation.phase5.period": "Semana final",
    "implementation.phase5.step1": "Despliegue de la solución completa al entorno de Producción.",
    "implementation.phase5.step2": "Seguimiento para asegurar el correcto funcionamiento.",
    
    // Benefits
    "implementation.benefits.title": "Ventajas de nuestra metodología",
    "implementation.benefits.desc": "Una implementación exitosa requiere un enfoque estructurado pero flexible que se adapte a las necesidades de tu negocio.",
    "implementation.benefit1": "Entrega iterativa y transparente",
    "implementation.benefit2": "Participación activa del cliente",
    "implementation.benefit3": "Flexibilidad ante cambios",
    "implementation.benefit4": "Reducción de riesgos",
    "implementation.benefit5": "Training personalizado",
    "implementation.benefit6": "Soporte post Go Live",
    
    // Agile
    "implementation.agile.title": "¿Por qué metodología ágil?",
    "implementation.agile.desc": "Trabajamos con Sprints cortos que permiten obtener feedback temprano y ajustar el rumbo según las necesidades reales del negocio.",
    "implementation.agile1": "Sprints de 1-2 semanas con entregas parciales",
    "implementation.agile2": "Revisiones frecuentes con el equipo",
    "implementation.agile3": "Adaptación a cambios sin grandes impactos",
    "implementation.agile4": "Visibilidad total del progreso del proyecto",
    
    // CTA
    "implementation.cta.title": "¿Listo para implementar Salesforce?",
    "implementation.cta.desc": "Agenda una consulta gratuita para analizar tu proyecto.",

    // Optimización y Ajustes
    "optimization.navName": "Optimización",

    // Administración y Soporte
    "administration.navName": "Administración",

    // Consultoría Estratégica
    "consulting.navName": "Consultoría",

    // Form Dialog
    "form.requestDemo": "Solicitar Demo",
    "form.requestInfo": "Solicitar Información",
    "form.contact": "Contactar",
    "form.demoDesc": "Rellena el formulario y te contactaremos para programar una demostración personalizada.",
    "form.pricingDesc": "Rellena el formulario y te enviaremos información detallada sobre precios y licencias.",
    "form.contactDesc": "Rellena el formulario y nos pondremos en contacto contigo.",
    "form.name": "Nombre",
    "form.email": "Correo electrónico",
    "form.phone": "Teléfono",
    "form.company": "Empresa",
    "form.employees": "Número de empleados",
    "form.position": "Puesto en tu empresa",
    "form.service": "Servicio de interés",
    "form.message": "Mensaje",
    "form.messagePlaceholder": "Cuéntanos sobre tu proyecto...",
    "form.selectOption": "Selecciona",
    "form.selectService": "Selecciona un servicio",
    "form.privacy": "He leído y acepto la",
    "form.privacyLink": "política de privacidad",
    "form.sending": "Enviando...",
    "form.successDemo": "¡Solicitud de demo recibida!",
    "form.successContact": "¡Mensaje enviado!",
    "form.successDesc": "Nos pondremos en contacto contigo pronto.",

    // Privacy Policy
    "privacy.title": "Política de Privacidad",
    "privacy.lastUpdate": "Última actualización:",
    "privacy.section1.title": "1. Responsable del Tratamiento",
    "privacy.section1.text1": "El responsable del tratamiento de los datos personales recogidos a través de este sitio web es",
    "privacy.section1.text2": ", con domicilio en España.",
    "privacy.section1.text3": "Para cualquier consulta relacionada con el tratamiento de sus datos personales, puede contactarnos a través de:",
    "privacy.backHome": "← Volver al inicio",

    // 404
    "notFound.title": "Página no encontrada",
    "notFound.description": "Lo sentimos, la página que buscas no existe.",
    "notFound.backHome": "Volver al inicio",

    // Language
    "language": "Idioma",
    "language.es": "Español",
    "language.en": "English",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.solutions": "Solutions",
    "nav.licenses": "Licenses",
    "nav.contact": "Contact",
    "nav.requestDemo": "Request Demo",
    "nav.prices": "Pricing",
    "nav.login": "Login",

    // Hero Section
    "hero.badge": "Certified Salesforce Consultant",
    "hero.title": "Transform your business with the power of",
    "hero.description": "Salesforce Consultant in Spain specialized in professional CRM implementation. Boost your sales, improve your customer service and optimize your processes with Salesforce sales automation.",
    "hero.cta": "Contact",
    "hero.intro": "I'm",
    "hero.name": "Enrique",
    "hero.subtitle": "expert in Salesforce enterprise solutions",
    "hero.certified": "✓ Certified Consultant",
    "hero.experience": "✓ +5 years of experience",
    "hero.projects": "✓ Successful projects",

    // Services Grid
    "services.label": "Our Services",
    "services.title": "Custom Salesforce Solutions",
    "services.salesCloud.description": "Accelerate your sales with intelligent automation and complete sales cycle management.",
    "services.salesCloud.link": "Implement Sales Cloud",
    "services.serviceCloud.description": "Deliver exceptional customer service with omnichannel tools and personalized attention.",
    "services.serviceCloud.link": "Discover Service Cloud",
    "services.nonprofitCloud.description": "Manage donors, volunteers and programs with solutions designed for NGOs.",
    "services.nonprofitCloud.link": "Explore Nonprofit Cloud",
    "services.starterSuite.description": "The perfect solution for small businesses looking to get started with Salesforce.",
    "services.starterSuite.link": "See Starter Suite",

    // Why Salesforce
    "why.label": "Why Salesforce?",
    "why.title": "The #1 CRM in the world for a reason",
    "why.description": "Salesforce is not just a CRM, it's the leading platform for Salesforce sales automation and enterprise customer management. With over 150,000 companies trusting Salesforce, it's the preferred choice for digital transformation. As a Salesforce consultant in Spain, I help you with the professional CRM implementation your business needs.",
    "why.companies": "Companies",
    "why.globalCRM": "Global CRM",
    "why.cloud": "100% cloud-based",
    "why.cloud.desc": "Access your data from anywhere and any device.",
    "why.security": "Enterprise security",
    "why.security.desc": "Regulatory compliance and first-class data protection.",
    "why.analytics": "Advanced analytics",
    "why.analytics.desc": "Real-time dashboards and reports for better decision making.",
    "why.vision": "360° customer view",
    "why.vision.desc": "Unify all your customer information in one place.",
    "why.ai": "Integrated AI",
    "why.ai.desc": "Leverage Einstein AI for intelligent predictions and automation.",
    "why.scalability": "Scalability",
    "why.scalability.desc": "Grow without limits. Salesforce adapts to companies of any size.",

    // Contact Strip
    "contactStrip.title": "Ready to transform your business?",
    "contactStrip.description": "Schedule a free Salesforce consultation and discover how professional CRM implementation can boost your company.",
    "contactStrip.cta": "Contact now",

     // Licenses Banner
     "licensesBanner.title": "Want to know how much Salesforce licenses cost?",
     "licensesBanner.description": "Check the official prices for the different editions.",
     "licensesBanner.cta": "View license pricing",

    // Footer
    "footer.description": "Salesforce specialized consultants. We help companies transform their business processes with the best CRM solutions on the market.",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.location": "Spain",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",

    // Contact Page
    "contact.title": "Contact",
    "contact.subtitle": "Have questions about our services? We're here to help.",
    "contact.info.title": "Contact information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.location": "Location",
    "contact.form.title": "Send us a message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.company": "Company",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell us about your project...",
    "contact.form.privacy": "I have read and accept the",
    "contact.form.privacyLink": "Privacy Policy",
    "contact.form.submit": "Send message",
    "contact.form.sending": "Sending...",

    // Pricing Page
    "pricing.badge": "Official Salesforce pricing 2025",
    "pricing.title": "License Pricing",
    "pricing.subtitle": "Discover the official Salesforce license prices for the services I implement. As a certified consultant, I help you choose the best option for your business.",
    "pricing.starterTab": "Starter & Pro",
    "pricing.salesTab": "Sales Cloud",
    "pricing.serviceTab": "Service Cloud",
    "pricing.nonprofitTab": "Nonprofit",
    "pricing.starterTitle": "Starter & Pro Suite",
    "pricing.starterSubtitle": "All-in-one solutions perfect for SMEs",
    "pricing.salesTitle": "Sales Cloud",
    "pricing.salesSubtitle": "Empower your sales team with the #1 CRM in the world",
    "pricing.serviceTitle": "Service Cloud",
    "pricing.serviceSubtitle": "Deliver exceptional customer service across all channels",
    "pricing.nonprofitTitle": "Nonprofit Cloud",
    "pricing.nonprofitSubtitle": "CRM designed specifically for nonprofit organizations",
    "pricing.requestInfo": "Request information",
    "pricing.disclaimer.title": "Important pricing information",
    "pricing.disclaimer.1": "Prices shown are Salesforce list prices and may vary.",
    "pricing.disclaimer.2": "All prices are in euros and do not include VAT.",
    "pricing.disclaimer.3": "Billing is annual unless otherwise indicated.",
    "pricing.disclaimer.4": "Check updated prices at",
    "pricing.cta.title": "Not sure which edition to choose?",
    "pricing.cta.subtitle": "As a certified Salesforce consultant, I help you choose the license that best fits your business needs and budget.",
    "pricing.cta.button": "Request free advice",
    "pricing.nonprofit.note": "Nonprofit organizations can access 10 free licenses through the Salesforce.org Power of Us program",
    "pricing.perUser": "/user/month",
    "pricing.annualBilling": "Annual billing",
    "pricing.monthlyAnnual": "Monthly or annual billing",
    "pricing.idealStart": "Ideal to start",
    "pricing.mostPopular": "Most popular",
    "pricing.forGrowth": "For growing companies",
    "pricing.maxPower": "Maximum power",
    "pricing.startFree": "Start free",
    "pricing.toGrow": "To grow",
    "pricing.maxUsers": "Maximum 2 users",

    // Service Pages Common
    "service.mainBenefits": "Main benefits",
    "service.contact": "Contact",
    "service.requestDemo": "Request Free Demo",

    // Sales Cloud
    "salesCloud.title": "Sales Cloud",
    "salesCloud.description": "Accelerate your sales with the #1 CRM platform in the world. Sales Cloud helps you manage leads, close more deals and grow your revenue.",
    "salesCloud.benefit1.title": "Lead and opportunity management",
    "salesCloud.benefit1.desc": "Capture, qualify and convert leads into customers with a visual and automated pipeline.",
    "salesCloud.benefit2.title": "Accurate sales forecasting",
    "salesCloud.benefit2.desc": "Get reliable revenue projections based on real data from your team.",
    "salesCloud.benefit3.title": "Real-time collaboration",
    "salesCloud.benefit3.desc": "Keep the entire sales team aligned with instant updates.",
    "salesCloud.benefit4.title": "Intelligent automation",
    "salesCloud.benefit4.desc": "Automate repetitive tasks and focus on what matters: closing sales.",
    "salesCloud.features.title": "Everything you need to sell more",
    "salesCloud.features.desc": "Sales Cloud offers a complete set of tools designed to help your sales team be more productive and close more deals.",
    "salesCloud.feature1": "Complete sales cycle management",
    "salesCloud.feature2": "Email and calendar integration",
    "salesCloud.feature3": "Mobile app for on-the-go sales",
    "salesCloud.feature4": "Customizable reports and dashboards",
    "salesCloud.feature5": "Einstein AI for sales predictions",
    "salesCloud.feature6": "Marketing tools integration",
    "salesCloud.ideal.title": "Is Sales Cloud for you?",
    "salesCloud.ideal.desc": "Sales Cloud is ideal for companies looking to:",
    "salesCloud.ideal1": "Increase sales team productivity",
    "salesCloud.ideal2": "Improve pipeline visibility",
    "salesCloud.ideal3": "Automate sales processes",
    "salesCloud.ideal4": "Make data-driven decisions",
    "salesCloud.cta.title": "Ready to boost your sales?",
    "salesCloud.cta.desc": "Schedule a personalized Sales Cloud demo.",

    // Service Cloud
    "serviceCloud.title": "Service Cloud",
    "serviceCloud.description": "Deliver exceptional customer service with omnichannel tools. Resolve cases faster and increase customer satisfaction.",
    "serviceCloud.benefit1.title": "Omnichannel support",
    "serviceCloud.benefit1.desc": "Serve your customers via email, chat, phone and social media from one place.",
    "serviceCloud.benefit2.title": "Faster resolution",
    "serviceCloud.benefit2.desc": "Reduce response times with automation and knowledge base.",
    "serviceCloud.benefit3.title": "Improve satisfaction",
    "serviceCloud.benefit3.desc": "Deliver personalized experiences that build customer loyalty.",
    "serviceCloud.benefit4.title": "Intelligent automation",
    "serviceCloud.benefit4.desc": "Automate routine cases and free up time for complex inquiries.",
    "serviceCloud.features.title": "Transform your customer service",
    "serviceCloud.features.desc": "Service Cloud provides all the tools to deliver first-class customer service that builds loyalty and generates value.",
    "serviceCloud.feature1": "Centralized case management",
    "serviceCloud.feature2": "Knowledge base",
    "serviceCloud.feature3": "Live chat and chatbots",
    "serviceCloud.feature4": "Self-service portal",
    "serviceCloud.feature5": "Satisfaction surveys",
    "serviceCloud.feature6": "Metrics and SLAs",
    "serviceCloud.ideal.title": "Is Service Cloud for you?",
    "serviceCloud.ideal.desc": "Service Cloud is ideal for companies looking to:",
    "serviceCloud.ideal1": "Centralize all service channels",
    "serviceCloud.ideal2": "Reduce case resolution times",
    "serviceCloud.ideal3": "Improve customer satisfaction",
    "serviceCloud.ideal4": "Scale support without losing quality",
    "serviceCloud.cta.title": "Ready to improve your customer service?",
    "serviceCloud.cta.desc": "Schedule a personalized Service Cloud demo.",

    // Nonprofit Cloud
    "nonprofitCloud.title": "Nonprofit Cloud",
    "nonprofitCloud.description": "Boost your NGO's impact with tools designed specifically for nonprofit organizations. Manage donors, volunteers and programs.",
    "nonprofitCloud.benefit1.title": "Donor management",
    "nonprofitCloud.benefit1.desc": "Build lasting relationships with donors and increase fundraising.",
    "nonprofitCloud.benefit2.title": "Volunteer coordination",
    "nonprofitCloud.benefit2.desc": "Organize, assign and motivate your volunteer base efficiently.",
    "nonprofitCloud.benefit3.title": "Program management",
    "nonprofitCloud.benefit3.desc": "Plan, execute and measure the impact of your programs and projects.",
    "nonprofitCloud.benefit4.title": "Campaign automation",
    "nonprofitCloud.benefit4.desc": "Create effective fundraising campaigns with automated tools.",
    "nonprofitCloud.features.title": "Maximize your social impact",
    "nonprofitCloud.features.desc": "Nonprofit Cloud is designed to help nonprofit organizations manage their operations and amplify their mission.",
    "nonprofitCloud.feature1": "Comprehensive donor management",
    "nonprofitCloud.feature2": "Volunteer tracking",
    "nonprofitCloud.feature3": "Grant management",
    "nonprofitCloud.feature4": "Impact reports",
    "nonprofitCloud.feature5": "Donation platform integration",
    "nonprofitCloud.feature6": "Personalized communication",
    "nonprofitCloud.ideal.title": "Is Nonprofit Cloud for you?",
    "nonprofitCloud.ideal.desc": "Nonprofit Cloud is ideal for organizations looking to:",
    "nonprofitCloud.ideal1": "Increase fundraising",
    "nonprofitCloud.ideal2": "Improve volunteer management",
    "nonprofitCloud.ideal3": "Measure and communicate impact",
    "nonprofitCloud.ideal4": "Professionalize operations",
    "nonprofitCloud.cta.title": "Ready to amplify your impact?",
    "nonprofitCloud.cta.desc": "Schedule a personalized Nonprofit Cloud demo.",

    // Starter Pro Suite
    "starterSuite.title": "Starter & Pro Suite",
    "starterSuite.description": "The perfect solution for small and medium businesses. All the power of Salesforce with rapid implementation and accessible pricing.",
    "starterSuite.benefit1.title": "Fast implementation",
    "starterSuite.benefit1.desc": "Start using Salesforce in days, not months. Simplified setup.",
    "starterSuite.benefit2.title": "Affordable pricing",
    "starterSuite.benefit2.desc": "All essential features at a price designed for SMEs.",
    "starterSuite.benefit3.title": "Easy to use",
    "starterSuite.benefit3.desc": "Intuitive interface that doesn't require advanced technical training.",
    "starterSuite.benefit4.title": "Scalable",
    "starterSuite.benefit4.desc": "Grow with your business. Upgrade to more advanced products when needed.",
    "starterSuite.features.title": "Start your digital transformation",
    "starterSuite.features.desc": "Starter and Pro Suite offer everything you need to start managing your business professionally without complications.",
    "starterSuite.feature1": "Contact and account management",
    "starterSuite.feature2": "Opportunity tracking",
    "starterSuite.feature3": "Integrated email",
    "starterSuite.feature4": "Basic reports",
    "starterSuite.feature5": "Mobile app included",
    "starterSuite.feature6": "Technical support",
    "starterSuite.ideal.title": "Is Starter & Pro Suite for you?",
    "starterSuite.ideal.desc": "These solutions are ideal for companies looking to:",
    "starterSuite.ideal1": "Take the first step with a professional CRM",
    "starterSuite.ideal2": "Fast implementation without complications",
    "starterSuite.ideal3": "Affordable pricing for SMEs",
    "starterSuite.ideal4": "Ability to grow with the business",
    "starterSuite.cta.title": "Ready to get started with Salesforce?",
    "starterSuite.cta.desc": "Schedule a personalized Starter & Pro Suite demo.",

    // Salesforce Implementation
    "implementation.navName": "Implementation",
    "implementation.title": "Salesforce Implementation",
    "implementation.description": "Agile implementation methodology in 5 phases that guarantees the success of your Salesforce project. From discovery to go live, I accompany you every step of the way.",
    "implementation.methodology.title": "Implementation Methodology",
    "implementation.methodology.desc": "The project is divided into 5 clearly defined phases, following an agile methodology that adapts to changes and guarantees results.",
    "implementation.phase": "Phase",
    
    // Phase 1
    "implementation.phase1.title": "Scope Definition + Discovery",
    "implementation.phase1.period": "Week 1-2",
    "implementation.phase1.step1": "Kick-off: project communication and scope to Business Owners.",
    "implementation.phase1.step2": "Identification and definition of requirements as User Stories through interviews and system exploration.",
    "implementation.phase1.step3": "User Story elaboration with high-level solution design, acceptance criteria and size measured in hours.",
    "implementation.phase1.step4": "Requirements review and development agreement.",
    "implementation.phase1.step5": "User Story planning in 1-2 week Sprints and evolutionary development.",
    
    // Phase 2
    "implementation.phase2.title": "Development",
    "implementation.phase2.period": "Variable based on scope",
    "implementation.phase2.step1": "Execution of the solution design for each Sprint's User Stories.",
    "implementation.phase2.step2": "Joint development with Business Owners and Sprint Review to confirm progress.",
    "implementation.phase2.step3": "If there's an intermediate sandbox for UAT, the solution is deployed to this environment.",
    
    // Phase 3
    "implementation.phase3.title": "Iterable UAT",
    "implementation.phase3.period": "Variable based on scope",
    "implementation.phase3.step1": "Business Owners test the solution and raise bugs, necessary improvements and evolutionary improvements.",
    "implementation.phase3.step2": "Bug fixes detected during testing.",
    "implementation.phase3.step3": "Process iteration for necessary improvements not considered, creating and planning new User Stories.",
    "implementation.phase3.step4": "Evolutionary improvements are planned for after Go Live or an additional iteration is performed.",
    
    // Phase 4
    "implementation.phase4.title": "Training",
    "implementation.phase4.period": "Based on number of roles",
    "implementation.phase4.step1": "Training sessions for each role for users who will use the platform.",
    
    // Phase 5
    "implementation.phase5.title": "Go Live",
    "implementation.phase5.period": "Final week",
    "implementation.phase5.step1": "Complete solution deployment to Production environment.",
    "implementation.phase5.step2": "Follow-up to ensure proper operation.",
    
    // Benefits
    "implementation.benefits.title": "Advantages of our methodology",
    "implementation.benefits.desc": "A successful implementation requires a structured but flexible approach that adapts to your business needs.",
    "implementation.benefit1": "Iterative and transparent delivery",
    "implementation.benefit2": "Active client participation",
    "implementation.benefit3": "Flexibility to changes",
    "implementation.benefit4": "Risk reduction",
    "implementation.benefit5": "Personalized training",
    "implementation.benefit6": "Post Go Live support",
    
    // Agile
    "implementation.agile.title": "Why agile methodology?",
    "implementation.agile.desc": "We work with short Sprints that allow early feedback and adjust the course according to real business needs.",
    "implementation.agile1": "1-2 week Sprints with partial deliveries",
    "implementation.agile2": "Frequent reviews with the team",
    "implementation.agile3": "Adaptation to changes without major impacts",
    "implementation.agile4": "Full visibility of project progress",
    
    // CTA
    "implementation.cta.title": "Ready to implement Salesforce?",
    "implementation.cta.desc": "Schedule a free consultation to analyze your project.",

    // Optimization & Adjustments
    "optimization.navName": "Optimization",

    // Administration & Support
    "administration.navName": "Administration",

    // Strategic Consulting
    "consulting.navName": "Consulting",

    // Form Dialog
    "form.requestDemo": "Request Demo",
    "form.requestInfo": "Request Information",
    "form.contact": "Contact",
    "form.demoDesc": "Fill out the form and we'll contact you to schedule a personalized demo.",
    "form.pricingDesc": "Fill out the form and we'll send you detailed pricing and licensing information.",
    "form.contactDesc": "Fill out the form and we'll get in touch with you.",
    "form.name": "Name",
    "form.email": "Email",
    "form.phone": "Phone",
    "form.company": "Company",
    "form.employees": "Number of employees",
    "form.position": "Position at your company",
    "form.service": "Service of interest",
    "form.message": "Message",
    "form.messagePlaceholder": "Tell us about your project...",
    "form.selectOption": "Select",
    "form.selectService": "Select a service",
    "form.privacy": "I have read and accept the",
    "form.privacyLink": "privacy policy",
    "form.sending": "Sending...",
    "form.successDemo": "Demo request received!",
    "form.successContact": "Message sent!",
    "form.successDesc": "We'll get in touch with you soon.",

    // Privacy Policy
    "privacy.title": "Privacy Policy",
    "privacy.lastUpdate": "Last update:",
    "privacy.section1.title": "1. Data Controller",
    "privacy.section1.text1": "The data controller for personal data collected through this website is",
    "privacy.section1.text2": ", with domicile in Spain.",
    "privacy.section1.text3": "For any query related to the processing of your personal data, you can contact us at:",
    "privacy.backHome": "← Back to home",

    // 404
    "notFound.title": "Page not found",
    "notFound.description": "Sorry, the page you're looking for doesn't exist.",
    "notFound.backHome": "Back to home",

    // Language
    "language": "Language",
    "language.es": "Español",
    "language.en": "English",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language;
      if (saved && (saved === "es" || saved === "en")) {
        return saved;
      }
    }
    return "es";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
