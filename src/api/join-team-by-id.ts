import apiClient from "@/api-client.ts";

export default async function joinTeamById(id: string): Promise<boolean> {
    const response = await apiClient({
        method: 'post',
        url: `/teams/join-team?team_id=${id}`
    })
    
    return response.status === 200;
}