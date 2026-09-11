// Keep the eventual store destination in one place. Replace when the listing is live.
const GOOGLE_PLAY_URL = '';

document.querySelectorAll('.play-link').forEach((link) => {
  if (GOOGLE_PLAY_URL) link.href = GOOGLE_PLAY_URL;
  else link.addEventListener('click', (event) => event.preventDefault());
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  navLinks.classList.toggle('is-open', !open);
});
navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('is-open');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
