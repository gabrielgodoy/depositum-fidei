import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SecondPage = () => {
  const { t } = useTranslation("churchFathers");

  return (
    <>
      <main>
        <Link href="/" passHref>
          <button type="button">{t("backToHome")}</button>
        </Link>
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "churchFathers"])),
  },
});

export default SecondPage;
