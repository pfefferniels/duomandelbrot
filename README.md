# Duo Mandelbrot

Website for **Duo Mandelbrot** — Maya Webne-Behrman & Niels Pfeffer.
Baroque violin and lute, exploring music throughout the centuries.

Built with [Next.js](https://nextjs.org) (App Router, TypeScript, Tailwind CSS).

## Develop

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Build

```bash
pnpm build
pnpm start
```

## Configuration

Set the canonical site URL via env (used in metadata, sitemap, JSON-LD):

```bash
NEXT_PUBLIC_SITE_URL=https://duomandelbrot.com
```

## Project layout

- `src/app` — App Router pages (`/`, `/about`, `/programs`, `/media`, `/contact`)
- `src/components` — Header, Footer
- `src/lib/site.ts` — site-wide constants (URL, contact email, nav)
- `public/images` — photographs and hero artwork
- `src/app/sitemap.ts`, `src/app/robots.ts` — SEO
- `next.config.ts` — 301 redirects from the legacy `*.html` URLs

## Deploy

The repo deploys cleanly on [Vercel](https://vercel.com/new) with no extra
configuration. After connecting the repo, set `NEXT_PUBLIC_SITE_URL` to the
production domain.
