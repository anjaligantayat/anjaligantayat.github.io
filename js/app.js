(function () {
  // ── Lightbox (used on art + outfits pages) ──
  window.openLightbox = function (src) {
    var lb = document.getElementById('lightbox');
    if (!lb) return;
    document.getElementById('lightboxImg').src = src;
    lb.classList.add('open');
  };
  window.closeLightbox = function () {
    var lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('open');
  };
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') window.closeLightbox();
  });


  // ── SPA Navigation ──
  function isRootPage(href) {
    return href.endsWith('.html') && !href.includes('/');
  }

  function navigate(url) {
    var mainEl = document.querySelector('main');
    if (!mainEl) return;

    fetch(url)
        .then(function (r) { return r.text(); })
        .then(function (html) {
          var parser = new DOMParser();
          var doc = parser.parseFromString(html, 'text/html');

          // Update content inside the existing <main> (keeps the node alive so fonts don't re-render)
          var newMain = doc.querySelector('main');
          if (newMain) {
            mainEl.innerHTML = newMain.innerHTML;
            Array.from(newMain.attributes).forEach(function(attr) {
              mainEl.setAttribute(attr.name, attr.value);
            });
          }

          // Swap lightbox if present
          var oldLb = document.getElementById('lightbox');
          var newLb = doc.getElementById('lightbox');
          if (oldLb) oldLb.remove();
          if (newLb) {
            var footer = document.querySelector('footer');
            if (footer) footer.before(newLb);
            else document.body.appendChild(newLb);
          }

          // Update title
          document.title = doc.title;

          // Update active nav link
          var filename = url.split('/').pop();
          document.querySelectorAll('.nav-links a').forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === filename);
          });

          history.pushState({ url: url }, '', url);
          window.scrollTo(0, 0);

        })
        .catch(function () {
          window.location.href = url;
        });
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a');
    if (!link) return;
    var href = link.getAttribute('href');
    if (!href || link.target === '_blank') return;
    if (!isRootPage(href)) return;
    e.preventDefault();
    navigate(new URL(href, window.location.href).href);
  });

  window.addEventListener('popstate', function (e) {
    if (e.state && e.state.url) navigate(e.state.url);
  });

  history.replaceState({ url: window.location.href }, '');
})();
