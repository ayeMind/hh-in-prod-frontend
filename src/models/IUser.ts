export interface IUser {
    id: number;
    name: string;
    email: string;
    role: "organizer" | "user";
    age: number | null;
    city: string | null;
    workExp: number | null;
}