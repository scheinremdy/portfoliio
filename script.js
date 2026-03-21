const content = {
  en: {
    heroTitle: "Building skills for a digital future",
    heroSub: "Self-taught · International · Continuously learning",

    about: "I am a 21-year-old self-taught learner who started coding at 19. I believe technology will shape the future, and I am building my skills step by step. This portfolio reflects my early journey and growth.",

    projects: "Projects",
    contact: "Contact",

    p1: "A routing concept focused on sustainability and decision-making logic.",
    p2: "A weather app using API integration and asynchronous JavaScript.",
    p3: "A system to visualize electricity usage and structured data.",
    p4: "An IoT concept exploring energy tracking and system design."
  },

  de: {
    heroTitle: "Kompetenzen für die digitale Zukunft entwickeln",
    heroSub: "Autodidaktisch · International · Lernbereit",

    about: "Ich bin 21 Jahre alt und habe mit 19 begonnen, Programmieren zu lernen. Ich glaube, dass Technologie die Zukunft prägt, und entwickle meine Fähigkeiten Schritt für Schritt.",

    projects: "Projekte",
    contact: "Kontakt",

    p1: "Ein Konzept für nachhaltige Routenplanung mit Entscheidungslogik.",
    p2: "Eine Wetter-App mit API und asynchronem JavaScript.",
    p3: "Ein System zur Visualisierung von Stromverbrauch.",
    p4: "Ein IoT-Konzept zur Energieüberwachung."
  },

  zh: {
    heroTitle: "为数字未来打造技能",
    heroSub: "自学 · 国际背景 · 持续学习",

    about: "我21岁，从19岁开始学习编程。我相信科技正在塑造未来，并且我正在不断提升自己的能力。",

    projects: "项目",
    contact: "联系",

    p1: "一个关于可持续路线规划的项目。",
    p2: "一个使用API获取天气数据的应用。",
    p3: "一个电力使用可视化系统。",
    p4: "一个物联网能源监测概念项目。"
  }
};

function setLang(lang) {
  document.getElementById("hero-title").innerText = content[lang].heroTitle;
  document.getElementById("hero-sub").innerText = content[lang].heroSub;
  document.getElementById("about").innerText = content[lang].about;
  document.getElementById("projects-title").innerText = content[lang].projects;
  document.getElementById("contact-title").innerText = content[lang].contact;

  document.getElementById("p1").innerText = content[lang].p1;
  document.getElementById("p2").innerText = content[lang].p2;
  document.getElementById("p3").innerText = content[lang].p3;
  document.getElementById("p4").innerText = content[lang].p4;
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

setLang('en');
