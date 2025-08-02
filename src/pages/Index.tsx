import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SearchSection from "@/components/SearchSection";
import RecentHighlights from "@/components/RecentHighlights";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SearchSection />
        <RecentHighlights />
      </main>
    </div>
  );
};

export default Index;
