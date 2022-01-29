import Link from "next/link";
import { useTranslation } from "next-i18next";

export const SideMenu = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        background: "#e5e5e5",
        padding: "20px",
        marginBottom: "20px",
      }}
    >
      <Link href="/church-fathers" passHref>
        <button type="button">{t("toSecondPage")}</button>
      </Link>
    </div>
  );
};
