# Ad-B-R.github.io

Personal site. Built with [Hugo](https://gohugo.io) + the
[hello-friend-ng](https://github.com/rhazdon/hugo-theme-hello-friend-ng) theme,
deployed to GitHub Pages at <https://ad-b-r.github.io/> by GitHub Actions.

## Run it locally

You need **Hugo extended ≥ 0.170** and **Dart Sass**. Hugo 0.170 removed LibSass,
so the theme's SCSS is compiled with Dart Sass (see `layouts/partials/head.html`).

```powershell
# Windows (scoop)
scoop install hugo-extended sass
# macOS: brew install hugo sass/sass/sass
```

```bash
git clone --recurse-submodules https://github.com/Ad-B-R/Ad-B-R.github.io.git
cd Ad-B-R.github.io
# already cloned without the theme? run: git submodule update --init --recursive

hugo server          # http://localhost:1313, live-reloads on save
hugo server -D       # also show draft posts
```

`hugo server` runs in development mode, which shows the orange **TODO** badges
on the projects page. They never appear on the deployed site.

## Add a project

All projects are on one page (`/projects/`). Each project is one file in
`content/projects/`:

```bash
hugo new content projects/my-project.md
```

Then fill in the front matter:

```yaml
---
title: "My Project"
slug: "my-project"     # anchor (/projects/#my-project) + name in the home-page `ls`
weight: 50             # lower = higher on the page
description: >-
  One sentence about what it is.
labels: ["pytorch", "cuda"]
github: "https://github.com/Ad-B-R/my-project"
links:                 # optional extra links
  - name: "report.pdf"
    url: "https://..."
---
```

The project shows up on `/projects/` and in `$ ls projects/` on the home page
automatically. No separate page is generated for each project.

## Add a post

```bash
hugo new content posts/my-post.md
```

New posts start as `draft: true`. Set it to `false` (or delete the line) to
publish. See `content/posts/hello-world.md` for an example of math and code.

- **Math** (KaTeX, rendered at build time, no JS): `$inline$`, `$$display$$`,
  `\(inline\)`, `\[display\]`. Write a literal dollar sign as `\$`.
- **Code**: fenced blocks with a language, e.g. ` ```python `, ` ```cpp `,
  ` ```cuda ` (or ` ```cu `). Highlighting happens at build time
  (Chroma, `dracula` style; change it with `markup.highlight.style` in `hugo.toml`).
  Chroma has no CUDA lexer, so CUDA blocks use the C++ lexer
  (`layouts/_markup/render-codeblock-cuda.html`).

## Deploy

Push to `main`. `.github/workflows/hugo.yaml` (the official Hugo workflow,
switched to the extended build) builds and publishes the site.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Where things live

| What | Where |
|---|---|
| Site config, menu, links, footer | `hugo.toml` |
| Home page terminal | `layouts/index.html` |
| Projects page | `layouts/projects/list.html` |
| Custom styles | `assets/css/custom.css` |
| Dark-by-default theme toggle | `assets/js/main.js`, `layouts/partials/extra-head.html` |
| CV | `static/cv.pdf` (served at `/cv.pdf`) |
| KaTeX CSS + fonts (self-hosted) | `static/katex/` (KaTeX 0.18.4, matches Hugo 0.170's built-in renderer) |

Theme overrides go in `layouts/`. Don't edit `themes/hello-friend-ng/` because
it's a git submodule. Update the theme with
`git submodule update --remote themes/hello-friend-ng`.

No analytics, cookies or third-party requests. The theme's analytics hooks are
removed in `layouts/partials/head.html`.
