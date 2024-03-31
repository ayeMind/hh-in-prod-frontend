import { Container, Group, Text, Flex, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./styles.module.css"

const links = [
    { link: '/', label: 'Команды' },
    { link: '/resume', label: 'Мое резюме' },
    { link: '/profile', label: 'Профиль' },
];


export const Header = () => {
    const items = links.map((link) => (
        <Link className={classes["link"]}
          data-active={window.location.pathname === link.link || undefined}
          key={link.label}
          to={link.link}

        >
          <Text hiddenFrom="xs" size="sm">{link.label}</Text>
          <Text visibleFrom="xs">{link.label}</Text>
        </Link>
    ));

  return (
    <header className={classes["header"]}>
        <Container size="md">
          <Flex justify={"space-between"} align={"center"} p="md">
            <Text size="md" fw={"600"}>LOGO</Text>
            <Group gap="md" >
              {items}
            </Group>
          </Flex>
            <Divider w={"100%"} mb="xl" />
        </Container>
    </header>
  );
};

