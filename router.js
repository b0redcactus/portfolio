(function () {
  const routes = {
    about: () => renderAbout(),
    work: () => renderWork(),
    blog: () => renderBlogList(),
    gallery: () => renderGallery(),
    post: (slug) => renderBlogPost(slug)
  };

  function parseLocation() {
    const hash = window.location.hash.replace(/^#\//, "");
    const [path, param] = hash.split("/");
    return { path: path || "about", param };
  }

  function router() {
    const { path, param } = parseLocation();
    if (path === "post" && param) return routes.post(param);
    if (routes[path]) return routes[path]();
    return renderAbout();
  }

  window.addEventListener("hashchange", router);
  window.addEventListener("load", router);

  // Expose for app.js to reuse helpers
  window.__router = { router };
})();


