# TaskFlow

A task manager built with Vue 3, Framework7, Vite, and PWA support.

## Development

```sh
npm ci
npm run dev
```

## Production

Run `npm run build` to build into `dist`, then `npm run preview` to preview locally.

## Cloudflare Pages

Connect this GitHub repository to Cloudflare Pages with these settings:

- Production branch: `main`
- Framework preset: Vue
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave empty (the application is at the repository root)

Documentation: https://developers.cloudflare.com/pages/framework-guides/deploy-a-vue-site/
