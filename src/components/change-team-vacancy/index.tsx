import {Flex, Text, Textarea, TextInput, UnstyledButton} from "@mantine/core";
import styles from "@/pages/change-team/change-team.module.css";
import {ITeamVacancy} from "@/models/ITeamVacancy";

export const ChangeTeamVacancy = ({ deleteFunc, data }: {
    deleteFunc: () => void,
    data: ITeamVacancy
}) => {
    return (
        <Flex direction={"column"} gap={"xs"}>
            <TextInput
                label="Название вакансии"
                placeholder="Навзание вакансии"
                value={data.name}
            />
            <Textarea
                label="Ключевые слова"
                placeholder="Ключевые слова (Например: Go, Postgres, Docker)"
                value={data.keywords.join(', ')}
            />
            <UnstyledButton onClick={() => deleteFunc}>
                <Text size="sm" className={styles.delete_btn}>Удалить вакансию</Text>
            </UnstyledButton>
        </Flex>
    )
}