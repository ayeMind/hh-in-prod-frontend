import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button, Center, FileInput, Flex, Text} from "@mantine/core";
import {IconChevronLeft, IconFileTypePdf} from "@tabler/icons-react";
import {Anchor} from "@mantine/core";
import { AuthGuard } from "@/components/auth-guard";

export const ImportPdf = () => {
    const params = useParams()
    const [hackathonId, setHackathonId] = useState<string>();
    useEffect(() => {
        setHackathonId(params.id)
    }, [])
    const navigate = useNavigate()
    return (
        <AuthGuard role='user'>
            <Flex component={Center} h={"100vh"} direction={"column"} gap={"xs"}>
                <Text size={"xl"}>Импорт из резюме pdf</Text>
                <Flex direction={"column"} w={"300px"} gap={"xs"}>
                    <FileInput
                        accept="application/pdf"
                        clearable
                        placeholder="Загрузите pdf резюме"
                        leftSection={<IconFileTypePdf stroke={2} size={20} />}
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