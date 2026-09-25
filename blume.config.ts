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

  seo: {
    og: {
      site: false,
      logo: false,
    },
  },

  theme: {
    accent: "blue",
    radius: "md",
    mode: "light",
    fonts: {
      body: "inter",
      display: "inter",
    },
  },

  deployment: {
    base: process.env.NETLIFY === "true" ? "/" : "/physiological-CTG-Interpretation",
  },
});
