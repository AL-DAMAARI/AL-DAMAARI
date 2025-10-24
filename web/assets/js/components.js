document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');

  if (header) header.innerHTML = `
    <div class="container nav">
      <a class="brand" href="/web/index.html">
        <img src="/brand/logo/kulmiye-logo-icon.svg" alt="Kulmiye icon"/>
        <span>Kulmiye Pharmacy</span>
      </a>
      <nav>
        <ul>
          <li><a href="/web/catalog.html">Online Pharmacy</a></li>
          <li><a href="/web/patient.html">Patient</a></li>
          <li><a href="/web/pharmacist.html">Pharmacist</a></li>
          <li><a href="/web/doctor.html">Doctors</a></li>
          <li><a href="/web/about.html">About</a></li>
          <li><a href="/web/contact.html">Contact</a></li>
        </ul>
      </nav>
    </div>`;

  if (footer) footer.innerHTML = `
    <div class="container inner">
      <div>
        <img src="/brand/logo/kulmiye-logo-horizontal.svg" alt="Kulmiye logo" style="width:280px;max-width:100%"/>
        <p class="muted" style="margin-top:12px">Your trusted Somali community pharmacy for modern, compassionate care.</p>
      </div>
      <div>
        <h3>Services</h3>
        <ul style="list-style:none;padding:0;margin:0;display:grid;gap:10px">
          <li><a href="/web/catalog.html">Medicines & Essentials</a></li>
          <li><a href="/web/patient.html">Digital Consultations</a></li>
          <li><a href="/web/patient.html#refill">Refill Reminders</a></li>
          <li><a href="/web/doctor.html">Doctor Prescriptions</a></li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <ul style="list-style:none;padding:0;margin:0;display:grid;gap:10px">
          <li><a href="/web/contact.html">Find us</a></li>
          <li><a href="https://wa.me/252612345678" target="_blank" rel="noopener">WhatsApp</a></li>
          <li><a href="tel:+252612345678">+252 61 234 5678</a></li>
        </ul>
      </div>
    </div>
    <div class="container" style="padding: 0 0 24px 0; display:flex; justify-content:space-between; align-items:center;">
      <span class="small">© ${new Date().getFullYear()} Kulmiye Polyclinic Pharmacy</span>
      <a class="small" href="/api/openapi.yaml">API: e‑Prescriptions</a>
    </div>`;
});
