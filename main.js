/* ============================================================
   Preston Frazier — Portfolio 2026
   Edit project content in the PROJECTS array below.
   ============================================================ */

const A = (f) => `assets/${f}.png`;

// size: "" (half) | "wide" | "third"   r: aspect ratio   fit: "contain" for logos/screens
const PROJECTS = [
  {
    id: "revel", title: "REVEL", tag: "Clothing Brand", role: "Founder & CEO", year: "Sept 2023 — Now",
    links: [{ href: "https://revel-us.com", text: "revel-us.com" }, { href: "https://www.instagram.com/r3v3l.us/", text: "@r3v3l.us" }],
    text: "REVEL is my personal clothing brand, founded at Howard University my freshman year on creativity, authenticity, and cultural storytelling. Since launching, I've completed four exclusive drops — all of which sold out entirely. I lead product design, branding, and the web experience from concept to launch, and I built and manage our e-commerce site, revel-us.com. I design every graphic and garment in Procreate and Adobe Photoshop, staying hands-on from concept sketches and color palettes to final production.",
    shots: [
      { f: "revel-1", r: "1/1", fit: "contain", size: "third" }, { f: "revel-2", r: "1/1", fit: "contain", size: "third" }, { f: "revel-3", r: "1/1", fit: "contain", size: "third" },
      { f: "revel-4", r: "1/1" }, { f: "revel-5", r: "1/1" }, { f: "revel-6", r: "1/1" }, { f: "revel-7", r: "1/1" },
    ],
  },
  {
    id: "nybble", title: "Nybble Group", tag: "UX Intern", role: "UX Designer Intern · Miami, FL", year: "May — Jul 2025",
    text: "I redesigned a mobile educational app for children with disabilities, working closely with product managers, engineers, and accessibility consultants. I built wireframes and high-fidelity prototypes in Figma, then folded usability-testing feedback back into the design to improve the app's functionality and meet accessibility standards.",
    shots: [
      { f: "nybble-1", r: "984/384", fit: "contain", size: "wide" },
      { f: "nybble-3", r: "284/400", fit: "contain", size: "third" }, { f: "nybble-5", r: "679/297", fit: "contain", size: "" },
      { f: "nybble-2", r: "719/341", fit: "contain", size: "wide" },
      { f: "nybble-4", r: "984/416", fit: "contain", size: "wide" },
    ],
  },
  {
    id: "vdart", title: "VDart", tag: "UX Design", role: "UX Designer Intern · Atlanta, GA", year: "May — Jul 2024",
    text: "At VDart I collaborated with cross-functional teams to design the front-end experience for an AI-powered résumé platform. I partnered with designers and developers using Figma, Framer, and Adobe tools to refine intuitive user interfaces, and contributed to iterative design discussions that strengthened the product's UX/UI and AI integration.",
    shots: [
      { f: "vdart-2", r: "521/351", fit: "contain", fitDark: true }, { f: "vdart-3", r: "521/351", fit: "contain", fitDark: true },
      { f: "vdart-1", r: "3/4", fit: "contain", fitDark: true, size: "third" }, { f: "vdart-4", r: "421/302", fit: "contain", size: "" },
    ],
  },
  {
    id: "barber", title: "Off The Hook", tag: "Design", role: "Logo Redesign · Atlanta, GA", year: "2022",
    text: "For a barbershop's 25th anniversary in Atlanta, I redesigned the logo — meaningful work given the city's barbershop culture. I started in Photoshop and finished in Procreate, keeping it simple and bold with a gold \"25\" as the focal point. The circular layout and sharp type gave the brand a timeless refresh that carried onto anniversary T-shirts.",
    shots: [{ f: "barber-1", r: "1/1", fit: "contain" }, { f: "barber-2", r: "1/1", fit: "contain", fitDark: true }],
  },
  {
    id: "tlc", title: "Tender Loving Care", tag: "Design", role: "Rebrand · Tuscaloosa, AL", year: "2022",
    text: "I rebranded the logo and homepage for Tender Loving Care Daycare. Starting from a rough client draft, I sketched in Procreate and finished in Photoshop, choosing orange, purple, and blue to reflect warmth, creativity, and play. Two illustrated children alongside the type express the brand's purpose — applied across the website, merchandise, and uniforms.",
    shots: [{ f: "tlc-1", r: "505/245", fit: "contain", size: "wide" }, { f: "tlc-2", r: "993/412", fit: "contain", size: "wide" }, { f: "tlc-3", r: "466/320", size: "wide" }],
  },
  {
    id: "brittian", title: "Brittian Construction", tag: "Design", role: "Logo & Apparel", year: "",
    text: "Identity work for Brittian Construction Co. (est. 1982) — a bold red house-mark logo applied across branded apparel and merchandise.",
    shots: [{ f: "brittian-1", r: "845/381", fit: "contain", size: "wide" }, { f: "brittian-2", r: "466/550" }, { f: "brittian-3", r: "466/550", fit: "contain" }],
  },
  {
    id: "logos", title: "Freelance Logos", tag: "Design", role: "Logo Design Services", year: "Ongoing",
    text: "Alongside my clothing and branding work, I design custom logos for DJs, musicians, campus organizations, and creative startups. Each mark blends custom typography, hand-drawn elements, and digital effects — sketched in Procreate and finished in Photoshop or Illustrator — whether it's a bold chrome effect, a cartoon character, or a vintage crest.",
    shots: [{ f: "logos-1", r: "830/578", fit: "contain" }, { f: "logos-2", r: "830/578", fit: "contain" }, { f: "logos-3", r: "1/1", fit: "contain" }, { f: "logos-4", r: "1/1", fit: "contain" }],
  },
  {
    id: "presflicks", title: "PresFlicks", tag: "Photography", role: "Photography Brand", year: "Ongoing", reel: true,
    text: "Through PresFlicks, I capture bold, intentional visuals that elevate brands, people, and organizations. I shoot all the content for my own clothing line and collaborate with other brands, student organizations, and models. From directing and shooting to editing in Lightroom and Photoshop, I handle the full production to deliver imagery that feels authentic, curated, and sharp.",
    shots: ["photo-1", "photo-2", "photo-3", "photo-4", "photo-5", "photo-6", "photo-7", "photo-8", "photo-9"].map((f) => ({ f })),
  },
  {
    id: "fullcup", title: "Fullcup", tag: "Branding", role: "Merch Brand · Founder", year: "2020",
    text: "In 2020 I started Fullcup, a merchandising brand, and designed its identity myself — sketching in Procreate and finishing in Illustrator. Vibrant color pulls the eye, \"Full\" drips like an overfilled cup, and \"cup\" runs vertically along the side to add direction. The system includes a logomark and two logotypes.",
    shots: [{ f: "fullcup-1", r: "1/1", fit: "contain", size: "third" }, { f: "fullcup-3", r: "434/184", fit: "contain", size: "" }, { f: "fullcup-2", r: "755/172", fit: "contain", size: "wide" }],
  },
  {
    id: "flyers", title: "Flyers", tag: "Design", role: "Events · Campaigns · Pop-ups", year: "",
    text: "Flyers for pop-up shops, brand promotions, and campus campaigns — each tuned to its audience, from bold and energetic student events to sleek brand activations and themed election campaigns. I combine Photoshop and Procreate to build layouts with custom elements that grab attention while communicating clearly.",
    shots: [{ f: "flyer-1", r: "2/3" }, { f: "flyer-2", r: "2/3" }, { f: "flyer-3", r: "2/3" }, { f: "flyer-4", r: "2/3" }],
  },
  {
    id: "husa", title: "HUSA", tag: "Design", role: "PR Visual Designer & Photographer", year: "Aug 2025 — Now",
    text: "As Public Relations Visual Designer & Photographer for the 65th Howard University Student Association, I've designed 30+ social media graphics, flyers, and campaign materials and produced visual content for HUSA programs and events. I keep the brand consistent while bringing creative direction to initiatives that amplify student voices and promote HUSA's mission of advocacy, leadership, and service.",
    shots: ["husa-1", "husa-2", "husa-3", "husa-4", "husa-5", "husa-6"].map((f) => ({ f, r: "1/1", size: "third" })),
  },
  {
    id: "medical", title: "Medical Brigades", tag: "Branding", role: "Howard University Chapter", year: "",
    text: "A refreshed logo for the Medical Brigades Howard University Chapter, an organization providing medical, dental, and vision care to underserved communities abroad. The redesign modernizes the brand while preserving its mission, emphasizing community impact, global service, and creative expression.",
    shots: [{ f: "med-1", r: "1/1", fit: "contain" }, { f: "med-2", r: "1/1", fit: "contain", fitDark: true }],
  },
  {
    id: "stacks", title: "Stacks Attire", tag: "Branding", role: "Logo & Brand Materials", year: "",
    text: "The Stacks Attire logo and supporting brand materials — blending modern sophistication with fashion-inspired details to reflect individuality, craftsmanship, and creative expression.",
    shots: [{ f: "stacks-1", r: "1/1", fit: "contain" }, { f: "stacks-3", r: "1/1", fit: "contain", fitDark: true }, { f: "stacks-2", r: "784/413", fit: "contain", size: "wide" }],
  },
];

