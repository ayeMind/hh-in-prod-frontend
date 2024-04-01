import {Header} from "@/components/header";
import {Autocomplete, Button, Container, FileInput, Flex, Image, NumberInput, TextInput} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";
import {Link, useParams} from "react-router-dom";
import styles from './change-hackathon.module.css'
import {useEffect, useState} from "react";
import fetchHackathonById from "@/api/fetch-hackathon-by-id";
import { IHackathon } from "@/models/IHackathon";

export const ChangeHackathon = () => {
    const params = useParams();
    const [hackathonId, setHackathonId] = useState<string>();
    const [hackathon, setHackathon] = useState<IHackathon>();

    useEffect(() => {
        setHackathonId(params.hackathon_id as string)

        fetchHackathonById(parseInt(params.hackathon_id as string)).then(data => {
            if (!data) return null;
            setHackathon(data)
            console.log(data);
        })

    }, [])

    return (
        <>
            <Header variant="organizer" />
            <Container size="md" pb={"100px"}>
                <h1>Изменение хакатона</h1>
                <Flex direction="column" gap="md">
                    <TextInput
                        defaultValue={hackathon?.name}
                        label="Название хакатона"
                        placeholder="Введите название хакатона"
                    />
                    <NumberInput
                        value={hackathon?.minParticipants}
                        disabled
                        label="Мин количество участников в команде"
                        placeholder="Введите мин количество участников в команде"
                    />
                    <NumberInput
                        value={hackathon?.maxParticipants}
                        disabled
                        label="Макс количество участников в команде"
                        placeholder="Введите макс количество участников в команде"
                    />
                    <Container p={"0"} w={"100%"}>
                        <FileInput
                            w={"100%"}
                            accept="image/png,image/jpeg"
                            label="Превью хакатона"
                            placeholder="Загрузите картинку"
                            clearable
                        />
                        <Image
                            mt={"xs"}
                            src={hackathon?.imageCover ? `${import.meta.env.VITE_BACKEND_URL}${hackathon.imageCover}` : '/img-placehoder.jpg'}
                            mah={350}
                            w={"100%"}
                            radius="sm"
                        />
                    </Container>
                    <Flex justify={"space-between"} gap={"xs"} align={"flex-end"}>
                        <Autocomplete
                            label={`Участники (Всего: ${hackathon?.participants.length})`}
                            placeholder={"Введите email участника"}
                            w={"100%"}
                            data={hackathon?.participants.map(member => member.email)}
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