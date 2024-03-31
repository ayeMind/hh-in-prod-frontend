import { Button, Container, Flex, Text } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom"
import { HackathonsList } from "@/components/hackathons-list";
import { Header } from "@/components/header";
import { AuthGuard } from "@/components/auth-guard";

export const HackathonsOrg = () => {

  const navigate = useNavigate();

  return (
    <AuthGuard role='organizer'>
      <Header variant='default' />
      <Container>
        <Flex justify="space-between">
          <Text size="xl" mb="md">
            Ваши хакатоны
          </Text>
          <Button onClick={() => navigate("/create-hackathon")}>
            <IconPlus />
          </Button>
        </Flex>
        <HackathonsList />
      </Container>
    </AuthGuard>
  );
};