/* ---------- render ---------- */
const pad = (n) => String(n).padStart(2, "0");
const projectsEl = document.getElementById("projects");
const indexEl = document.getElementById("index");

PROJECTS.forEach((p, i) => {
  const n = pad(i + 1);
  indexEl.insertAdjacentHTML("beforeend",
    `<li><a href="#${p.id}" data-preview="${A(p.shots[0].f)}"><span class="index__n">${n}</span><span class="index__t">${p.title}</span><span class="index__c">${p.tag}</span></a></li>`);

  const head = `
    <div class="project__head">
      <div>
        <div class="project__meta reveal-up"><span class="tag tag--accent">${p.tag}</span><span class="tag">${p.role}</span>${p.year ? `<span class="tag">${p.year}</span>` : ""}</div>
        <h2 class="project__title"><span class="line"><span class="split">${p.title}</span></span></h2>
      </div>
      <span class="project__num" data-speed="0.85">${n}</span>
    </div>`;
  // first sentence = lead; the rest = short paragraphs of two sentences
  const sentences = p.text.split(/(?<=[.!?])\s+(?=[A-Z"“])/);
  const lead = sentences.shift();
  const paras = [];
  for (let k = 0; k < sentences.length; k += 2) paras.push(sentences.slice(k, k + 2).join(" "));
  const links = (p.links || []).map((l) => `<a class="project__link" href="${l.href}" target="_blank" rel="noopener" data-hover>${l.text} ↗</a>`).join("");
  const overview = `
    <div class="project__overview${p.reel ? " project__overview--wide" : ""} reveal-up">
      <p class="eyebrow ov__label">Overview</p>
      <p class="ov__lead">${lead}</p>
      ${paras.length || links ? `<div class="ov__body">${paras.map((t) => `<p>${t}</p>`).join("")}${links ? `<div class="ov__links">${links}</div>` : ""}</div>` : ""}
    </div>`;

  if (p.reel) {
    projectsEl.insertAdjacentHTML("beforeend", `
      <section class="reel" id="${p.id}">
        ${head}
        <div class="project__body">${overview}<div></div></div>
        <div class="reel__track">${p.shots.map((s) => `<figure class="reel__item" data-img><img src="${A(s.f)}" alt="${p.title} photograph" loading="lazy"></figure>`).join("")}</div>
        <div class="reel__progress"><i></i></div>
      </section>`);
    return;
  }

  const shots = p.shots.map((s) => {
    const cls = ["shot", s.size ? `shot--${s.size}` : "", s.fit ? "shot--contain" : "", s.fitDark ? "shot--dark" : ""].join(" ");
    return `<figure class="${cls}" style="--r:${s.r || "4/3"}" data-img><img src="${A(s.f)}" alt="${p.title} — project image" loading="lazy"></figure>`;
  }).join("");

  projectsEl.insertAdjacentHTML("beforeend", `
    <section class="project" id="${p.id}">
      ${head}
      <div class="project__body">${overview}<div class="gallery">${shots}</div></div>
    </section>`);
});

/* ---------- tool logos ---------- */
const ico = (slug, color) => `<i class="ico" style="--ico:url(assets/icons/${slug}.svg);--c:${color}"></i>`;
// [icon file, brand color, label]
const I = {
  html5: ["html5", "#E34F26", "HTML5"], css3: ["css", "#1572B6", "CSS3"], js: ["javascript", "#E8C900", "JavaScript"],
  react: ["react", "#149ECA", "React"], figma: ["figma", "#F24E1E", "Figma"], adobe: ["adobe", "#FF0000", "Adobe"],
  git: ["git", "#F05032", "Git"], mysql: ["mysql", "#4479A1", "MySQL"], cpp: ["cplusplus", "#00599C", "C++"],
  python: ["python", "#3776AB", "Python"], kotlin: ["kotlin", "#7F52FF", "Kotlin"], java: ["openjdk", "#ED8B00", "Java"],
  streamlit: ["streamlit", "#FF4B4B", "Streamlit"], rest: ["restapi", "#0b0b0b", "REST APIs"],
  android: ["android", "#3DDC84", "Android Development"], gcloud: ["googlecloud", "#4285F4", "Google Cloud"],
  framer: ["framer", "#0055FF", "Framer"], ps: ["adobephotoshop", "#31A8FF", "Adobe Photoshop"], ai: ["adobeillustrator", "#FF9A00", "Adobe Illustrator"],
  cc: ["adobecreativecloud", "#DA1F26", "Adobe Creative Cloud"], github: ["github", "#0b0b0b", "GitHub"], vscode: ["vscode-plain", "#007ACC", "Visual Studio Code"],
  studio: ["androidstudio", "#3DDC84", "Android Studio"], node: ["nodedotjs", "#5FA04E", "Node.js"], ts: ["typescript", "#3178C6", "TypeScript"],
  mongo: ["mongodb", "#47A248", "MongoDB"], firebase: ["firebase", "#DD2C00", "Firebase"],
};
const TECH = ["html5", "css3", "js", "react", "figma", "adobe", "git", "mysql", "cpp", "python", "kotlin", "java", "streamlit", "rest", "android", "gcloud"];
const UX = ["Product Design", "UX Research", "Wireframing & Prototyping", "Interaction Design", "Design Systems", "User Flows", "Usability Testing", "Responsive Web Design", "Brand Identity & Visual Design", "Accessibility"];
const KIT = [
  ["Design & Product", ["figma", "framer", "ps", "ai", "cc"]],
  ["Development", ["react", "js", "python", "java", "kotlin", "cpp", "html5", "css3"]],
  ["Tools & Platforms", ["git", "github", "vscode", "studio", "streamlit", "mysql", "gcloud"]],
  ["Currently Learning", ["node", "ts", "mongo", "firebase"], true],
];
const icoOf = (k) => ico(I[k][0], I[k][1]);
document.getElementById("logos").innerHTML =
  TECH.map((k) => `<div class="logo" data-hover>${icoOf(k)}<span>${I[k][2]}</span></div>`).join("") +
  `<a class="logo logo--more" href="#toolkit" data-hover><span>Full toolkit</span><b>↓</b></a>`;
document.getElementById("ux").innerHTML = UX.map((t, i) => `<li><span>${pad(i + 1)}</span>${t}</li>`).join("");
document.getElementById("kit").innerHTML = KIT.map(([title, keys, learning]) => `
  <div class="kit__col${learning ? " kit__col--learning" : ""}">
    <p class="kit__title">${title}</p>
    <ul class="chips chips--sm${learning ? " chips--ghost" : ""}">${keys.map((k) => `<li>${icoOf(k)}${I[k][2]}</li>`).join("")}</ul>
  </div>`).join("");

/* ---------- GitHub repos (live, with a built-in fallback) ---------- */
const GH_USER = "pfrazier2x";
const GH_SKIP = ["readme.txt"];
const GH_FEATURED = "FlixsterPlus";
const LANG_COLORS = { Kotlin: "#A97BFF", Python: "#3572A5", HTML: "#E34C26", JavaScript: "#F1E05A", Java: "#B07219", "C++": "#F34B7D", TypeScript: "#3178C6", CSS: "#563D7C" };
const NICE = {
  FlixsterPlus: ["Flixster+", "Android app that shows popular movies from The Movie Database API with detailed movie info."],
  Flixster: ["Flixster", "Android movie-browsing app using The Movie Database API."],
  Wishlist: ["Wishlist", "Android wishlist app built in Kotlin."],
  Wordle: ["Wordle", "Word-guessing game for Android, built in Kotlin."],
  "senior-project-practice": ["Senior Project Practice", "Practice repository for my senior project."],
  LSP_Repo_PresF: ["LSP Repo", "Coursework repository for LSP, Spring 2025."],
  "skills-introduction-to-github": ["Intro to GitHub", "GitHub Skills exercise: Introduction to GitHub."],
  "ai110-module3show-musicrecommendersimulation-starter": ["Music Recommender Simulation", "AI110 Module 3 project."],
  "ai110-module2show-pawpal-starter": ["PawPal", "AI110 Module 2 project."],
  "ai110-module1show-gameglitchinvestigator-starter": ["Game Glitch Investigator", "AI110 Module 1 project."],
};
const FALLBACK_REPOS = [
  ["ai110-module3show-musicrecommendersimulation-starter", "Python", "2026-11-04", true],
  ["ai110-module2show-pawpal-starter", "Python", "2026-10-13", true],
  ["ai110-module1show-gameglitchinvestigator-starter", "Python", "2026-10-08", true],
  ["FlixsterPlus", "Kotlin", "2026-09-29"], ["Flixster", "Kotlin", "2026-09-21"], ["Wishlist", "Kotlin", "2026-09-09"],
  ["skills-introduction-to-github", null, "2026-09-01"], ["senior-project-practice", "Python", "2026-09-01"],
  ["Wordle", "Kotlin", "2026-09-01"], ["LSP_Repo_PresF", "HTML", "2025-04-24"],
].map(([name, language, updated_at, fork]) => ({ name, language, updated_at, fork: !!fork, description: "", html_url: `https://github.com/${GH_USER}/${name}`, homepage: "", stargazers_count: 0 }));

const prettify = (n) => n.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
const fmtDate = (d) => new Date(d).toLocaleDateString("en-US", { month: "short", year: "numeric" });

function renderRepos(list) {
  list = list.filter((r) => !GH_SKIP.includes(r.name))
    .sort((a, b) => (b.name === GH_FEATURED) - (a.name === GH_FEATURED) || new Date(b.updated_at) - new Date(a.updated_at));
  document.getElementById("repo-count").textContent = `(${list.length})`;
  document.getElementById("repos").innerHTML = list.map((r) => {
    const [title, desc] = NICE[r.name] || [prettify(r.name), ""];
    const lc = LANG_COLORS[r.language] || "#888";
    return `<a class="repo tilt${r.name === GH_FEATURED ? " repo--feat" : ""}" href="${r.html_url}" target="_blank" rel="noopener" data-hover>
      <div class="repo__top"><span>${r.name === GH_FEATURED ? "Featured" : r.fork ? "Course fork" : "Repository"}</span>${ico("github", "var(--ink)")}</div>
      <h3>${title}</h3>
      <p>${r.description || desc || `${r.language || "Code"} repository.`}</p>
      <div class="repo__meta">${r.language ? `<span class="lang" style="--lc:${lc}"><i></i>${r.language}</span>` : ""}<span>Updated ${fmtDate(r.updated_at)}</span>${r.stargazers_count ? `<span>★ ${r.stargazers_count}</span>` : ""}<span class="repo__arrow">↗</span></div>
    </a>`;
  }).join("");
  revealRepos();
  if (window.__bindTilt) window.__bindTilt(document.querySelectorAll(".repo"));
  if (window.ScrollTrigger) ScrollTrigger.refresh();
}
function revealRepos() {
  const cards = document.querySelectorAll(".repo");
  if (!("IntersectionObserver" in window)) { document.documentElement.classList.add("no-io"); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const i = [...cards].indexOf(e.target);
    e.target.style.transitionDelay = `${(i % 3) * 0.08}s`;
    e.target.classList.add("in");
    io.unobserve(e.target);
  }), { rootMargin: "0px 0px -10% 0px" });
  cards.forEach((c) => io.observe(c));
}
renderRepos(FALLBACK_REPOS);
fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`)
  .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
  .then((data) => Array.isArray(data) && data.length && renderRepos(data))
  .catch(() => {});

/* ---------- environment ---------- */
const root = document.documentElement;
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const hasGSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
if (reduce) root.classList.add("reduce");

/* ---------- menu ---------- */
const burger = document.querySelector(".nav__burger");
burger.addEventListener("click", () => {
  const open = document.body.classList.toggle("menu-open");
  burger.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".menu a").forEach((a) => a.addEventListener("click", () => document.body.classList.remove("menu-open")));

/* ---------- lightbox ---------- */
const lb = document.querySelector(".lightbox");
const lbImg = lb.querySelector("img");
document.addEventListener("click", (e) => {
  const fig = e.target.closest("[data-img]");
  if (!fig) return;
  const img = fig.querySelector("img");
  lbImg.src = img.src; lbImg.alt = img.alt;
  lb.classList.add("open"); lb.setAttribute("aria-hidden", "false");
});
const closeLb = () => { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); };
lb.addEventListener("click", (e) => { if (e.target !== lbImg) closeLb(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeLb(); document.body.classList.remove("menu-open"); } });

/* ---------- bail out gracefully ---------- */
if (!hasGSAP || reduce) {
  root.classList.remove("js");
  document.querySelectorAll("[data-count]").forEach((el) => (el.textContent = el.dataset.count));
  document.querySelectorAll(".shot").forEach((el) => el.style.setProperty("--wipe", 0));
} else {
  root.classList.add("js");
  initMotion();
}

function initMotion() {
  gsap.registerPlugin(ScrollTrigger);

  /* smooth scroll */
  let lenis = null;
  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      lenis ? lenis.scrollTo(target, { offset: 0, duration: 1.6 }) : target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* split text into chars */
  document.querySelectorAll(".split").forEach((el) => {
    const nodes = [...el.childNodes];
    el.innerHTML = "";
    nodes.forEach((node) => {
      if (node.nodeType === 3) {
        node.textContent.split("").forEach((ch) => {
          const s = document.createElement("span");
          s.className = "char";
          s.innerHTML = ch === " " ? "&nbsp;" : ch;
          el.appendChild(s);
        });
      } else {
        node.classList.add("char");
        el.appendChild(node);
      }
    });
  });

  /* words for scrub paragraph */
  document.querySelectorAll(".scrub-words").forEach((el) => {
    el.innerHTML = el.textContent.trim().split(/\s+/).map((w) => `<span class="w">${w}</span>`).join(" ");
  });

  /* preloader */
  const loader = document.querySelector(".loader");
  const num = loader.querySelector(".loader__num");
  const counter = { v: 0 };
  lenis && lenis.stop();
  const intro = gsap.timeline({ onComplete: () => { lenis && lenis.start(); ScrollTrigger.refresh(); } });
  intro
    .from(".loader__mark span", { yPercent: 120, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power4.out" })
    .to(counter, { v: 100, duration: 1.6, ease: "power2.inOut", onUpdate: () => (num.textContent = Math.round(counter.v)) }, 0)
    .to(".loader__bar i", { scaleX: 1, duration: 1.6, ease: "power2.inOut" }, 0)
    .to(".loader__inner", { yPercent: -40, opacity: 0, duration: 0.6, ease: "power3.in" })
    .to(loader, { clipPath: "inset(0 0 100% 0)", duration: 1, ease: "expo.inOut" }, "-=0.2")
    .set(loader, { display: "none" })
    .from(".hero__slab", { clipPath: "polygon(100% 0,100% 0,100% 100%,100% 100%)", duration: 1.4, ease: "expo.inOut" }, "-=1")
    .from(".hero__title .char", { yPercent: 110, rotate: 8, stagger: 0.035, duration: 1.1, ease: "expo.out" }, "-=0.9")
    .from(".hero__frame", { clipPath: "inset(100% 0 0 0)", duration: 1.4, ease: "expo.inOut" }, "<")
    .from(".hero__img", { scale: 1.4, duration: 1.8, ease: "expo.out" }, "<0.2")
    .from(".hero .reveal-up, .hero__hi", { y: 30, opacity: 0, stagger: 0.08, duration: 0.9, ease: "power3.out" }, "-=1.2")
    .from(".nav > *", { y: -30, opacity: 0, stagger: 0.06, duration: 0.8, ease: "power3.out" }, "-=1")
    .from(".hero__badge", { scale: 0, rotate: -90, duration: 1, ease: "back.out(1.6)" }, "-=0.8");

  /* hero parallax */
  gsap.to(".hero__img", { yPercent: -12, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
  gsap.to(".hero__copy", { yPercent: 30, opacity: 0.2, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  /* marquee — direction follows scroll */
  const track = document.querySelector(".marquee__track");
  const mq = gsap.to(track, { xPercent: -50, duration: 22, ease: "none", repeat: -1 });
  ScrollTrigger.create({
    onUpdate: (self) => {
      const v = self.getVelocity();
      gsap.to(mq, { timeScale: (self.direction) * Math.min(4, 1 + Math.abs(v) / 600), duration: 0.3, overwrite: true });
    },
  });

  /* generic reveals (skip the hero — the intro handles it) */
  gsap.utils.toArray(".reveal-up").filter((el) => !el.closest(".hero")).forEach((el) => {
    gsap.from(el, { y: 50, opacity: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
  });
  gsap.utils.toArray(".line .split").filter((el) => !el.closest(".hero")).forEach((el) => {
    gsap.from(el.querySelectorAll(".char"), { yPercent: 110, rotate: 6, stagger: 0.025, duration: 1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 90%" } });
  });

  /* about: word-by-word highlight */
  gsap.to(".about__lead .w", { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: ".about__lead", start: "top 80%", end: "bottom 45%", scrub: true } });

  /* services + chips */
  gsap.from(".service", { y: 80, opacity: 0, stagger: 0.12, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: ".services", start: "top 85%" } });
  gsap.from(".logo", { y: 40, opacity: 0, stagger: { each: 0.05, grid: "auto", from: "start" }, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".logos", start: "top 85%" } });
  gsap.fromTo(".logo .ico", { scale: 0, rotate: -90 }, { scale: 1, rotate: 0, stagger: 0.05, duration: 0.9, ease: "back.out(2)", clearProps: "transform", scrollTrigger: { trigger: ".logos", start: "top 85%" } });
  gsap.from(".xp li", { y: 24, opacity: 0, stagger: 0.06, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".xp", start: "top 88%" } });
  gsap.from(".ux li", { y: 30, opacity: 0, stagger: 0.04, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".ux", start: "top 85%" } });
  gsap.utils.toArray(".kit__col").forEach((col) => gsap.from(col.querySelectorAll(".chips li"), { y: 20, opacity: 0, stagger: 0.035, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: col, start: "top 90%" } }));

  /* counters */
  document.querySelectorAll("[data-count]").forEach((el) => {
    const o = { v: 0 };
    gsap.to(o, { v: +el.dataset.count, duration: 1.6, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 90%" }, onUpdate: () => (el.textContent = Math.round(o.v)) });
  });

  /* index rows */
  gsap.from(".index li", { y: 40, opacity: 0, stagger: 0.05, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".index", start: "top 85%" } });

  /* project galleries: color wipe + parallax */
  gsap.utils.toArray(".shot").forEach((shot) => {
    const img = shot.querySelector("img");
    gsap.to(shot, { "--wipe": 0, duration: 1.1, ease: "expo.inOut", scrollTrigger: { trigger: shot, start: "top 88%" } });
    gsap.from(img, { scale: 1.35, duration: 1.6, ease: "expo.out", scrollTrigger: { trigger: shot, start: "top 88%" } });
    if (!shot.classList.contains("shot--contain")) {
      gsap.fromTo(img, { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: shot, start: "top bottom", end: "bottom top", scrub: true } });
    }
  });
  gsap.utils.toArray("[data-speed]").forEach((el) => {
    gsap.to(el, { y: () => (1 - parseFloat(el.dataset.speed)) * -400, ease: "none", scrollTrigger: { trigger: el.closest("section"), start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true } });
  });

  /* PresFlicks horizontal reel (desktop only) */
  const mm = gsap.matchMedia();
  mm.add("(min-width: 761px)", () => {
    const reel = document.querySelector(".reel");
    const rt = reel.querySelector(".reel__track");
    const dist = () => rt.scrollWidth - window.innerWidth;
    const tween = gsap.to(rt, {
      x: () => -dist(), ease: "none",
      scrollTrigger: { trigger: rt, start: "center center", end: () => "+=" + dist(), pin: reel, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 },
    });
    gsap.to(".reel__progress i", { scaleX: 1, ease: "none", scrollTrigger: { trigger: rt, start: "center center", end: () => "+=" + dist(), scrub: true, invalidateOnRefresh: true } });
    gsap.utils.toArray(".reel__item img").forEach((img) => {
      gsap.fromTo(img, { scale: 1.25 }, { scale: 1, ease: "none", scrollTrigger: { trigger: img.parentElement, containerAnimation: tween, start: "left right", end: "center center", scrub: true } });
    });
  });

  /* certs */
  gsap.from(".cert", { y: 120, rotateX: -35, opacity: 0, stagger: 0.12, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".certs__grid", start: "top 85%" } });

  /* contact */
  gsap.from(".contact__mail", { scale: 0.8, opacity: 0, duration: 1, ease: "back.out(1.7)", scrollTrigger: { trigger: ".contact__mail", start: "top 90%" } });

  /* nav hides on scroll down */
  const nav = document.querySelector(".nav");
  ScrollTrigger.create({
    start: 200,
    onUpdate: (s) => gsap.to(nav, { yPercent: s.direction === 1 && !document.body.classList.contains("menu-open") ? -120 : 0, duration: 0.5, ease: "power3.out", overwrite: true }),
  });

  if (finePointer) initPointer();
}

/* ---------- pointer-only effects ---------- */
function initPointer() {
  document.body.classList.add("has-cursor");
  const cursor = document.querySelector(".cursor");
  const dot = cursor.querySelector(".cursor__dot");
  const ring = cursor.querySelector(".cursor__ring");
  const preview = document.querySelector(".preview");
  const previewImg = preview.querySelector("img");

  const dx = gsap.quickTo(dot, "x", { duration: 0.08 }), dy = gsap.quickTo(dot, "y", { duration: 0.08 });
  const rx = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3" }), ry = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3" });
  const px = gsap.quickTo(preview, "x", { duration: 0.7, ease: "power3" }), py = gsap.quickTo(preview, "y", { duration: 0.7, ease: "power3" });

  window.addEventListener("pointermove", (e) => {
    dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY);
    px(e.clientX + 30); py(e.clientY - 180);
  });

  document.addEventListener("pointerover", (e) => {
    const t = e.target;
    cursor.classList.toggle("is-view", !!t.closest("[data-img]"));
    cursor.classList.toggle("is-hover", !!t.closest("a, button, [data-hover]") && !t.closest("[data-img]"));
  });

  /* project index hover preview */
  document.querySelectorAll(".index a").forEach((a) => {
    a.addEventListener("pointerenter", () => {
      previewImg.src = a.dataset.preview;
      gsap.to(preview, { opacity: 1, scale: 1, rotate: gsap.utils.random(-6, 6), duration: 0.5, ease: "power3.out", overwrite: true });
    });
    a.addEventListener("pointerleave", () => gsap.to(preview, { opacity: 0, scale: 0.8, duration: 0.4, ease: "power3.out", overwrite: true }));
  });

  /* magnetic */
  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1,0.4)" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1,0.4)" });
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
    });
    el.addEventListener("pointerleave", () => { xTo(0); yTo(0); });
  });

  /* 3D tilt + spotlight */
  window.__bindTilt = (els) => els.forEach((el) => {
    if (el.dataset.tilt) return;
    el.dataset.tilt = "1";
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.setProperty("--mx", x * 100 + "%"); el.style.setProperty("--my", y * 100 + "%");
      gsap.to(el, { rotateY: (x - 0.5) * 14, rotateX: (0.5 - y) * 14, transformPerspective: 900, duration: 0.5, ease: "power2.out" });
    });
    el.addEventListener("pointerleave", () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "elastic.out(1,0.5)" }));
  });
  window.__bindTilt(document.querySelectorAll(".tilt"));
}
