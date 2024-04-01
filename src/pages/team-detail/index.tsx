import { FC, memo } from "react";
import { AuthGuard } from "@/components/auth-guard";
import { Header } from "@/components/header";
import { Button, Container, Flex } from "@mantine/core";
import {TeamDetailParticipants} from "@/components/team-detail-participants";
import {TeamDetailVacancies} from "@/components/team-detail-vacancies";
import {TeamDetailVacanciesResponses} from "@/components/team-detali-vacancies-responses";
import useUser from "@/hooks/use-user";

export type TeamDetailPageProps = {}

export const TeamDetailPage: FC<TeamDetailPageProps> = memo(() => {
    const { user } = useUser()
    return <AuthGuard role='any'>
        <>
            <Header variant={user?.role ? user?.role : 'default'}/>

            <Container size='md'>
                {/* Head */ }
                <Flex
                    justify='space-between'
                    align={ {base: 'flex-start', sm: 'center'} }
                    mb='50'
                    direction={ {base: 'column', sm: 'row'} }>
                    <h1>Название команды</h1>

                    <Button variant='transparent' px={ 0 }>Редактировать</Button>
                </Flex>

                {/*  Участники + Popup   */ }
                <h3>Участники команды</h3>
                <TeamDetailParticipants />

                {/* Вакансии */ }
                <h3>Вакансии</h3>
                <TeamDetailVacancies />

                {/* Отклики */ }
                <h3>Отклики на вакансии </h3>
                <TeamDetailVacanciesResponses />

            </Container>
        </>
    </AuthGuard>
})