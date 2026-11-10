/* ============================================================
   Preston Frazier — Portfolio 2026
   Content lives in CASES (featured case studies) and PROJECTS (archive).
   Only facts from the résumé, Figma file, GitHub READMEs, or Preston
   himself belong here — leave a field out rather than guess.
   ============================================================ */

/* ---------- assets ---------- */
const JPG = new Set([
  "brittian-2", "nybble-2", "nybble-3", "nybble-4", "nybble-5", "revel-4", "revel-5", "revel-6", "revel-7",
  "stacks-2", "tlc-2", "vdart-4", "husa-1", "husa-2", "husa-3", "husa-4", "husa-5", "husa-6",
  "photo-1", "photo-2", "photo-3", "photo-4", "photo-5", "photo-6", "photo-7", "photo-8", "photo-9",
  "flyer-1", "flyer-2", "flyer-3", "flyer-4", "cp-flixsterplus", "cp-flixster", "cp-wishlist", "cp-wordle",
]);
const A = (f) => `assets/${f}.${JPG.has(f) ? "jpg" : "png"}`;
const pad = (n) => String(n).padStart(2, "0");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

/* ============================================================
   FEATURED CASE STUDIES
   shots: { f, a (alt), r (aspect), size: ""|wide|third|quarter|tall, fit: contain, dark }
   ============================================================ */
