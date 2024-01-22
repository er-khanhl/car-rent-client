import { Metadata } from "next";
import initTranslations from "./i18n";

type Props = {
  params: {
    locale: string;
  };
};

const i18nNamespaces = ["home"];

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: `${t("document_title")} | Morent`,
  };
}

export default async function Home({ params: { locale } }: Props) {
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
