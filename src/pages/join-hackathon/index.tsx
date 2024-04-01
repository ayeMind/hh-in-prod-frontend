import { Button, Center, Flex, Text } from "@mantine/core";
import styles from './join-hackathon.module.css';
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import parseJwt from "@/utils/parse-jwt.ts";
import { AuthGuard } from "@/components/auth-guard";
import joinHackathon from "@/api/join-hackathon.ts";
import { IHackathon } from "@/models/IHackathon.ts";
import fetchHackathonById from "@/api/fetch-hackathon-by-id.ts";

export const JoinHackathon = () => {
    const [searchParams] = useSearchParams();
    const [hackathon, setHackathon] = useState<IHackathon | null>()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        const id = parseInt(parseJwt(searchParams.get("hackathon_id") as string, 'id') ?? '')
        
        if (!id) {
            navigate('/')
        } else {
            fetchHackathonById(id)
                .then(data => {
                    setHackathon(data);
                    setLoading(false);
                })
        }
    }, [])

    const onClick = async () => {
        if (loading || !hackathon) return
        setLoading(true)

        const success = await joinHackathon(hackathon.id)
        if (success) {
            navigate(`/hackathon/${ hackathon.id }/create-resume`)
        } else {
            console.error('error')
        }
    }

    if (!hackathon) {
        return <AuthGuard role='user'/>
    }


    return (
        <AuthGuard role='user'>
            <Flex component={ Center } h={ "100vh" } direction={ "column" }>
                <Text fw="500" size={ "xl" } mb={ "sm" } className={ styles.title }>
                    Привет!
                    <br/>
                    Тебя пригласили на «{ hackathon.name }»
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