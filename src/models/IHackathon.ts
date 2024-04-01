import { IUser } from "@/models/IUser.ts";

export interface IHackathon {
    id: number;
    name: string;
    description: string;
    imageCover: string;
    participants: IUser[];
    teamsIds: number[];
}