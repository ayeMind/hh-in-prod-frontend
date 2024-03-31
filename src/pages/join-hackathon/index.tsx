import { Button, Center, Flex, Text } from "@mantine/core";
import styles from './join-hackathon.module.css';
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import parseJwt from "@/utils/parse-jwt.ts";
import { AuthGuard } from "@/components/auth-guard";

export const JoinHackathon = () => {
    const hackathons: { [key: string]: string } = {
        "45": "Хакатон Prod",
    }
    const [searchParams] = useSearchParams();
    const [hackathonId, setHackathonId] = useState<string>()
    const navigate = useNavigate();
    useEffect(() => {
        const id = parseJwt(searchParams.get("hackathon_id") as string, 'id')
        if (id) {
            setHackathonId(id)
        } else {
            navigate("/404")
        }
    }, [])
    return (
        <AuthGuard>
            <Flex component={ Center } h={ "100vh" } direction={ "column" }>
                <Text fw="500" size={ "xl" } mb={ "sm" } className={ styles.title }>
                    Привет!
                    <br/>
                    Тебя пригласили на «{ hackathonId && hackathons[hackathonId] ? hackathons[hackathonId] : "Хакатон" }»
                </Text>
                <Button onClick={ () => navigate(`/hackathon/${ hackathonId }/create-resume`) }>Принять
                    приглашение</Button>
            </Flex>
        </AuthGuard>
    )
}