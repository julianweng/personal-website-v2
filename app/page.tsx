import Hero from "@/components/Hero";
import ExperienceLayout from "@/components/experience/ExperienceLayout";
import ProjectLayout from "@/components/project/ProjectLayout";

export default function Page() {
  return (
    <div>
      <Hero />
      <ExperienceLayout />
      <ProjectLayout />
    </div>
  );
}