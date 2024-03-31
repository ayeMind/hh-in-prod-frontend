import {Button, Center, Flex, Text } from "@mantine/core";
import styles from './join-hackathon.module.css';
import {jwtDecode} from "jwt-decode";
import {useSearchParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

export const JoinHackathon = () => {
    const hackathons: {[key: string]: string} = {
        "45": "Хакатон Prod",
    }
    const [searchParams] = useSearchParams();
    const [hackathonId, setHackathonId] = useState<string>()
    const navigate = useNavigate();
    useEffect(() => {
        try {
            console.log(jwtDecode(searchParams.get("hackathon_id") as string))
            setHackathonId(
                (jwtDecode(searchParams.get("hackathon_id") as string) as any).id
            )
        } catch (err) { navigate("/404") }
    }, [])
    return (
        <Flex component={Center} h={"100vh"} direction={"column"}>
            <Text fw="500" size={"xl"} mb={"sm"} className={styles.title}>
                Привет!
                <br/>
                Тебя пригласили на «{hackathonId && hackathons[hackathonId] ? hackathons[hackathonId] : "Хакатон"}»
            </Text>
            <Button onClick={() => navigate(`/${hackathonId}/create-resume`)}>Принять приглашение</Button>
        </Flex>
    )
}