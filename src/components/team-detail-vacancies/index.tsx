import {VacancyCard} from "@/components/vacancy-card";
import {SimpleGrid} from "@mantine/core";
import {useEffect, useState} from "react";
import {ITeamVacancy} from "@/models/ITeamVacancy";
import fetchTeamVacancies from "@/api/fetch-team-vacancies";
import useUser from "@/hooks/use-user";

export const TeamDetailVacancies = ({ team_id }: { team_id: number }) => {
    const [listVacancies, setListVacancies] = useState<ITeamVacancy[]>([])
    const { user } = useUser()
    useEffect(() => {
        fetchTeamVacancies(team_id).then(setListVacancies)
    }, [])
    return (
        <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md" mt={ 12 } mb={ 36 }>
            { listVacancies.map((vacancy: ITeamVacancy) => {
                return <VacancyCard
                    key={ vacancy.id }
                    canSendResume={ true }
                    keywords={ vacancy.keywords }
                    name={ vacancy.name }
                />
            }) }
            <VacancyCard
                canSendResume={ true }
                keywords={ ['React', 'Css', 'Next'] }
                name='Фронтенд разработчик'
            />
            <VacancyCard
                canSendResume={ false }
                keywords={ ['Java', 'Spring', 'Go'] }
                name='Бекенд разработчик'
            />
        </SimpleGrid>
    )
}