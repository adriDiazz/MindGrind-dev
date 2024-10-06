import { NextIntlProvider } from "next-intl";
import { useLocale } from "next-intl"; // useLocale es proporcionado por next-intl para obtener el idioma actual
import { notFound } from "next/navigation";

export default function IntlProvider({ children }) {
  const locale = useLocale(); // Obtenemos el locale con useLocale

  let messages;
  try {
    messages = require(`../../messages/${locale}.json`); // Carga los mensajes según el idioma
  } catch (error) {
    notFound(); // Redirige a 404 si no encuentra el archivo de traducción
  }

  return (
    <NextIntlProvider messages={messages} locale={locale} defaultLocale="en">
      {children}
    </NextIntlProvider>
  );
}
