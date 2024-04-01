import { IUser } from "@/models/IUser.ts";

export interface ITeam {
    id: number
    name: string
    members: IUser[]
    hackathonId: number
    creator: number
}