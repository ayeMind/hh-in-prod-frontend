import apiClient from "@/api-client.ts";
import {IVacancyResponse} from "@/models/IVacancyResponse";

export default async function getTeamVacancies(teamId: number): Promise<IVacancyResponse[]> {
    const response = await apiClient({
        method: 'get',
        url: `/teams/team_vacancies?id=${ teamId }`,
    })

    if (response.status == 200) {
        return (response.data as any[]).map(json => {
            return {
                id: json.id,
                team: json.team,
                vacancy_id: json.vac,
                candidate_id: json.who_responsed
            }
        })
    }

    return []
}