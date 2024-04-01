import apiClient from "@/api-client.ts";
import {IVacancyResponse} from "@/models/IVacancyResponse";

export default async function getTeamVacanciesResponses(teamId: number): Promise<IVacancyResponse[]> {
    const response = await apiClient({
        method: 'get',
        url: `/teams/get_applies_for_team?team_id=${teamId}`,
    })

    if (response.status === 200) {
        return response.data
    }

    return []
}