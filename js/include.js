// include.js
async function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  for (const el of elements) {
    const file = el.getAttribute('data-include');
    const res = await fetch(file);
    if (res.ok) {
      el.innerHTML = await res.text();
    } else {
      el.innerHTML = "Erreur de chargement du fichier : " + file;
    }
  }

  // Appel des fonctions JS après inclusion
  if (typeof initApp === 'function') {
    initApp();
  }
}
window.addEventListener('DOMContentLoaded', includeHTML);
