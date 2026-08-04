import { defineConfig } from "blume";

export default defineConfig({
  title: "CTG Sinh lý",
  description: "Tài liệu về phiên giải CTG dựa trên sinh lý học lâm sàng.",

  feedback: false,

  github: {
    owner: "MedPocket",
    repo: "ultraso",
    branch: "main",
  },

  i18n: {
    defaultLocale: "vi",
    locales: [{ code: "vi", label: "Tiếng Việt" }],
    hideDefaultLocalePrefix: true,
  },

  theme: {
    accent: "blue",
    radius: "md",
    mode: "system",
    fonts: {
      body: {
        name: "Be Vietnam Pro",
        provider: "fontsource",
        fallback: "sans",
      },
      display: {
        name: "Be Vietnam Pro",
        provider: "fontsource",
        fallback: "sans",
      },
    },
  },

  deployment: {
    output: "static",
    site:
      process.env.NETLIFY === "true"
        ? process.env.URL || "https://ultraso.netlify.app"
        : "https://medpocket.github.io",
    base: process.env.NETLIFY === "true" ? "/" : "/physiological-CTG-Interpretation",
  },
});
