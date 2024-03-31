import {Header} from "@/components/header";
import {Container, Flex, TextInput, Text, Textarea, UnstyledButton, Button} from "@mantine/core";
import styles from './change-team.module.css'

export const ChangeTeam = () => {
    return (
        <>
            <Header variant={"user"} />
            <Container size={"md"} pb={"100px"}>
                <h1>Изменение команды</h1>
                <Flex direction={"column"} gap={"xl"}>
                    <TextInput
                        label="Название команды"
                        placeholder="Навзание команды"
                    />
                    <Flex direction={"column"} gap={"md"}>
                        <Text fw={600} mb={"0"}>Вакансии</Text>
                        <Flex direction={"column"} gap={"xs"}>
                            <TextInput
                                label="Название вакансии"
                                placeholder="Навзание вакансии"
                            />
                            <Textarea
                                label="Ключевые слова"
                                placeholder="Ключевые слова (Например: Go, Postgres, Docker)"
                            />
                            <UnstyledButton>
                                <Text size="sm" className={styles.delete_btn}>Удалить вакансию</Text>
                            </UnstyledButton>
                        </Flex>
                        <Flex direction={"column"} gap={"xs"}>
                            <TextInput
                                label="Название вакансии"
                                placeholder="Навзание вакансии"
                            />
                            <Textarea
                                label="Ключевые слова"
                                placeholder="Ключевые слова (Например: Go, Postgres, Docker)"
                            />
                            <UnstyledButton>
                                <Text size="sm" className={styles.delete_btn}>Удалить вакансию</Text>
                            </UnstyledButton>
                        </Flex>
                    </Flex>
                    <UnstyledButton>
                        <Text size="sm" className={styles.add_btn}>Создать вакансию</Text>
                    </UnstyledButton>
                    <Button w={"fit-content"}>Сохранить</Button>
                </Flex>
            </Container>
        </>
    )
}