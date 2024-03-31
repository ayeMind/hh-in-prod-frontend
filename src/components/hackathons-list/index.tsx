import { Card, SimpleGrid, Image, Group, Text } from "@mantine/core";
import classes from "./hackathons-list.module.css"

const cards = [{"id": 0, "title": "Prod", "image": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", "description": "Some description"},
{"id": 1, "title": "Prod", "image": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", "description": "Some description"},
{"id": 2, "title": "Prod", "image": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", "description": "Some description"},
{"id": 3, "title": "Prod", "image": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", "description": "Some description"},
{"id": 4, "title": "Prod", "image": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", "description": "Some description"},
{"id": 5, "title": "Prod", "image": "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png", "description": "Some description"}]

export const HackathonsList = () => {

    const items = cards.map(card => (
        <Card key={card.id} className={classes["card"]} role="button" shadow="sm" padding="lg" radius="md" w={"auto"} withBorder>
        <Card.Section>
          <Image
            src={card.image}
            height={160}            
          />
        </Card.Section>
  
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Adventures</Text>
        </Group>
  
        <Text size="sm" c="dimmed">
            {card.description}
        </Text>
      </Card>
    ))

  return (
    <SimpleGrid cols={{ base: 1, xs: 2, sm: 3 }} spacing="md" >
       {items}
    </SimpleGrid>
  );
};

