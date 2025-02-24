import { MainLayout } from "@/layouts/MainLayout";
import { ibmPlexSans, ibmPlexMono } from "@/constants/fonts";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import "./global.css";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <MainLayout>{children}</MainLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export { generateMetadata } from "./metadata";
