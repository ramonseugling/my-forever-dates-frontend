import { Fredoka, Quicksand } from "next/font/google";
import { Footer } from "../footer";
import { Header } from "../header";

type LayoutProps = {
  children: React.ReactNode;
};

const fredoka = Fredoka({
  subsets: ["latin"],
});

const quickSand = Quicksand({
  subsets: ["latin"],
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-screen gradient-soft flex-col">
      <Header />
      <main className="flex-1 flex flex-col mb-12">{children}</main>
      <Footer />
    </div>
  );
};
