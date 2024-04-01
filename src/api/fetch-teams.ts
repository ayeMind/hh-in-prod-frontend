import apiClient from "@/api-client.ts";
import { ITeam } from "@/models/ITeam";

export default async function fetchTeams(hackathon_id: number): Promise<ITeam[]>  {
    const response = await apiClient({
        method: 'get',
        url: "/teams",
        params: { hackathon_id: hackathon_id },
    })

    if (response.status == 200) {
        return (response.data as any[]).map(json => {
            return { 
                id: json.id,
                hackathonId: json.hackathon,
                name: json.name,
                teamLeaderUserId: json.creator,
                teamMembers: json.team_members,
            }
        })
    }

    return [];
}