import {VacancyReplyCard} from "@/components/vacancy-reply-card";
import {SimpleGrid} from "@mantine/core";
import {IVacancyResponse} from "@/models/IVacancyResponse";
import {useNavigate} from "react-router-dom";

export const TeamDetailVacanciesResponses = ({ vacancy_responses, hackathon_id }: { vacancy_responses: IVacancyResponse[], hackathon_id: number }) => {
    const navigate = useNavigate()
    return (
        <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md" mt={ 12 } mb={ 36 }>
            { vacancy_responses.map(response => {
                return <VacancyReplyCard candidate_id={response.candidate_id} onResumeClick={() => navigate(`/hackathon/${hackathon_id}/resume/${response.candidate_id}`)} />
            }) }
        </SimpleGrid>
    )
}