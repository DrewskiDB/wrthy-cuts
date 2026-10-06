# WRTHY CUTS

Website for **WRTHY Cuts Barber Lounge**, a barbershop at 12058 Central Ave NE,
Minneapolis, MN.

**Live site:** https://www.houseofwrthy.com

Built with plain HTML, CSS, and JavaScript — no framework, no build step, no
backend. Hosted on GitHub Pages with a custom domain.

## Pages

| Page | What it does |
|------|--------------|
| `index.html` — Home | Brand story, address (Google Maps link), tap-to-call phone, hours, Instagram |
| `barbers.html` — Barbers | Card for each barber; each "Book Now" goes to that barber's own booking page (Booksy) |
| `book.html` — Book | Owner's booking calendar via an embedded Square Appointments widget, with a fallback link if it fails to load |

The "Book Now" buttons in the header send visitors to the Barbers page so they
can pick who they want first.

## Structure

```
wrthy-cuts/
├── index.html         # Home
├── barbers.html       # Barber picker → Booksy / book.html
├── book.html          # Square Appointments embed
├── css/style.css      # All styling + design tokens
├── js/main.js         # Header scroll state, scroll reveals, footer year
├── assets/img/        # Photos (hero, barbers, gallery)
└── CNAME              # Custom domain for GitHub Pages
```

## Features

- Responsive layout for phones, tablets, and desktop
- Accessibility: skip-to-content link, ARIA labels, alt text, external links
  labeled as opening in a new tab
- Vanilla JS with no dependencies; scroll animations fall back gracefully when
  `IntersectionObserver` isn't available

## Run it locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Updating content

- **Hours** appear in the footer of every page and in the hours table on
  `book.html` — change all of them together.
- **Barbers:** add or remove a card in `barbers.html`. Each card links to that
  barber's Booksy page.
- **Services and prices** live in Square (owner) and Booksy (other barbers), not
  in this repo, so update them there.

## Deployment

Pushing to `master` deploys automatically through GitHub Pages. The `CNAME`
file points the site at `www.houseofwrthy.com`.

## Note on embed IDs

The Square booking URL and Booksy links are public, client-side links, so
they're safe to commit. Never commit private API keys or admin credentials.
