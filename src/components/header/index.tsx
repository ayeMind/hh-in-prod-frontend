import {Container, Group, Text, Flex, Button, Divider} from "@mantine/core";
import {Link} from "react-router-dom";

const links = [
    { link: '/teams', label: 'Команды' },
    { link: '/resume', label: 'Мое резюме' },
    { link: '/profile', label: 'Профиль' },
];

export const Header = () => {
    const items = links.map((link) => (
        <Link
          key={link.label}
          to={link.link}
        >
            <Button size={"xs"} fw={"500"}>
                {link.label}
            </Button>
        </Link>
    ));

  return (
    <header>
        <Container size="md">
          <Flex justify={"space-between"} align={"center"} p="md">
            <Text size="md" fw={"600"}>LOGO</Text>
            <Group gap="md" >
              {items}
            </Group>
          </Flex>
            <Divider w={"100%"} />
        </Container>
    </header>
  );
};

