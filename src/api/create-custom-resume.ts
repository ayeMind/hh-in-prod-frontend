import apiClient from "@/api-client.ts";

export default async function createCustomResume(hackathonId: number): Promise<boolean> {
    const response = await apiClient({
        method: 'post',
        url: '/resumes/create/custom',
        data: {
            hh: '',
            telegram: '',
            github: '',
            hackathon_id: hackathonId,
            pdf_link: '',
            bio: '',
            soft: [],
            tech: [],
            personal_website: '',
        },
    })

    return response.status === 201
}