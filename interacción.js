/* =====================================================
   JARED BLANCO | PORTAFOLIO
   Idiomas, tema, navegación y animaciones
   ===================================================== */

(() => {
  "use strict";

  const root = document.documentElement;

  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle?.querySelector(".theme-icon");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const backToTop = document.getElementById("backToTop");
  const currentYear = document.getElementById("currentYear");
  const languageToggle = document.getElementById("languageToggle");
  const languageLabel = document.getElementById("languageLabel");

  const translations = {
    es: {
      skipLink: "Saltar al contenido",
      navAbout: "Sobre mí",
      navSkills: "Habilidades",
      navExperience: "Experiencia",
      navProjects: "Proyectos",
      navServices: "Servicios",
      navContact: "Contacto",
      projectDetails: "Detalles",
      catLogoDescription: "Sistema de catálogos digitales con secciones independientes para tecnología y perfumería, diseñado para explorar productos desde el móvil o la computadora.",
      catLogoType: "CATÁLOGO DIGITAL",
      catLogoTech: "Catálogo tecnología ↗",
      catLogoPerfume: "Catálogo perfumería ↗",
      servicesEyebrow: "06 / SERVICIOS",
      servicesTitle: "Ideas que pueden convertirse en una web.",
      servicesLead: "Apoyo a pequeños negocios y proyectos personales con sitios claros, adaptables y fáciles de usar.",
      serviceLandingTitle: "Páginas web para negocios",
      serviceLandingText: "Una presencia digital para presentar servicios, productos y formas de contacto.",
      serviceResponsiveTitle: "Diseño responsive",
      serviceResponsiveText: "Interfaces que se adaptan a teléfonos, tabletas y computadoras.",
      serviceRefreshTitle: "Mejoras para sitios existentes",
      serviceRefreshText: "Ajustes visuales, organización del contenido y mejoras de usabilidad en proyectos pequeños.",
      servicesCta: "¿Tenés una idea en mente?",
      servicesButton: "Hablemos de tu proyecto",
      modalObjective: "Objetivo",
      modalFeatures: "Características",
      modalTechnologies: "Tecnologías",
      modalLearning: "Aprendizaje:",
      modalLivePreview: "Vista del proyecto publicado",
      modalPreviewNote: "Si la vista previa no carga, abrí el proyecto con el enlace de abajo.",
      themeLabel: "Tema",
      eyebrowPortfolio: "PORTAFOLIO PERSONAL",
      nicaragua: "NICARAGUA",
      heroTitle: "Construyendo experiencias",
      heroAccent: "web útiles.",
      heroLead: "Soy Jared Blanco, técnico especialista en programación y desarrollador frontend junior en formación. Me enfoco en crear interfaces claras, responsivas y funcionales mientras continúo fortaleciendo mis habilidades.",
      exploreProjects: "Explorar proyectos",
      contactMe: "Contactarme",
      profileInProgress: "Perfil en desarrollo",
      responsiveDesign: "DISEÑO RESPONSIVO",
      continuousLearning: "APRENDIZAJE CONTINUO",
      aboutEyebrow: "01 / PERFIL",
      aboutTitle: "Una base técnica, una mentalidad práctica.",
      aboutLead: "Me interesa desarrollar sitios web que sean fáciles de usar, visualmente consistentes y adaptables a diferentes pantallas.",
      aboutDescription: "Soy técnico especialista en programación con conocimientos en HTML, CSS y JavaScript. También cuento con experiencia en diseño gráfico y experiencia laboral en entornos operativos, donde he reforzado la disciplina, el trabajo en equipo y la responsabilidad.",
      factEducation: "FORMACIÓN",
      factEducationValue: "Técnico especialista en programación",
      factFocus: "ENFOQUE ACTUAL",
      factFocusValue: "Desarrollo frontend",
      factLocation: "UBICACIÓN",
      skillsEyebrow: "02 / HERRAMIENTAS",
      skillsTitle: "Habilidades y tecnologías",
      skillsLead: "Conocimientos actuales organizados por área. Los niveles se describen con honestidad y pueden crecer junto con mis proyectos.",
      skillWebTitle: "Desarrollo web",
      skillWebDescription: "Base para estructurar y diseñar experiencias web adaptables.",
      basicJavascript: "JavaScript básico",
      skillDataTitle: "Datos y automatización",
      skillDataDescription: "Fundamentos para organizar información y trabajar con datos.",
      skillToolsTitle: "Herramientas y colaboración",
      skillToolsDescription: "Recursos para crear piezas visuales y trabajar con otras personas.",
      teamwork: "Trabajo en equipo",
      responsibility: "Responsabilidad",
      experienceEyebrow: "03 / TRAYECTORIA",
      experienceTitle: "Experiencia laboral",
      experienceLead: "Experiencia en operaciones, producción y trabajo técnico que aporta disciplina y capacidad para colaborar.",
      steelMaxDates: "MARZO 2026 – ACTUALIDAD",
      warehouseRole: "Auxiliar de Bodega → Responsable de Bodega",
      warehouseDescription: "Experiencia en operaciones de bodega, organización y control de inventario, seguimiento de existencias y apoyo a las actividades diarias del almacén.",
      cargillDates: "JUNIO 2024 – FEBRERO 2026",
      productionOperator: "Operario de Producción",
      productionDescription: "Cumplimiento de procesos productivos y estándares de calidad. Trabajo bajo presión y coordinación con equipos de producción.",
      distributionDates: "NOVIEMBRE 2023 – ABRIL 2024",
      distributionHelper: "Ayudante de Distribución",
      distributionDescription: "Apoyo en logística, carga y descarga de productos, con responsabilidad en rutas de distribución.",
      turnerDates: "MAYO 2017 – JUNIO 2023",
      turner: "Tornero",
      turnerDescription: "Fabricación de piezas metálicas e interpretación de planos técnicos.",
      experienceNote: "Revisá las fechas y los puestos antes de publicar el portafolio. Asegurate de que toda la información refleje tu trayectoria real.",
      educationEyebrow: "04 / FORMACIÓN",
      educationTitle: "Educación y aprendizaje",
      programmingDegree: "Técnico Especialista en Programación",
      englishCourse: "Curso de Inglés — Nivel B1",
      highSchool: "Bachiller",
      projectsEyebrow: "05 / TRABAJO SELECCIONADO",
      projectsTitle: "Proyectos y experimentos",
      projectsLead: "Una selección de trabajos publicados y espacios para añadir nuevos proyectos cuando estén listos.",
      published: "Publicado",
      clickDescription: "Juego web desarrollado con HTML, CSS y JavaScript, centrado en la interacción y los eventos del DOM.",
      webGame: "JUEGO WEB",
      viewProject: "Ver proyecto",
      cafeDescription: "Sitio web de una cafetería ficticia con menú, selector de idioma, modo claro/oscuro y experiencia adaptable a móvil y computadora.",
      interactiveWebsite: "WEB INTERACTIVA",
      incomplete: "Por completar",
      landingDescription: "Espacio reservado para una página de aterrizaje. Se añadirá el enlace cuando el proyecto esté terminado y publicado.",
      inDevelopment: "En desarrollo",
      contactForm: "Contacto",
      webForm: "Formulario web",
      formDescription: "Espacio para un formulario con estilos personalizados y validación básica. No se presenta como proyecto publicado.",
      projectNote: "Los proyectos marcados como «Por completar» son espacios provisionales del portafolio, no enlaces a trabajos terminados.",
      contactEyebrow: "07 / CONTACTO",
      contactTitle: "¿Hablamos de una idea?",
      contactLead: "Estoy abierto a conectar, aprender y conversar sobre oportunidades o proyectos web.",
      footerText: "Diseñado y desarrollado con aprendizaje continuo.",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      switchToEnglish: "Cambiar idioma a inglés",
      switchToSpanish: "Cambiar idioma a español",
      switchToLight: "Cambiar a tema claro",
      switchToDark: "Cambiar a tema oscuro",
      backToTop: "Volver arriba"
    },

    en: {
      skipLink: "Skip to content",
      navAbout: "About",
      navSkills: "Skills",
      navExperience: "Experience",
      navProjects: "Projects",
      navServices: "Services",
      navContact: "Contact",
      projectDetails: "Details",
      catLogoDescription: "A digital catalog system with separate technology and perfumery sections, designed for browsing products on mobile and desktop.",
      catLogoType: "DIGITAL CATALOG",
      catLogoTech: "Technology catalog ↗",
      catLogoPerfume: "Perfumery catalog ↗",
      servicesEyebrow: "06 / SERVICES",
      servicesTitle: "Ideas that can become a website.",
      servicesLead: "I help small businesses and personal projects with clear, responsive, easy-to-use websites.",
      serviceLandingTitle: "Websites for businesses",
      serviceLandingText: "A digital presence to present services, products, and contact options.",
      serviceResponsiveTitle: "Responsive design",
      serviceResponsiveText: "Interfaces that adapt to phones, tablets, and desktop computers.",
      serviceRefreshTitle: "Improvements to existing websites",
      serviceRefreshText: "Visual refinements, content organization, and usability improvements for small projects.",
      servicesCta: "Have an idea in mind?",
      servicesButton: "Let's discuss your project",
      modalObjective: "Objective",
      modalFeatures: "Features",
      modalTechnologies: "Technologies",
      modalLearning: "What I learned:",
      modalLivePreview: "Live project preview",
      modalPreviewNote: "If the preview does not load, open the project using the link below.",
      themeLabel: "Theme",
      eyebrowPortfolio: "PERSONAL PORTFOLIO",
      nicaragua: "NICARAGUA",
      heroTitle: "Building useful",
      heroAccent: "web experiences.",
      heroLead: "I'm Jared Blanco, a programming specialist and junior frontend developer in training. I focus on creating clear, responsive, and functional interfaces while continuing to strengthen my skills.",
      exploreProjects: "Explore projects",
      contactMe: "Contact me",
      profileInProgress: "Profile in progress",
      responsiveDesign: "RESPONSIVE DESIGN",
      continuousLearning: "CONTINUOUS LEARNING",
      aboutEyebrow: "01 / PROFILE",
      aboutTitle: "A technical foundation, a practical mindset.",
      aboutLead: "I'm interested in building websites that are easy to use, visually consistent, and adaptable to different screens.",
      aboutDescription: "I'm a programming specialist with knowledge of HTML, CSS, and JavaScript. I also have experience in graphic design and operational work, where I've strengthened my discipline, teamwork, and sense of responsibility.",
      factEducation: "EDUCATION",
      factEducationValue: "Programming specialist",
      factFocus: "CURRENT FOCUS",
      factFocusValue: "Frontend development",
      factLocation: "LOCATION",
      skillsEyebrow: "02 / TOOLKIT",
      skillsTitle: "Skills and technologies",
      skillsLead: "My current knowledge, organized by area. Skill levels are described honestly and can grow alongside my projects.",
      skillWebTitle: "Web development",
      skillWebDescription: "A foundation for structuring and designing responsive web experiences.",
      basicJavascript: "Basic JavaScript",
      skillDataTitle: "Data and automation",
      skillDataDescription: "Fundamentals for organizing information and working with data.",
      skillToolsTitle: "Tools and collaboration",
      skillToolsDescription: "Resources for creating visual assets and working with others.",
      teamwork: "Teamwork",
      responsibility: "Responsibility",
      experienceEyebrow: "03 / CAREER",
      experienceTitle: "Work experience",
      experienceLead: "Experience in operations, production, and technical work that has strengthened my discipline and ability to collaborate.",
      steelMaxDates: "MARCH 2026 – PRESENT",
      warehouseRole: "Warehouse Assistant → Warehouse Manager",
      warehouseDescription: "Warehouse operations, organization and inventory control, stock tracking, and support for daily warehouse activities.",
      cargillDates: "JUNE 2024 – FEBRUARY 2026",
      productionOperator: "Production Operator",
      productionDescription: "Following production processes and quality standards, working under pressure, and coordinating with production teams.",
      distributionDates: "NOVEMBER 2023 – APRIL 2024",
      distributionHelper: "Distribution Assistant",
      distributionDescription: "Logistics support, loading and unloading products, and responsibility for distribution routes.",
      turnerDates: "MAY 2017 – JUNE 2023",
      turner: "Lathe Operator",
      turnerDescription: "Manufacturing metal parts and interpreting technical drawings.",
      experienceNote: "Review dates and job titles before publishing your portfolio. Make sure all information accurately reflects your work history.",
      educationEyebrow: "04 / EDUCATION",
      educationTitle: "Education and learning",
      programmingDegree: "Programming Specialist Technician",
      englishCourse: "English Course — B1 Level",
      highSchool: "High School Diploma",
      projectsEyebrow: "05 / SELECTED WORK",
      projectsTitle: "Projects and experiments",
      projectsLead: "A selection of published work and spaces for new projects once they are ready.",
      published: "Published",
      clickDescription: "A web game built with HTML, CSS, and JavaScript, focused on user interaction and DOM events.",
      webGame: "WEB GAME",
      viewProject: "View project",
      cafeDescription: "A fictional café website with a menu, language selector, light/dark mode, and responsive layouts for mobile and desktop.",
      interactiveWebsite: "INTERACTIVE WEBSITE",
      incomplete: "In progress",
      landingDescription: "Reserved space for a landing page. A link will be added once the project is finished and published.",
      inDevelopment: "In development",
      contactForm: "Contact",
      webForm: "Web form",
      formDescription: "Reserved space for a form with custom styling and basic validation. It is not presented as a published project.",
      projectNote: "Projects marked as “In progress” are temporary portfolio placeholders, not links to completed work.",
      contactEyebrow: "07 / CONTACT",
      contactTitle: "Let's talk about an idea.",
      contactLead: "I'm open to connecting, learning, and discussing opportunities or web projects.",
      footerText: "Designed and developed through continuous learning.",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      switchToEnglish: "Switch language to English",
      switchToSpanish: "Switch language to Spanish",
      switchToLight: "Switch to light theme",
      switchToDark: "Switch to dark theme",
      backToTop: "Back to top"
    }
  };

  function getLanguage() {
    return root.lang === "en" ? "en" : "es";
  }

  function applyTranslations(language) {
    const dictionary = translations[language] || translations.es;

    root.lang = language;
    root.dataset.language = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }
    });

    if (languageLabel) {
      languageLabel.textContent = language === "es" ? "EN" : "ES";
    }

    languageToggle?.setAttribute(
      "aria-label",
      language === "es" ? dictionary.switchToEnglish : dictionary.switchToSpanish
    );

    document.title = language === "es"
      ? "Jared Blanco | Portafolio"
      : "Jared Blanco | Portfolio";

    localStorage.setItem("jared-portfolio-language", language);
  }

  function applyTheme(theme) {
    const selectedTheme = theme === "light" ? "light" : "dark";

    root.dataset.theme = selectedTheme;
    localStorage.setItem("jared-portfolio-theme", selectedTheme);

    if (themeIcon) {
      themeIcon.textContent = selectedTheme === "dark" ? "☼" : "☾";
    }

    themeToggle?.setAttribute(
      "aria-label",
      selectedTheme === "dark"
        ? translations[getLanguage()].switchToLight
        : translations[getLanguage()].switchToDark
    );
  }

  function closeMobileMenu() {
    if (!menuToggle || !navLinks) return;

    menuToggle.classList.remove("is-open");
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", translations[getLanguage()].menuOpen);
  }

  themeToggle?.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });

  languageToggle?.addEventListener("click", () => {
    const newLanguage = getLanguage() === "es" ? "en" : "es";
    applyTranslations(newLanguage);
    applyTheme(root.dataset.theme);
    if (document.getElementById("projectModal")?.classList.contains("is-open")) {
      const activeProjectButton = document.activeElement;
      activeProjectButton?.blur?.();
    }
  });

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("is-open");
    navLinks?.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? translations[getLanguage()].menuClose : translations[getLanguage()].menuOpen
    );
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", (event) => {
    if (
      navLinks?.classList.contains("is-open") &&
      !navLinks.contains(event.target) &&
      !menuToggle?.contains(event.target)
    ) {
      closeMobileMenu();
    }
  });

  const sections = [...document.querySelectorAll("main section[id]")];
  const navigationAnchors = [...document.querySelectorAll(".nav-links a[href^='#']")];

  if ("IntersectionObserver" in window && sections.length && navigationAnchors.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navigationAnchors.forEach((anchor) => {
          const isActive = anchor.getAttribute("href") === `#${entry.target.id}`;
          anchor.classList.toggle("active", isActive);
        });
      });
    }, {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0
    });

    sections.forEach((section) => sectionObserver.observe(section));
  }

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.12
    });

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  function updateBackToTop() {
    backToTop?.classList.toggle("is-visible", window.scrollY > 500);
  }

  window.addEventListener("scroll", updateBackToTop, { passive: true });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  applyTranslations(getLanguage());
  applyTheme(root.dataset.theme || "dark");
  updateBackToTop();
})();

