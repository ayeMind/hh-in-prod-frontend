import {VacancyReplyCard} from "@/components/vacancy-reply-card";
import {SimpleGrid} from "@mantine/core";
import {IVacancyResponse} from "@/models/IVacancyResponse";

export const TeamDetailVacanciesResponses = ({ vacancy_responses }: { vacancy_responses: IVacancyResponse[] }) => {
    return (
        <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md" mt={ 12 } mb={ 36 }>
            { vacancy_responses.map(response => {
                return <VacancyReplyCard candidate_id={response.candidate_id} />
            }) }
        </SimpleGrid>
    )
}