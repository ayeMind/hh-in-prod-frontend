import { Button, Container, Flex, Text } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react"
import { HackathonsList } from "@/components/hackathons-list";
import { Header } from "@/components/header";

export const HackathonsOrg = () => {
  return (
    <>
      <Header variant="default" />
      <Container>
        <Flex justify="space-between">
          <Text size="xl" mb="md">
            Ваши хакатоны
          </Text>
          <Button>
            <IconPlus stroke={2} size={20} />
          </Button>
        </Flex>
        <HackathonsList />
      </Container>
    </>
  );
};
