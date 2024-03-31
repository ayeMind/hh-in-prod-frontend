import { Button, Container, Flex, Text } from "@mantine/core";
import { HackatonsList } from "@/components/hackatons-list";
import { Header } from "@/components/header";

export const HackatonsOrg = () => {
  return (
    <>
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
        <HackatonsList />
      </Container>
    </>
  );
};
