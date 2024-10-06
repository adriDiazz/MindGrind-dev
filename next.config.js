const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./app/i18/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "es"], // Definir los idiomas que soportas
    defaultLocale: "es", // Establecer el idioma predeterminado aquí
    localeDetection: false, // Habilitar la detección automática del idioma
  },
};

module.exports = withNextIntl(nextConfig);
