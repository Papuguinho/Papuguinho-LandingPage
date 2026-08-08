/**
 * Gera `dist/guia/index.html` a partir de `conteudo/guia-implantacao-caa-rede-municipal.md`.
 *
 * É uma página estática, sem JavaScript: o público são gestores de secretarias
 * municipais, que costumam abrir em rede lenta e **imprimir** o documento. Por
 * isso o CSS traz um bloco @media print.
 *
 * O markdown é a fonte da verdade — para atualizar, troque o .md e rode o build.
 * Chamado pelo plugin `guiaEstatico` em vite.config.ts.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { marked } from "marked";

const SITE = "https://papuguinho.com";
const CAMINHO = "/guia/";

const TITULO = "Guia de implantação de CAA gratuita na rede municipal de ensino";
const DESCRICAO =
  "Passo a passo para secretarias municipais implantarem Comunicação Aumentativa e Alternativa (CAA) " +
  "gratuita nas escolas, em conformidade com a Lei 15.249/2025. Sem licença, sem licitação, sem custo.";

const CSS = `
:root{
  --bg:#f2f8f4;--card:#fff;--ink:#1f262e;--muted:#5b6b7b;--brand:#1dd762;--brand-esc:#12a94b;
  --linha:#d7eade;--sombra:0 4px 20px hsla(142,76%,48%,.15);
  --font-titulo:ui-rounded,"SF Pro Rounded","Segoe UI Rounded",system-ui,sans-serif;
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);
  font:16px/1.7 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;-webkit-text-size-adjust:100%}
a{color:var(--brand-esc);text-underline-offset:2px}
.envelope{max-width:820px;margin:0 auto;padding:28px 20px 64px}
main{background:var(--card);border:1px solid var(--linha);border-radius:22px;
  box-shadow:var(--sombra);padding:38px clamp(20px,5vw,56px)}
h1{font-family:var(--font-titulo);font-size:clamp(26px,4.6vw,36px);line-height:1.2;margin:0 0 18px}
h2{font-family:var(--font-titulo);font-size:clamp(20px,3vw,26px);line-height:1.25;margin:40px 0 12px;
  padding-top:18px;border-top:1px solid var(--linha)}
h3{font-family:var(--font-titulo);font-size:19px;margin:28px 0 8px;color:var(--brand-esc)}
p,li{max-width:66ch}
ul,ol{padding-left:22px}
li{margin:6px 0}
hr{display:none}                       /* os --- do .md viram só separação de seção */
blockquote{margin:22px 0;padding:14px 18px;border-left:4px solid var(--brand);
  background:#f4fbf6;border-radius:0 12px 12px 0}
blockquote p{margin:0}
.tabela-rolagem{overflow-x:auto;margin:20px 0}
table{border-collapse:collapse;width:100%;font-size:15px;min-width:460px}
th,td{text-align:left;padding:11px 13px;border-bottom:1px solid var(--linha);vertical-align:top}
th{background:#f4fbf6;font-weight:700}
.marca{display:flex;align-items:center;gap:10px;margin-bottom:20px;text-decoration:none;color:var(--ink)}
.marca img{width:38px;height:38px}
.marca b{font-size:17px}
.rodape{margin-top:26px;font-size:13px;color:var(--muted);text-align:center}
.rodape a{color:var(--muted)}
@media print{
  body{background:#fff;font-size:11.5pt}
  .envelope{max-width:none;padding:0}
  main{border:0;border-radius:0;box-shadow:none;padding:0}
  h2{break-after:avoid}
  h2,h3{break-inside:avoid}
  table,blockquote,li{break-inside:avoid}
  .marca img{width:28px;height:28px}
  a{color:#000;text-decoration:none}
  a[href^="http"]::after{content:" (" attr(href) ")";font-size:9pt;color:#555}
}
`;

/** Envolve tabelas para poderem rolar em tela estreita sem estourar a página. */
function tabelasRolaveis(html: string): string {
  return html.replace(/<table>[\s\S]*?<\/table>/g, (t) => `<div class="tabela-rolagem">${t}</div>`);
}

export function gerarGuia(outDir: string): void {
  const md = readFileSync(join(process.cwd(), "conteudo/guia-implantacao-caa-rede-municipal.md"), "utf8");
  // `breaks`: o autor separou linhas de crédito com quebra simples — sem isso o
  // markdown as junta num parágrafo só ("…e a Unesp Contato: …").
  const corpo = tabelasRolaveis(marked.parse(md, { async: false, breaks: true }) as string);

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: TITULO,
    description: DESCRICAO,
    inLanguage: "pt-BR",
    url: `${SITE}${CAMINHO}`,
    publisher: { "@id": `${SITE}/#org` },
    step: [
      "Diagnóstico da demanda local",
      "Disponibilização do recurso",
      "Articulação institucional",
      "Formação de multiplicadores",
      "Acompanhamento e personalização",
    ].map((nome, i) => ({ "@type": "HowToStep", position: i + 1, name: nome })),
  });

  const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<!-- Google tag (gtag.js) — mesma propriedade do site. É \`async\`: a página
     continua renderizando inteira sem JavaScript, como foi projetada. Aqui é
     onde a medição mais importa, já que a URL não é linkada de lugar nenhum. -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YHW0W81BQ8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  // Sem perfil comportamental para publicidade (ver Política de Privacidade).
  gtag('config', 'G-YHW0W81BQ8', {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
</script>
<title>${TITULO} · Papuguinho</title>
<meta name="description" content="${DESCRICAO}">
<link rel="canonical" href="${SITE}${CAMINHO}">
<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
<meta name="theme-color" content="#1DD762">
<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Papuguinho">
<meta property="og:locale" content="pt_BR">
<meta property="og:title" content="${TITULO}">
<meta property="og:description" content="${DESCRICAO}">
<meta property="og:url" content="${SITE}${CAMINHO}">
<meta property="og:image" content="${SITE}/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${TITULO}">
<meta name="twitter:description" content="${DESCRICAO}">
<meta name="twitter:image" content="${SITE}/og.png">
<style>${CSS}</style>
<script type="application/ld+json">${jsonLd}</script>
</head>
<body>
<div class="envelope">
  <a class="marca" href="/">
    <img src="/icon-192.png" width="38" height="38" alt="" loading="lazy" decoding="async">
    <b>Papuguinho</b>
  </a>
  <main>
${corpo}
  </main>
  <p class="rodape">
    <a href="/">papuguinho.com</a> · <a href="https://estudio.papuguinho.com">estudio.papuguinho.com</a>
  </p>
</div>
</body>
</html>
`;

  const destino = join(outDir, "guia", "index.html");
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, html, "utf8");
}
