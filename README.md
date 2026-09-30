# Handy Luigi — Luigi & Associates website

Redesign of handyluigi.com: bookkeeping, tax and CFO 500 advisory.

```bash
npm install
npm run dev      # local preview
npm run build    # production build into dist/
```

- All copy, prices and links: `src/content.ts`
- Tax deadline countdown: `src/lib/deadlines.ts`
- Images: `public/img`
- Pushing to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`).

Draft: hidden from search engines (`robots` meta in `index.html` and `public/robots.txt`). Remove both at launch.
