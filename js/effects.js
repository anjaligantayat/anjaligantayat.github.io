(function () {

  // ── FALLING PETALS ──
  var symbols = ['✿', '♡', '˚', '·', '✦', '❀', '°'];
  var colors  = ['#f4a7c3', '#d4739a', '#f9c6d8', '#e8a0c0', '#fce8f3'];

  var container = document.createElement('div');
  container.id = 'petal-container';
  container.setAttribute('aria-hidden', 'true');
  document.body.appendChild(container);

  for (var i = 0; i < 28; i++) {
    (function () {
      var el = document.createElement('span');
      el.className = 'falling-petal';
      el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      el.style.left            = (Math.random() * 98).toFixed(1) + '%';
      el.style.fontSize        = (Math.random() * 10 + 8).toFixed(1) + 'px';
      el.style.color           = colors[Math.floor(Math.random() * colors.length)];
      el.style.opacity         = (Math.random() * 0.35 + 0.15).toFixed(2);
      el.style.animationDuration = (Math.random() * 12 + 8).toFixed(1) + 's';
      el.style.animationDelay  = '-' + (Math.random() * 20).toFixed(1) + 's';
      container.appendChild(el);
    })();
  }

  // ── SCROLL TO TOP BUTTON ──
  var btn = document.createElement('button');
  btn.id = 'scroll-top';
  btn.innerHTML = '&#8679;';
  btn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(btn);

  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 300);
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ── CURSOR TRAIL ──
  var trailSymbols = ['✦', '✿', '˚', '♡', '✧', '·', '❀'];
  var trailColors  = ['#f4a7c3', '#d4739a', '#f9c6d8', '#e8a0c0', '#b85c7a', '#fce8f3'];
  var lastTX = 0, lastTY = 0;

  document.addEventListener('mousemove', function (e) {
    var dx = e.clientX - lastTX;
    var dy = e.clientY - lastTY;
    // Only spawn a new sparkle every ~12px of movement (avoids flooding the DOM)
    if (dx * dx + dy * dy < 144) return;
    lastTX = e.clientX;
    lastTY = e.clientY;

    var el = document.createElement('span');
    el.className = 'cursor-trail';
    el.textContent = trailSymbols[Math.floor(Math.random() * trailSymbols.length)];
    el.style.left     = e.clientX + 'px';
    el.style.top      = e.clientY + 'px';
    el.style.fontSize = (Math.random() * 7 + 7).toFixed(0) + 'px';
    el.style.color    = trailColors[Math.floor(Math.random() * trailColors.length)];
    document.body.appendChild(el);
    setTimeout(function () { el.remove(); }, 580);
  });

  // ── CLICK BURST + FLOATING HEARTS ──
  var burstSymbols = ['✦', '✿', '˚', '✧', '·', '❀', '*'];

  document.addEventListener('click', function (e) {
    // Skip the scroll-to-top button
    if (e.target.id === 'scroll-top') return;

    // — 6 sparkles that explode outward —
    for (var i = 0; i < 6; i++) {
      (function () {
        var el = document.createElement('span');
        el.className = 'click-burst';
        el.textContent = burstSymbols[Math.floor(Math.random() * burstSymbols.length)];
        el.style.left     = e.clientX + 'px';
        el.style.top      = e.clientY + 'px';
        el.style.fontSize = (Math.random() * 7 + 8).toFixed(0) + 'px';
        el.style.color    = trailColors[Math.floor(Math.random() * trailColors.length)];
        var angle = Math.random() * Math.PI * 2;
        var dist  = Math.random() * 48 + 18;
        el.style.setProperty('--tx', (Math.cos(angle) * dist).toFixed(1) + 'px');
        el.style.setProperty('--ty', (Math.sin(angle) * dist).toFixed(1) + 'px');
        document.body.appendChild(el);
        setTimeout(function () { el.remove(); }, 700);
      })();
    }

    // — 3 hearts that float upward —
    for (var j = 0; j < 3; j++) {
      (function (idx) {
        var h = document.createElement('span');
        h.className = 'click-heart';
        h.textContent = '♡';
        h.style.left           = (e.clientX + (Math.random() * 26 - 13)).toFixed(0) + 'px';
        h.style.top            = e.clientY + 'px';
        h.style.fontSize       = (Math.random() * 8 + 10).toFixed(0) + 'px';
        h.style.color          = trailColors[Math.floor(Math.random() * trailColors.length)];
        h.style.animationDelay = (idx * 90) + 'ms';
        document.body.appendChild(h);
        setTimeout(function () { h.remove(); }, 1200);
      })(j);
    }
  });

  // ── TYPING ANIMATION (hero bio) ──
  function typeBio() {
    var bio = document.querySelector('.hero-bio');
    if (!bio) return;
    var chars = Array.from(bio.textContent.trim());
    bio.textContent = '';

    // blinking cursor
    var cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.cssText = 'animation:blink 0.7s step-end infinite; color:var(--pink-mid); font-weight:400;';
    bio.appendChild(cursor);

    var i = 0;
    function typeNext() {
      if (i < chars.length) {
        bio.insertBefore(document.createTextNode(chars[i]), cursor);
        i++;
        setTimeout(typeNext, 22);
      } else {
        setTimeout(function () { cursor.remove(); }, 900);
      }
    }
    setTimeout(typeNext, 300);
  }

  // expose so app.js can re-trigger on SPA home navigation
  window._typeBio = typeBio;
  typeBio();

})();
