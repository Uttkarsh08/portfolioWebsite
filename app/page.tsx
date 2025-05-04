import AboutPage from "@/components/about";
import FadeInSection from "@/components/FadeInSection";
import HomeSection from "@/components/home";
import Navigation from "@/components/navigation";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-black">
      <div className="fixed top-8 left-0 w-full z-50 ">
        <FadeInSection>
          <Navigation />
        </FadeInSection>
      </div>

      <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory ">
        <HomeSection />
        <AboutPage />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
