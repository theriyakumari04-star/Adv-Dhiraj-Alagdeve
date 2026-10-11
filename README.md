# Advocate Portfolio — React + Vite + Tailwind CSS

This project recreates the uploaded reference design: dark navy + gold legal theme, responsive navbar, hero section, social links, stats bar, quote card, smooth entrance animations and an attractive initial loader.

## 1. Install Node.js

Install a current Node.js LTS version. Then verify:

```bash
node -v
npm -v
```

## 2. Open the project

Open this folder in VS Code.

## 3. Install packages

Run:

```bash
npm install
```

## 4. Add the advocate photo

Put the real advocate portrait here:

```text
public/
  advocate.png
```

The code already expects `/advocate.png`.

For the best result:
- Use a high-resolution portrait.
- Prefer a vertical photo.
- A transparent PNG works best.
- Keep the advocate facing roughly toward the camera.
- If the photo has a background, the code still works, but a clean studio/background-removed photo looks much closer to the reference.

## 5. Start the website

Run:

```bash
npm run dev
```

Then open the localhost URL shown by Vite, normally:

```text
http://localhost:5173
```

## 6. Build for production

```bash
npm run build
```

## Main files

- `src/App.jsx` — almost all website content/layout
- `src/index.css` — Tailwind import + custom animations/fonts
- `src/main.jsx` — React entry point
- `vite.config.js` — Vite + Tailwind configuration
- `public/advocate.png` — replace with the real advocate photo

## Easy edits

Inside `src/App.jsx`, search for:

- `Adv. Rajesh Kumar` → change advocate name
- `Your Rights.` / `My Responsibility.` → change hero headline
- `20+`, `5000+`, `3000+`, `98%` → change stats
- `+91 99999 99999` → change phone
- `office@example.com` → change email
- `https://wa.me/919999999999` → change WhatsApp number
- `Practice Areas` array → change practice areas

## Loader

The initial loader automatically disappears after 1.4 seconds. If you want it faster/slower, change:

```js
setTimeout(() => setLoading(false), 1400);
```

For example, `900` means about 0.9 seconds.
