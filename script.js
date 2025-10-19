
document.addEventListener('DOMContentLoaded', () => {
  // Menu mobile basé sur aria-controls
  const toggles = document.querySelectorAll('[aria-controls]');
  toggles.forEach(btn => {
    const id = btn.getAttribute('aria-controls');
    const target = document.getElementById(id);
    if (!target) return;
    // Cacher par défaut en mobile
    if (!target.hasAttribute('data-start-open')) target.setAttribute('hidden', '');
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', () => {
      const hidden = target.hasAttribute('hidden');
      if (hidden) {
        target.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'true');
      } else {
        target.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Année automatique
  const year = new Date().getFullYear();
  document.querySelectorAll('#year, [data-year="auto"]').forEach(el => el.textContent = year);

  // Défilement doux + focus sur ancres internes
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
});
