import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { ExperienceType } from "@/config/types";

export default function Project({ name, title, location, duration, description, imgUrl }: ExperienceType) {
    return (
        <Card className="w-5/6 md:max-w-[600px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt="{duration} logo"
                    height={40}
                    radius="sm"
                    src={imgUrl}
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">{name}</p>
                    <p className="text-small text-default-500">{title}</p>
                    <p className="text-small text-default-500">{location} | {duration}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                {description}
            </CardBody>
        </Card>
    );
}