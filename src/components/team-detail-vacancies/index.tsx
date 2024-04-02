import { VacancyCard } from "@/components/vacancy-card";
import { SimpleGrid } from "@mantine/core";
import { ITeamVacancy } from "@/models/ITeamVacancy";
import useUser from "@/hooks/use-user";
import { ITeam } from "@/models/ITeam";
import { useNavigate, useParams } from "react-router-dom";
import {IVacancyResponse} from "@/models/IVacancyResponse";
import {useEffect, useState} from "react";

export const TeamDetailVacancies = ({vacancy_responses, listVacancies, myTeam}: {
    vacancy_responses: IVacancyResponse[],
    listVacancies: ITeamVacancy[],
    myTeam: ITeam | null,
}) => {
    const {user} = useUser()
    const { hackathon_id, team_id } = useParams()
    const [canSend, setCanSend] = useState<'canSend' | 'cantSend' | 'sended'>('canSend')
    const navigate = useNavigate()
    useEffect(() => {
        vacancy_responses.map(response => {
            if((user && response.candidate_id == user.id) && (canSend != 'sended'))
                setCanSend('sended')
            if(!(user && user.role && user.role == "user" && !myTeam))
                setCanSend('cantSend')
        })
    }, [])
    return (
        <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md" mt={ 12 } mb={ 36 }>
            { listVacancies?.map((vacancy: ITeamVacancy) => {

                const onClick = () => {
                    if (myTeam) {
                        navigate(`/hackathon/${hackathon_id}/teams/${team_id}/vacancy/${vacancy.id}/candidates`)
                    }
                }
                
                return <VacancyCard
                    onClick={ onClick}
                    key={ vacancy.id }
                    id={ vacancy.id }
                    canSendResume={canSend}
                    keywords={ vacancy.keywords }
                    name={ vacancy.name }
                />
            }) }
        </SimpleGrid>
    )
}