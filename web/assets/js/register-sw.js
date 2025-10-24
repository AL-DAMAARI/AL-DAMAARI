if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/web/service-worker.js').catch(() => {});
  });
}
