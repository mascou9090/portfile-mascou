import { Footer } from "@/app/footer";
import { Header } from "@/app/header";
import { NavBar } from "@/app/navBar";
import { MainContent } from "@/app/mainContent";

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