const CASES = [
  {
    id: "revel", title: "REVEL", category: "Streetwear Brand", year: "Sept 2023 — Now",
    role: "Founder, CEO & Creative Director",
    tools: ["Procreate", "Adobe Photoshop", "Figma", "Adobe Creative Cloud", "E-commerce (revel-us.com)"],
    focus: ["Brand Identity", "Creative Direction", "Apparel Design", "Product Development", "E-Commerce", "Entrepreneurship"],
    cover: "revel-4", coverAlt: "REVEL hoodies in grey and pink photographed on grass",
    links: [{ href: "https://revel-us.com", text: "revel-us.com" }, { href: "https://www.instagram.com/r3v3l.us/", text: "@r3v3l.us" }],
    overview: {
      lead: "REVEL is an independent streetwear brand I founded during my freshman year at Howard University, built around creativity, individuality, and cultural storytelling.",
      body: [
        "As Founder and Creative Director, I lead the brand's visual identity, product design, creative campaigns, and development process. From initial sketches and digital illustrations to garment production, marketing, and launch strategy, I oversee each stage of bringing a collection to life.",
        "With four sold-out drops, REVEL demonstrates my ability to combine design, entrepreneurship, and creative strategy to build a brand from the ground up.",
      ],
    },
    statement: "Evolution never ends. Become what you envision.",
    pillars: [
      ["Brand Identity", "A brand built on creativity, individuality and cultural storytelling — distilled into one statement: “Evolution never ends. Become what you envision.”"],
      ["Creative Direction", "I lead the visual identity and creative campaigns, and shoot REVEL's product and campaign imagery myself through PresFlicks."],
      ["Design Process", "Concept sketches and digital illustrations in Procreate, color palettes, then final graphics and garment art in Adobe Photoshop."],
      ["Product Development", "I take each piece from first sketch through garment production, marketing and launch strategy."],
      ["Collections & Campaigns", "Four exclusive drops to date, spanning graphic tees, hoodies and matching sets."],
      ["Results & Impact", "Every drop sold out. I built and manage the brand's e-commerce site, revel-us.com."],
    ],
    solutionTitle: "Collections & Campaigns",
    shots: [
      { f: "revel-4", a: "REVEL grey and pink hoodies laid out on grass", r: "16/10", size: "wide" },
      { f: "revel-5", a: "REVEL grey hoodie with embroidered logo", r: "1/1" },
      { f: "revel-6", a: "REVEL pink hoodie detail", r: "1/1" },
      { f: "revel-1", a: "REVEL 2023 graphic tee mockup", r: "1/1", fit: "contain", size: "third" },
      { f: "revel-2", a: "REVEL illustrated graphic tee mockup", r: "1/1", fit: "contain", size: "third" },
      { f: "revel-3", a: "REVEL Howard takeover graphic tee mockup", r: "1/1", fit: "contain", size: "third" },
    ],
    impact: [
      "4 exclusive drops — all sold out",
      "Built and manage the brand's e-commerce site, revel-us.com",
      "Founded in September 2023, my freshman year at Howard University",
    ],
  },
  {
    id: "nybble", title: "Nybble Group", category: "UX/UI Design · Internship", year: "May — Jul 2025",
    role: "UX Designer Intern · Miami, FL",
    tools: ["Figma"],
    focus: ["Product Design", "User Experience", "Interface Design", "Design Collaboration", "Accessibility"],
    cover: "nybble-1", coverFit: "contain", coverAlt: "Nybble Group research board in Figma",
    overview: {
      lead: "A redesign of a mobile educational app for children with disabilities.",
      body: ["I joined the design team as a UX Designer Intern, working on new app features alongside product managers, engineers and accessibility consultants."],
      audience: "Children with disabilities using the app to learn.",
    },
    challenge: {
      lead: "Make the app's features more accessible and more engaging — and meet accessibility standards.",
    },
    process: [
      "Collaborated with product managers, engineers and accessibility consultants",
      "Mapped user flows and built wireframes in Figma",
      "Designed high-fidelity prototypes",
      "Folded usability-testing feedback back into the designs",
      "Shadowed lead UX/UI designers to learn day-to-day workflows",
    ],
    solutionTitle: "Project artifacts",
    shots: [
      { f: "nybble-1", a: "Research board for the Nybble Group app redesign", r: "984/384", fit: "contain", size: "wide" },
      { f: "nybble-3", a: "User persona template", r: "284/400", fit: "contain", size: "third" },
      { f: "nybble-5", a: "Wireframe and testing artifacts", r: "679/297", fit: "contain" },
      { f: "nybble-2", a: "Feature exploration board", r: "719/341", fit: "contain", size: "wide" },
      { f: "nybble-4", a: "Paper prototypes marked during usability testing", r: "984/416", fit: "contain", size: "wide" },
    ],
    impact: [
      "Designed mobile app features focused on accessibility and user engagement",
      "Delivered wireframes, user flows and high-fidelity prototypes in Figma",
      "Learned day-to-day UX workflows by shadowing lead designers",
    ],
  },
  {
    id: "vdart", title: "VDart", category: "UX Design · Internship", year: "May — Jul 2024",
    role: "UX Designer Intern · Atlanta, GA",
    tools: ["Figma", "Framer", "Adobe Creative Cloud"],
    focus: ["User-Centered Design", "Product Research", "Wireframing", "Prototyping", "Interface Design"],
    cover: "vdart-2", coverFit: "contain", coverDark: true, coverAlt: "VDart form interface design",
    overview: {
      lead: "The front-end experience for an AI-powered résumé platform.",
      body: ["As a UX Designer Intern, I worked with cross-functional teams of designers and developers to design and refine the platform's interfaces."],
    },
    challenge: { lead: "Create an intuitive front-end experience for a product with AI built into its core." },
    process: [
      "Collaborated with cross-functional design and development teams",
      "Designed and refined interfaces in Figma, Framer and Adobe tools",
      "Contributed to iterative design discussions on UX/UI and AI integration",
    ],
    solutionTitle: "Interface work",
    shots: [
      { f: "vdart-2", a: "Form interface design", r: "521/351", fit: "contain", dark: true },
      { f: "vdart-3", a: "Form interface design, second screen", r: "521/351", fit: "contain", dark: true },
      { f: "vdart-1", a: "Front-end code for the interface", r: "3/4", fit: "contain", dark: true, size: "third" },
      { f: "vdart-4", a: "VDart internship certificate", r: "421/302", fit: "contain" },
    ],
    impact: [
      "Refined intuitive user interfaces for the platform's front end",
      "Grew my UX/UI practice for AI-integrated products",
    ],
  },
  {
    id: "loophole", title: "Loop-Hole", category: "Chess Learning App", year: "In development",
    role: "Product design & Android development",
    tools: ["Android", "Firebase Authentication (planned)"],
    focus: ["Mobile App Design", "Android Development", "User Experience", "Learning Experience Design", "Product Strategy"],
    chess: true,
    overview: {
      lead: "Loop-Hole is a chess learning app for Android, currently in development.",
      body: ["The project brings together mobile app design, Android development and learning-experience design. Firebase Authentication is planned for user accounts."],
    },
    status: "Case study in progress — screens, user flows and process will be added as the app develops.",
  },
  {
    id: "presstudios", title: "PresStudios", category: "Creative Studio", year: "Ongoing",
    role: "Brand identity, graphic design & creative direction",
    tools: ["Procreate", "Adobe Photoshop", "Adobe Illustrator"],
    focus: ["Brand Identity", "Graphic Design", "Visual Storytelling", "Creative Direction", "Client Projects"],
    cover: "logos-3", coverFit: "contain", coverAlt: "Heritage Council crest logo",
    overview: {
      lead: "PresStudios is my creative studio for brand identity, graphic design and visual storytelling.",
      audience: "DJs, musicians, campus organizations, creative startups and local businesses.",
    },
    process: [
      "Work closely with each client to understand their identity and vision",
      "Sketch concepts in Procreate",
      "Finalize in Adobe Photoshop or Illustrator, depending on the style",
      "Apply the identity across merchandise, apparel and digital touchpoints",
    ],
    solutionTitle: "Selected client work",
    clients: ["barber", "tlc", "brittian", "logos", "medical", "stacks"],
    impact: [
      "Identities applied across T-shirts, uniforms, merchandise and a client website",
      "Logos for a barbershop, a daycare, a construction company, campus organizations and creatives",
    ],
  },
  {
    id: "codepath", title: "CodePath Projects", category: "AI & Android Development", year: "2026",
    role: "Developer",
    tools: ["Kotlin", "Android Studio", "Python", "Streamlit", "REST APIs (TMDB)"],
    focus: ["Python Development", "Streamlit", "AI Application Development", "Kotlin", "Android Studio", "API Integration"],
    cover: "cp-flixsterplus", coverFit: "contain", coverDark: true, coverAlt: "Flixster+ Android app showing a list of popular movies",
    overview: {
      lead: "Native Android apps in Kotlin and AI-focused Python apps, built through CodePath's Android and AI110 courses.",
      body: ["Each project is on GitHub with a README and walkthrough."],
    },
    challenge: {
      lead: "Turn API data and app logic into working, usable products.",
      points: [
        "Connecting to The Movie Database API, parsing JSON and building correct poster URLs for Glide",
        "Learning how RecyclerView, adapters and data models work together",
        "Debugging an AI-generated game and proving the fixes with automated tests",
      ],
    },
    apps: [
      ["Flixster+", "Kotlin · TMDB API", "Browse popular movies, then open a details screen with poster, overview, rating, release date and popularity.", "FlixsterPlus"],
      ["Flixster", "Kotlin · TMDB API", "Now-playing movies in a scrollable RecyclerView with Glide-loaded posters.", "Flixster"],
      ["Wishlist", "Kotlin", "Add items with a name, price and URL to a scrollable, dynamically updating wishlist.", "Wishlist"],
      ["Wordle", "Kotlin", "Guess a four-letter word in three tries, with per-letter feedback after each guess.", "Wordle"],
      ["PawPal+", "Python · Streamlit", "Pet-care manager with task scheduling, priorities, conflict detection and recurring tasks.", "ai110-module2show-pawpal-starter"],
      ["Game Glitch Investigator", "Python · Streamlit", "Found and fixed bugs in an AI-generated guessing game, backed by automated tests.", "ai110-module1show-gameglitchinvestigator-starter"],
      ["VibeFinder 1.0", "Python", "Content-based music recommender that scores songs by genre, mood and energy.", "ai110-module3show-musicrecommendersimulation-starter"],
    ],
    solutionTitle: "Android walkthroughs",
    shots: [
      { f: "cp-flixsterplus", a: "Flixster+ app: popular movies list", r: "480/717", fit: "contain", dark: true, size: "quarter" },
      { f: "cp-flixster", a: "Flixster app: now-playing movies list", r: "480/717", fit: "contain", dark: true, size: "quarter" },
      { f: "cp-wishlist", a: "Wishlist app with items and prices", r: "480/717", fit: "contain", dark: true, size: "quarter" },
      { f: "cp-wordle", a: "Wordle app showing three guesses and the answer", r: "480/717", fit: "contain", dark: true, size: "quarter" },
    ],
    impact: [
      "7 working projects published on GitHub — 4 Android apps and 3 Python apps",
      "Hands-on with REST APIs, RecyclerView, Glide, Streamlit and automated testing",
    ],
    links: [{ href: "https://github.com/pfrazier2x", text: "All repos on GitHub" }],
  },
];

