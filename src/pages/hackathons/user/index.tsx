import { Container, Text } from "@mantine/core";
import { HackathonsList } from "@/components/hackathons-list";
import { Header } from "@/components/header";
import { AuthGuard } from "@/components/auth-guard";

export const HackathonsUser = () => {
    return (
        <AuthGuard role='user'>
            <Header variant='default'/>
            <Container>
                <Text size="xl" mb="md">
                    Ваши хакатоны
                </Text>
                <HackathonsList/>
            </Container>
        </AuthGuard>
    );
};
