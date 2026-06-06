# Hakeem Projects — Company Website

Company website for Hakeem Projects, built with Next.js 14, TypeScript, and Tailwind CSS.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Font | Inter (Google Fonts via next/font) |
| Forms | Formspree |
| Deployment | Vercel |

## Local Setup

```bash
npm install
cp .env.example .env.local   # then fill in your values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form ID for contact form submissions | `xabcdefg` |

If `NEXT_PUBLIC_FORMSPREE_ID` is not set or is the placeholder value, the contact form runs in demo mode — submissions are logged to the console and a success state is shown without sending anything.

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services |
| `/about` | About |
| `/portfolio` | Portfolio |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog post |
| `/contact` | Contact |

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub
2. Import the project in [vercel.com](https://vercel.com)
3. Set the root directory to `Projects/hakeem-projects-website`
4. Add environment variables in the Vercel dashboard
5. Deploy — Vercel auto-detects Next.js

### Vercel CLI

```bash
npm i -g vercel
cd Projects/hakeem-projects-website
vercel
```

## Scripts

```bash
npm run dev      # start dev server
npm run build    # production build
npm run start    # start production server
npm run lint     # run ESLint
```
