/* WRTHY CUTS — site interactions (vanilla JS, no dependencies) */

// 1. Sticky header gets a solid background once you scroll past the top.
const header = document.querySelector('.site-header');
const onScroll = () => {
  if (window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// 2. Scroll-reveal: fade elements in as they enter the viewport.
//    Falls back to "just show everything" if IntersectionObserver is missing.
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in'));
}

// 3. Auto-set the footer year so it never goes stale.
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();