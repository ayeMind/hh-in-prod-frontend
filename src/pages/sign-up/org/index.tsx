import {Anchor, Button, Center, Flex, PasswordInput, Text, TextInput} from "@mantine/core";
import {IconAt} from "@tabler/icons-react";
import {Link} from "react-router-dom";

export const SignUpOrg = () => {
    return (
        <Flex component={Center} h={"100vh"} direction={"column"}>
            <Text size={"xl"} mb={"sm"}>Регистрация</Text>
            <Flex w={"250px"} direction={"column"} gap={"xs"}>
                <TextInput
                    placeholder={"Название организации"}
                />
                <TextInput
                    placeholder={"Email"}
                    rightSection={<IconAt stroke={2} size={16} />}
                />
                <PasswordInput
                    placeholder={"Пароль"}
                />
                <PasswordInput
                    placeholder={"Подтвердите пароль"}
                />
                <Button>Создать аккаунт</Button>
            </Flex>

            <Link
                to={"/sign-up/user"}
            >
                <Anchor size={"xs"}>
                        Зарегистрироваться как участник
                </Anchor>
            </Link>
        </Flex>
    )
}