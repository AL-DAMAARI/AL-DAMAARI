## Kulmiye Polyclinic Pharmacy — Brand and Digital System

Designing a modern, trustworthy, and caring brand and digital experience for a community pharmacy providing high‑quality healthcare, medication, and patient support services.

Keywords: Pharmacy, Healthcare, Trust, Professional, Modern, Digital Health, Clean UI, Reliable, Somali Healthcare.

---

## 1) Brand Identity

### Brand pillars
- **Care**: Compassionate, patient‑first support across every touchpoint.
- **Trust**: Safe, reliable guidance from licensed professionals.
- **Innovation**: Digital convenience with secure, modern tools.
- **Wellness**: Preventive care and holistic health for the community.

### Logo system
- **Concept**: A rounded medical cross subtly formed by a capsule and a leaf, symbolizing science × nature. The negative space creates a caring hand shape supporting the capsule.
- **Construction**: 8‑point grid; corner radius 20–28% of shape size for softness; use balanced positive/negative space.
- **Primary mark**: Cross‑leaf‑capsule emblem + wordmark “Kulmiye Pharmacy”.
- **Secondary mark**: Emblem only (for app icon, favicon, social avatar).
- **Safe area**: 0.5× emblem width around the mark; never crowd.
- **Don’ts**: No drop shadows on the mark, no color distortion, no rotation > 15°, maintain clear contrast on backgrounds.

### Color palette
- **Primary Blue**: `#2563EB` (healthcare trust)
- **Primary Green**: `#22C55E` (nature, wellness)
- **Navy (Text)**: `#0F172A`
- **Teal Accent**: `#06B6D4`
- **Success**: `#16A34A`
- **Warning**: `#F59E0B`
- **Error**: `#DC2626`
- **Background**: `#F8FAFC`
- **Surface**: `#FFFFFF`
- **Borders**: `#E2E8F0`

Gradients (for hero, highlights):
- **Health Gradient**: 135° `#22C55E` → `#2563EB`
- **Calm Teal**: 135° `#06B6D4` → `#22C55E`

Contrast: Target WCAG AA or better; use Navy for long‑form text on light backgrounds.

### Typography
- **Primary font**: Poppins or Inter (Google Fonts). Rounded, friendly, professional.
- **Fallback**: Roboto, system sans‑serif.
- **Type scale (example web)**: 
  - H1 40/48 bold; H2 32/40 semibold; H3 24/32 semibold; H4 20/28 medium
  - Body 16/24 regular; Small 14/20 regular; Caption 12/16 regular
- **Usage**: Keep headings concise; avoid all caps on long headings; numerals tabular for data.

### Iconography
- **Style**: Rounded corners, 2px stroke (or equivalent), solid fills minimal.
- **Motifs**: Pill/capsule, leaf, medical cross, caring hand, calendar, chat, shield, truck, document scan, stethoscope.
- **Consistency**: Use a single icon set (e.g., Phosphor/Remixicons/Heroicons) and supplement with custom pharmacy emblem when needed.

### Imagery
- **Photography**: Bright, clean pharmacies; smiling pharmacists; clean shelves; plants; community scenes. Avoid clutter, harsh contrast.
- **Treatment**: Subtle cool temperature; optional soft vignette; rounded corners 16–20px.

### Surfaces, spacing, elevation
- **Layout grid**: 8‑pt spacing system; page gutters 24–32px mobile, 64–96px desktop.
- **Radii**: XS 8, S 12, M 16, L 20, XL 28.
- **Soft shadow**: rgba(15, 23, 42, 0.08) 0 8px 24px, plus subtle border `#E2E8F0`.
- **Glassmorphism** (sparingly): background: rgba(255,255,255,0.6); blur 12px; 1px border `#E2E8F0` @ 60%.

### Voice and tone
- **Tone**: Calm, supportive, clear. Jargon‑light, patient‑friendly.
- **Style**: Short sentences, active voice, reassuring verbs.
- **Examples**:
  - “Your health, our priority.”
  - “Order prescriptions with confidence.”
  - “Talk to a licensed pharmacist today.”

### Accessibility
- Color contrast AA+; focus ring 3px with clear offset; keyboard navigable; labels for all fields; avoid color‑only cues; motion reduced when `prefers-reduced-motion`.

---

## 2) Design System (tokens and components)

### Design tokens (CSS variables)
```css
:root {
  /* Brand colors */
  --kul-blue-600: #2563eb;
  --kul-green-500: #22c55e;
  --kul-teal-500: #06b6d4;
  --kul-navy: #0f172a;
  --kul-bg: #f8fafc;
  --kul-surface: #ffffff;
  --kul-border: #e2e8f0;
  --kul-success: #16a34a;
  --kul-warning: #f59e0b;
  --kul-error: #dc2626;

  /* Typography */
  --font-sans: "Poppins", "Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  --fs-h1: 40px; --lh-h1: 48px; --fw-h1: 700;
  --fs-h2: 32px; --lh-h2: 40px; --fw-h2: 600;
  --fs-h3: 24px; --lh-h3: 32px; --fw-h3: 600;
  --fs-body: 16px; --lh-body: 24px; --fw-body: 400;
  --fs-small: 14px; --lh-small: 20px;

  /* Radii, spacing, shadows */
  --radius-s: 12px; --radius-m: 16px; --radius-l: 20px;
  --space-1: 8px; --space-2: 12px; --space-3: 16px; --space-4: 24px; --space-6: 32px; --space-8: 40px;
  --shadow-soft: 0 8px 24px rgba(15, 23, 42, 0.08);

  /* Gradients */
  --grad-health: linear-gradient(135deg, #22c55e 0%, #2563eb 100%);
}
```

