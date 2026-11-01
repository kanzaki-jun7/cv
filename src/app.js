document.documentElement.classList.add('js');

const year = document.querySelector('#year');
const progress = document.querySelector('.scroll-progress');
const revealItems = document.querySelectorAll('[data-reveal]');

if (year) year.textContent = new Date().getFullYear();

if (revealItems.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observerInstance.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  revealItems.forEach((item, index) => {
    item.style.setProperty('--reveal-delay', `${Math.min(index * 45, 240)}ms`);
    observer.observe(item);
  });
}

const updateProgress = () => {
  if (!progress) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
};

updateProgress();
window.addEventListener('scroll', updateProgress, { passive: true });
