import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const MainLayout = (props: React.PropsWithChildren) => (
  <div className="flex flex-col gap-8 md:gap-20 items-center">
    <Header />
    <main className="w-full">{props.children}</main>
    <Footer />
  </div>
);
