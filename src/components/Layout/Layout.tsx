import { SideMenu } from "components/SideMenu";
import Head from "next/head";
import { IPageDetail } from "pages/constants";

interface ILayoutProps {
  children: React.ReactNode;
  pageDetail: IPageDetail;
}

export const Layout = ({ children, pageDetail }: ILayoutProps) => {
  return (
    <main>
      <Head>
        <title>{pageDetail.title}</title>
        <meta content={pageDetail.title} name="description" />
        <link href="/favicon.png" rel="icon" />
      </Head>
      <SideMenu />
      <div className="layout">{children}</div>
    </main>
  );
};
