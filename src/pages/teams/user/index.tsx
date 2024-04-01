import { FC, memo, useState, useEffect } from "react";
import { Button, Container, Flex, SimpleGrid } from "@mantine/core";
import { Header } from "@/components/header";
import { IconPlus } from "@tabler/icons-react";
import { CurrentTeamCard } from "@/components/current-team-card";
import { SearchInput } from "@/components/search-input";
import { TeamCard } from "@/components/team-card";
import { useMediaQuery } from "@mantine/hooks";
import { AuthGuard } from "@/components/auth-guard";
import fetchTeams from "@/api/fetch-teams";
import { ITeam } from "@/models/ITeam";
import { useParams } from "react-router-dom"
import fetchHackathon from "@/api/fetch-hackathon";
import { IHackathon } from "@/models/IHackathon";
import useUser from "@/hooks/use-user";
import fetchMyTeam from "@/api/fetch-my-team";

export type TeamUserPageProps = {}

export const TeamUserPage: FC<TeamUserPageProps> = memo(() => {
    const is960 = useMediaQuery('(max-width: 960px) and (min-width: 651px)')
    const is650 = useMediaQuery('(max-width: 650px)')

    const { hackathon_id } = useParams()
    const [teams, setTeams] = useState<ITeam[]>([])
    const [filteredTeams, setFilteredTeams] = useState<ITeam[]>([])
    const [hackathon, setHackathon] = useState<IHackathon | null>(null);

    useEffect(() => {
        fetchTeams(parseInt(hackathon_id as string)).then(data => {
            if (!data) return null;
            setTeams(data)
            setFilteredTeams(data)
            console.log(data);
        });

        fetchHackathon(parseInt(hackathon_id as string)).then(data => {
            if (!data) return null;
            setHackathon(data);
            console.log(data);  
        })

        fetchMyTeam(parseInt(hackathon_id as string)).then(data => {
            console.log("team", data);
        })
        
    }, [])

    return <AuthGuard role='user'>
        <Header variant='user'/>
        <Container size="md" mt="md">
            {/*  Head */ }
            <Flex justify="space-between" mb='md' align='center'>
                <h1>Команды</h1>
                <Button
                    variant="outline"
                    rightSection={ <IconPlus size={ 14 }/> }>
                    Создать команду
                </Button>
            </Flex>

            {/*  Current team */ }
            <CurrentTeamCard
                hackathonId={ 123 }
                id={ 1 }
                name="Крутое название команды"
                members={ 3 }
                maxMembers={ 5 }
            />

            {/* Search input */ }
            <SearchInput
                onChange={search => setFilteredTeams(teams.filter(team => team.name.includes(search)))}
                placeholder="Найти команду"
            />

            {/* Teams list */ }
            <SimpleGrid cols={ is960 ? 2 : is650 ? 1 : 3 } mt='md' spacing="md" mb="xl">
                {
                    filteredTeams.map((team, i) => {
                        return <TeamCard
                            key={ `t-${ i }` }
                            hackathonId={ 123 }
                            id={ 1 }
                            members={ team.members.length }
                            maxMembers={ hackathon?.max_participants ? hackathon.max_participants : 1 }
                            name={team.name}
                            vacancies={ [
                                {
                                    name: 'Фронтенд Разработчик',
                                    id: 2,
                                },
                                {
                                    name: 'Бекенд Разработчик',
                                    id: 3,
                                },
                            ] }/>
                    })
                }
            </SimpleGrid>
        </Container>
    </AuthGuard>
})
