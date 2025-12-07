import { Header } from "../header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen gradient-soft">
      <Header />
      <main>{children}</main>
    </div>
  );
};
