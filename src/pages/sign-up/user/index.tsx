import {Anchor, Button, Center, Flex, PasswordInput, Text, TextInput} from "@mantine/core";
import {IconAt} from "@tabler/icons-react";
import {Link} from "react-router-dom";

export const SignUpUser = () => {
    return (
        <Flex component={Center} h={"100vh"} direction={"column"}>
            <Text size={"xl"} mb={"sm"}>Регистрация участника</Text>
            <Flex w={"300px"} direction={"column"} gap={"xs"}>
                <TextInput
                    size='md'
                    placeholder={"Имя"}
                />
                <TextInput
                    size='md'
                    placeholder={"Email"}
                    rightSection={<IconAt stroke={2} size={16} />}
                />
                <PasswordInput
                    size='md'
                    placeholder={"Пароль"}
                />
                <PasswordInput
                    size='md'
                    placeholder={"Подтвердите пароль"}
                />
                <Button size="md">Создать аккаунт</Button>
            </Flex>
            <Link to={"/sign-up/org"}>
                <Anchor size={"xs"} mt={8}>
                        Зарегистрироваться как организация
                </Anchor>
            </Link>
            <Link to={"/login"}>
                <Anchor size={"xs"} mt={8}  >
                    Есть аккаунт? Войти
                </Anchor>
            </Link>
        </Flex>
    )
}