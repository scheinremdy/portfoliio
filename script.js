const content = {
  en: {
    projects: "Projects",
    proj1: "A routing concept focused on sustainable mobility. Built using JavaScript logic for decision-making and user input handling.",
    proj2: "Displays real-time weather data using API integration. Focused on asynchronous JavaScript and data fetching.",
    proj3: "A system to visualize electricity usage, emphasizing structured data and user-friendly presentation.",
    proj4: "An IoT-based concept exploring energy monitoring and data flow between systems."
  },

  de: {
    projects: "Projekte",
    proj1: "Ein Routing-Konzept für nachhaltige Mobilität. Entwickelt mit JavaScript-Logik zur Entscheidungsfindung.",
    proj2: "Zeigt Wetterdaten in Echtzeit durch API-Integration. Fokus auf asynchrone Datenverarbeitung.",
    proj3: "Ein System zur Visualisierung von Stromverbrauch mit strukturierter Datendarstellung.",
    proj4: "Ein IoT-Konzept zur Überwachung von Energie und Datenfluss zwischen Systemen."
  },

  zh: {
    projects: "项目",
    proj1: "一个专注于可持续交通的路线规划概念，使用JavaScript处理逻辑和用户输入。",
    proj2: "通过API获取实时天气数据，重点是异步数据处理。",
    proj3: "一个用于电力消耗可视化的系统，强调数据结构和界面设计。",
    proj4: "一个基于物联网的能源监控概念，关注数据流和系统交互。"
  }
};

function setLang(lang) {
  document.getElementById("projects-title").innerText = content[lang].projects;
  document.getElementById("proj1").innerText = content[lang].proj1;
  document.getElementById("proj2").innerText = content[lang].proj2;
  document.getElementById("proj3").innerText = content[lang].proj3;
  document.getElementById("proj4").innerText = content[lang].proj4;
}

setLang('en');
