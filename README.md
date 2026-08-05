# Portfolio

Sameer Bamanha's personal site — plain HTML/CSS/JS, no build step, deployed on GitHub Pages.

Live: https://sameerbamanha.github.io/Portfolio/

## Structure

```
index.html        page content
css/style.css     styles (light/dark via prefers-color-scheme + manual toggle)
js/main.js        theme toggle
resume/           downloadable resume PDF
favicon.svg
```

## Local preview

No build step needed — open `index.html` directly, or serve the folder:

```
python -m http.server 8000
```

## Deploy

GitHub Pages is configured to serve from `master` at the repo root. Pushing to `master` deploys automatically.
