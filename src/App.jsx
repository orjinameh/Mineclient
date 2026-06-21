const css = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Open+Sans:wght@400;600;700&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: 'Open Sans', sans-serif;
  background: #ffffff;
  color: #2c3e50;
}

h1, h2, h3 { font-family: 'Montserrat', sans-serif; }
a { text-decoration: none; color: inherit; }

/* NAV */
nav {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 48px;
  border-bottom: 1px solid #e8ecef;
  background: #fff;
}
.logo {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800; font-size: 1.15rem;
  color: #2c3e50;
}
.logo span { color: #2ecc71; }
.nav-links { display: flex; gap: 32px; }
.nav-links a {
  font-size: 0.92rem; font-weight: 600; color: #5a6b7b;
  transition: color 0.15s;
}
.nav-links a:hover { color: #2c3e50; }
.btn-nav {
  background: #2ecc71; color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.88rem; font-weight: 700;
  padding: 9px 22px; border-radius: 4px;
  border: none; cursor: pointer;
  transition: background 0.15s;
}
.btn-nav:hover { background: #27ae60; }

/* HERO */
.hero {
  max-width: 1140px; margin: 0 auto;
  padding: 90px 48px 80px;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 60px; align-items: center;
}
.hero h1 {
  font-size: 2.6rem; font-weight: 800;
  line-height: 1.25; color: #2c3e50;
  margin-bottom: 20px;
}
.hero h1 span { color: #2ecc71; }
.hero p {
  font-size: 1.05rem; color: #7f8c8d;
  line-height: 1.7; margin-bottom: 32px;
  max-width: 440px;
}
.hero-actions { display: flex; gap: 12px; }
.btn-primary {
  background: #2ecc71; color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.95rem; font-weight: 700;
  padding: 13px 30px; border-radius: 4px;
  border: none; cursor: pointer;
  transition: background 0.15s;
}
.btn-primary:hover { background: #27ae60; }
.btn-outline {
  background: #fff; color: #2c3e50;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.95rem; font-weight: 700;
  padding: 13px 28px; border-radius: 4px;
  border: 1px solid #d5dbdf; cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}
.btn-outline:hover { border-color: #b8c2c9; background: #f9fafb; }

.hero-visual {
  background: #f5f7f9;
  border: 1px solid #e8ecef;
  border-radius: 6px;
  padding: 14px;
  box-shadow: 0 2px 8px rgba(44,62,80,0.06);
}
.mc-screen {
  aspect-ratio: 16/10;
  border-radius: 4px;
  background: linear-gradient(160deg, #1a2e1a 0%, #16291f 50%, #14222e 100%);
  position: relative;
  overflow: hidden;
}
.mc-hud {
  position: absolute; bottom: 14px; left: 14px;
  display: flex; gap: 6px;
}
.mc-pill {
  background: rgba(0,0,0,0.55); border-radius: 3px;
  padding: 4px 9px; font-size: 0.62rem;
  color: #fff; font-weight: 700;
}
.mc-pill.accent { color: #2ecc71; }
.mc-fps-tag {
  position: absolute; top: 12px; right: 12px;
  background: rgba(0,0,0,0.55); border-radius: 3px;
  padding: 4px 9px; font-size: 0.62rem;
  color: #2ecc71; font-weight: 700;
}

/* STATS */
.stats { background: #f5f7f9; border-top: 1px solid #e8ecef; border-bottom: 1px solid #e8ecef; }
.stats-inner {
  max-width: 1140px; margin: 0 auto;
  display: grid; grid-template-columns: repeat(4, 1fr);
  padding: 0 48px;
}
.stat { padding: 36px 24px; text-align: center; border-right: 1px solid #e8ecef; }
.stat:last-child { border-right: none; }
.stat-num { font-family: 'Montserrat', sans-serif; font-size: 1.9rem; font-weight: 800; color: #2c3e50; }
.stat-num.accent { color: #2ecc71; }
.stat-label { font-size: 0.85rem; color: #7f8c8d; margin-top: 4px; font-weight: 600; }

/* SECTION HEADER */
.section { max-width: 1140px; margin: 0 auto; padding: 88px 48px; }
.section-header { text-align: center; max-width: 560px; margin: 0 auto 56px; }
.eyebrow {
  font-size: 0.82rem; font-weight: 700; color: #2ecc71;
  text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px;
}
.section h2 {
  font-size: 1.9rem; font-weight: 800; color: #2c3e50;
  margin-bottom: 12px;
}
.section-header p { color: #7f8c8d; font-size: 1rem; line-height: 1.6; }

/* FEATURE GRID */
.feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 36px; }
.feat { text-align: center; padding: 0 12px; }
.feat-icon {
  width: 56px; height: 56px; border-radius: 50%;
  background: #e9f9f0; color: #2ecc71;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem; margin: 0 auto 18px;
}
.feat h3 { font-size: 1.05rem; font-weight: 700; color: #2c3e50; margin-bottom: 10px; }
.feat p { font-size: 0.9rem; color: #7f8c8d; line-height: 1.65; }

/* MODS */
.mods-section { background: #f5f7f9; border-top: 1px solid #e8ecef; border-bottom: 1px solid #e8ecef; }
.mods-grid { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
.mod-tag {
  background: #fff; border: 1px solid #e1e7ea;
  border-radius: 4px; padding: 8px 16px;
  font-size: 0.85rem; color: #5a6b7b; font-weight: 600;
}

/* VERSIONS */
.ver-list { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.ver {
  font-family: 'Open Sans', monospace;
  background: #f5f7f9; border: 1px solid #e1e7ea;
  border-radius: 4px; padding: 7px 14px;
  font-size: 0.82rem; color: #7f8c8d; font-weight: 600;
}
.ver.current { background: #e9f9f0; border-color: #b9eccf; color: #27ae60; }

/* CTA BAND */
.cta-band {
  background: #2ecc71;
  padding: 80px 48px; text-align: center;
}
.cta-band h2 {
  font-size: 2.1rem; font-weight: 800; color: #fff; margin-bottom: 14px;
}
.cta-band p { color: rgba(255,255,255,0.9); font-size: 1rem; margin-bottom: 30px; }
.btn-white {
  background: #fff; color: #27ae60;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.95rem; font-weight: 700;
  padding: 14px 36px; border-radius: 4px;
  border: none; cursor: pointer;
  transition: background 0.15s;
}
.btn-white:hover { background: #f0f0f0; }
.cta-meta {
  display: flex; gap: 24px; justify-content: center;
  margin-top: 24px; flex-wrap: wrap;
}
.cta-meta span { color: rgba(255,255,255,0.75); font-size: 0.82rem; font-weight: 600; }

/* FOOTER */
footer {
  padding: 44px 48px;
  display: flex; justify-content: space-between; align-items: center;
  border-top: 1px solid #e8ecef;
}
.footer-logo { font-family: 'Montserrat', sans-serif; font-weight: 800; font-size: 1rem; color: #2c3e50; }
.footer-logo span { color: #2ecc71; }
.footer-links { display: flex; gap: 26px; }
.footer-links a { font-size: 0.85rem; color: #7f8c8d; font-weight: 600; transition: color 0.15s; }
.footer-links a:hover { color: #2c3e50; }
.footer-copy { font-size: 0.82rem; color: #b0bac1; }

@media (max-width: 768px) {
  nav { padding: 16px 20px; }
  .nav-links { display: none; }
  .hero { grid-template-columns: 1fr; padding: 60px 20px 50px; gap: 36px; }
  .hero h1 { font-size: 2rem; }
  .stats-inner { grid-template-columns: repeat(2,1fr); padding: 0 20px; }
  .stat { border-right: none; border-bottom: 1px solid #e8ecef; }
  .section { padding: 56px 20px; }
  .feat-grid { grid-template-columns: 1fr; gap: 32px; }
  .mods-section .section { padding: 56px 20px; }
  .cta-band { padding: 56px 20px; }
  footer { flex-direction: column; gap: 18px; text-align: center; padding: 32px 20px; }
  .footer-links { flex-wrap: wrap; justify-content: center; }
}
`;

const feats = [
  { icon: "⚡", t: "FPS Boost", d: "An optimized renderer that gets you up to 2x more frames on the same hardware." },
  { icon: "🧩", t: "80+ Mods Included", d: "Zoom, coordinates, keystrokes and more, all built in and ready to use." },
  { icon: "🎛️", t: "HUD Editor", d: "Drag, resize and reposition any element on your screen exactly how you like it." },
  { icon: "🧱", t: "All Versions", d: "From 1.8.9 to 1.21.x, switch versions any time without reinstalling." },
  { icon: "🎁", t: "Free Cosmetics", d: "Unlock capes and wings just by using the client. No purchase required." },
  { icon: "🔒", t: "Safe & Tested", d: "Runs clean on Hypixel, Mineplex and other major servers." },
];

const mods = [
  "Zoom", "Coordinates", "FPS Display", "Armor Status", "Keystrokes",
  "CPS Counter", "Ping Display", "Crosshair Mod", "Fullbright", "AutoGG",
  "Replay Mod", "Scoreboard Tweaks", "TNT Timer", "Sprint Toggle", "Hitbox",
];

const versions = ["1.8.9", "1.12.2", "1.16.5", "1.18.2", "1.19.4", "1.20.1", "1.20.4", "1.21.x"];

export default function App() {
  return (
    <>
      <style>{css}</style>

      <nav>
        <div className="logo">Void<span>Client</span></div>
        <div className="nav-links">
          <a href="#">Features</a>
          <a href="#">Mods</a>
          <a href="#">Changelog</a>
          <a href="#">Discord</a>
        </div>
        <button className="btn-nav">Download</button>
      </nav>

      {/* HERO */}
      <div className="hero">
        <div>
          <h1>The free Minecraft client that <span>actually works</span></h1>
          <p>80+ mods, a real FPS boost, and full customization — all in one simple download.</p>
          <div className="hero-actions">
            <button className="btn-primary">Download Free</button>
            <button className="btn-outline">Join Discord</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="mc-screen">
            <div className="mc-fps-tag">960 FPS</div>
            <div className="mc-hud">
              <div className="mc-pill accent">VoidClient</div>
              <div className="mc-pill">Ping: 18ms</div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stats-inner">
          <div className="stat"><div className="stat-num accent">2x</div><div className="stat-label">Average FPS boost</div></div>
          <div className="stat"><div className="stat-num">80+</div><div className="stat-label">Built-in mods</div></div>
          <div className="stat"><div className="stat-num">48k</div><div className="stat-label">Downloads</div></div>
          <div className="stat"><div className="stat-num">12k</div><div className="stat-label">Discord members</div></div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="section">
        <div className="section-header">
          <div className="eyebrow">Features</div>
          <h2>Everything you need, nothing you don't</h2>
          <p>No extra downloads, no config editing — install and play.</p>
        </div>
        <div className="feat-grid">
          {feats.map((f, i) => (
            <div key={i} className="feat">
              <div className="feat-icon">{f.icon}</div>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MODS */}
      <div className="mods-section">
        <div className="section">
          <div className="section-header">
            <div className="eyebrow">Mods</div>
            <h2>Every mod you actually use</h2>
            <p>All included, all toggleable from one simple menu.</p>
          </div>
          <div className="mods-grid">
            {mods.map((m, i) => <div key={i} className="mod-tag">{m}</div>)}
          </div>
        </div>
      </div>

      {/* VERSIONS */}
      <div className="section">
        <div className="section-header">
          <div className="eyebrow">Compatibility</div>
          <h2>Works on every version</h2>
        </div>
        <div className="ver-list">
          {versions.map((v, i) => (
            <div key={i} className={`ver${v === "1.8.9" || v === "1.21.x" ? " current" : ""}`}>{v}</div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-band">
        <h2>Ready to play?</h2>
        <p>Free forever. No account required.</p>
        <button className="btn-white">Download VoidClient</button>
        <div className="cta-meta">
          <span>Windows · macOS · Linux</span>
          <span>v2.4.1</span>
          <span>4.2 MB</span>
        </div>
      </div>

      <footer>
        <div className="footer-logo">Void<span>Client</span></div>
        <div className="footer-links">
          <a href="#">Discord</a>
          <a href="#">GitHub</a>
          <a href="#">Store</a>
          <a href="#">FAQ</a>
          <a href="#">Terms</a>
        </div>
        <div className="footer-copy">© 2026 VoidClient</div>
      </footer>
    </>
  );
}
