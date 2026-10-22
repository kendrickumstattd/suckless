# Make Things Suck Less

Marketing site for the Make Things Suck Less design and engineering studio. Built with Next.js 16, React 19, and TypeScript, and hosted on Netlify.

## Run locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000. To emulate Netlify features locally, run `netlify dev` instead.

Run `npm run typecheck` to check the TypeScript. (Next.js 16 removed the built-in `next lint` command, so the project has no lint script.)

In development, the browser console shows a warning that `eval()` is blocked. React's development mode uses `eval()`, and the Content Security Policy blocks it on purpose. Production builds don't use `eval()`, so the warning never appears on the live site.

## Deploy

The site deploys to Netlify from the `main` branch. Build settings are in `netlify.toml`.

The production URL is `https://suckless.studio` (set in `lib/site.ts`, and used for canonical links, the sitemap, and link previews). Until that domain's DNS points to Netlify, it still serves the old Squarespace site, and the Netlify address (`suckless.netlify.app`) is password protected.

## Project layout

- `app/page.tsx`: homepage. It is a server component; only the interactive pieces in `app/components/` (`SiteHeader`, `Compare`, `ContactForm`) run in the browser.
- `app/about/page.tsx`: founder biography.
- `app/privacy/page.tsx`: privacy notice for the contact form. Review it whenever what the form collects, or how submissions are handled, changes.
- `app/not-found.tsx`: branded 404 page.
- `app/robots.ts`, `app/sitemap.ts`, `app/opengraph-image.tsx`: search engine files and the social link preview image. The production URL is set in `lib/site.ts`.
- `app/components/`: `SiteHeader` (homepage navigation and mobile menu), `Compare` (before/after booking demo), `ContactForm`, and `Brand` (wordmark).
- `app/globals.css`: layout, animation, and colors (`--blue: #073dff`). Inline text links in the privacy notice (`.privacy-link`) are bold and underlined, and turn brand blue on hover.
- `app/fonts/`: DM Sans files used only to draw the link preview image.
- `public/brand/`: homepage imagery. `public/kendrick-about.webp` is the About page portrait.
- `public/__forms.html`: the hidden copy of the contact form that Netlify Forms reads at build time (see below).

## Contact form

The contact form uses Netlify Forms. Submissions are sent over HTTPS, stored in the Netlify dashboard under Forms, and emailed to the studio inbox via a form notification (Project configuration > Notifications > Emails and webhooks). Spam is filtered by a hidden honeypot field (`company_fax`) and Netlify's built-in spam filtering, and fields have length limits.

`public/__forms.html` lets Netlify detect the form at build time; keep its fields in sync with `app/components/ContactForm.tsx`. The browser sends submissions to that file, and Netlify intercepts them.

Under `netlify dev`, a test submission shows the "Something went wrong" message, because the local Next.js server answers the request with a 405 instead of Netlify's form handler. Test the form on a Deploy Preview or the live site.

The length limits on fields only apply in the browser. Netlify accepts whatever is posted, so treat submissions as untrusted text.

## Security headers

`next.config.ts` sets a Content Security Policy, HSTS, clickjacking protection, and other security headers on every page. The CSP only allows resources from this site. DM Sans is loaded with `next/font`, which serves it from this domain. If you add a third-party service (analytics, embeds, a booking widget), add its domain to the matching CSP directive or the browser will block it.

## Content notes

The before/after resort booking redesign is a fictional concept, not a real client engagement. Its illustration is `public/brand/blue-mountain-spa-retreat.webp`. The site no longer uses any Unsplash or other stock photos: every image is stored in this repository and served from this site. The privacy notice says no images come from third parties, so if you ever add a hosted photo, update that notice and add the photo's domain to `img-src` in the CSP. The homepage includes no invented testimonials, metrics, or client claims.

### Homepage wordmark animation

The cobalt `Less.` word animates from a tilt into horizontal alignment once per page load. Visitors who prefer reduced motion see the aligned word immediately.
