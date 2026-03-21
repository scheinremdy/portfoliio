const content = {
  en: {
    about: "I am a 21-year-old self-taught digital learner. I started learning coding at 19 because I believe technology is a major factor shaping the future. This portfolio presents some of my early projects as I continue to grow.",
    projects: "Projects",
    contact: "Contact",
    p1: "A routing concept focused on sustainable mobility. Built with JavaScript logic to simulate decision-making and route selection.",
    p2: "A weather application using API integration and asynchronous JavaScript to fetch and display real-time data.",
    p3: "A project focused on visualizing electricity usage through structured data handling and UI design.",
    p4: "A conceptual IoT-based system exploring energy monitoring and data flow integration."
  },

  de: {
    about: "Ich bin eine 21-jährige autodidaktische digitale Lernende. Mit 19 begann ich zu programmieren, da ich glaube, dass Technologie die Zukunft stark beeinflusst. Dieses Portfolio zeigt einige meiner ersten Projekte.",
    projects: "Projekte",
    contact: "Kontakt",
    p1: "Ein Konzept für nachhaltige Routenplanung mit JavaScript-Logik und Entscheidungsprozessen.",
    p2: "Eine Wetter-App mit API-Integration und asynchronem JavaScript zur Anzeige von Echtzeitdaten.",
    p3: "Ein Projekt zur Visualisierung von Stromverbrauch mit strukturierten Daten und UI-Design.",
    p4: "Ein IoT-Konzept zur Überwachung von Energieverbrauch und Datenfluss."
  },

  zh: {
    about: "我是一名21岁的自学数字学习者。我从19岁开始学习编程，因为我认为科技正在塑造未来。这个作品集展示了我的一些早期项目。",
    projects: "项目",
    contact: "联系",
    p1: "一个专注于可持续交通的路径规划项目，使用JavaScript逻辑进行决策模拟。",
    p2: "一个使用API和异步JavaScript获取实时天气数据的应用。",
    p3: "一个用于可视化电力使用的数据项目，注重界面设计。",
    p4: "一个基于物联网的能源监测概念项目。"
  }
};

function setLang(lang) {
  document.getElementById("about").innerText = content[lang].about;
  document.getElementById("projects-title").innerText = content[lang].projects;
  document.getElementById("contact-title").innerText = content[lang].contact;

  document.getElementById("p1").innerText = content[lang].p1;
  document.getElementById("p2").innerText = content[lang].p2;
  document.getElementById("p3").innerText = content[lang].p3;
  document.getElementById("p4").innerText = content[lang].p4;
}

setLang('en');
