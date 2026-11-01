# JDanu Dev — Personal CV

Static personal CV / portfolio page for [kanzaki-jun7](https://github.com/kanzaki-jun7).

## Stack

- Node.js
- Vite `8.3.5`
- HTML5
- CSS3
- Vanilla JavaScript
- No UI framework

## Structure

```text
.
├── index.html
├── package.json
├── src/
│   ├── app.js
│   └── styles.css
├── deploy/
│   └── apache/
│       └── jdanu.suratkita.id.conf
└── README.md
```

## Local development

```bash
npm install
npm run dev
```

Vite opens a development server with hot reload.

## Production build

```bash
npm run build
```

Output goes to `dist/`. Deploy only `dist/` to the web server.

Preview production output:

```bash
npm run preview
```

## Apache vhost

Template: `deploy/apache/jdanu.suratkita.id.conf`

Expected production document root:

```text
/var/www/jdanu.suratkita.id/dist
```

Example server setup:

```bash
sudo mkdir -p /var/www/jdanu.suratkita.id
npm run build
sudo rsync -a --delete dist/ /var/www/jdanu.suratkita.id/dist/
sudo cp deploy/apache/jdanu.suratkita.id.conf /etc/apache2/sites-available/
sudo a2ensite jdanu.suratkita.id.conf
sudo apache2ctl configtest
sudo systemctl reload apache2
```

Point DNS `jdanu.suratkita.id` to Kalix before HTTP validation. HTTPS can be added after DNS resolves, using the server's existing certificate workflow.

## Animation

- Scroll progress bar
- IntersectionObserver reveal
- Staggered section/list reveal
- Hover movement on actions and project rows
- `prefers-reduced-motion` fallback

## Notes

- Private project names are intentionally generalized.
- Public project links point to GitHub.
- No credentials, source code, or private repository contents are included.
