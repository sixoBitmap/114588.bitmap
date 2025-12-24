<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>114588.bitmap Links</title>
  <style>
    :root{
      --card: rgba(255,255,255,.10);
      --card2: rgba(255,255,255,.06);
      --border: rgba(255,255,255,.18);
      --text: rgba(255,255,255,.92);
      --muted: rgba(255,255,255,.70);
      --shadow: 0 20px 60px rgba(0,0,0,.35);
    }

    /* Pretty background */
    body{
      margin:0;
      min-height:100vh;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Liberation Sans", sans-serif;
      color: var(--text);
      background:
        radial-gradient(1100px 700px at 15% 15%, rgba(255, 180, 120, .35), transparent 60%),
        radial-gradient(900px 650px at 85% 20%, rgba(120, 200, 255, .30), transparent 55%),
        radial-gradient(900px 650px at 60% 90%, rgba(170, 120, 255, .25), transparent 55%),
        linear-gradient(180deg, #0b1020, #070a12 55%, #05060b);
      overflow-x:hidden;
    }

    /* Subtle “glass” blobs */
    .blob{
      position: fixed;
      inset:auto;
      width: 420px;
      height: 420px;
      border-radius: 999px;
      filter: blur(40px);
      opacity: .35;
      pointer-events:none;
      mix-blend-mode: screen;
      animation: float 10s ease-in-out infinite;
    }
    .blob.one{ top:-120px; left:-120px; background: #ffb46a; }
    .blob.two{ top: 40px; right:-160px; background: #6bd2ff; animation-delay: -4s; }
    .blob.three{ bottom:-180px; left: 25%; background: #b48bff; animation-delay: -7s; }

    @keyframes float{
      0%,100%{ transform: translate(0,0) scale(1); }
      50%{ transform: translate(18px, -12px) scale(1.06); }
    }

    /* Layout */
    .wrap{
      max-width: 820px;
      margin: 0 auto;
      padding: 56px 18px;
    }

    .card{
      background: linear-gradient(180deg, var(--card), var(--card2));
      border: 1px solid var(--border);
      border-radius: 18px;
      box-shadow: var(--shadow);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      padding: 26px;
    }

    h1{
      margin: 0 0 8px;
      font-size: clamp(22px, 4vw, 34px);
      letter-spacing: .3px;
    }
    p{
      margin: 0 0 18px;
      color: var(--muted);
      line-height: 1.5;
    }

    .grid{
      display:grid;
      gap: 12px;
      margin-top: 18px;
    }

    a.link{
      display:flex;
      align-items:center;
      justify-content: space-between;
      gap: 14px;
      padding: 14px 16px;
      border-radius: 14px;
      border: 1px solid rgba(255,255,255,.16);
      background: rgba(255,255,255,.07);
      text-decoration:none;
      color: var(--text);
      transition: transform .12s ease, background .12s ease, border-color .12s ease;
    }
    a.link:hover{
      transform: translateY(-1px);
      background: rgba(255,255,255,.10);
      border-color: rgba(255,255,255,.26);
    }

    .label{
      display:flex;
      align-items:center;
      gap: 10px;
      font-weight: 650;
    }
    .pill{
      font-size: 12px;
      padding: 6px 10px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,.16);
      color: rgba(255,255,255,.78);
      background: rgba(0,0,0,.18);
      white-space: nowrap;
    }

    footer{
      margin-top: 14px;
      text-align:center;
      color: rgba(255,255,255,.55);
      font-size: 12px;
    }

    /* Small icon */
    .dot{
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: rgba(255,255,255,.85);
      box-shadow: 0 0 14px rgba(255,255,255,.45);
      flex: 0 0 auto;
    }
  </style>
</head>
<body>
  <div class="blob one"></div>
  <div class="blob two"></div>
  <div class="blob three"></div>

  <div class="wrap">
    <div class="card">
      <h1>114588.bitmap Portal</h1>
      <p>Quick links to the pages. Clean buttons, comfy background. 🌌</p>

      <div class="grid">
        <a class="link" href="https://sixobitmap.github.io/114588.bitmap/zeus.html">
          <span class="label"><span class="dot"></span> Zeus</span>
          <span class="pill">open</span>
        </a>

        <a class="link" href="https://sixobitmap.github.io/114588.bitmap/ΗΡΑ.html">
          <span class="label"><span class="dot"></span> Ήρα</span>
          <span class="pill">open</span>
        </a>

        <a class="link" href="https://sixobitmap.github.io/114588.bitmap/internet.html">
          <span class="label"><span class="dot"></span> Internet</span>
          <span class="pill">open</span>
        </a>

        <a class="link" href="https://sixobitmap.github.io/114588.bitmap/parcels.html">
          <span class="label"><span class="dot"></span> Parcels</span>
          <span class="pill">open</span>
        </a>

        <a class="link" href="https://sixobitmap.github.io/114588.bitmap/pixel_painter.html">
          <span class="label"><span class="dot"></span> Pixel Painter</span>
          <span class="pill">open</span>
        </a>
      </div>
    </div>

    <footer>See you on the other side ✨</footer>
  </div>
</body>
</html>