### Core components
- **Buttons**: Primary (blue), Secondary (green outline), Quiet (text), Destructive (error). States: hover, focus, disabled, loading.
- **Inputs**: Text, number, date, select, file (prescription upload), textarea. Clear labels, helper text, error text.
- **Cards**: Product card, Service card, Info card with soft shadow and 16px radius.
- **Navigation**: Top bar with logo, search, CTAs; responsive sidebar in dashboards.
- **Filters**: Chips with count + clear all; sticky filter panel on desktop.
- **Lists**: Product grid (2–4 cols responsive), order list, prescription list.
- **Status**: Badges (success/warn/error/info), toasts, skeleton loaders.
- **Modals/Sheets**: Confirmation, consultation booking, address entry.
- **Chat widget**: Floating “Need help?” button, opens chat or shows hotline.

### Example button
```html
<button class="btn btn-primary">Book Appointment</button>
```

```css
.btn { font-family: var(--font-sans); border-radius: var(--radius-m); padding: 10px 16px; line-height: 1; }
.btn-primary { background: var(--kul-blue-600); color: #fff; box-shadow: var(--shadow-soft); border: 1px solid transparent; }
.btn-primary:hover { filter: brightness(1.02); }
.btn-primary:focus { outline: 3px solid rgba(37,99,235,0.35); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
```

---

## 3) Digital Product — Features and UX

### Primary CTAs
- **Book Appointment**, **Refill Prescription**, **Contact Pharmacist**

### Homepage
- Hero with Health Gradient, trust badges, real‑time opening hours.
- Service highlights: Pharmacy, Consultations, Vaccinations, Home Delivery.
- Search bar (medicines and health products).
- Quick actions: Upload prescription, Track order, Refill reminder setup.

### Online Pharmacy
- Product catalog with categories (Pain Relief, Antibiotics, Vitamins, Diabetes Care, Mother & Baby, Devices).
- Filters: **Type**, **Brand**, **Prescription required**, **In stock**, **Price**, **Form** (tablet, syrup, cream), **Delivery time**.
- Secure checkout: address, delivery, payment, prescription validation flow.
- Product detail: dosage info, contraindications, pharmacist note, related products.

### Patient Dashboard
- Upload prescriptions (image/PDF), OCR assist; status tracking.
- Orders: statuses, invoices, delivery ETA, support.
- Consultations: book, join tele‑consultation, chat history.
- Reminders: medication schedule, refill alerts (SMS/WhatsApp/push/email).
- Profile: addresses, emergency contact, insurance (optional), preferences.

### Pharmacist Dashboard
- Stock management: inventory, low‑stock alerts, batch/expiry tracking.
- Prescription queue: triage, validation, substitution, notes, messaging with patient/doctor.
- Orders: pick/pack/ship, courier integration, refunds/returns.
- Consultations: calendar, chat/video, documentation.
- Digital health records: medication history, adverse events, allergies.

### Doctor Integration
- Secure prescription submission directly to Kulmiye Pharmacy.
- Support for PDF upload and structured data (HL7 FHIR MedicationRequest where possible).
- Doctor portal: send, update/cancel, message pharmacist; NPI/License validation (per local regulation).

### Emergency Support
- Always‑visible “Need Help?” floating button. Options: **Chat now**, **Call hotline** (24/7), **WhatsApp** link.

### About Page
- Story of Kulmiye Polyclinic Pharmacy, mission and values, licenses, team, community impact.

### Contact Page
- Map (Google Maps), working hours, phone numbers, WhatsApp link, email, accessibility info.

---

## 4) Information Architecture and Roles

Roles: **Patient**, **Pharmacist**, **Doctor**, **Admin** (RBAC).

Top‑level IA
- Home, Shop, Services, About, Contact
- Dashboards: Patient, Pharmacist, Doctor, Admin

Key flows
- Upload prescription → Validation → Payment → Fulfillment → Delivery
- Catalog → Filters → PDP → Cart → Checkout
- Book consult → Select time → Pay/confirm → Join call → Notes

---

## 5) Security, Privacy, and Compliance
- TLS 1.2+ everywhere; HSTS; secure cookies; CSRF protection.
- Encryption at rest for prescription images and PHI.
- RBAC with least privilege; audit logs for sensitive actions.
- PII minimization; data retention policies; export/delete on request.
- Session MFA for pharmacists/admin; device verification for doctors.
- Backups with tested restores; incident response runbook.

---

## 6) Technical Architecture (recommended)

