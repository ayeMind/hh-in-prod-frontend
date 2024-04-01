import { FC, memo } from "react";
import { AuthGuard } from "@/components/auth-guard";
import { Header } from "@/components/header";
import { Button, Container, Flex, SimpleGrid } from "@mantine/core";
import { MemberCard } from "@/components/member-card";
import { VacancyCard } from "@/components/vacancy-card";
import { VacancyReplyCard } from "@/components/vacancy-reply-card";

export type TeamDetailPageProps = {}

export const TeamDetailPage: FC<TeamDetailPageProps> = memo(() => {
    return <AuthGuard role='user'>
        <>
            <Header variant='user'/>

            <Container size='md'>
                {/* Head */ }
                <Flex
                    justify='space-between'
                    align={ {base: 'flex-start', md: 'center'} }
                    mb='50'
                    direction={ {base: 'column', md: 'row'} }>
                    <h1>Название команды</h1>

                    <Button variant='transparent' px={0}>Редактировать</Button>
                </Flex>

                {/*  Участники   */ }
                <h3>Участники команды</h3>
                <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md" mt={ 12 } mb={ 36 }>
                    <MemberCard name='Иван Иванов' email='vanya@gmail.com'/>
                    <MemberCard name='Петя Петров' email='petya@gmail.com'/>
                    <Button variant='outline' h="100%" mih='50px'>Добавить</Button>
                </SimpleGrid>

                {/* Вакансии */ }
                <h3>Вакансии</h3>
                <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md" mt={ 12 } mb={ 36 }>
                    <VacancyCard
                        canSendResume={ true }
                        keywords={ ['React', 'Css', 'Next'] }
                        name='Фронтенд разработчик'/>
                    <VacancyCard
                        canSendResume={ false }
                        keywords={ ['Java', 'Spring', 'Go'] }
                        name='Бекенд разработчик'/>
                </SimpleGrid>

                {/* Отклики */ }
                <h3>Отклики на вакансии </h3>
                <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md" mt={ 12 } mb={ 36 }>
                    <VacancyReplyCard name='Иван Иванов' email='vanya@gmail.com'/>
                    <VacancyReplyCard name='Петя Петров' email='petya@gmail.com'/>
                </SimpleGrid>

            </Container>
        </>
    </AuthGuard>
})