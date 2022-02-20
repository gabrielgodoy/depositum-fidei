import { Layout } from "components";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { pages } from "pages/constants";

const ChurchFathers = () => {
  const { t } = useTranslation();

  return (
    <Layout pageDetail={pages.churchFathers}>
      <Link href="/" passHref>
        <button type="button">
          {t("backToHome", { ns: "churchFathers" })}
        </button>
      </Link>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "churchFathers"])),
  },
});

export default ChurchFathers;
