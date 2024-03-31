import {Button, Center, Flex, Text} from "@mantine/core";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import styles from './create-resume.module.css'

export const CreateResume = () => {
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
            <Text size={"xl"} mb="md" className={styles.title}>
                Создание резюме<br/>для «{hackathonName ? hackathonName : "Хакатон"}»
            </Text>
            <Flex direction={"column"} gap={"sm"}>
                <Button>Создать с нуля</Button>
                <Button>Импорт из Github</Button>
                <Button>Импорт из резюме pdf</Button>
                <Button>Импорт из hh.ru</Button>
            </Flex>
        </Flex>
    )
}