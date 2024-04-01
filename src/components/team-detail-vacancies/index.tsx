import { VacancyCard } from "@/components/vacancy-card";
import { SimpleGrid } from "@mantine/core";
import { ITeamVacancy } from "@/models/ITeamVacancy";
import useUser from "@/hooks/use-user";
import { ITeam } from "@/models/ITeam";
import { useNavigate, useParams } from "react-router-dom";

export const TeamDetailVacancies = ({listVacancies, myTeam}: {
    listVacancies: ITeamVacancy[],
    myTeam: ITeam | null,
}) => {
    const {user} = useUser()
    const { hackathon_id, team_id } = useParams()
    const navigate = useNavigate()

    return (
        <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md" mt={ 12 } mb={ 36 }>
            { listVacancies?.map((vacancy: ITeamVacancy) => {
                const canSend = !!(user && user.role && user.role == "user" && !myTeam);

                const onClick = () => {
                    if (myTeam) {
                        navigate(`/hackathon/${hackathon_id}/teams/${team_id}/vacancy/${vacancy.id}/candidates`)
                    }
                }
                
                return <VacancyCard
                    onClick={ onClick}
                    key={ vacancy.id }
                    canSendResume={ canSend }
                    keywords={ vacancy.keywords }
                    name={ vacancy.name }
                />
            }) }
        </SimpleGrid>
    )
}