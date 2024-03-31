import {Button, Center, Flex, Text} from "@mantine/core";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import styles from './create-resume.module.css'

export const CreateResume = () => {
    const hackathons: {[key: string]: string} = {
        "45": "Хакатон Prod",
    }
    const params = useParams()
    const [hackathonId, setHackathonId] = useState<string>();
    useEffect(() => {
        setHackathonId(params.id)
    }, [])
    return (
        <Flex component={Center} h={"100vh"} direction={"column"}>
            <Text size={"xl"} mb="md" className={styles.title}>
                Создание резюме
                <br/>
                для «{hackathonId && hackathons[hackathonId] ? hackathons[hackathonId] : "Хакатон"}»
            </Text>
            <Flex direction={"column"} gap={"sm"}>
                <Button>
                    <Link to={`/hackathon/${hackathonId}/create-resume/custom`}>
                        Создать с нуля
                    </Link>
                </Button>
                <Button>
                    <Link to={`/hackathon/${hackathonId}/create-resume/github`}>
                        Импорт из Github
                    </Link>
                </Button>
                <Button>
                    <Link to={`/hackathon/${hackathonId}/create-resume/pdf`}>
                        Импорт из резюме pdf
                    </Link>
                </Button>
                <Button>
                    <Link to={`/hackathon/${hackathonId}/create-resume/hh`}>
                        Импорт из hh.ru
                    </Link>
                </Button>
            </Flex>
        </Flex>
    )
}