/* ============================================================
   ARCHIVE PROJECTS
   ============================================================ */
const PROJECTS = [
  {
    id: "presflicks", title: "PresFlicks", tag: "Photography", role: "Photography Brand", year: "Ongoing", reel: true,
    text: "Through PresFlicks, I capture bold, intentional visuals that elevate brands, people, and organizations. I shoot all the content for my own clothing line and collaborate with other brands, student organizations, and models. From directing and shooting to editing in Lightroom and Photoshop, I handle the full production to deliver imagery that feels authentic, curated, and sharp.",
    shots: ["photo-1", "photo-2", "photo-3", "photo-4", "photo-5", "photo-6", "photo-7", "photo-8", "photo-9"].map((f, i) => ({ f, a: `PresFlicks portrait photograph ${i + 1}` })),
  },
  {
    id: "husa", title: "HUSA", tag: "Design", role: "PR Visual Designer & Photographer", year: "Aug 2025 — Now",
    text: "As Public Relations Visual Designer & Photographer for the 65th Howard University Student Association, I've designed 30+ social media graphics, flyers, and campaign materials and produced visual content for HUSA programs and events. I keep the brand consistent while bringing creative direction to initiatives that amplify student voices and promote HUSA's mission of advocacy, leadership, and service.",
    shots: ["husa-1", "husa-2", "husa-3", "husa-4", "husa-5", "husa-6"].map((f, i) => ({ f, a: `HUSA social media graphic ${i + 1}`, r: "1/1", size: "third" })),
  },
  {
    id: "barber", title: "Off The Hook", tag: "Design", role: "Logo Redesign · Atlanta, GA", year: "2022",
    text: "For a barbershop's 25th anniversary in Atlanta, I redesigned the logo — meaningful work given the city's barbershop culture. I started in Photoshop and finished in Procreate, keeping it simple and bold with a gold \"25\" as the focal point. The circular layout and sharp type gave the brand a timeless refresh that carried onto anniversary T-shirts.",
    shots: [{ f: "barber-1", a: "Off The Hook Barbershop 25th anniversary logo", r: "1/1", fit: "contain" }, { f: "barber-2", a: "Anniversary logo on a black T-shirt", r: "1/1", fit: "contain", dark: true }],
  },
  {
    id: "tlc", title: "Tender Loving Care", tag: "Design", role: "Rebrand · Tuscaloosa, AL", year: "2022",
    text: "I rebranded the logo and homepage for Tender Loving Care Daycare. Starting from a rough client draft, I sketched in Procreate and finished in Photoshop, choosing orange, purple, and blue to reflect warmth, creativity, and play. Two illustrated children alongside the type express the brand's purpose — applied across the website, merchandise, and uniforms.",
    shots: [{ f: "tlc-1", a: "Tender Loving Care daycare logo", r: "505/245", fit: "contain", size: "wide" }, { f: "tlc-2", a: "Daycare website homepage design", r: "993/412", fit: "contain", size: "wide" }, { f: "tlc-3", a: "Logo embroidered on a jacket", r: "466/320", size: "wide" }],
  },
  {
    id: "brittian", title: "Brittian Construction", tag: "Design", role: "Logo & Apparel", year: "",
    text: "Identity work for Brittian Construction Co. (est. 1982) — a bold red house-mark logo applied across branded apparel and merchandise.",
    shots: [{ f: "brittian-1", a: "Brittian Construction Co. logo", r: "845/381", fit: "contain", size: "wide" }, { f: "brittian-2", a: "Brittian Construction T-shirt worn", r: "466/550" }, { f: "brittian-3", a: "Brittian Construction T-shirt mockup", r: "466/550", fit: "contain" }],
  },
  {
    id: "logos", title: "Freelance Logos", tag: "Design", role: "Logo Design Services", year: "Ongoing",
    text: "Alongside my clothing and branding work, I design custom logos for DJs, musicians, campus organizations, and creative startups. Each mark blends custom typography, hand-drawn elements, and digital effects — sketched in Procreate and finished in Photoshop or Illustrator — whether it's a bold chrome effect, a cartoon character, or a vintage crest.",
    shots: [{ f: "logos-1", a: "Chrome-effect logo", r: "830/578", fit: "contain" }, { f: "logos-2", a: "Cartoon character DJ logo", r: "830/578", fit: "contain" }, { f: "logos-3", a: "Heritage Council crest logo", r: "1/1", fit: "contain" }, { f: "logos-4", a: "Circular blue wordmark logo", r: "1/1", fit: "contain" }],
  },
  {
    id: "fullcup", title: "Fullcup", tag: "Branding", role: "Merch Brand · Founder", year: "2020",
    text: "In 2020 I started Fullcup, a merchandising brand, and designed its identity myself — sketching in Procreate and finishing in Illustrator. Vibrant color pulls the eye, \"Full\" drips like an overfilled cup, and \"cup\" runs vertically along the side to add direction. The system includes a logomark and two logotypes.",
    shots: [{ f: "fullcup-1", a: "Fullcup logomark", r: "1/1", fit: "contain", size: "third" }, { f: "fullcup-3", a: "Fullcup logotype", r: "434/184", fit: "contain" }, { f: "fullcup-2", a: "Fullcup horizontal logotype", r: "755/172", fit: "contain", size: "wide" }],
  },
  {
    id: "flyers", title: "Flyers", tag: "Design", role: "Events · Campaigns · Pop-ups", year: "",
    text: "Flyers for pop-up shops, brand promotions, and campus campaigns — each tuned to its audience, from bold and energetic student events to sleek brand activations and themed election campaigns. I combine Photoshop and Procreate to build layouts with custom elements that grab attention while communicating clearly.",
    shots: [{ f: "flyer-1", a: "Pop-up shop ticket-style flyer", r: "2/3" }, { f: "flyer-2", a: "Pop-up shop event flyer", r: "2/3" }, { f: "flyer-3", a: "Campus election campaign flyer", r: "2/3" }, { f: "flyer-4", a: "Campus campaign guide flyer", r: "2/3" }],
  },
  {
    id: "medical", title: "Medical Brigades", tag: "Branding", role: "Howard University Chapter", year: "",
    text: "A refreshed logo for the Medical Brigades Howard University Chapter, an organization providing medical, dental, and vision care to underserved communities abroad. The redesign modernizes the brand while preserving its mission, emphasizing community impact, global service, and creative expression.",
    shots: [{ f: "med-1", a: "Medical Brigades Howard chapter logo in red", r: "1/1", fit: "contain" }, { f: "med-2", a: "Medical Brigades logo in grayscale", r: "1/1", fit: "contain", dark: true }],
  },
  {
    id: "stacks", title: "Stacks Attire", tag: "Branding", role: "Logo & Brand Materials", year: "",
    text: "The Stacks Attire logo and supporting brand materials — blending modern sophistication with fashion-inspired details to reflect individuality, craftsmanship, and creative expression.",
    shots: [{ f: "stacks-1", a: "Stacks Attire logo", r: "1/1", fit: "contain" }, { f: "stacks-3", a: "Stacks Attire logo on a dark background", r: "1/1", fit: "contain", dark: true }, { f: "stacks-2", a: "Stacks Attire brand mood board", r: "784/413", fit: "contain", size: "wide" }],
  },
];
const byId = Object.fromEntries(PROJECTS.map((p) => [p.id, p]));

