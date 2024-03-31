import {Header} from "@/components/header";
import {Button, Container, Flex, NumberInput, TextInput} from "@mantine/core";
import { AuthGuard } from "@/components/auth-guard";

export const Profile = () => {
    const user_type = "user";
    return (
        <AuthGuard role='user'>
            <Header variant={user_type} />
            <Container size={"md"}>
                <h1>Ваш профиль</h1>
                <Flex direction="column" gap={"md"}>
                    <TextInput
                        label="Имя"
                        placeholder="Имя"
                    />
                    <TextInput
                        label="Email"
                        placeholder="Email"
                        disabled
                    />
                    <NumberInput
                        label="Возраст"
                        placeholder="Возраст"
                    />
                    <TextInput
                        label="Город"
                        placeholder="Город"
                    />
                    <NumberInput
                        label="Стаж работы"
                        placeholder="Стаж работы"
                    />
                    <Button w={"fit-content"}>Сохранить</Button>
                </Flex>
            </Container>
        </AuthGuard>
    )
}