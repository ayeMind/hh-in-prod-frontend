import {memo, useEffect, useState} from "react";
import { AuthGuard } from "@/components/auth-guard";
import { Header } from "@/components/header";
import {Button, Center, Container, Flex, Loader} from "@mantine/core";
import {TeamDetailParticipants} from "@/components/team-detail-participants";
import {TeamDetailVacancies} from "@/components/team-detail-vacancies";
import {TeamDetailVacanciesResponses} from "@/components/team-detali-vacancies-responses";
import useUser from "@/hooks/use-user";
import {useNavigate, useParams} from "react-router-dom";
import {ITeam} from "@/models/ITeam";
import getTeam from "@/api/get-team";

export const TeamDetailPage = memo(() => {
    const { user } = useUser()
    const params = useParams()
    const [teamDetail, setTeamDetail] = useState<ITeam | null>(null)
    const navigate = useNavigate()
    useEffect(() => {
        const id = parseInt(params.team_id ?? '')
        if (id) {
            getTeam(id).then(setTeamDetail)
        } else {
            navigate('/404')
        }
    }, [])
    if(!teamDetail) {
        return <Center w='100vw' h='100vh'>
            <Loader size="md"/>
        </Center>
    }
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
                    <h1>{teamDetail.name}</h1>

                    <Button variant='transparent' px={ 0 }>Редактировать</Button>
                </Flex>

                {/*  Участники + Popup   */ }
                <h3>Участники команды</h3>
                <TeamDetailParticipants members={teamDetail.members} />

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