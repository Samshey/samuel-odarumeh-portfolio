# Samuel Odarumeh — Portfolio

Personal technology portfolio for Samuel Odarumeh, a Nigerian technology researcher, developer, and aspiring technology entrepreneur.

## Run locally

```bash
pnpm install
pnpm dev
```

## Build for production

```bash
pnpm build
```

The production output is generated in `dist/`. GitHub Pages deploys automatically from the `main` branch via `.github/workflows/deploy.yml`.

Live site: https://samshey.github.io/samuel-odarumeh-portfolio/

## Replaceable visuals

Project placeholder artwork lives in `public/visuals/`. Replace the SVG files with final screenshots or illustrations while keeping the same filenames, or update the project data in `src/main.tsx`.

## Contact

The contact form currently provides client-side validation and a success state. Connect `handleSubmit` in `src/main.tsx` to a form service or serverless endpoint when a destination email/API is available.
