export function mountSupportWidget() {
  const fab = document.createElement('div');
  fab.className = 'support-fab';
  fab.innerHTML = `<button aria-label="Need help?">❔</button>`;
  document.body.appendChild(fab);

  const panel = document.createElement('div');
  panel.className = 'support-panel';
  panel.innerHTML = `
    <a href="tel:+252612345678">📞 24/7 Hotline: +252 61 234 5678</a>
    <a href="https://wa.me/252612345678" target="_blank" rel="noopener">💬 WhatsApp Chat</a>
    <a href="/web/contact.html#map">🗺️ Find nearest location</a>
  `;
  document.body.appendChild(panel);

  fab.querySelector('button')?.addEventListener('click', () => {
    panel.classList.toggle('open');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  mountSupportWidget();
});
