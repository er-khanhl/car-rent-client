import { Metadata } from "next";
import initTranslations from "../i18n";
import TranslationsProvider from "../components/client/TranslationsProvider";
import LoginForm from "../components/client/LoginForm";
import Link from "next/link";

type Props = {
  params: {
    locale: string;
  };
};

const i18nNamespaces = ["login"];

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: t("document_title"),
  };
}

export default async function Login({ params: { locale } }: Props) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      locale={locale}
      namespaces={i18nNamespaces}
      resources={resources}
    >
      <div className="bg-white p-4 md:p-10 rounded">
        <h1 className="text-3xl font-bold text-center py-4 md:py-10">
          {t("title")}
        </h1>

        <LoginForm />

        <p className="text-center font-semibold">
          {t("question_account")}
          <Link href={"/register"} className="text-primary ml-1">
            {t("sign_up_link")}
          </Link>
        </p>
      </div>
    </TranslationsProvider>
  );
}
