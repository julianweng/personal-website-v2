import { projects } from "@/config/info";
import Project from "./Project";

export default function ProjectLayout() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <h1 className="font-bold text-3xl pb-1">Projects</h1>
            {projects.map((project) => (
                <Project
                    key={project.name}
                    name={project.name}
                    duration={project.duration}
                    description={project.description}
                    skills={project.skills}
                    githubUrl={project.githubUrl}
                    imgUrl={project.imgUrl}
                />
            ))}
        </section>
    );
}