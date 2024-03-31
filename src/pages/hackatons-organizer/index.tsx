import { Container, Text } from "@mantine/core";
import { HackatonsList } from "@/components/hackatons-list";
import { Header } from "@/components/header";

export const HackatonsOrganizer = () => {
  return (
    <>
       <Header />
       <Container>
        <Text size="xl" mb="md">Ваши хакатоны</Text>
        <HackatonsList />
       </Container>
    </>
  );
};
