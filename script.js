const content = {
  en: {
    about: "I am a 21-year-old self-taught digital learner. I started learning coding at 19 because I believe technology plays a major role in the future of the world. This portfolio contains some of my early projects as I continue to grow and improve my skills.",
    projects: "Projects",
    contact: "Contact"
  },

  de: {
    about: "Ich bin eine 21-jährige autodidaktische digitale Lernende. Mit 19 habe ich angefangen, Programmieren zu lernen, weil ich glaube, dass Technologie eine wichtige Rolle in der Zukunft spielt. Dieses Portfolio zeigt einige meiner ersten Projekte, während ich meine Fähigkeiten weiterentwickle.",
    projects: "Projekte",
    contact: "Kontakt"
  },

  zh: {
    about: "我是一名21岁的自学数字学习者。我从19岁开始学习编程，因为我认为科技在未来世界中扮演着重要角色。这个作品集展示了我的一些早期项目，我会继续提升自己的技能。",
    projects: "项目",
    contact: "联系"
  }
};

function setLang(lang) {
  document.getElementById("about").innerText = content[lang].about;
  document.getElementById("projects-title").innerText = content[lang].projects;
  document.getElementById("contact-title").innerText = content[lang].contact;
}

// default language
setLang('en');
