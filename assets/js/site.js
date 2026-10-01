// LOUP home page behaviour: header hide/show, scroll reveals, partner tabs.
// Content is fully visible without this script; `.js` on <html> opts into reveals.
(function () {
  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header: hide on scroll down, show on scroll up, hairline once scrolled.
  var header = document.querySelector('.l-header');
  if (header) {
    var lastY = window.scrollY;
    var ticking = false;
    var update = function () {
      var y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 40);
      if (!reduceMotion) {
        header.classList.toggle('is-hidden', y > lastY && y > 240);
      }
      lastY = y;
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });
    // Keep the header visible while keyboard focus is inside it.
    header.addEventListener('focusin', function () { header.classList.remove('is-hidden'); });
  }

  // Scroll reveal, once per element.
  if (!reduceMotion && 'IntersectionObserver' in window) {
    root.classList.add('js');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.l-reveal').forEach(function (el) { observer.observe(el); });
  }

  // Tabs (WAI-ARIA tabs pattern, automatic activation).
  document.querySelectorAll('[role="tablist"]').forEach(function (list) {
    var tabs = Array.prototype.slice.call(list.querySelectorAll('[role="tab"]'));
    var select = function (tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).classList.toggle('is-inactive', !on);
      });
      if (focus) tab.focus();
    };
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab, false); });
      tab.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
        else if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
        else if (e.key === 'Home') next = tabs[0];
        else if (e.key === 'End') next = tabs[tabs.length - 1];
        if (next) {
          e.preventDefault();
          select(next, true);
        }
      });
    });
  });
})();
