import {Anchor, Button, Center, Flex, PasswordInput, TextInput} from "@mantine/core";
import {IconAt} from "@tabler/icons-react";
import {Link} from "react-router-dom";

export const Login = () => {
    return (
        <Flex component={Center} h={"100vh"} direction={"column"}>
            <h1>Вход</h1>
            <Flex w={"300px"} direction={"column"} gap={"xs"} mt='sm'>
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