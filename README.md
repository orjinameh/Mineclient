# VoidClient Landing Page

## Run locally
```
npm install
npm run dev
```
Opens at http://localhost:5173

## Deploy to Netlify

### Option A — CLI (fastest)
```
npm install -g netlify-cli
npm install
npm run build
netlify deploy --prod --dir=dist
```

### Option B — Git-connected (auto-deploys on push)
1. Push this folder to a GitHub repo
2. Go to app.netlify.com → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### Option C — Drag and drop
```
npm install
npm run build
```
Then drag the `dist` folder onto https://app.netlify.com/drop

## Customize
- Edit `src/App.jsx` — everything (markup + styles) lives in one file
- Swap the logo text, colors (`#2ecc71` is the accent), copy, and mod list
- Wire the "Download" button to your actual file link
