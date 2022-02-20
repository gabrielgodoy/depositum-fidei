import johnPaulii from "assets/images/john-paul-ii.jpeg";
import { Layout } from "components";
import type { NextPage } from "next";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { pages } from "./constants";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <Layout pageDetail={pages.home}>
      <div className={styles.container}>
        <h1>{t("whatDepositumFideiMeans", { ns: "home" })}</h1>

        <p>
          Depositum fidei é uma expressão em latim que significa{" "}
          <strong>depósito da fé</strong>, que consiste no corpo da verdade
          revelada nas escrituras e na tradição sagrada.
        </p>
        <p>
          <strong>Fidei depositum</strong> também é o nome da constituição
          apostólica do Papa João Paulo II, emitida em 11 de outubro de 1992,
          onde fala sobre o Catecismo da Igreja Católica.
        </p>
        <div className={styles.hero}>
          <Image
            alt="John Paul II"
            layout="fill"
            quality={100}
            src={johnPaulii}
          />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default Home;
