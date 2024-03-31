import { IProject } from "./IProject";

export interface IResume {
    bio: string;
    projects: IProject[];
    userId: number;
    hackathonId: number;
    techStack: string[] | null;
    softSkills: string[] | null;
    personalWebsite: string | null;
    githubLink: string | null;
    hhLink: string | null;
    linkedln: string | null;
    telegram: string | null;
}