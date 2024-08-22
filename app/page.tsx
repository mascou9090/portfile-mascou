import { Footer } from "@/app/footer";
import { Header } from "@/app/header";
import { MainContent } from "@/app/mainContent";

export default function Home() {
  return (
    <div className="bg-gradient-to-l dark:from-purple-600 dark:to-violet-950 bg-gray-300">
      <Header />
      <div className="flex col-span-3">
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}
