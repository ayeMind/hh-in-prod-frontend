import {Button, Center, Flex, Text } from "@mantine/core";
import styles from './join-hackathon.module.css';
import {jwtDecode} from "jwt-decode";
import {useSearchParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


export const JoinHackathon = () => {
    const [searchParams] = useSearchParams();
    const [hackathonName, setHackathonName] = useState<string>();
    const navigate = useNavigate();
    useEffect(() => {
        try {
            setHackathonName(
                (jwtDecode(searchParams.get("hackathon_name") as string) as any).name
            )
        } catch (err) { navigate("/404") }
    }, [])
    return (
        <Flex component={Center} h={"100vh"} direction={"column"}>
            <Text fw="500" size={"xl"} mb={"sm"} className={styles.title}>
                Привет!
                <br/>
                Тебя пригласили на «{hackathonName ? hackathonName : "Хакатон"}»
            </Text>
            <Button>Принять приглашение</Button>
        </Flex>
    )
}