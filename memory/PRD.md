# PRD — Sitaram Kumar | Software Developer Portfolio

## Original Problem Statement
Build a premium, modern, fully responsive personal portfolio landing page for Sitaram Kumar, a B.Tech CSE student graduating in 2027. Dark professional theme (black/dark navy, blue/cyan gradients), sections: Hero, About, Technical Skills, Projects (3, no fake GitHub links), Education, Career Objective, Contact (clickable email/LinkedIn/GitHub + working form), Footer. Suitable for internship/fresher applications. No invented experience, certifications or testimonials.

## Architecture
- Frontend: React (CRA + craco), Tailwind CSS, framer-motion (scroll reveals, kinetic hero), Lenis (smooth scrolling), sonner (toasts), lucide-react icons, axios. Fonts: Outfit / Plus Jakarta Sans / JetBrains Mono.
- Backend: FastAPI + Motor (MongoDB). Routes under /api: GET /api/, POST /api/contact (validates, emails owner via Emergent managed email proxy, saves to contact_messages), GET /api/messages (passkey header X-Inbox-Key).
- Email: Emergent-managed Resend proxy (EMERGENT_EMAIL_KEY in backend/.env), from_name "Sitaram Kumar Portfolio", reply-to + recipient = owner's Gmail. Guardrail gate (G2/G3) enforced on every send.
- SEO: static head (title/description/OG/Twitter/JSON-LD Person), favicon.svg (original "SK" mark), noscript fallback, robots.txt, llms.txt in frontend/public. No canonical/sitemap until a production domain is confirmed.

## User Personas
- Recruiter/hiring manager scanning for CSE 2027 interns and freshers.
- Peer developers and collaborators.

## Implemented (2026-10-31)
- Full one-page portfolio: glass navbar with smooth-scroll links + mobile menu, kinetic hero (masked line reveal, parallax, tilt portrait card with SK monogram placeholder), slow skills marquee, bento About, 6-card skills matrix, 3 project cards with tech tags (no GitHub buttons per user choice), Education + Career Objective cards, contact section with clickable email/LinkedIn/GitHub + copy button + working form, footer with back-to-top.
- Contact form: saves to MongoDB and emails each message to Sitaramkumarsharma36@gmail.com (verified: emailed=true on real send).
- /inbox page: passkey-protected message viewer (passkey: sk-portfolio-2027 — see test_credentials.md).
- Responsive verified at 1366 / 768 / 375 px.
- Awwwards-style motion: Lenis momentum scroll, framer-motion reveals, marquee, hover micro-interactions, hero parallax + 3D tilt.

## User Choices (locked)
- Contact form: save to DB AND email each message to owner (both implemented).
- GitHub buttons only where real repo links exist (2026-11-01: Project 1 links to https://github.com/Sitaram6888/Skart; Projects 2 & 3 have no links yet).
- Resume button in hero opens the improved resume at /Sitaram_Kumar_Resume.pdf (regenerated 2026-11-01 by /app/scripts/make_resume.py, reportlab). Content built only from the user's uploaded resume: Delhi, +91 9006841356, kumarsitaram688@gmail.com, GITM 2023-2027 CGPA 7.57, BSEB XII 2023 / X 2021, GCSED training certificate, 3 projects (Skart link on project 1). No invented facts. Note: site contact email (Sitaramkumarsharma36@gmail.com) differs from resume email (kumarsitaram688@gmail.com) — user to confirm which is primary.
- Pictures REMOVED per user request (2026-11-01): hero portrait reverted to SK monogram card, About banner removed, OG/Twitter share-image tags removed. Uploaded assets (portrait, banner, resume PDF) remain in the asset store if needed later.
- Email unified to kumarsitaram688@gmail.com everywhere (2026-11-01): contact section, contact-form delivery (OWNER_EMAIL/EMAIL_REPLY_TO), JSON-LD, noscript, llms.txt, resume.
- Project 1 has Live Demo (https://skart-theta.vercel.app/) + GitHub (Skart repo) buttons (2026-11-01).
- Class X (65%, 2021) and XII (63.2%, 2023) BSEB percentages added to resume and site Education card (2026-11-01).

## Backlog
- DONE (2026-10-31): User's real portrait added to hero card (replaced SK monogram placeholder; image hosted via Emergent assets CDN, object-cover top-aligned, tech chips retained).
- P1: Add real GitHub repo links to project cards when user shares them.
- P1: Resume PDF download button in hero/navbar (needs user's resume file).
- P2: Canonical/OG image/sitemap once a production domain is attached; enable crawler prerender toggle at deploy.
- P2: LeetCode/CP profile badges or stats if user shares profiles.

## Next Tasks
1. Collect Sitaram's photo and wire it into the hero portrait card.
2. Collect real project repo links and add GitHub buttons.
3. Deploy, then verify SEO on the live domain (crawler toggle + share cards).
