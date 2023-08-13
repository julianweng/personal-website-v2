export type ExperienceType = {
    name: string;
    title: string;
    location: string;
    duration: string;
    description: string;
    imgUrl: string;
}

export type ProjectType = {
    name: string;
    duration: string;
    description: string;
    skills: string[];
    githubUrl?: string;
    imgUrl: string;
}

export type Dimensions = {
    width: string;
    height: string;
}