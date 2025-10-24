# Kulmiye Polyclinic Pharmacy — Brand & Digital System

A modern, professional identity and lightweight digital system for a trusted Somali community pharmacy. The system communicates care, trust, innovation, and wellness with a clean UI and accessible design.

## What’s Included
- Brand guidelines and scalable SVG logo set
- Web UI (static, no framework) with tokens‑based design system
- Pages: Homepage, Online Pharmacy (filters + mock checkout), Patient Dashboard, Pharmacist Dashboard, Doctors (API), About, Contact
- PWA: manifest + service worker (offline cache for core pages)
- Emergency support widget (24/7 hotline + WhatsApp)
- OpenAPI spec for e‑prescription integration

## Quick Start (Local)
1. Serve the project root as static files (so absolute paths like `/web/...` work).
2. Open `http://localhost:8000/web/index.html`.

Using Python:
```bash
cd /workspace
python3 -m http.server 8000
# Then open http://localhost:8000/web/index.html
```

Using Node (http-server):
```bash
npm i -g http-server
http-server -p 8000 .
```

## Project Structure
```text
/brand
  BRAND_GUIDE.md
  /logo
    kulmiye-logo-icon.svg
    kulmiye-logo-horizontal.svg
    kulmiye-logo-horizontal-mono.svg
/web
  index.html
  catalog.html
  patient.html
  pharmacist.html
  doctor.html
  about.html
  contact.html
  manifest.webmanifest
  service-worker.js
  /assets
    /css
      tokens.css
      base.css
    /js
      components.js
      support.js
      register-sw.js
/api
  openapi.yaml
```

## Design System
- Colors: Blue (`#1E88E5`, `#1565C0`) and Emerald (`#0E9F6E`, `#12B886`) with white and cool neutrals.
- Typography: Inter (UI/body) with Poppins (headings). See `tokens.css`.
- UI Style: Clean white surfaces, subtle medical gradients (blue → green), soft‑shadow/glass cards.
- Accessibility: Aim for WCAG AA (≥4.5:1 body, ≥3:1 large text/buttons).

Edit tokens in `web/assets/css/tokens.css` or JSON in `web/assets/design-tokens.json`.

## Pages & Features
- Homepage: Hero banner with CTAs (Book, Refill/Shop, Contact).
- Online Pharmacy: Filterable catalog (mock data) + mock checkout UI.
- Patient Dashboard: Upload prescription, order tracking, booking, refill reminders.
- Pharmacist Dashboard: Stock snapshot, e‑prescriptions table, consultation list.
- Doctors: Integration overview + `api/openapi.yaml` (FHIR‑ish e‑prescription draft).
- Contact: Phone, WhatsApp, hours, Google Map embed.
- Support Widget: Floating button with hotline and WhatsApp on all pages.

## PWA
- Manifest: `web/manifest.webmanifest` (name, theme color, icon).
- Service Worker: `web/service-worker.js` caches core pages. Registered via `web/assets/js/register-sw.js`.

Note: For first‑visit install, ensure any page is served over HTTP(S). SW is registered across pages.

## Customization
- Logos: Use `brand/logo/kulmiye-logo-horizontal.svg` for headers and `kulmiye-logo-icon.svg` for icons/app icon.
- Colors/Type: Adjust CSS variables in `tokens.css`.
- Copy: Update headlines and text in HTML files; keep tone calm, trustworthy, and community‑oriented.

## Deployment
- Any static host works (Netlify, Vercel, GitHub Pages, Nginx). Serve the repo root so absolute paths `/web/...` and `/brand/...` resolve.
- If using a subpath (e.g., `/kulmiye`), convert absolute links to relative or set a base tag.

## API (Doctors)
- See `api/openapi.yaml` for submitting e‑prescriptions and retrieving status.
- Security: Bearer JWT (placeholder). Integrate with your auth provider.

## Notes
- This is a static prototype. Wire real backend services for uploads, checkout, notifications, and e‑Rx processing.
- Imagery suggestions: friendly pharmacists, clean shelves, green plants, natural light.

—
Designed for Kulmiye Polyclinic Pharmacy — Somali community healthcare.
