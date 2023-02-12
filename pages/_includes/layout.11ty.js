exports.render = (data) => {
  return `
    <!doctype html>
    <html lang="${data.lang}">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.title}</title>
        <meta name="og:title" content="${data.title}">
        <meta name="og:description" content="${data.description}">
        <meta name="og:image" content="">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@yamanoku">
        <meta name="twitter:image:alt" content="">
        <meta property="og:locale" content="${data.lang}">
        <link rel="stylesheet" href="https://cdn.skypack.dev/yama-normalize">
        <script src="https://unpkg.com/@highlightjs/cdn-assets@11.6.0/highlight.min.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@11.6.0/styles/a11y-dark.min.css">
        <script type="module">hljs.initHighlightingOnLoad()</script>
        <style>code{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;font-size:1em;}pre code.hljs{padding:calc(var(--rhythm)*3);}footer{padding: var(--y-rhythm-3);text-align: center;}</style>
      </head>
      <body>
        <main id="main">
          <h1>${this.budoux(data.title)}</h1>
          ${data.content}
        </main>
        <footer>
          <p>Copyright 2021, Okuto Oyama</p>
          <p>Source : <a href="https://github.com/yamanoku/jsconfjp-2021/" target="_blank" rel="noopener">yamanoku/jsconfjp-2021</a></p>
        </footer>
      </body>
    </html>
  `;
};
