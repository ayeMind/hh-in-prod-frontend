import {Header} from "@/components/header";
import {Autocomplete, Button, Container, FileInput, Flex, Image, NumberInput, TextInput} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";
import {Link, useParams} from "react-router-dom";
import styles from './change-hackathon.module.css'
import {useEffect, useState} from "react";

export const ChangeHackathon = () => {
    const params = useParams();
    const [hackathonId, setHackathonId] = useState<string>("1")
    useEffect(() => {
        setHackathonId(params.hackathon_id as string)
    }, [])
    const participants = ['aboba@bk.ru', 'aboba1@bk.ru', 'aboba2@bk.ru', 'aboba3@bk.ru', 'aboba4@bk.ru', 'aboba5@bk.ru']
    return (
        <>
            <Header variant="organizer" />
            <Container size="md" pb={"100px"}>
                <h1>Изменение хакатона</h1>
                <Flex direction="column" gap="md">
                    <TextInput
                        label="Название хакатона"
                        placeholder="Введите название хакатона"
                    />
                    <NumberInput
                        disabled
                        label="Мин количество участников в команде"
                        placeholder="Введите мин количество участников в команде"
                    />
                    <NumberInput
                        disabled
                        label="Макс количество участников в команде"
                        placeholder="Введите макс количество участников в команде"
                    />
                    <Container p={"0"} w={"100%"}>
                        <FileInput
                            w={"100%"}
                            accept="image/png,image/jpeg"
                            label="Превью хакатона"
                            placeholder="Введите загрузите картинку"
                            clearable
                        />
                        <Image
                            mt={"xs"}
                            src="../img-placeholder.jpg"
                            mah={350}
                            w={"100%"}
                            radius="sm"
                        />
                    </Container>
                    <Flex justify={"space-between"} gap={"xs"} align={"flex-end"}>
                        <Autocomplete
                            label={`Участники (Всего: ${participants.length})`}
                            placeholder={"Введите email участника"}
                            w={"100%"}
                            data={participants}
                            limit={5}
                        />
                        <Button size={"sm"}>
                            <IconPlus stroke={2} size={20} />
                        </Button>
                    </Flex>
                    <Button w={"fit-content"}>Сохранить</Button>
                    <Link to={`/hackathon/org/${hackathonId}/teams`} className={styles.link}>Смотреть команды</Link>
                </Flex>
            </Container>
        </>
    )
}