import {VacancyCard} from "@/components/vacancy-card";
import {SimpleGrid} from "@mantine/core";
import {useEffect, useState} from "react";
import {ITeamVacancy} from "@/models/ITeamVacancy";
import fetchTeamVacancies from "@/api/fetch-team-vacancies";
import useUser from "@/hooks/use-user";
import fetchMyTeam from "@/api/fetch-my-team";
import {ITeam} from "@/models/ITeam";

export const TeamDetailVacancies = ({ team_id, hackathon_id }: { team_id: number, hackathon_id: number }) => {
    const [listVacancies, setListVacancies] = useState<ITeamVacancy[]>([])
    const { user } = useUser()
    const [myTeam, setMyTeam] = useState<ITeam | null>(null)
    useEffect(() => {
        fetchTeamVacancies(team_id).then(setListVacancies)
        fetchMyTeam(hackathon_id).then(setMyTeam)
    }, [])
    return (
        <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md" mt={ 12 } mb={ 36 }>
            { listVacancies.map((vacancy: ITeamVacancy) => {
                return <VacancyCard
                    key={ vacancy.id }
                    canSendResume={!!(user && user.role && user.role == "user" && !myTeam)}
                    keywords={ vacancy.keywords }
                    name={ vacancy.name }
                />
            }) }
        </SimpleGrid>
    )
}