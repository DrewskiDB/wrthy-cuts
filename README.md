# WRTHY CUTS

Static website for WRTHY CUTS — a barbershop in Blaine, MN. Two pages
(Home + Book), with an inline [Waitwhile](https://waitwhile.com) booking
calendar. No backend, no build step — just open the files or host them anywhere.

## Structure

```
wrthy-cuts/
├── index.html        # Home: hero, about, services, gallery
├── book.html         # Booking page (Waitwhile inline embed)
├── css/style.css     # All styling + design tokens
├── js/main.js        # Header scroll state + scroll reveals
└── assets/img/        # Photos go here (see below)
```

## Run it locally

It's plain HTML — just open `index.html` in a browser. Or serve it:

```bash
# Python 3
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Things to fill in  →  search the code for `REPLACE`

Everything that still needs real info is marked with a `REPLACE` comment.
Here's what's left:

| What | Where | Notes |
|------|-------|-------|
| **About / story** | `index.html` — `.about__copy` | Placeholder copy; swap for his real background |
| **Stats** (years, cut count) | `index.html` — `.about__stats` | Placeholder numbers |
| **Hero photo** | `assets/img/hero.jpg` | Then remove `is-placeholder`, uncomment the `<img>` |
| **Portrait photo** | `assets/img/barber.jpg` | Same — remove `is-placeholder`, uncomment `<img>` |
| **Gallery photos** | `assets/img/cut-1.jpg` … `cut-6.jpg` | Same for each tile |
| **Phone** (optional) | not currently on the site | Booking is handled by Waitwhile, so a phone is optional. Add later if wanted. |

### Already filled in (real)
- Shop name — WRTHY CUTS *(Waitwhile account is "Paradise Barbershop +" — confirm which name he wants long-term)*
- Address — 12058 Central Ave NE, Blaine, MN 55434 (links to Google Maps)
- Hours — Mon–Fri 7am–2pm, closed weekends
- Instagram — @WRTHY
- Services — Haircut $50, Haircut + Beard $60 *(from the live Waitwhile menu)*
- **Booking calendar** — live, wired to Waitwhile location `paradisebarbershop8298`

### Keeping the menu in sync
The services shown on the home page are typed in by hand, but **booking** runs
through Waitwhile. If your brother adds or re-prices a service, do it in
Waitwhile first (so it's actually bookable), then mirror the change in the
`.services__list` in `index.html`.

## Adding photos

Drop image files into `assets/img/` using the filenames above. Then in the HTML,
find the matching element, remove the `is-placeholder` class, and uncomment the
`<img>` line right below it. Recommended: landscape ~1600px wide for the hero,
square ~1000×1000px for gallery tiles. Compress them (e.g. squoosh.app) so the
page stays fast.

## Hosting (free options)

- **GitHub Pages** — push this repo, enable Pages in Settings → Pages.
- **Netlify / Cloudflare Pages** — drag the folder in, done.

## Note on the Waitwhile Location ID

The Location ID lives in client-side code (it runs in every visitor's browser
via the embed script), so it isn't a secret in the way a password or API key
would be. It's fine to commit. Do **not** commit any private Waitwhile API keys
or admin credentials — those never belong in the embed and never in the repo.
