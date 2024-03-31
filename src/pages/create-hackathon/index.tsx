import {Header} from "@/components/header";
import {Autocomplete, Button, Container, FileInput, Flex, Image, NumberInput} from "@mantine/core";
import {TextInput} from "@mantine/core";
import {IconPlus} from "@tabler/icons-react";
import { AuthGuard } from "@/components/auth-guard";

export const CreateHackathon = () => {
    const participants = ['aboba@bk.ru', 'aboba1@bk.ru', 'aboba2@bk.ru', 'aboba3@bk.ru', 'aboba4@bk.ru', 'aboba5@bk.ru']
    return (
        <AuthGuard role='organizer'>
            <Header variant="organizer" />
            <Container size="md">
                <h1>Создание хакатона</h1>
                <Flex direction="column" gap="md">
                    <TextInput
                        label="Название хакатона"
                        placeholder="Введите название хакатона"
                    />
                    <NumberInput
                        label="Мин количество участников в команде"
                        placeholder="Введите мин количество участников в команде"
                    />
                    <NumberInput
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
                            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                            mah={350}
                            w={"100%"}
                            radius="sm"
                        />
                    </Container>
                    <Flex justify={"space-between"} gap={"sm"} align={"flex-end"}>
                        <Autocomplete
                            label={`Участники (Всего: ${participants.length})`}
                            placeholder={"Введите email участника"}
                            w={"100%"}
                            data={participants}
                            limit={5}
                        />
                        <Button>
                            <IconPlus stroke={2} size={20} />
                        </Button>
                    </Flex>
                    <Button w={"fit-content"}>Создать</Button>
                </Flex>
            </Container>
        </AuthGuard>
    )
}