/* ---------- shared bits ---------- */
const shotHTML = (s) => {
  const cls = ["shot", s.size ? `shot--${s.size}` : "", s.fit ? "shot--contain" : "", s.dark ? "shot--dark" : ""].join(" ");
  return `<button type="button" class="${cls}" style="--r:${s.r || "4/3"}" data-img aria-label="View larger: ${esc(s.a)}"><img src="${A(s.f)}" alt="${esc(s.a)}" loading="lazy" decoding="async"></button>`;
};
const linksHTML = (links) => (links || []).map((l) => `<a class="project__link" href="${l.href}" target="_blank" rel="noopener" data-hover>${l.text} <span aria-hidden="true">↗</span></a>`).join("");
const tagsHTML = (arr, cls = "chiplet") => `<ul class="${cls}s">${arr.map((t) => `<li class="${cls}">${t}</li>`).join("")}</ul>`;
const chessHTML = () => `<div class="chess" aria-hidden="true">${Array.from({ length: 64 }, (_, i) => `<i class="${(Math.floor(i / 8) + i) % 2 ? "d" : ""}"></i>`).join("")}<span>♞</span></div>`;

/* ---------- one numbered sequence, in the original order ---------- */
const ORDER = ["revel", "nybble", "vdart", "loophole", "codepath", "presstudios", "barber", "tlc", "brittian", "logos", "presflicks", "fullcup", "flyers", "husa", "medical", "stacks"];
const caseById = Object.fromEntries(CASES.map((c) => [c.id, c]));
const projectsEl = document.getElementById("projects");
const indexEl = document.getElementById("index");
document.getElementById("work-count").textContent = `(${ORDER.length})`;

const thumbOf = (id) => {
  const c = caseById[id];
  if (c) return c.cover ? A(c.cover) : null;
  return A(byId[id].shots[0].f);
};

function caseHTML(c, n) {
  const rows = [];
  const ov = c.overview;
  rows.push(["Overview", `
    <p class="ov__lead">${ov.lead}</p>
    ${(ov.body || []).map((t) => `<p class="cs__p">${t}</p>`).join("")}
    ${ov.audience ? `<p class="cs__note"><b>Audience</b>${ov.audience}</p>` : ""}
    ${c.status ? `<p class="cs__status"><span class="dot" aria-hidden="true"></span>${c.status}</p>` : ""}
    ${c.links ? `<div class="ov__links">${linksHTML(c.links)}</div>` : ""}`]);
  if (c.statement) rows.push(["__statement", `<blockquote class="statement"><p>${c.statement}</p><cite>— REVEL brand statement</cite></blockquote>`]);
  if (c.pillars) rows.push(["The Brand", `<div class="pillars">${c.pillars.map(([h, t], k) => `<article class="pillar"><span>${pad(k + 1)}</span><h4>${h}</h4><p>${t}</p></article>`).join("")}</div>`]);
  if (c.challenge) rows.push(["The Challenge", `<p class="ov__lead">${c.challenge.lead}</p>${c.challenge.points ? `<ul class="cs__list">${c.challenge.points.map((t) => `<li>${t}</li>`).join("")}</ul>` : ""}`]);
  if (c.process) rows.push(["The Process", `<ol class="steps">${c.process.map((t) => `<li>${t}</li>`).join("")}</ol>`]);

  let solution = "";
  if (c.apps) solution += `<ul class="apps">${c.apps.map(([t, st, d, repo]) => `<li><a class="app" href="https://github.com/pfrazier2x/${repo}" target="_blank" rel="noopener" data-hover><span class="app__stack">${st}</span><h4>${t}</h4><p>${d}</p><span class="app__go" aria-hidden="true">↗</span></a></li>`).join("")}</ul>`;
  if (c.clients) solution += `<ul class="clients">${c.clients.map((id) => { const p = byId[id]; const sh = p.shots[0]; return `<li><a class="client" href="#${id}" data-hover><div class="client__img${sh.dark ? " is-dark" : ""}"><img src="${A(sh.f)}" alt="" loading="lazy" decoding="async"></div><span>${p.title}</span><small>${p.role}</small></a></li>`; }).join("")}</ul>`;
  if (c.shots) solution += `<div class="gallery" data-gallery="${c.id}">${c.shots.map(shotHTML).join("")}</div>`;
  if (solution) rows.push([c.id === "revel" ? c.solutionTitle : "The Solution", `${c.id !== "revel" && c.solutionTitle ? `<p class="cs__kicker">${c.solutionTitle}</p>` : ""}${solution}`, true]);
  if (c.impact) rows.push(["The Impact", `<ul class="impact">${c.impact.map((t) => `<li>${t}</li>`).join("")}</ul>`]);

  let k = 0;
  const rowsHTML = rows.map(([label, html, wide]) => {
    if (label === "__statement") return html;
    k += 1;
    return `<div class="cs__row${wide ? " cs__row--wide" : ""}"><h3 class="cs__label"><span>${pad(k)} /</span> ${label}</h3><div class="cs__content">${html}</div></div>`;
  }).join("");

  return `
    <section class="cs${c.id === "revel" ? " cs--revel" : ""}" id="${c.id}" aria-labelledby="${c.id}-title">
      <div class="project__head">
        <div>
          <div class="project__meta reveal-up"><span class="tag tag--accent">${c.category}</span>${c.year ? `<span class="tag">${c.year}</span>` : ""}</div>
          <h2 class="project__title" id="${c.id}-title"><span class="line"><span class="split">${c.title}</span></span></h2>
        </div>
        <span class="project__num" data-speed="0.85" aria-hidden="true">${n}</span>
      </div>
      <dl class="facts reveal-up">
        <div><dt>Role</dt><dd>${c.role}</dd></div>
        <div><dt>Timeline</dt><dd>${c.year}</dd></div>
        <div><dt>Tools</dt><dd>${c.tools.join(", ")}</dd></div>
        <div><dt>Focus</dt><dd>${c.focus.join(" · ")}</dd></div>
      </dl>
      ${c.chess ? `<div class="cs__chess reveal-up">${chessHTML()}</div>` : ""}
      ${rowsHTML}
    </section>`;
}

