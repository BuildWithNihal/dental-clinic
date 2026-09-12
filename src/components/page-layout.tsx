import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
