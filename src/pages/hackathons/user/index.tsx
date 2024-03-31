import { Container, Text } from "@mantine/core";
import { HackathonsList } from "@/components/hackathons-list";
import { Header } from "@/components/header";

export const HackathonsUser = () => {
  return (
    <>
      <Header />
      <Container>
        <Text size="xl" mb="md">
          Ваши хакатоны
        </Text>
        <HackathonsList />
      </Container>
    </>
  );
};
