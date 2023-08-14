import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
export default function About() {
    return (
        <section id="about" className="flex flex-row gap-4 pb-8 md:pb-10 w-screen h-screen">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center w-screen">
                <div className="relative flex flex-row col-span-6 md:col-span-4 justify-center md:justify-end">
                    <Image
                        alt="Profile picture"
                        height={350}
                        src="pfp.jpeg"
                        width={350}
                    />
                </div>
                <div className="flex flex-col col-span-6 md:col-span-8 items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold pb-3">About Me</h2>
                    <Card className="w-5/6 md:max-w-[800px]">
                        <CardBody>
                            <p>
                                Hey! I&apos;m a junior at the University of Pennsylvania pursuing a Bachelor of Science in Engineering (BSE) in Computer Science, with a minor in Mathematics. I&apos;m an avid learner and problem-solver, and really enjoy working with others. I&apos;m passionate about building systems to solve real-world problems at scale.
                                <br/><br/>
                                Outside of classes and clubs, you can find me watching sports (mainly tennis, basketball, and F1), running along the Schuylkill River, or eating mint chocolate chip ice cream.
                            </p>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </section>
    );
}