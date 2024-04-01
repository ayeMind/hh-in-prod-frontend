import {Header} from "@/components/header";
import {Container, Flex, TextInput, Text, UnstyledButton, Button} from "@mantine/core";
import styles from './change-team.module.css'
import {ITeamVacancy} from "@/models/ITeamVacancy";
import {ChangeTeamVacancy} from "@/components/change-team-vacancy";

export const ChangeTeam = () => {
    const vacancies = [
        {
            id: 1,
            name: 'Фронтендер',
            keywords: ['React', 'Docker', 'TS'],
            userId: null,
        },
        {
            id: 2,
            name: 'Бэкэндер',
            keywords: ['Docker', 'Rest API', 'Python'],
            userId: null,
        },
    ] as ITeamVacancy[]

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
                        { vacancies.map((vacancy: ITeamVacancy) => {
                            return <ChangeTeamVacancy data={vacancy} deleteFunc={() => {}} />
                        })}
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