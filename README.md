# Kidist Kemal — personal portfolio

Cinematic personal site for freelance work. Built with Next.js, TypeScript, and a custom CSS design system.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Content you can update

All copy, projects, certificates, and social URLs live in `lib/content.ts`.

| Asset | Path |
| --- | --- |
| Portrait | `public/images/portrait.jpg` |
| HULUM stills | `public/images/work/hulum-home.png`, `hulum-signin.png` |
| HULUM video | `public/videos/hulum-demo.mp4` |
| Other project media | `public/images/work/` |
| Certificates | `public/images/certificates/` |
| CV | `public/files/kidist-kemal-cv.pdf` |

## Contact form

The form validates on the client and posts to `/api/contact`. It does **not** send email until you add a Formspree form ID:

1. Create a form at [formspree.io](https://formspree.io).
2. Copy `.env.example` to `.env.local`.
3. Set `FORMSPREE_FORM_ID` to the ID after `/f/`.

Until that is set, visitors still have LinkedIn as a working contact path.

## Social URLs still needed

GitHub and LinkedIn are live. Add X, Instagram, Facebook, and Telegram in `lib/content.ts`. Add an email there too when you want it public.
