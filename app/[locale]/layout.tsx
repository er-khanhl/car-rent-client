import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { i18nConfig } from "@/i18nConfig";
import { dir } from "i18next";
import initTranslations from "./i18n";
import { Metadata } from "next";

const pjsans = Plus_Jakarta_Sans({ subsets: ["latin"] });

const i18nNamespaces = ["title"];

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: {
      template: "%s | Morent",
      default: `${t("default_document_title")} | Morent`,
    },
  };
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => {
    locale;
  });
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={pjsans.className}>
        <main className="bg-background mx-auto min-h-screen max-w-[1440px] pt-20 md:pt-32 px-6 md:px-16">
          {children}
        </main>
      </body>
    </html>
  );
}
