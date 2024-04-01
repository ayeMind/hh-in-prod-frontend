import { Button, Center, Flex, Text } from "@mantine/core";
import styles from './join-team.module.css';
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import parseJwt from "@/utils/parse-jwt.ts";
import { AuthGuard } from "@/components/auth-guard";
import joinTeamById from "@/api/join-team-by-id";
import getTeam from "@/api/get-team";
import { ITeam } from "@/models/ITeam";

export const JoinTeam = () => {
    const [searchParams] = useSearchParams();
    const [team, setTeam] = useState<ITeam | null>()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        const id = parseInt(parseJwt(searchParams.get("team_id") as string, 'id') ?? '')
        
        if (!id) {
            navigate('/')
        } else {
            getTeam(id)
                .then(data => {
                    setTeam(data);
                    setLoading(false);
                })
        }
    }, [])

    const onClick = async () => {
        if (loading || !team) return
        setLoading(true)

        const success = await joinTeamById(team.id)
        if (success) {
            navigate("/")
        } else {
            console.error('error')
        }
    }

    if (!team) {
        return <AuthGuard role='user'/>
    }


    return (
        <AuthGuard role='user'>
            <Flex component={ Center } h={ "100vh" } direction={ "column" }>
                <Text fw="500" size={ "xl" } mb={ "sm" } className={ styles.title }>
                    Привет!
                    <br/>
                    Тебя пригласили в команду «{ team.name }»
                </Text>
                <Button
                    loading={ loading }
                    onClick={ onClick }>
                    Принять приглашение
                </Button>
            </Flex>
        </AuthGuard>
    )
}