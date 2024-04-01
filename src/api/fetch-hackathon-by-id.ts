import apiClient from "@/api-client.ts";
import { IHackathon } from "@/models/IHackathon.ts";

export default async function fetchHackathonById(id: number): Promise<IHackathon | null>  {
    const response = await apiClient({
        method: 'get', 
        url: `/hackathons/${id}`
    })
    
    if (response.status == 200) {
        const json = response.data;

        return { 
            id: json.id,
            name: json.name,
            description: json.description,
            imageCover: json.image_cover,
            participants: json.participants.map((e: any) => ({
                id: e.id,
                name: e.username,
                email: e.email,
                role: e.is_organizator ? 'organizer' : 'user',
                age: e.age,
                city: e.city,
                workExp: e.work_experience,
            })),
                teamsIds: [],
                minParticipants: json.min_participants,
                maxParticipants: json.max_participants,
            }
        }
        return null;
    }