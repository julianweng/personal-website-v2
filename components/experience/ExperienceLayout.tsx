import { experiences } from "@/config/info";
import Experience from "./Experience";

export default function ExperienceLayout() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <h1 className="font-bold text-3xl pb-1">Experience</h1>
            {experiences.map((experience) => (
                <Experience
                    key={experience.name}
                    name={experience.name}
                    title={experience.title}
                    location={experience.location}
                    duration={experience.duration}
                    description={experience.description}
                    imgUrl={experience.imgUrl}
                />
            ))}
        </section>
    );
}