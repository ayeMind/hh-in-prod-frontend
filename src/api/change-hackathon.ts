import apiClient from "@/api-client.ts";

interface ChangeHackathonPayload {
    name: string,
    description: string,
    min_participants: number,
    max_participants: number,
}

export default async function changeHackathon(hackathon_id: number, file: File | null, data: ChangeHackathonPayload): Promise<boolean>  {
    if(file) {
        const form = new FormData()
        form.append('image_cover', file)
        await apiClient.post(`/hackathons/${hackathon_id}/change_photo`, form)
    }
    const response = await apiClient({
        method: "patch",
        url: `/hackathons/${hackathon_id}`,
        data: data
    })

    return response.status == 200
}