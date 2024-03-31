import {Button, Center, Flex, TextInput, Text} from "@mantine/core";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IconChevronLeft} from "@tabler/icons-react";
import {Anchor} from "@mantine/core";

export const ImportHh = () => {
    const params = useParams()
    const [hackathonId, setHackathonId] = useState<string>();
    useEffect(() => {
        setHackathonId(params.id)
    }, [])
    const navigate = useNavigate()
    return (
        <Flex component={Center} h={"100vh"} direction={"column"} gap={"xs"}>
            <Text size={"xl"}>Импорт резюме из hh.ru</Text>
            <Flex direction={"column"} w={"300px"} gap={"xs"}>
                <TextInput
                    size={"md"}
                    placeholder={"Ссылка на ваш hh.ru"}
                />
                <Button onClick={() => navigate(`/hackathon/${hackathonId}/resume`)}>Анализировать</Button>
            </Flex>
            <Anchor component={Link} to={`/hackathon/${hackathonId}/create-resume/`}>
                <Flex align={"center"} gap={"5px"}>
                    <IconChevronLeft stroke={2} size={18} />
                    <Text>Вернуться к выбору</Text>
                </Flex>
            </Anchor>
        </Flex>
    )
}