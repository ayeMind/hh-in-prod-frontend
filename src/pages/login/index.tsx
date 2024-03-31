import {Anchor, Button, Center, Flex, PasswordInput, Text, TextInput} from "@mantine/core";
import {IconAt} from "@tabler/icons-react";
import {Link} from "react-router-dom";

export const Login = () => {
    return (
        <Flex component={Center} h={"100vh"} direction={"column"}>
            <Text size={"xl"} mb={"sm"}>Вход</Text>
            <Flex w={"300px"} direction={"column"} gap={"xs"}>
                <TextInput
                    size="md"
                    placeholder={"Email"}
                    rightSection={<IconAt stroke={2} size={16} />}
                />
                <PasswordInput
                    size="md"
                    placeholder={"Пароль"}
                />
                <Button size="md">Войти в аккаунт</Button>
            </Flex>

            <Link to={"/sign-up/user"}>
                <Anchor size={"xs"}>
                    Нет аккаунта? Создать
                </Anchor>
            </Link>
        </Flex>
    )
}