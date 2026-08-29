import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}
