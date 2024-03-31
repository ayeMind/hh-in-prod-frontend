import {Button, Center, Flex, TextInput, Text, Anchor} from "@mantine/core";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IconBrandGithub, IconChevronLeft} from "@tabler/icons-react";
import { AuthGuard } from "@/components/auth-guard";

export const ImportGithub = () => {
    const params = useParams()
    const [hackathonId, setHackathonId] = useState<string>();
    useEffect(() => {
        setHackathonId(params.id)
    }, [])
    const navigate = useNavigate()
    return (
        <AuthGuard role='user'>
            <Flex component={Center} h={"100vh"} direction={"column"} gap={"xs"}>
                <Text size={"xl"}>Импорт резюме из Github</Text>
                <Flex direction={"column"} w={"300px"} gap={"xs"}>
                    <TextInput
                        size={"md"}
                        placeholder={"Ссылка на ваш github"}
                        leftSection={<IconBrandGithub stroke={2} size={20} />}
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
        </AuthGuard>
    )
}