import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { pages } from "pages/constants";

import style from "./SideMenu.module.scss";

export const SideMenu = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <div className={style.sideMenu}>
      <div className={style.links}>
        <Link href={pages.home.path} passHref>
          <button type="button">Home</button>
        </Link>
        <Link href={pages.churchFathers.path} passHref>
          <button type="button">{pages.churchFathers.title}</button>
        </Link>
      </div>

      <Link href="/" locale={router.locale === "en" ? "pt-BR" : "en"} passHref>
        <button>{t("changeLocale")}</button>
      </Link>
    </div>
  );
};