### Stack
- **Web**: Next.js (React) + TypeScript, server components for SEO and speed.
- **UI**: Tailwind or CSS variables + headless components; SSR/ISR.
- **Backend**: Node.js (NestJS/Express) or Django; REST + WebSocket for chat; FHIR adapter service for doctor integration.
- **DB**: PostgreSQL (primary), Redis (cache/queues), S3‑compatible object storage for uploads.
- **Auth**: OAuth 2.1/OIDC (Clerk/Auth0/Keycloak) + JWT; TOTP MFA for staff.
- **Payments**: Stripe (cards, wallets); cash on delivery option with verification.
- **Comms**: Twilio/WhatsApp Business API; transactional email (SendGrid/SES).
- **Infra**: Docker; CI/CD; observability (OpenTelemetry) with metrics, logs, traces.

### API (sample endpoints)
```http
POST   /api/auth/login
GET    /api/products?query=&category=&rxRequired=&inStock=
GET    /api/products/:id
POST   /api/cart
POST   /api/orders
POST   /api/prescriptions          ; patient upload
GET    /api/prescriptions/:id
POST   /api/prescriptions/:id/verify   ; pharmacist action
POST   /api/consultations
WS     /ws/chat/:threadId
POST   /api/doctor/prescriptions   ; doctor to pharmacy
```

### Data model (simplified)
```json
{
  "User": { "id": "uuid", "role": "patient|pharmacist|doctor|admin", "email": "string", "phone": "string" },
  "PatientProfile": { "userId": "uuid", "fullName": "string", "dob": "date", "allergies": ["string"], "addresses": ["Address"] },
  "DoctorProfile": { "userId": "uuid", "license": "string", "clinic": "string" },
  "Medication": { "id": "uuid", "name": "string", "brand": "string", "form": "tablet|syrup|cream", "rxRequired": true, "stock": 120, "price": 12.5 },
  "Prescription": { "id": "uuid", "patientId": "uuid", "doctorId": "uuid", "issuedAt": "iso", "items": [{ "medicationId": "uuid", "dose": "500mg", "frequency": "2x/day", "duration": "5 days" }], "status": "submitted|verified|dispensed|rejected" },
  "Order": { "id": "uuid", "patientId": "uuid", "items": [{ "medicationId": "uuid", "qty": 1, "unitPrice": 12.5 }], "requiresRx": true, "status": "pending|paid|processing|shipped|delivered|cancelled" },
  "Consultation": { "id": "uuid", "patientId": "uuid", "pharmacistId": "uuid", "scheduledFor": "iso", "channel": "video|chat", "notes": "string" }
}
```

### SEO and Local discovery
- LocalBusiness/Pharmacy schema, opening hours, phone, WhatsApp link.
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  "name": "Kulmiye Polyclinic Pharmacy",
  "image": "https://example.com/logo.png",
  "address": { "@type": "PostalAddress", "addressCountry": "SO" },
  "telephone": "+252-XXX-XXXXXX",
  "openingHours": "Mo-Su 08:00-22:00"
}
</script>
```

### Performance and accessibility
- Lazy‑load images; CDN caching; compress images; serve next‑gen formats.
- Prefer server rendering for catalog pages; prefetch routes; measure Core Web Vitals.
- Keyboard‑first navigation; form errors announced to screen readers.

---

## 7) Content and Localization
- Languages: English and Somali; simple language toggle.
- Avoid idioms; provide consistent medical terminology; include patient‑friendly explanations.
- Example Somali tagline: “Caafimaadkaaga, mudnaantayada.”

---

## 8) Roadmap (phased delivery)
- **Phase 1 — Brand & Website**: Logo, guidelines, marketing site, contact, basic catalog, CTA to WhatsApp/hotline.
- **Phase 2 — MVP Digital Pharmacy**: Accounts, prescription upload, checkout, order tracking, pharmacist console.
- **Phase 3 — Consultations & Reminders**: Tele‑consult, reminders, notifications, analytics.
- **Phase 4 — Doctor Integration**: E‑prescribe portal, FHIR support, audit trail, MFA.
- **Phase 5 — Mobile Apps**: Patient iOS/Android, push notifications, offline reminders.

---

## 9) Brand and asset checklist
- Logo: primary, secondary, monochrome, app icon, favicon.
- Color/typography spec sheet; social media templates.
- UI kit: buttons, forms, cards, nav, product tiles, modals, chat.
- Email templates: order confirmation, pickup ready, refill reminder.
- Print: bags, labels, shelf talkers, staff badges, storefront signage.

---

## 10) Sample copy
- **Hero**: “Pharmacy care you can trust. Order your medicines, talk to a pharmacist, and feel confident about your health.”
- **CTA**: “Book a consultation” / “Refill your prescription”
- **Assurance**: “Licensed pharmacists. Secure checkout. Fast delivery.”

---

## 11) Contact placeholders
- Phone: +252‑XXX‑XXXXXX
- WhatsApp: wa.me/252XXXXXXXXX
- Email: hello@kulmiyepharmacy.example
- Address: [Clinic Address], Somalia

---

This document is the single source of truth for brand and product decisions. Keep it updated as the system evolves.
