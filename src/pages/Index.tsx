import { NewYearBanner } from "@/components/NewYearBanner";
import { SearchBox } from "@/components/SearchBox";
import { Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <NewYearBanner />
      
      <main className="container mx-auto pt-12 md:pt-24 px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Search className="w-8 h-8 md:w-12 md:h-12 text-[#F97316]" />
            <h1 className="text-4xl md:text-6xl font-bold text-[#F97316]">
              enginee.online
            </h1>
          </div>
        </div>

        <SearchBox />
      </main>

      <footer className="fixed bottom-0 w-full py-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto text-center text-sm text-gray-600">
          © 2025 enginee.online
        </div>
      </footer>
    </div>
  );
};

export default Index;