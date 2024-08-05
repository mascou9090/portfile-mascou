import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { MainContent } from "@/components/MainContent";

export default function Home() {
  return (
    <div className="bg-gradient-to-l from-purple-600 to-violet-950">
      <Header />
      <div className="flex col-span-3">
        <NavBar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}
