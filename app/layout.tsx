import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { UserProvider } from "@/lib/auth";
import { getUser } from "@/lib/db/queries";
import IntlProvider from "@/app/i18/IntlProvider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "MindGrind",
  description: "A better way to keep productive with AI",
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const manrope = Manrope({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let userPromise = getUser();
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${manrope.className}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MindGrind</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="../../img/favicon.ico"
        />
        <link rel="stylesheet" href="../../../dist/output.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+US+Modern:wght@100..400&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="min-h-[100dvh] bg-background">
        <UserProvider userPromise={userPromise}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </UserProvider>
      </body>
    </html>
  );
}
