import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import RevealInit from "./RevealInit";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <RevealInit />
      <Header />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
