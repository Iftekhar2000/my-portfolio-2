
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SkillSection from "./components/SkillSection";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col"> {/* Added h-screen to ensure full height */}
      <NavBar />
      <HeroSection />
      <SkillSection />
      <Portfolio />
      <Footer className="h-1/5" /> {/* Ensure Footer has appropriate height */}
    </div>
  );
}

export default App;
