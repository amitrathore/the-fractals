# The Fractals

Static multi-page website for The Fractals Company, published with GitHub Pages.

## Site Structure

- `index.html` - home page and offer hub.
- `clarity.html` - Radical Clarity offer page.
- `agency.html` - Radical Agency offer page.
- `entrepreneurship.html` - Radical Entrepreneurship offer page.
- `about.html` - founder and company context.
- `faq.html` - program fit, logistics, boundaries, and common questions.
- `apply.html` - shared Tally application flow.
- `archive.html` - the complete pre-restructure single-page content, retained so no prior text, links, or image placements are lost.
- `archive-styles.css` - matching legacy styles for `archive.html`.

Program links pass context to `apply.html` through query parameters:

- `program` identifies the selected offer.
- `originPage` identifies where the visitor came from.
- `ref` can be forwarded when present.

## Local Preview

Open `index.html` directly in a browser. No build step is required.

For a closer GitHub Pages preview, serve the repository root locally:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Deployment

This repository is designed to publish from the `main` branch root with GitHub Pages.

`carrd.html` is ignored and kept only as source/reference material from the prior single-page site.
