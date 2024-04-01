import {VacancyCard} from "@/components/vacancy-card";
import {SimpleGrid} from "@mantine/core";

export const TeamDetailVacancies = () => {
    return (
        <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md" mt={ 12 } mb={ 36 }>
            <VacancyCard
                canSendResume={ true }
                keywords={ ['React', 'Css', 'Next'] }
                name='Фронтенд разработчик'
            />
            <VacancyCard
                canSendResume={ false }
                keywords={ ['Java', 'Spring', 'Go'] }
                name='Бекенд разработчик'
            />
        </SimpleGrid>
    )
}