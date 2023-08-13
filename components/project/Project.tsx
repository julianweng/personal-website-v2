import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { ProjectType } from "@/config/types";
import { GithubIcon } from "../icons/GithubIcon";

export default function Project({ name, duration, description, skills, githubUrl, imgUrl }: ProjectType) {
    return (
        <Card className="w-5/6 md:max-w-[600px]">
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                        <Image
                            alt={name}
                            className="object-cover"
                            height={200}
                            src={imgUrl}
                            width="100%"
                        />
                    </div>
                    <div className="flex flex-col col-span-6 md:col-span-8">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h1 className="flex flex-row gap-2 items-center text-large font-medium mt-2">{name} {githubUrl && (
                                    <Link isExternal color="foreground" href={githubUrl}><GithubIcon width="18px" height="18px" /></Link>
                                )}</h1>
                                <p className="text-small text-foreground/80">{duration}</p>
                                <div className="flex flex-wrap flex-row gap-1 pt-1">
                                    {skills.map((skill) => (
                                        <Chip key={skill} size="sm" radius="sm">{skill}</Chip>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-3 gap-1 justify-between">
                            {description}
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}