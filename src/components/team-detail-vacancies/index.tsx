import {VacancyCard} from "@/components/vacancy-card";
import {SimpleGrid} from "@mantine/core";
import {ITeamVacancy} from "@/models/ITeamVacancy";
import useUser from "@/hooks/use-user";
import {ITeam} from "@/models/ITeam";

export const TeamDetailVacancies = ({ listVacancies, myTeam }: { listVacancies: ITeamVacancy[], myTeam: ITeam | null, } ) => {
   const { user } = useUser()
     
    return (
        <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md" mt={ 12 } mb={ 36 }>
            { listVacancies?.map((vacancy: ITeamVacancy) => {
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