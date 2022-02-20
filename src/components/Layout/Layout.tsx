import { SideMenu } from "components/SideMenu";

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <SideMenu />
      <div className="layout">{children}</div>
    </>
  );
};
