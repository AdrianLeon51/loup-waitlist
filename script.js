// Theme override via query param: ?theme=1 | ?theme=2 | ?theme=3 | ?theme=4 | ?theme=original
(() => {
  const params = new URLSearchParams(window.location.search);
  const theme = params.get('theme');
  const root = document.documentElement;
  const allowedThemes = new Set(['original', '1', '2', '3', '4']);

  // Theme 3 is now the default when no explicit query param is provided.
  if (!theme) {
    root.setAttribute('data-theme', '3');
    return;
  }

  if (!allowedThemes.has(theme)) {
    root.setAttribute('data-theme', '3');
    return;
  }

  root.setAttribute('data-theme', theme);
})();

// Keep how-it-works illustration color in sync with active theme
const howIllustration = document.querySelector('.how-illustration');
if (howIllustration) {
  const activeTheme = document.documentElement.getAttribute('data-theme') || 'original';
  const illustrationByTheme = {
    original: 'assets/images/how-it-works-illustration.svg',
    '1': 'assets/images/how-it-works-illustration-theme1.svg',
    '2': 'assets/images/how-it-works-illustration-theme2.svg',
    '3': 'assets/images/how-it-works-illustration-theme3.svg',
    '4': 'assets/images/how-it-works-illustration-theme4.svg'
  };

  howIllustration.src = illustrationByTheme[activeTheme] || illustrationByTheme.original;
}

// Sticky header state on scroll
const header = document.querySelector('.site-header');
// Mobile navigation controls
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');
// Section reveal animation targets
const sections = document.querySelectorAll('.fade-section');

window.addEventListener('scroll', () => {
  if (!header) {
    return;
  }

  if (window.scrollY > 24) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// Fade sections in as they enter the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: '0px 0px -8% 0px'
  }
);

sections.forEach((section) => observer.observe(section));

// Horizontal carousel navigation
const carouselTrack = document.querySelector('#carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

if (carouselTrack && prevBtn && nextBtn) {
  const scrollStep = () => {
    const firstCard = carouselTrack.querySelector('.carousel-card');
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 280;
    return cardWidth + 16;
  };

  prevBtn.addEventListener('click', () => {
    carouselTrack.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    carouselTrack.scrollBy({ left: scrollStep(), behavior: 'smooth' });
  });
}

// Uniformly scale the Explore showcase so composition remains identical at all widths.
const showcaseScroll = document.querySelector('.product-showcase-scroll');
const showcase = document.querySelector('.product-showcase');

if (showcaseScroll && showcase) {
  const baseShowcaseWidth = 706;

  const updateShowcaseScale = () => {
    const availableWidth = showcaseScroll.clientWidth;
    const scale = Math.min(1, availableWidth / baseShowcaseWidth);
    showcaseScroll.style.setProperty('--showcase-scale', String(scale));

    // Ensure wrapper grows/shrinks with the transformed content to avoid clipping.
    const scaledHeight = showcase.offsetHeight * scale;
    showcaseScroll.style.height = `${Math.ceil(scaledHeight)}px`;
  };

  updateShowcaseScale();
  window.addEventListener('resize', updateShowcaseScale);
  window.addEventListener('load', updateShowcaseScale);

  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver(updateShowcaseScale);
    resizeObserver.observe(showcaseScroll);
  }
}

