import { FC, memo } from "react";
import { Button, Container, Flex, Text } from "@mantine/core";
import { Header } from "@/components/header";
import { IconPlus } from "@tabler/icons-react";
import { CurrentTeamCard } from "@/components/current-team-card";

export type TeamOrgPageProps = {}

export const TeamOrgPage: FC<TeamOrgPageProps> = memo(() => {
    return <>
        <Header/>
        <Container size="md" mt="md">
            {/*  Head */ }
            <Flex justify="space-between" mb='md'>
                <Text size="xl">Команды</Text>
                <Button 
                    variant="outline" 
                    rightSection={ <IconPlus size={14}/> }>
                    Создать команду
                </Button>
            </Flex>
            
            {/*  Current team */}
            <CurrentTeamCard
                id={1}
                name="Крутое название команды"
                members={3}
                maxMembers={5}
            />
        </Container>
    </>
})