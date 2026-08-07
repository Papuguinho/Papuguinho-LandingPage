import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import type { Plugin } from "vite";

import { gerarGuia } from "./guia/gerar";

/**
 * Escreve dist/guia/index.html a partir do markdown em conteudo/.
 * É página estática e sem JS — o público (gestores municipais) costuma imprimir.
 */
function guiaEstatico(): Plugin {
  let outDir = "dist";
  return {
    name: "papuguinho-guia-estatico",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      gerarGuia(outDir);
      this.info(`guia estático gerado em ${outDir}/guia/`);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), guiaEstatico()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
