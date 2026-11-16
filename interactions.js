/* ============================================================
   Preston Frazier — Portfolio 2026 · interactions layer
   Micro-interactions that sit on top of main.js:
   buttons (ripple, arrows, copy email), scroll progress, quick nav,
   skill tooltips, project filter, theme toggle, ⌘K palette,
   guided tour and a small easter egg.
   Everything works with keyboard + touch and respects reduced motion.
   ============================================================ */
(() => {
  const root = document.documentElement;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const make = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const store = { get: (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } } };
  // the address lives in one place: the page's own mailto link
  const mailLink = $('a[href^="mailto:"]');
  const EMAIL = mailLink ? decodeURIComponent(mailLink.getAttribute("href").slice(7)) : "";

  /* ---------- shared helpers ---------- */
  const scrollToTarget = (sel) => {
    const top = sel === "#top";
    const target = top ? 0 : $(sel);
    if (target === null) return;
    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(target, { offset: top ? 0 : -20, duration: reduce ? 0 : 1.2, immediate: reduce });
    else if (top) window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    else target.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  };
  const lockScroll = (on) => { const l = window.__lenis; if (l) on ? l.stop() : l.start(); document.body.classList.toggle("is-locked", on); };
  const downloadResume = () => { const a = make('<a href="resume.pdf" download="Preston-Frazier-Resume.pdf"></a>'); document.body.append(a); a.click(); a.remove(); };

  const toast = make('<div class="toast" role="status" aria-live="polite"></div>');
  document.body.append(toast);
  let toastTimer;
  const showToast = (msg) => { toast.textContent = msg; toast.classList.add("is-on"); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("is-on"), 2400); };

  /* ============================================================
     1. BUTTONS — ripple / press, arrows, copy email
     ============================================================ */
  const RIPPLE = ".btn, .contact__mail, .fab, .theme-toggle, .filter, .tour__btn";
  document.addEventListener("pointerdown", (e) => {
    const b = e.target.closest(RIPPLE);
    if (!b || reduce || b.disabled) return;
    const r = b.getBoundingClientRect();
    const size = Math.max(r.width, r.height) * 2.2;
    const ink = make('<span class="ripple" aria-hidden="true"></span>');
    ink.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
    b.append(ink);
    ink.addEventListener("animationend", () => ink.remove());
  });

  // directional arrows on social links + project list rows
  $$(".hero__links a[target], .contact__row a[target]").forEach((a) => a.insertAdjacentHTML("beforeend", '<span class="arr" aria-hidden="true">↗</span>'));
  $$(".index a").forEach((a) => a.insertAdjacentHTML("beforeend", '<span class="index__go" aria-hidden="true">→</span>'));

  // copy email
  const copyText = async (text) => {
    try { await navigator.clipboard.writeText(text); return true; } catch (e) {
      const ta = make("<textarea></textarea>"); ta.value = text; ta.setAttribute("readonly", ""); ta.style.cssText = "position:fixed;opacity:0";
      document.body.append(ta); ta.select(); let ok = false; try { ok = document.execCommand("copy"); } catch (err) { ok = false; } ta.remove(); return ok;
    }
  };
  const copyEmail = async (btn) => {
    if (!EMAIL) return;
    const ok = await copyText(EMAIL);
    showToast(ok ? `Email copied — ${EMAIL}` : `Copy failed — my email is ${EMAIL}`);
    if (!btn || !ok) return;
    btn.classList.add("is-done");
    btn.setAttribute("aria-label", "Email copied");
    setTimeout(() => { btn.classList.remove("is-done"); btn.setAttribute("aria-label", "Copy email address"); }, 1800);
  };
  const mail = $(".contact__mail");
  if (mail && EMAIL) {
    const copyBtn = make(`<button type="button" class="btn btn--copy" aria-label="Copy email address" data-magnetic>
      <span class="btn--copy__a"><span aria-hidden="true">⧉</span> Copy email</span>
      <span class="btn--copy__b" aria-hidden="true">✓ Copied</span></button>`);
    const wrap = make('<div class="contact__actions"></div>');
    mail.replaceWith(wrap); wrap.append(mail, copyBtn);
    copyBtn.addEventListener("click", () => copyEmail(copyBtn));
  }

  /* ============================================================
     2. SCROLL — top progress bar + back-to-top ring
     ============================================================ */
  const bar = make('<div class="progress" aria-hidden="true"><i></i></div>');
  document.body.prepend(bar);
  const fab = $(".fab-top");
  const C = 2 * Math.PI * 23;
  if (fab) {
    fab.classList.add("fab");
    fab.innerHTML = `<svg class="fab__ring" viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="23" class="fab__track"/><circle cx="26" cy="26" r="23" class="fab__value" stroke-dasharray="${C}" stroke-dashoffset="${C}"/></svg><span aria-hidden="true">↑</span>`;
    fab.addEventListener("click", (e) => { e.preventDefault(); e.stopImmediatePropagation(); scrollToTarget("#top"); $(".nav__logo")?.focus({ preventScroll: true }); }, true);
  }
  const ring = fab && $(".fab__value", fab);
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
    bar.firstChild.style.transform = `scaleX(${p})`;
    if (ring) ring.style.strokeDashoffset = C * (1 - p);
    document.body.classList.toggle("past-hero", scrollY > innerHeight * 0.6);
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();

  /* ============================================================
     3. QUICK NAVIGATION (floating)
     ============================================================ */
  const kbd = isMac ? "⌘K" : "Ctrl K";
  const qnav = make(`<div class="qnav">
    <button type="button" class="fab qnav__toggle" aria-expanded="false" aria-controls="qnav-menu" aria-label="Quick navigation"><i></i><i></i><i></i><i></i></button>
    <nav class="qnav__menu" id="qnav-menu" aria-label="Quick navigation" inert>
      <a href="#work" data-q>Projects <span aria-hidden="true">→</span></a>
      <a href="#about" data-q>About <span aria-hidden="true">→</span></a>
      <a href="resume.pdf" download="Preston-Frazier-Resume.pdf" data-q>Résumé <span aria-hidden="true">↓</span></a>
      <a href="#contact" data-q>Contact <span aria-hidden="true">→</span></a>
      <button type="button" data-q data-act="palette">Search <kbd>${kbd}</kbd></button>
      <button type="button" data-q data-act="tour">Explore portfolio <span aria-hidden="true">▶</span></button>
    </nav></div>`);
  document.body.append(qnav);
  const qBtn = $(".qnav__toggle", qnav), qMenu = $(".qnav__menu", qnav);
  const setQ = (open) => {
    qnav.classList.toggle("is-open", open);
    qBtn.setAttribute("aria-expanded", open);
    open ? qMenu.removeAttribute("inert") : qMenu.setAttribute("inert", "");
    if (open) $("[data-q]", qMenu).focus();
  };
  qBtn.addEventListener("click", () => setQ(!qnav.classList.contains("is-open")));
  qMenu.addEventListener("click", (e) => {
    const item = e.target.closest("[data-q]"); if (!item) return;
    const href = item.getAttribute("href");
    if (href && href.startsWith("#")) { e.preventDefault(); e.stopImmediatePropagation(); scrollToTarget(href); }
    setQ(false);
    if (item.dataset.act === "palette") openPalette(qBtn);
    if (item.dataset.act === "tour") startTour();
  }, true);
  document.addEventListener("click", (e) => { if (qnav.classList.contains("is-open") && !qnav.contains(e.target)) setQ(false); });
  qnav.addEventListener("keydown", (e) => { if (e.key === "Escape") { setQ(false); qBtn.focus(); } });

  /* ============================================================
     4. SKILL TOOLTIPS (hover + keyboard focus)
     ============================================================ */
  const TIPS = {
    "HTML5": "Semantic, accessible markup", "CSS3": "Layout, responsive design & motion", "JavaScript": "Interactivity — including this site",
    "React": "Component-based front-end UI", "Figma": "Nybble Group, VDart & REVEL design work", "Adobe": "Photoshop, Illustrator & Lightroom for brand work",
    "Git": "Version control on every project", "MySQL": "Relational databases & SQL", "C++": "Systems & object-oriented programming",
    "Python": "AI110 apps — PawPal+, VibeFinder", "Kotlin": "4 Android apps built with CodePath", "Java": "Object-oriented programming",
    "Streamlit": "Python web apps — PawPal+ & Game Glitch Investigator", "REST APIs": "TMDB API in Flixster & Flixster+",
    "Android Development": "Flixster, Flixster+, Wishlist & Wordle", "Google Cloud": "Cloud platform & services",
  };
  $$(".logos .logo:not(.logo--more)").forEach((cell, i) => {
    const name = cell.querySelector("span")?.textContent.trim();
    if (!TIPS[name]) return;
    cell.tabIndex = 0;
    cell.setAttribute("aria-describedby", `tip-${i}`);
    cell.insertAdjacentHTML("beforeend", `<span class="tip" role="tooltip" id="tip-${i}">${TIPS[name]}</span>`);
  });

  /* ============================================================
     5. PROJECT CATEGORY FILTER (Selected Work list)
     ============================================================ */
  const CATS = {
    revel: ["brand"], nybble: ["ux"], vdart: ["ux"], loophole: ["ux", "dev"], codepath: ["dev"], presstudios: ["brand"],
    barber: ["brand"], tlc: ["brand"], brittian: ["brand"], logos: ["brand"], presflicks: ["campaign"], fullcup: ["brand"],
    flyers: ["campaign"], husa: ["campaign"], medical: ["brand"], stacks: ["brand"],
  };
  const FILTERS = [["all", "All"], ["ux", "UX & Product"], ["dev", "Development"], ["brand", "Branding"], ["campaign", "Campaigns & Photo"]];
  const index = $("#index");
  if (index) {
    const rows = $$("li", index);
    rows.forEach((li) => { const id = li.querySelector("a").getAttribute("href").slice(1); li.dataset.cat = (CATS[id] || []).join(" "); });
    const fbar = make(`<div class="filters" role="group" aria-label="Filter projects by category">
      ${FILTERS.map(([k, label]) => `<button type="button" class="filter" data-filter="${k}" aria-pressed="${k === "all"}">${label}<sup>${k === "all" ? rows.length : rows.filter((r) => r.dataset.cat.split(" ").includes(k)).length}</sup></button>`).join("")}
      <span class="sr-only" aria-live="polite" id="filter-status"></span></div>`);
    index.before(fbar);
    const count = $("#work-count");
    fbar.addEventListener("click", (e) => {
      const b = e.target.closest(".filter"); if (!b) return;
      const k = b.dataset.filter;
      $$(".filter", fbar).forEach((x) => x.setAttribute("aria-pressed", x === b));
      let shown = 0;
      rows.forEach((li) => {
        const on = k === "all" || li.dataset.cat.split(" ").includes(k);
        li.classList.toggle("is-out", !on);
        if (on) { li.style.setProperty("--d", `${shown * 35}ms`); li.classList.remove("is-in"); void li.offsetWidth; li.classList.add("is-in"); shown++; }
      });
      if (count) count.textContent = `(${shown})`;
      $("#filter-status").textContent = `Showing ${shown} ${shown === 1 ? "project" : "projects"}`;
      window.ScrollTrigger && ScrollTrigger.refresh();
    });
  }

  /* ============================================================
     6. THEME TOGGLE (dark default · light)
     ============================================================ */
  const themeBtn = make(`<button type="button" class="theme-toggle" aria-pressed="false" aria-label="Switch to light theme"><span class="theme-toggle__icon" aria-hidden="true"></span></button>`);
  const navCta = $(".nav__cta");
  navCta ? navCta.before(themeBtn) : $(".nav")?.append(themeBtn);
  if (fine) {
    const hint = make(`<button type="button" class="kbd-hint" aria-label="Open command menu">${kbd}</button>`);
    themeBtn.before(hint);
    hint.addEventListener("click", () => openPalette(hint));
  }
  const applyTheme = (t, announce) => {
    const light = t === "light";
    light ? root.setAttribute("data-theme", "light") : root.removeAttribute("data-theme");
    themeBtn.setAttribute("aria-pressed", light);
    themeBtn.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
    $('meta[name="theme-color"]')?.setAttribute("content", light ? "#f3f1ec" : "#0b0b0b");
    store.set("pf-theme", t);
    if (announce) showToast(light ? "Light theme on" : "Dark theme on");
  };
  const toggleTheme = () => {
    root.classList.add("theme-anim");
    applyTheme(root.getAttribute("data-theme") === "light" ? "dark" : "light", true);
    setTimeout(() => root.classList.remove("theme-anim"), 400);
  };
  applyTheme(store.get("pf-theme") === "light" ? "light" : "dark");
  themeBtn.addEventListener("click", toggleTheme);

  /* ============================================================
     7. COMMAND PALETTE (⌘K / Ctrl+K)
     ============================================================ */
  const projectList = (typeof ORDER !== "undefined" ? ORDER : []).map((id) => {
    const c = typeof CASES !== "undefined" && CASES.find((x) => x.id === id);
    const p = typeof PROJECTS !== "undefined" && PROJECTS.find((x) => x.id === id);
    const it = c || p; return it ? { id, title: it.title, sub: c ? c.category : p.tag } : null;
  }).filter(Boolean);
  const COMMANDS = [
    ...[["#about", "About me"], ["#skills", "Skills & Expertise"], ["#work", "Selected Work"], ["#code", "Code on GitHub"], ["#certs", "Certifications"], ["#contact", "Contact"]]
      .map(([href, label]) => ({ group: "Sections", label, hint: "Go", run: () => scrollToTarget(href) })),
    ...projectList.map((p) => ({ group: "Projects", label: p.title, hint: p.sub, run: () => scrollToTarget(`#${p.id}`) })),
    ...((typeof CASES !== "undefined" && CASES.find((c) => c.id === "codepath")?.apps) || [])
      .map(([title, stack, , repo]) => ({ group: "Apps & Code", label: title, hint: stack, run: () => open(`https://github.com/pfrazier2x/${repo}`, "_blank", "noopener") })),
    ...(EMAIL ? [{ group: "Actions", label: "Copy email address", hint: "Clipboard", run: () => copyEmail() }] : []),
    { group: "Actions", label: "Download résumé", hint: "PDF", run: downloadResume },
    { group: "Actions", label: "Toggle light / dark theme", hint: "Theme", run: toggleTheme },
    { group: "Actions", label: "Explore portfolio (guided tour)", hint: "6 stops", run: () => startTour() },
    { group: "Links", label: "Open GitHub", hint: "github.com/pfrazier2x", run: () => open("https://github.com/pfrazier2x", "_blank", "noopener") },
    { group: "Links", label: "Open LinkedIn", hint: "LinkedIn", run: () => open("https://www.linkedin.com/in/preston-frazier-0b9a8a2a9/", "_blank", "noopener") },
    { group: "Links", label: "Open REVEL store", hint: "revel-us.com", run: () => open("https://revel-us.com", "_blank", "noopener") },
  ];
  const pal = make(`<div class="cmdk" role="dialog" aria-modal="true" aria-label="Command menu" hidden>
    <div class="cmdk__panel">
      <div class="cmdk__search"><span aria-hidden="true">⌕</span>
        <input type="text" role="combobox" aria-expanded="true" aria-controls="cmdk-list" aria-autocomplete="list" aria-label="Search sections, projects and actions" placeholder="Search projects, sections, actions…" autocomplete="off" spellcheck="false">
        <kbd>esc</kbd></div>
      <ul class="cmdk__list" id="cmdk-list" role="listbox" aria-label="Results"></ul>
      <div class="cmdk__foot"><span><kbd>↑</kbd><kbd>↓</kbd> navigate</span><span><kbd>↵</kbd> open</span><span><kbd>esc</kbd> close</span></div>
    </div></div>`);
  document.body.append(pal);
  const palInput = $("input", pal), palList = $(".cmdk__list", pal);
  let palItems = [], palActive = 0, palReturn = null;
  const renderPalette = () => {
    const q = palInput.value.trim().toLowerCase();
    palItems = COMMANDS.filter((c) => !q || `${c.label} ${c.hint} ${c.group}`.toLowerCase().includes(q));
    palActive = Math.min(palActive, Math.max(0, palItems.length - 1));
    let last = "";
    palList.innerHTML = palItems.length ? palItems.map((c, i) => {
      const head = c.group !== last ? `<li class="cmdk__group" role="presentation">${c.group}</li>` : "";
      last = c.group;
      return `${head}<li class="cmdk__item${i === palActive ? " is-active" : ""}" role="option" id="cmdk-${i}" aria-selected="${i === palActive}" data-i="${i}"><span>${c.label}</span><small>${c.hint}</small></li>`;
    }).join("") : `<li class="cmdk__empty" role="presentation">No results for “${palInput.value.replace(/</g, "&lt;")}”</li>`;
    palInput.setAttribute("aria-activedescendant", palItems.length ? `cmdk-${palActive}` : "");
    $(".is-active", palList)?.scrollIntoView({ block: "nearest" });
  };
  function openPalette(from) {
    if (!pal.hidden) return;
    palReturn = from || document.activeElement;
    pal.hidden = false; lockScroll(true);
    requestAnimationFrame(() => pal.classList.add("is-open"));
    palInput.value = ""; palActive = 0; renderPalette(); palInput.focus();
  }
  const closePalette = () => {
    if (pal.hidden) return;
    pal.classList.remove("is-open"); lockScroll(false);
    setTimeout(() => { pal.hidden = true; }, reduce ? 0 : 180);
    palReturn && palReturn.focus && palReturn.focus({ preventScroll: true });
  };
  const runPalette = (i) => { const c = palItems[i]; if (!c) return; closePalette(); setTimeout(() => c.run(), 60); };
  palInput.addEventListener("input", () => { palActive = 0; renderPalette(); });
  palInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); palActive = (palActive + 1) % Math.max(1, palItems.length); renderPalette(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); palActive = (palActive - 1 + palItems.length) % Math.max(1, palItems.length); renderPalette(); }
    else if (e.key === "Enter") { e.preventDefault(); runPalette(palActive); }
    else if (e.key === "Escape") { e.preventDefault(); closePalette(); }
    else if (e.key === "Tab") e.preventDefault(); // focus stays in the dialog
  });
  palList.addEventListener("click", (e) => { const li = e.target.closest(".cmdk__item"); if (li) runPalette(+li.dataset.i); });
  palList.addEventListener("mousemove", (e) => { const li = e.target.closest(".cmdk__item"); if (li && +li.dataset.i !== palActive) { palActive = +li.dataset.i; renderPalette(); } });
  pal.addEventListener("click", (e) => { if (e.target === pal) closePalette(); });

  /* ============================================================
     8. GUIDED TOUR — "Explore portfolio"
     ============================================================ */
  const STOPS = [
    ["#about", "About", "Who I am, how I got into product design, and how I work."],
    ["#skills", "Skills & Expertise", "My technical skills, toolkit and experience — hover or focus a logo for details."],
    ["#work", "Selected Work", "All 16 projects. Filter by category, or hover a row to preview it."],
    ["#revel", "REVEL", "My streetwear brand — four drops, all sold out."],
    ["#codepath", "CodePath Projects", "Android and AI apps, each linked to its code on GitHub."],
    ["#contact", "Contact", "Copy my email, download my résumé, or connect on LinkedIn."],
  ];
  const tour = make(`<div class="tour" role="dialog" aria-label="Guided tour" hidden>
    <div class="tour__top"><span class="tour__step" aria-live="polite"></span><button type="button" class="tour__x" aria-label="End tour">×</button></div>
    <div class="tour__bar" aria-hidden="true"><i></i></div>
    <h2 class="tour__title"></h2><p class="tour__text"></p>
    <div class="tour__nav"><button type="button" class="tour__btn tour__prev">← Back</button><button type="button" class="tour__btn tour__next">Next →</button></div>
  </div>`);
  document.body.append(tour);
  let stop = 0, tourOn = false;
  const showStop = (i) => {
    stop = Math.max(0, Math.min(STOPS.length - 1, i));
    const [sel, title, text] = STOPS[stop];
    $$(".tour-focus").forEach((x) => x.classList.remove("tour-focus"));
    $(sel)?.classList.add("tour-focus");
    $(".tour__step", tour).textContent = `Stop ${stop + 1} of ${STOPS.length}: ${title}`;
    $(".tour__title", tour).textContent = title;
    $(".tour__text", tour).textContent = text;
    $(".tour__bar i", tour).style.transform = `scaleX(${(stop + 1) / STOPS.length})`;
    $(".tour__prev", tour).disabled = stop === 0;
    $(".tour__next", tour).textContent = stop === STOPS.length - 1 ? "Finish ✓" : "Next →";
    scrollToTarget(sel);
  };
  function startTour() { tourOn = true; tour.hidden = false; requestAnimationFrame(() => tour.classList.add("is-on")); showStop(0); $(".tour__next", tour).focus({ preventScroll: true }); }
  const endTour = () => {
    tourOn = false; tour.classList.remove("is-on"); $$(".tour-focus").forEach((x) => x.classList.remove("tour-focus"));
    setTimeout(() => { tour.hidden = true; }, reduce ? 0 : 250);
  };
  $(".tour__next", tour).addEventListener("click", () => (stop === STOPS.length - 1 ? (endTour(), showToast("Thanks for exploring ✦")) : showStop(stop + 1)));
  $(".tour__prev", tour).addEventListener("click", () => showStop(stop - 1));
  $(".tour__x", tour).addEventListener("click", endTour);
  const heroCtas = $(".hero__ctas");
  if (heroCtas) {
    const tb = make('<button type="button" class="tour-start" data-hover>Explore portfolio <span aria-hidden="true">▶</span></button>');
    heroCtas.append(tb);
    tb.addEventListener("click", startTour);
  }

  /* ============================================================
     9. EASTER EGG — type “revel”
     ============================================================ */
  const egg = make(`<div class="egg" aria-hidden="true"><p>Evolution never ends.<br>Become what you envision.</p><span>✦ REVEL ✦</span></div>`);
  document.body.append(egg);
  let buf = "";
  const showEgg = () => { egg.classList.add("is-on"); showToast("You found it ✦ — REVEL, est. 2023"); setTimeout(() => egg.classList.remove("is-on"), reduce ? 1800 : 2600); };
  egg.addEventListener("click", () => egg.classList.remove("is-on"));
  console.log("%cPF ©26%c  Designed & built by Preston Frazier. Psst — type “revel” anywhere on the page.", "background:#e5202b;color:#fff;padding:3px 6px;font-weight:700", "color:inherit");

  /* ---------- global keys ---------- */
  document.addEventListener("keydown", (e) => {
    const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || "") || document.activeElement?.isContentEditable;
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); pal.hidden ? openPalette() : closePalette(); return; }
    if (tourOn && !typing) {
      if (e.key === "ArrowRight") { e.preventDefault(); stop === STOPS.length - 1 ? endTour() : showStop(stop + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); showStop(stop - 1); }
      if (e.key === "Escape") endTour();
    }
    if (typing || e.metaKey || e.ctrlKey || e.altKey || e.key.length !== 1) return;
    buf = (buf + e.key.toLowerCase()).slice(-5);
    if (buf === "revel") { buf = ""; showEgg(); }
  });

  /* ============================================================
     10. REVEAL-ON-SCROLL (works without GSAP) — timeline + new UI
     ============================================================ */
  const revealTargets = $$(".xp, .filters, .contact__actions");
  if ("IntersectionObserver" in window && !reduce) {
    revealTargets.forEach((t) => t.classList.add("will-reveal"));
    const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -12% 0px" });
    revealTargets.forEach((t) => io.observe(t));
  }

  // new tilt targets (pointer devices only; main.js defines __bindTilt)
  if (fine && window.__bindTilt) window.__bindTilt(document.querySelectorAll(".tilt"));
})();
