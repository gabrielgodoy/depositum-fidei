import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ChurchFathers = () => {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <Link href="/" passHref>
          <button type="button">
            {t("backToHome", { ns: "churchFathers" })}
          </button>
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

export default ChurchFathers;
