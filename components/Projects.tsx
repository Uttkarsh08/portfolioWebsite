import FadeInSection from "./FadeInSection";
import { SectionHeader } from "./ui/SectionHeader";
import ProjectCard from "./ui/projectCard";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col min-h-screen max-w-5xl px-6 pt-[150px] mx-auto snap-start justify-center items-start">
      <FadeInSection>
        <SectionHeader title="Projects" />
      </FadeInSection>

      <div className="flex w-full gap-6 flex-col mb-10">
        <ProjectCard
          link="https://github.com/SOUMEN-PAL/Veggito"
          github="https://github.com/SOUMEN-PAL/Veggito"
          name="Veggito"
          learning="Kotlin, Firebase, Jetpack Compose"
          desc="A D2C Android app enabling farmers to directly sell fresh produce to consumers. Developed for SIH 2023 with real-time inventory, AI-powered price prediction, and B2B simulation."
          techStack={[
            "kotlin.svg",
            "firebase.svg",
            "jc.svg",
          ]}
        />
        <ProjectCard
          link="https://github.com/Uttkarsh08/Canvas-Drawing-App"
          github="https://github.com/Uttkarsh08/Canvas-Drawing-App"
          name="Canvas Drawing Application"
          learning="Custom View rendering, Canvas API, Paint API, XML layouts, Bitmap processing, and user feedback testing"
          desc="An Android-based digital sketching app with features like brush size adjustment, color selection, undo/redo, and saving artwork—designed for all age groups with a 93% positive feedback rate."
          techStack={[
            "kotlin.svg",
            "xml.svg",
          ]}
        />
        <div className="text-2xl text-white font-medium"></div>

      </div>
    </div>
  );
}
