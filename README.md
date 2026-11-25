# eBlock Transfer — Website

Minimalist static landing page, interactive popup preview, Privacy Policy, and Terms & Conditions for the **eBlock Transfer** Chrome extension.

Built with zero external dependencies (pure HTML, CSS, and vanilla JavaScript) matching the exact color palette and UI language of the extension.

## Project Structure

```text
eBlockTransferWebsite/
├── assets/
│   ├── css/
│   │   └── styles.css            # Shared design tokens, layout, and popup styles
│   ├── icons/
│   │   └── favicon.svg           # Extension squircle icon
│   └── js/
│       └── main.js               # OS shortcut detection & interactive popup demo
├── index.html                    # Landing page + live extension preview
├── privacy-policy.html           # Chrome Web Store compliant Privacy Policy
├── terms-and-conditions.html     # Terms and Conditions
├── .gitignore
└── README.md
```

## Pages

- **`index.html`** — Hero section with OS-aware keyboard shortcuts (`Cmd+C` / `Ctrl+C`), interactive 1:1 extension popup preview, 3-step workflow, and core capabilities.
- **`privacy-policy.html`** — Documents the 100% local `chrome.storage.local` architecture (`eblock_enabled`, `eblock_history`, `eblock_active_id`), host permissions, and zero external data collection.
- **`terms-and-conditions.html`** — Covers license terms, user IP responsibilities, warranty disclaimer, limitation of liability, and independent product notice.

## Local Preview

Open `index.html` directly in any browser or serve the directory over HTTP:

```bash
python3 -m http.server 3000
```

Then visit `http://localhost:3000`.

## Deployment

Ready for zero-configuration static hosting on **GitHub Pages**, **Cloudflare Pages**, **Vercel**, or **Netlify** (publish root directory `.`, no build command required).

## Author & Notice

Powered by [Jester](https://github.com/i-am-jester).

*eBlock Transfer is an independent browser extension and is not affiliated with, endorsed by, or sponsored by Elementor Ltd.*