function projectHTML(p, n) {
  const head = `
    <div class="project__head">
      <div>
        <div class="project__meta reveal-up"><span class="tag tag--accent">${p.tag}</span><span class="tag">${p.role}</span>${p.year ? `<span class="tag">${p.year}</span>` : ""}</div>
        <h2 class="project__title"><span class="line"><span class="split">${p.title}</span></span></h2>
      </div>
      <span class="project__num" data-speed="0.85" aria-hidden="true">${n}</span>
    </div>`;
  const sentences = p.text.split(/(?<=[.!?])\s+(?=[A-Z"“])/);
  const lead = sentences.shift();
  const paras = [];
  for (let k = 0; k < sentences.length; k += 2) paras.push(sentences.slice(k, k + 2).join(" "));
  const links = linksHTML(p.links);
  const overview = `
    <div class="project__overview${p.reel ? " project__overview--wide" : ""} reveal-up">
      <p class="eyebrow ov__label">Overview</p>
      <p class="ov__lead">${lead}</p>
      ${paras.length || links ? `<div class="ov__body">${paras.map((t) => `<p>${t}</p>`).join("")}${links ? `<div class="ov__links">${links}</div>` : ""}</div>` : ""}
    </div>`;
  if (p.reel) return `
      <section class="reel" id="${p.id}" aria-label="${p.title}">
        ${head}
        <div class="project__body">${overview}</div>
        <div class="reel__track" data-gallery="${p.id}">${p.shots.map((sh) => `<button type="button" class="reel__item" data-img aria-label="View larger: ${esc(sh.a)}"><img src="${A(sh.f)}" alt="${esc(sh.a)}" loading="lazy" decoding="async"></button>`).join("")}</div>
        <div class="reel__progress" aria-hidden="true"><i></i></div>
      </section>`;
  return `
    <section class="project" id="${p.id}" aria-label="${p.title}">
      ${head}
      <div class="project__body">${overview}<div class="gallery" data-gallery="${p.id}">${p.shots.map(shotHTML).join("")}</div></div>
    </section>`;
}

ORDER.forEach((id, i) => {
  const n = pad(i + 1);
  const c = caseById[id], p = byId[id];
  const item = c || p;
  const thumb = thumbOf(id);
  indexEl.insertAdjacentHTML("beforeend",
    `<li><a href="#${id}"${thumb ? ` data-preview="${thumb}"` : ""}><span class="index__n">${n}</span><span class="index__t">${item.title}</span><span class="index__c">${c ? c.category : p.tag}</span></a></li>`);
  projectsEl.insertAdjacentHTML("beforeend", c ? caseHTML(c, n) : projectHTML(p, n));
});

/* ---------- tool logos ---------- */
const ico = (slug, color) => `<i class="ico" aria-hidden="true" style="--ico:url(assets/icons/${slug}.svg);--c:${color}"></i>`;
// [icon file, brand color, label]
const I = {
  html5: ["html5", "#E34F26", "HTML5"], css3: ["css", "#1572B6", "CSS3"], js: ["javascript", "#E8C900", "JavaScript"],
  react: ["react", "#149ECA", "React"], figma: ["figma", "#F24E1E", "Figma"], adobe: ["adobe", "#FF0000", "Adobe"],
  git: ["git", "#F05032", "Git"], mysql: ["mysql", "#4479A1", "MySQL"], cpp: ["cplusplus", "#00599C", "C++"],
  python: ["python", "#3776AB", "Python"], kotlin: ["kotlin", "#7F52FF", "Kotlin"], java: ["openjdk", "#ED8B00", "Java"],
  streamlit: ["streamlit", "#FF4B4B", "Streamlit"], rest: ["restapi", "#0b0b0b", "REST APIs"],
  android: ["android", "#3DDC84", "Android Development"], gcloud: ["googlecloud", "#4285F4", "Google Cloud"],
  cc: ["adobecreativecloud", "#DA1F26", "Adobe Creative Cloud"], github: ["github", "#0b0b0b", "GitHub"], vscode: ["vscode-plain", "#007ACC", "VS Code"],
  studio: ["androidstudio", "#3DDC84", "Android Studio"], node: ["nodedotjs", "#5FA04E", "Node.js"], ts: ["typescript", "#3178C6", "TypeScript"],
  mongo: ["mongodb", "#47A248", "MongoDB"], firebase: ["firebase", "#DD2C00", "Firebase"],
};
const TECH = ["html5", "css3", "js", "react", "figma", "adobe", "git", "mysql", "cpp", "python", "kotlin", "java", "streamlit", "rest", "android", "gcloud"];
// strings without an icon render as plain outlined pills
const KIT = [
  ["Design & Product", ["figma", "cc", "UX Research", "Wireframing", "Prototyping", "Interaction Design", "Design Systems", "Brand Identity"]],
  ["Development", ["html5", "css3", "js", "react", "python", "java", "kotlin", "cpp", "rest"]],
  ["Tools & Platforms", ["git", "github", "vscode", "studio", "streamlit", "mysql", "gcloud"]],
  ["Currently Learning", ["node", "ts", "mongo", "firebase"], true],
];
const icoOf = (k) => ico(I[k][0], I[k][1]);
const pill = (k) => (I[k] ? `<li>${icoOf(k)}${I[k][2]}</li>` : `<li class="is-practice">${k}</li>`);
document.getElementById("logos").innerHTML =
  TECH.map((k) => `<div class="logo">${icoOf(k)}<span>${I[k][2]}</span></div>`).join("") +
  `<a class="logo logo--more" href="#toolkit" data-hover><span>Full toolkit</span><b aria-hidden="true">↓</b></a>`;
document.getElementById("kit").innerHTML = KIT.map(([title, keys, learning]) => `
  <div class="kit__col${learning ? " kit__col--learning" : ""}">
    <h4 class="kit__title">${title}</h4>
    <ul class="chips chips--sm${learning ? " chips--ghost" : ""}">${keys.map(pill).join("")}</ul>
  </div>`).join("");

/* ---------- GitHub repos (live, with a built-in fallback) ---------- */
const GH_USER = "pfrazier2x";
const GH_SKIP = ["readme.txt", "pfrazier2x.github.io"];
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
  "ai110-module3show-musicrecommendersimulation-starter": ["VibeFinder 1.0", "AI110: content-based music recommender in Python."],
  "ai110-module2show-pawpal-starter": ["PawPal+", "AI110: pet-care manager built with Python and Streamlit."],
  "ai110-module1show-gameglitchinvestigator-starter": ["Game Glitch Investigator", "AI110: debugged an AI-generated Streamlit game with tests."],
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
      <div class="repo__top"><span>${r.name === GH_FEATURED ? "Featured" : r.fork ? "Course project" : "Repository"}</span>${ico("github", "var(--ink)")}</div>
      <h3>${esc(title)}</h3>
      <p>${esc(r.description || desc || `${r.language || "Code"} repository.`)}</p>
      <div class="repo__meta">${r.language ? `<span class="lang" style="--lc:${lc}"><i></i>${r.language}</span>` : ""}<span>Updated ${fmtDate(r.updated_at)}</span>${r.stargazers_count ? `<span>★ ${r.stargazers_count}</span>` : ""}<span class="repo__arrow" aria-hidden="true">↗</span></div>
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
  .catch(() => { /* keep fallback list */ });

/* ---------- environment ---------- */
const root = document.documentElement;
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const hasGSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
if (reduce) root.classList.add("reduce");

/* ---------- mobile menu ---------- */
const burger = document.querySelector(".nav__burger");
const menu = document.getElementById("menu");
const setMenu = (open) => {
  document.body.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  open ? menu.removeAttribute("inert") : menu.setAttribute("inert", "");
  if (open) menu.querySelector("a").focus();
};
burger.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

/* ---------- active nav + back-to-top (works without GSAP) ---------- */
const navLinks = [...document.querySelectorAll("[data-nav]")];
const sectionFor = { work: ["work", "projects"], about: ["about"], skills: ["skills"], code: ["code", "certs"], contact: ["contact"] };
const watched = Object.entries(sectionFor).flatMap(([nav, ids]) => ids.map((id) => [nav, document.getElementById(id)])).filter(([, el]) => el);
const setActive = (nav) => navLinks.forEach((a) => {
  const on = a.dataset.nav === nav;
  a.classList.toggle("is-active", on);
  on ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current");
});
const fab = document.querySelector(".fab-top");
const onScroll = () => {
  const y = window.innerHeight * 0.4;
  let current = null;
  for (const [nav, el] of watched) {
    const r = el.getBoundingClientRect();
    if (r.top <= y && r.bottom > y) { current = nav; break; }
  }
  setActive(current);
  fab.classList.toggle("is-on", window.scrollY > window.innerHeight * 1.2);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- lightbox with gallery navigation ---------- */
const lb = document.querySelector(".lightbox");
const lbImg = lb.querySelector("img");
const lbCap = lb.querySelector(".lightbox__cap");
let lbList = [], lbIndex = 0, lbReturn = null;
const showLb = (i) => {
  lbIndex = (i + lbList.length) % lbList.length;
  const img = lbList[lbIndex].querySelector("img");
  lbImg.src = img.currentSrc || img.src; lbImg.alt = img.alt;
  lbCap.textContent = lbList.length > 1 ? `${img.alt} — ${lbIndex + 1} / ${lbList.length}` : img.alt;
  lb.classList.toggle("is-single", lbList.length < 2);
};
const openLb = (trigger) => {
  const group = trigger.closest("[data-gallery]");
  lbList = group ? [...group.querySelectorAll("[data-img]")] : [trigger];
  lbReturn = trigger;
  showLb(lbList.indexOf(trigger));
  lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); lb.removeAttribute("inert");
  document.body.classList.add("lb-open");
  lb.querySelector(".lightbox__close").focus();
};
const closeLb = () => {
  if (!lb.classList.contains("open")) return;
  lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); lb.setAttribute("inert", "");
  document.body.classList.remove("lb-open");
  lbReturn && lbReturn.focus({ preventScroll: true });
};
document.addEventListener("click", (e) => { const t = e.target.closest("[data-img]"); if (t) openLb(t); });
lb.querySelector(".lightbox__close").addEventListener("click", closeLb);
lb.querySelector(".lightbox__prev").addEventListener("click", () => showLb(lbIndex - 1));
lb.querySelector(".lightbox__next").addEventListener("click", () => showLb(lbIndex + 1));
lb.addEventListener("click", (e) => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", (e) => {
  if (lb.classList.contains("open")) {
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowRight") showLb(lbIndex + 1);
    if (e.key === "ArrowLeft") showLb(lbIndex - 1);
    if (e.key === "Tab") { // keep focus inside the dialog
      const f = [...lb.querySelectorAll("button")].filter((b) => b.offsetParent);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    return;
  }
  if (e.key === "Escape" && document.body.classList.contains("menu-open")) { setMenu(false); burger.focus(); }
});

/* ---------- motion (or a clean static fallback) ---------- */
if (!hasGSAP || reduce) {
  root.classList.remove("js");
  document.querySelectorAll(".shot").forEach((el) => el.style.setProperty("--wipe", 0));
  document.querySelectorAll(".about__lead .w").forEach((w) => (w.style.opacity = 1));
} else {
  root.classList.add("js");
  initMotion();
}

function initMotion() {
  gsap.registerPlugin(ScrollTrigger);

  /* smooth scroll */
  let lenis = null;
  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const target = id === "#top" ? document.body : document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis ? lenis.scrollTo(id === "#top" ? 0 : target, { offset: id === "#top" ? 0 : -20, duration: 1.4 }) : target.scrollIntoView({ behavior: "smooth" });
      if (id !== "#top") history.replaceState(null, "", id);
      const focusEl = id === "#top" ? document.querySelector(".nav__logo") : target;
      if (focusEl !== document.body) { focusEl.setAttribute("tabindex", "-1"); focusEl.focus({ preventScroll: true }); }
    });
  });

  /* split text into chars (screen readers keep the original label) */
  document.querySelectorAll(".split").forEach((el) => {
    const label = el.textContent;
    const nodes = [...el.childNodes];
    el.innerHTML = "";
    const wrap = document.createElement("span");
    wrap.setAttribute("aria-hidden", "true");
    nodes.forEach((node) => {
      if (node.nodeType === 3) {
        node.textContent.split("").forEach((ch) => {
          const s = document.createElement("span");
          s.className = "char";
          s.innerHTML = ch === " " ? "&nbsp;" : ch;
          wrap.appendChild(s);
        });
      } else {
        node.classList.add("char");
        wrap.appendChild(node);
      }
    });
    const sr = document.createElement("span");
    sr.className = "sr-only"; sr.textContent = label;
    el.append(sr, wrap);
  });

  /* words for scrub paragraph */
  document.querySelectorAll(".scrub-words").forEach((el) => {
    el.innerHTML = el.textContent.trim().split(/\s+/).map((w) => `<span class="w">${w}</span>`).join(" ");
  });

  /* intro — full preloader once per session, quick reveal afterwards */
  const loader = document.querySelector(".loader");
  const seen = root.classList.contains("seen");
  const intro = gsap.timeline({ onComplete: () => { lenis && lenis.start(); ScrollTrigger.refresh(); } });
  if (!seen) {
    try { sessionStorage.setItem("pf-intro", "1"); } catch (e) { /* private mode */ }
    const num = loader.querySelector(".loader__num");
    const counter = { v: 0 };
    lenis && lenis.stop();
    intro
      .from(".loader__mark span", { yPercent: 120, opacity: 0, stagger: 0.08, duration: 0.5, ease: "power4.out" })
      .to(counter, { v: 100, duration: 0.9, ease: "power2.inOut", onUpdate: () => (num.textContent = Math.round(counter.v)) }, 0)
      .to(".loader__bar i", { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, 0)
      .to(".loader__inner", { yPercent: -40, opacity: 0, duration: 0.45, ease: "power3.in" })
      .to(loader, { clipPath: "inset(0 0 100% 0)", duration: 0.8, ease: "expo.inOut" }, "-=0.15")
      .set(loader, { display: "none" })
      .addLabel("hero", "-=0.7");
  } else {
    loader.style.display = "none";
    intro.addLabel("hero", 0);
  }
  intro
    .from(".hero__slab", { clipPath: "polygon(100% 0,100% 0,100% 100%,100% 100%)", duration: 1.2, ease: "expo.inOut" }, "hero")
    .from(".hero__title .char", { yPercent: 110, rotate: 6, stagger: 0.018, duration: 1, ease: "expo.out" }, "hero+=0.2")
    .from(".hero__frame", { clipPath: "inset(100% 0 0 0)", duration: 1.2, ease: "expo.inOut" }, "hero+=0.1")
    .from(".hero__img", { yPercent: 18, opacity: 0, duration: 1.6, ease: "expo.out" }, "hero+=0.3")
    .from(".hero__hi, .hero .reveal-up", { y: 24, opacity: 0, stagger: 0.07, duration: 0.8, ease: "power3.out" }, "hero+=0.5")
    .from(".nav > *", { y: -24, opacity: 0, stagger: 0.05, duration: 0.7, ease: "power3.out" }, "hero+=0.4")
    .from(".hero__badge", { scale: 0, rotate: -90, duration: 0.9, ease: "back.out(1.6)" }, "hero+=0.8");

  /* hero parallax */
  gsap.to(".hero__img", { yPercent: 8, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  /* marquee — direction follows scroll */
  const track = document.querySelector(".marquee__track");
  const mq = gsap.to(track, { xPercent: -50, duration: 24, ease: "none", repeat: -1 });
  ScrollTrigger.create({
    onUpdate: (self) => gsap.to(mq, { timeScale: self.direction * Math.min(3, 1 + Math.abs(self.getVelocity()) / 800), duration: 0.3, overwrite: true }),
  });

  /* generic reveals */
  gsap.utils.toArray(".reveal-up").filter((el) => !el.closest(".hero")).forEach((el) => {
    gsap.from(el, { y: 36, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%" } });
  });
  gsap.utils.toArray(".line .split").filter((el) => !el.closest(".hero")).forEach((el) => {
    gsap.from(el.querySelectorAll(".char"), { yPercent: 110, rotate: 5, stagger: 0.02, duration: 0.9, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 92%" } });
  });

  /* selected work cards */

  /* case study rows */
  gsap.utils.toArray(".cs__row, .facts, .statement").forEach((row) => gsap.from(row, { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: row, start: "top 90%" } }));
  gsap.utils.toArray(".steps, .impact, .pillars, .apps, .clients").forEach((list) => gsap.from(list.children, { y: 24, opacity: 0, stagger: 0.06, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: list, start: "top 88%" } }));

  /* about */
  gsap.to(".about__lead .w", { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: ".about__lead", start: "top 80%", end: "bottom 50%", scrub: true } });
  gsap.from(".service", { y: 60, opacity: 0, stagger: 0.1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".services", start: "top 88%" } });

  /* skills */
  gsap.from(".logo", { y: 30, opacity: 0, stagger: { each: 0.04, grid: "auto", from: "start" }, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".logos", start: "top 88%" } });
  gsap.fromTo(".logo .ico", { scale: 0, rotate: -90 }, { scale: 1, rotate: 0, stagger: 0.04, duration: 0.8, ease: "back.out(2)", clearProps: "transform", scrollTrigger: { trigger: ".logos", start: "top 88%" } });
  gsap.from(".xp li", { y: 20, opacity: 0, stagger: 0.05, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".xp", start: "top 90%" } });
  gsap.utils.toArray(".kit__col").forEach((col) => gsap.from(col.querySelectorAll(".chips li"), { y: 16, opacity: 0, stagger: 0.03, duration: 0.5, ease: "power3.out", scrollTrigger: { trigger: col, start: "top 92%" } }));

  /* counters — HTML already holds the real values; animate from 0 on enter */
  document.querySelectorAll("[data-count]").forEach((el) => {
    const end = +el.dataset.count;
    ScrollTrigger.create({
      trigger: el, start: "top 92%", once: true,
      onEnter: () => { const o = { v: 0 }; gsap.to(o, { v: end, duration: 1.4, ease: "power2.out", onUpdate: () => (el.textContent = Math.round(o.v)) }); },
    });
  });

  /* archive index rows */
  gsap.from(".index li", { y: 30, opacity: 0, stagger: 0.04, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ".index", start: "top 88%" } });

  /* galleries: color wipe + gentle parallax */
  gsap.utils.toArray(".shot").forEach((shot) => {
    const img = shot.querySelector("img");
    gsap.to(shot, { "--wipe": 0, duration: 1, ease: "expo.inOut", scrollTrigger: { trigger: shot, start: "top 90%" } });
    gsap.from(img, { scale: 1.25, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: shot, start: "top 90%" } });
    if (!shot.classList.contains("shot--contain")) {
      gsap.fromTo(img, { yPercent: -5 }, { yPercent: 5, ease: "none", scrollTrigger: { trigger: shot, start: "top bottom", end: "bottom top", scrub: true } });
    }
  });
  gsap.utils.toArray("[data-speed]").forEach((el) => {
    gsap.to(el, { y: () => (1 - parseFloat(el.dataset.speed)) * -400, ease: "none", scrollTrigger: { trigger: el.closest("section"), start: "top bottom", end: "bottom top", scrub: true, invalidateOnRefresh: true } });
  });

  /* PresFlicks horizontal reel (desktop only) */
  const mm = gsap.matchMedia();
  mm.add("(min-width: 761px)", () => {
    const reel = document.querySelector(".reel");
    if (!reel) return;
    const rt = reel.querySelector(".reel__track");
    const dist = () => rt.scrollWidth - window.innerWidth;
    const tween = gsap.to(rt, {
      x: () => -dist(), ease: "none",
      scrollTrigger: { trigger: rt, start: "center center", end: () => "+=" + dist(), pin: reel, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 },
    });
    gsap.to(".reel__progress i", { scaleX: 1, ease: "none", scrollTrigger: { trigger: rt, start: "center center", end: () => "+=" + dist(), scrub: true, invalidateOnRefresh: true } });
    gsap.utils.toArray(".reel__item img").forEach((img) => {
      gsap.fromTo(img, { scale: 1.2 }, { scale: 1, ease: "none", scrollTrigger: { trigger: img.parentElement, containerAnimation: tween, start: "left right", end: "center center", scrub: true } });
    });
  });

  /* certs + contact */
  gsap.from(".cert", { y: 80, rotateX: -25, opacity: 0, stagger: 0.1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".certs__grid", start: "top 88%" } });
  gsap.from(".contact__mail", { scale: 0.85, opacity: 0, duration: 0.9, ease: "back.out(1.7)", scrollTrigger: { trigger: ".contact__mail", start: "top 92%" } });

  /* nav hides on scroll down, returns on scroll up */
  const nav = document.querySelector(".nav");
  ScrollTrigger.create({
    start: 200,
    onUpdate: (s) => gsap.to(nav, { yPercent: s.direction === 1 && !document.body.classList.contains("menu-open") ? -120 : 0, duration: 0.45, ease: "power3.out", overwrite: true }),
  });
  nav.addEventListener("focusin", () => gsap.to(nav, { yPercent: 0, duration: 0.3, overwrite: true }));

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
    const view = !!t.closest("[data-img], .card");
    cursor.classList.toggle("is-view", view);
    cursor.querySelector(".cursor__label").textContent = t.closest(".card") ? "Open" : "View";
    cursor.classList.toggle("is-hover", !!t.closest("a, button, [data-hover]") && !view);
  });

  /* archive index hover preview */
  document.querySelectorAll(".index a").forEach((a) => {
    a.addEventListener("pointerenter", () => {
      if (!a.dataset.preview) return;
      previewImg.src = a.dataset.preview;
      gsap.to(preview, { opacity: 1, scale: 1, rotate: gsap.utils.random(-5, 5), duration: 0.5, ease: "power3.out", overwrite: true });
    });
    a.addEventListener("pointerleave", () => gsap.to(preview, { opacity: 0, scale: 0.8, duration: 0.4, ease: "power3.out", overwrite: true }));
  });

  /* magnetic */
  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1,0.4)" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1,0.4)" });
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.3);
    });
    el.addEventListener("pointerleave", () => { xTo(0); yTo(0); });
  });

  /* subtle 3D tilt + spotlight */
  window.__bindTilt = (els) => els.forEach((el) => {
    if (el.dataset.tilt) return;
    el.dataset.tilt = "1";
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.setProperty("--mx", x * 100 + "%"); el.style.setProperty("--my", y * 100 + "%");
      gsap.to(el, { rotateY: (x - 0.5) * 10, rotateX: (0.5 - y) * 10, transformPerspective: 900, duration: 0.5, ease: "power2.out" });
    });
    el.addEventListener("pointerleave", () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "elastic.out(1,0.5)" }));
  });
  window.__bindTilt(document.querySelectorAll(".tilt"));
}
