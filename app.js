(function () {
  const { siteConfig, content } = window;
  const el = (html) => {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
  };

  const app = document.getElementById("app");
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Footer socials
  const socialWrap = document.getElementById("socialLinks");
  socialWrap.innerHTML = (window.siteConfig.social || [])
    .map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`)
    .join("");

  // Renderers
  window.renderAbout = function renderAbout() {
    document.title = `${siteConfig.title} – About`;
    app.innerHTML = "";
    const hero = el(`
      <section class="hero">
        <img class="avatar" alt="avatar" src="${siteConfig.avatar}">
        <div>
          <h1 class="title">${siteConfig.title}</h1>
          <p class="subtitle">${siteConfig.role} · ${siteConfig.location}</p>
        </div>
      </section>
    `);
    app.appendChild(hero);

    app.appendChild(el(`<h2 class="section-title">Introduction</h2>`));
    app.appendChild(el(`<div class="card">${content.intro.bio}</div>`));

    app.appendChild(el(`<h2 class="section-title">Work Experience</h2>`));
    content.work.forEach((w) => {
      const node = el(`
        <article class="card">
          <header style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;">
            <div><strong>${w.company}</strong> · <span class="muted">${w.role}</span></div>
            <div class="muted">${w.timeframe}</div>
          </header>
          <ul class="list">${w.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
          ${w.image ? `<img src="${w.image}" alt="${w.company}" style="margin-top:12px;width:100%;border-radius:8px;border:1px solid var(--border);">` : ""}
          <div style="margin-top:8px;">${(w.tags||[]).map((t)=>`<span class="tag">${t}</span>`).join("")}</div>
        </article>
      `);
      app.appendChild(node);
    });

    app.appendChild(el(`<h2 class="section-title">Studies</h2>`));
    const studies = el(`<div class="grid"></div>`);
    content.studies.forEach((s) => studies.appendChild(el(
      `<div class="card"><strong>${s.title}</strong><div class="muted">${s.place} · ${s.year}</div></div>`
    )));
    app.appendChild(studies);

    app.appendChild(el(`<h2 class="section-title">Technical skills</h2>`));
    app.appendChild(el(`<div class="card">${content.skills.map((x)=>`<span class="tag">${x}</span>`).join("")}</div>`));
  };


window.renderWork = function renderWork() {
  document.title = `${siteConfig.title} – Work`;
  app.innerHTML = `<h1 class="title">Work</h1>`;
  const grid = el(`<div class="grid"></div>`);
  content.work.forEach((w) => grid.appendChild(el(`
    <article class="card">
      ${w.image ? `<img src="${w.image}" alt="${w.company}" style="width:100%;border-radius:8px;border:1px solid var(--border);margin-bottom:8px;">` : ""}
      <div><strong>${w.company}</strong> · <span class="muted">${w.role}</span></div>
      <div class="muted" style="margin:6px 0;">${w.timeframe}</div>
      <div>${(w.tags||[]).map((t)=>`<span class="tag">${t}</span>`).join("")}</div>
    </article>
  `)));
  app.appendChild(grid);
};


  window.renderBlogList = function renderBlogList() {
    document.title = `${siteConfig.title} – Blog`;
    app.innerHTML = `<h1 class="title">Blog</h1>`;
    content.blog.forEach((p) => app.appendChild(el(`
      <article class="card">
        <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;">
          <a href="#/post/${p.slug}"><strong>${p.title}</strong></a>
          <span class="muted">${new Date(p.date).toLocaleDateString()}</span>
        </div>
        ${p.cover ? `<img src="${p.cover}" alt="${p.title}" style="margin-top:8px;width:100%;border-radius:8px;border:1px solid var(--border);">` : ""}
        <p class="muted" style="margin-top:8px;">${p.body.slice(0, 140)}...</p>
      </article>
    `)));
  };

  window.renderBlogPost = function renderBlogPost(slug) {
    const post = content.blog.find((p) => p.slug === slug);
    if (!post) return renderBlogList();
    document.title = `${post.title} – ${siteConfig.title}`;
    app.innerHTML = "";
    const node = el(`
      <article class="prose">
        <h1>${post.title}</h1>
        <div class="muted">${new Date(post.date).toLocaleDateString()}</div>
        ${post.cover ? `<img src="${post.cover}" alt="${post.title}" style="margin:12px 0;">` : ""}
        <p>${post.body}</p>
      </article>
    `);
    app.appendChild(node);
  };

  window.renderGallery = function renderGallery() {
    document.title = `${siteConfig.title} – Gallery`;
    app.innerHTML = `<h1 class="title">Gallery</h1>`;
    const grid = el(`<div class="grid"></div>`);
    content.gallery.forEach((g) => grid.appendChild(el(
      `<img src="${g.src}" alt="${g.alt}" style="width:100%;border-radius:8px;border:1px solid var(--border);">`
    )));
    app.appendChild(grid);
  };
})();




