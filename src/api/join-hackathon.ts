import apiClient from "@/api-client.ts";

export default async function joinHackathon(id: number): Promise<boolean> {
    const response = await apiClient({
        method: 'post',
        url: `/hackathons/join?hackathon_id=${id}`,
    })
    
    return response.status === 200
}