/* Evitar que los enlaces internos agreguen # a la URL */
document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
  enlace.addEventListener("click", (event) => {
    const destino = enlace.getAttribute("href");

    if (destino === "#") {
      event.preventDefault();
      return;
    }

    const seccion = document.querySelector(destino);

    if (seccion) {
      event.preventDefault();
      seccion.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* =====================================================
   DETALLES DE PROYECTOS, TILT 3D Y PARTÍCULAS
   ===================================================== */
(() => {
  "use strict";

  const root = document.documentElement;
  const modal = document.getElementById("projectModal");
  const dialog = modal?.querySelector(".project-modal-dialog");
  const modalTitle = document.getElementById("projectModalTitle");
  const modalDescription = document.getElementById("projectModalDescription");
  const modalObjective = document.getElementById("projectModalObjective");
  const modalFeatures = document.getElementById("projectModalFeatures");
  const modalTech = document.getElementById("projectModalTech");
  const modalLearning = document.getElementById("projectModalLearning");
  const modalLink = document.getElementById("projectModalLink");
  const livePreview = document.getElementById("projectLivePreview");

  let previousFocus = null;

  const projectData = {
    click: {
      title: { es: "Click Challenge", en: "Click Challenge" },
      description: {
        es: "Un juego web centrado en la reacción y la interacción del usuario. La interfaz responde a las acciones del jugador y ofrece una experiencia sencilla de entender.",
        en: "A web game focused on reaction time and user interaction. The interface responds to player actions and aims to provide an experience that is easy to understand."
      },
      objective: {
        es: "Practicar la lógica de interacción del navegador y construir una experiencia pequeña, clara y jugable.",
        en: "Practice browser interaction logic and build a small, clear, playable experience."
      },
      features: {
        es: [
          "Interacción con el usuario",
          "Eventos y manipulación del DOM",
          "Diseño adaptable"
        ],
        en: [
          "User interaction",
          "Events and DOM manipulation",
          "Responsive layout"
        ]
      },
      learning: {
        es: "Manejo de eventos, estructura de una interfaz interactiva y organización de HTML, CSS y JavaScript.",
        en: "Handling events, structuring an interactive interface, and organizing HTML, CSS, and JavaScript."
      },
      technologies: ["HTML5", "CSS3", "JavaScript"],
      url: "https://jasbh121101.github.io/Clickgame/"
    },

    catlogo: {
      title: { es: "JB Collections", en: "JB Collections" },
      description: {
        es: "Sistema de catálogos digitales que reúne las secciones de tecnología y perfumería bajo una misma experiencia de marca.",
        en: "A digital catalog system bringing technology and perfumery sections together under one branded experience."
      },
      objective: {
        es: "Organizar dos líneas de productos en catálogos diferenciados y facilitar la exploración desde dispositivos móviles y computadoras.",
        en: "Organize two product lines into distinct catalogs and make browsing convenient on mobile devices and desktop computers."
      },
      features: {
        es: ["Catálogo de tecnología", "Catálogo de perfumería", "Diseño adaptable a diferentes pantallas", "Accesos directos a cada catálogo"],
        en: ["Technology catalog", "Perfumery catalog", "Responsive layouts", "Direct links to each catalog"]
      },
      learning: {
        es: "Organización de un proyecto con varias secciones públicas y coherencia visual entre catálogos.",
        en: "Structuring a project with multiple public sections and maintaining visual consistency across catalogs."
      },
      technologies: ["HTML5", "CSS3", "JavaScript", "Supabase"],
      url: "https://jasbh121101.github.io/Cat-logo/"
    },

    cafe: {
      title: { es: "Luna Café", en: "Luna Café" },
      description: {
        es: "Sitio web para una cafetería ficticia, diseñado con una dirección visual elegante y una experiencia adaptable a móvil y computadora.",
        en: "A website for a fictional café, designed with an elegant visual direction and a responsive experience for mobile and desktop."
      },
      objective: {
        es: "Crear una experiencia de marca con menú interactivo y controles que permitan explorar la página de forma cómoda.",
        en: "Create a branded experience with an interactive menu and controls that make the website comfortable to explore."
      },
      features: {
        es: [
          "Selector español/inglés",
          "Tema claro y oscuro",
          "Menú adaptable a móvil",
          "Tarjetas de productos y flujo de pedido de demostración"
        ],
        en: [
          "Spanish/English selector",
          "Light and dark themes",
          "Mobile-friendly menu",
          "Product cards and demo ordering flow"
        ]
      },
      learning: {
        es: "Organización de un proyecto visual en archivos separados, manejo del estado de interfaz y pruebas responsive.",
        en: "Organizing a visual web project across separate files, managing interface state, and testing responsive layouts."
      },
      technologies: ["HTML5", "CSS3", "JavaScript"],
      url: "https://jasbh121101.github.io/Luna-cafe/"
    }
  };

  function currentLang() {
    return root.lang === "en" ? "en" : "es";
  }

  function openProject(key, trigger) {
    const project = projectData[key];

    if (!project || !modal) return;

    const lang = currentLang();
    previousFocus = trigger || document.activeElement;

    modalTitle.textContent = project.title[lang];
    modalDescription.textContent = project.description[lang];
    modalObjective.textContent = project.objective[lang];
    modalLearning.textContent = project.learning[lang];

    modalFeatures.replaceChildren();

    project.features[lang].forEach((feature) => {
      const item = document.createElement("li");
      item.textContent = feature;
      modalFeatures.appendChild(item);
    });

    modalTech.replaceChildren();

    project.technologies.forEach((technology) => {
      const tag = document.createElement("span");
      tag.textContent = technology;
      modalTech.appendChild(tag);
    });

    modalLink.href = project.url;

    if (livePreview) {
      livePreview.src = project.url;
      livePreview.title = `${project.title[lang]} — ${lang === "es" ? "vista previa" : "preview"}`;
    }

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    dialog?.focus();
  }

  function closeProjectModal() {
    if (!modal || !modal.classList.contains("is-open")) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");

    if (livePreview) {
      livePreview.src = "about:blank";
    }

    previousFocus?.focus?.();
  }

  /*
   * CORRECCIÓN PRINCIPAL:
   * El HTML usa .project-details-button.
   * El selector anterior buscaba .project-details-trigger,
   * por eso los botones no abrían el modal.
   */
  document.querySelectorAll(".project-details-button").forEach((button) => {
    button.addEventListener("click", () => {
      openProject(button.dataset.project, button);
    });
  });

  modal?.querySelectorAll("[data-modal-close]").forEach((element) => {
    element.addEventListener("click", closeProjectModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProjectModal();
    }

    if (event.key === "Tab" && modal?.classList.contains("is-open") && dialog) {
      const focusable = [
        ...dialog.querySelectorAll('a[href], button:not([disabled])')
      ];

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  /* Inclinación 3D: solo en dispositivos con ratón. */
  const visual = document.querySelector(".hero-visual");
  const codeWindow = visual?.querySelector(".code-window");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (visual && codeWindow && !reduceMotion && hasFinePointer) {
    visual.addEventListener("pointermove", (event) => {
      const bounds = visual.getBoundingClientRect();

      if (!bounds.width || !bounds.height) return;

      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      const rotateY = (x - 0.5) * 10;
      const rotateX = (0.5 - y) * 7;

      codeWindow.style.transform =
        `perspective(1100px) rotateY(${-5 + rotateY}deg) rotateX(${2 + rotateX}deg) translateY(-2px)`;
    });

    visual.addEventListener("pointerleave", () => {
      codeWindow.style.transform = "";
    });
  }

  /* Fondo de partículas ligero. */
  const canvas = document.getElementById("particleCanvas");
  const ctx = canvas?.getContext("2d");

  if (!canvas || !ctx || reduceMotion) {
    canvas?.setAttribute("hidden", "");
    return;
  }

  const smallScreen = window.matchMedia("(max-width: 600px)").matches;
  const particleCount = smallScreen ? 22 : 42;

  let width = 0;
  let height = 0;
  let particles = [];
  let animationFrame = 0;
  let lastDraw = 0;

  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.45,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      alpha: Math.random() * 0.42 + 0.12
    }));
  }

  function drawParticles(timestamp = 0) {
    if (document.hidden) {
      animationFrame = requestAnimationFrame(drawParticles);
      return;
    }

    if (timestamp - lastDraw < 32) {
      animationFrame = requestAnimationFrame(drawParticles);
      return;
    }

    lastDraw = timestamp;
    ctx.clearRect(0, 0, width, height);

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < -5) particle.x = width + 5;
      if (particle.x > width + 5) particle.x = -5;
      if (particle.y < -5) particle.y = height + 5;
      if (particle.y > height + 5) particle.y = -5;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(124, 156, 255, ${particle.alpha})`;
      ctx.fill();

      if (!smallScreen) {
        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 105) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(92, 126, 255, ${0.075 * (1 - distance / 105)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
    });

    animationFrame = requestAnimationFrame(drawParticles);
  }

  resizeCanvas();
  drawParticles();

  window.addEventListener("resize", resizeCanvas, { passive: true });

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && !animationFrame) {
      drawParticles();
    }
  });
})();