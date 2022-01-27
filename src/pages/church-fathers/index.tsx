import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ChurchFathers = () => {
  const { t } = useTranslation(["common", "church-fathers"]);

  return (
    <>
      <main>
        <Link href="/" passHref>
          <button type="button">{t("church-fathers:back-to-home")}</button>
        </Link>
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "church-fathers"])),
  },
});

export default ChurchFathers;
