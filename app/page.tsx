import About from "@/components/About";
import Hero from "@/components/Hero";
import ExperienceLayout from "@/components/experience/ExperienceLayout";
import ProjectLayout from "@/components/project/ProjectLayout";

export default function Page() {
  return (
    <div>
      <Hero />
      <About />
      <div className="grid grid-cols-6 md:grid-cols-12 pt-20 md:pt-0 w-screen">
        <div className="col-span-6">
          <ExperienceLayout />
        </div>
        <div className="col-span-6">
          <ProjectLayout />
        </div>
      </div>
    </div>
  );
}