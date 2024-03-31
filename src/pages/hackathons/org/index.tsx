import { Button, Container, Flex, Text } from "@mantine/core";
import { HackathonsList } from "@/components/hackathons-list";
import { Header } from "@/components/header";
import { AuthGuard } from "@/components/auth-guard";

export const HackathonsOrg = () => {
  return (
    <AuthGuard>
      <Header />
      <Container>
        <Flex justify="space-between">
          <Text size="xl" mb="md">
            Ваши хакатоны
          </Text>
          <Button>
            <Text>+</Text>
          </Button>
        </Flex>
        <HackathonsList />
      </Container>
    </AuthGuard>
  );
};
