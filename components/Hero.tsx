import { info } from "@/config/info";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { EmailIcon } from "./icons/EmailIcon";
import { ResumeIcon } from "./icons/ResumeIcon";
import { GithubIcon } from "./icons/GithubIcon";

export default function Hero() {
    return (
        <section className="-translate-y-16 flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 w-screen h-screen">
            <h2 className="text-2xl md:text-3xl font-medium">Hi, I&apos;m</h2>
            <h1 className="text-5xl md:text-7xl font-bold overflow-hidden whitespace-nowrap opacity-0 animate-fade-up animation-delay-500">Rohan Moniz</h1>
            <h3 className="text-lg md:text-2xl px-2 md:px-0 font-medium text-center animate-fade-in opacity-0 animation-delay-[1500ms]">I&apos;m a junior studying Computer Science at the University of Pennsylvania.</h3>
            <ButtonGroup className="w-11/12 absolute bottom-10 md:w-auto animate-fade-in opacity-0 animation-delay-[2500ms]">
                <Button as={Link} href={info.linkedin} isExternal variant="ghost" startContent={<LinkedinIcon width="24px" height="24px" />}>
                    LinkedIn
                </Button>
                <Button as={Link} href={info.email} isExternal variant="ghost" startContent={<EmailIcon width="24px" height="24px" />}>
                    Email
                </Button>
                <Button as={Link} href={info.github} isExternal variant="ghost" startContent={<GithubIcon width="24px" height="24px" />}>
                    GitHub
                </Button>
                <Button as={Link} href={info.resume} isExternal variant="ghost" startContent={<ResumeIcon width="24px" height="24px" />}>
                    Resume
                </Button>
            </ButtonGroup>
        </section>
    );
}