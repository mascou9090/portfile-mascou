import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <main className="h-screen md:h-dvh bg-gradient-to-l from-purple-600 to-violet-950">
      <Header />
      <NavBar />
      <Footer />
    </main>
  );
}
