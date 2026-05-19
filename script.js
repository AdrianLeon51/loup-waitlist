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

