import { memo, useEffect, useState } from "react";
import { AuthGuard } from "@/components/auth-guard";
import { Header } from "@/components/header";
import { Button, Center, Container, Flex, Loader } from "@mantine/core";
import { TeamDetailParticipants } from "@/components/team-detail-participants";
import { TeamDetailVacancies } from "@/components/team-detail-vacancies";
import { TeamDetailVacanciesResponses } from "@/components/team-detali-vacancies-responses";
import useUser from "@/hooks/use-user";
import { useNavigate, useParams } from "react-router-dom";
import { ITeam } from "@/models/ITeam";
import getTeam from "@/api/get-team";
import fetchTeamVacancies from "@/api/fetch-team-vacancies";
import fetchMyTeam from "@/api/fetch-my-team";
import { ITeamVacancy } from "@/models/ITeamVacancy";
import { IVacancyResponse } from "@/models/IVacancyResponse";
import getTeamVacanciesResponses from "@/api/get-team-vacancies-responses";

export const TeamDetailPage = memo(() => {
    const {user} = useUser()
    const params = useParams()
    const [teamDetail, setTeamDetail] = useState<ITeam | null>(null)
    const [hackathonId, setHackathonId] = useState<number>(0)
    const [listVacancies, setListVacancies] = useState<ITeamVacancy[]>([])
    const [myTeam, setMyTeam] = useState<ITeam | null>(null)
    const [vacancyResponses, setVacanciesResponses] = useState<IVacancyResponse[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        const team_id = parseInt(params.team_id ?? '')
        const hackathon_id = parseInt(params.hackathon_id ?? '')
        fetchTeamVacancies(team_id).then(setListVacancies)
        fetchMyTeam(hackathon_id).then(setMyTeam)
        if (team_id && hackathon_id) {
            setHackathonId(hackathon_id)
            getTeam(team_id).then(setTeamDetail)
            getTeamVacanciesResponses(team_id).then(res => {
                setVacanciesResponses(res)
                console.log(res)
            })
        } else {
            navigate('/404')
        }
    }, [])

    if (!teamDetail) {
        return <Center w='100vw' h='100vh'>
            <Loader size="md"/>
        </Center>
    }
    return <AuthGuard role='any'>
        <>
            <Header variant={ user?.role ? user?.role : 'default' }/>

            <Container size='md'>
                {/* Head */ }
                <Flex
                    justify='space-between'
                    align={ {base: 'flex-start', sm: 'center'} }
                    mb='50'
                    direction={ {base: 'column', sm: 'row'} }>
                    <h1>{ teamDetail.name }</h1>

                    {
                        user && user.id == teamDetail.creator
                            ? <Button
                                onClick={() => navigate(`/hackathon/${params.hackathon_id}/teams/${teamDetail!.id}/change`)}
                                variant='transparent'
                                px={ 0 }>
                                Редактировать
                            </Button>
                            : <div/>
                    }
                </Flex>

                {/*  Участники + Popup   */ }
                <h3>Участники команды</h3>
                <TeamDetailParticipants team_id={ teamDetail.id } creator={ teamDetail.creator }
                                        members={ teamDetail.members } hackathon_id={hackathonId} />

                {/* Вакансии */ }
                <h3>Вакансии</h3>
                <TeamDetailVacancies listVacancies={ listVacancies } myTeam={ myTeam }/>

                {/* Отклики */ }
                <h3>Отклики на вакансии </h3>
                <TeamDetailVacanciesResponses
                    vacancy_responses={ vacancyResponses }
                    hackathon_id={ hackathonId }
                    callbackOnDelete={(res_id: number) => setVacanciesResponses(vacancyResponses.filter(res => res.id != res_id))}
                    callbackOnAccept={(res_id: number) => {
                        setVacanciesResponses(vacancyResponses.filter(res => res.id != res_id))
                        if(myTeam?.id) getTeam(myTeam.id).then(setTeamDetail)
                        window.location.reload()
                    }}
                />

            </Container>
        </>
    </AuthGuard>
})