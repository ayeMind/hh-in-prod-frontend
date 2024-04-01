import {VacancyReplyCard} from "@/components/vacancy-reply-card";
import {SimpleGrid} from "@mantine/core";

export const TeamDetailVacanciesResponses = () => {
    return (
        <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md" mt={ 12 } mb={ 36 }>
            <VacancyReplyCard name='Иван Иванов' email='vanya@gmail.com'/>
            <VacancyReplyCard name='Петя Петров' email='petya@gmail.com'/>
        </SimpleGrid>
    )
}