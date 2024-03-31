import { FC, memo } from "react";
import { Button, Container, Flex, SimpleGrid } from "@mantine/core";
import { Header } from "@/components/header";
import { IconPlus } from "@tabler/icons-react";
import { CurrentTeamCard } from "@/components/current-team-card";
import { SearchInput } from "@/components/search-input";
import { TeamCard } from "@/components/team-card";
import { useMediaQuery } from "@mantine/hooks";
import { AuthGuard } from "@/components/auth-guard";

export type TeamUserPageProps = {}

export const TeamUserPage: FC<TeamUserPageProps> = memo(() => {
    const is960 = useMediaQuery('(max-width: 960px) and (min-width: 651px)')
    const is650 = useMediaQuery('(max-width: 650px)')

    return <AuthGuard role='organizer'>
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
                onChange={ console.log }
                placeholder="Найти команду"
            />

            {/* Teams list */ }
            <SimpleGrid cols={ is960 ? 2 : is650 ? 1 : 3 } mt='md' spacing="md" mb="xl">
                {
                    new Array(15).fill('').map((_, i) => {
                        return <TeamCard
                            key={ `t-${ i }` }
                            hackathonId={ 123 }
                            id={ 1 }
                            members={ 2 }
                            maxMembers={ 5 }
                            name='Крутая команда'
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