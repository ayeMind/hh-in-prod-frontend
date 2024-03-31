import { Container, Group, Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import classes from "./styles.module.css"

const links = [
    { link: '/teams', label: 'Команды' },
    { link: '/resume', label: 'Мое резюме' },
    { link: '/profile', label: 'Профиль' },
];

export const Header = () => {

    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
          data-active={active === link.link || undefined}
          onClick={(event) => {
            event.preventDefault();
            setActive(link.link);
          }}
        >
          {link.label}
        </a>
      ));
    

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Text>LOGO</Text>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};

