import {Container, Group, Burger, Text, Flex} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import {Link} from "react-router-dom";

const links = [
    { link: '/teams', label: 'Команды' },
    { link: '/resume', label: 'Мое резюме' },
    { link: '/profile', label: 'Профиль' },
];

export const Header = () => {

    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <Link
          key={link.label}
          to={link.link}
          data-active={active === link.link || undefined}
          onClick={(event) => {
            event.preventDefault();
            setActive(link.link);
          }}
        >
          {link.label}
        </Link>
    ));


  return (
    <header>
      <Flex component={Container} size="md" justify={"space-between"} align={"center"}>
        <Text>LOGO</Text>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Flex>
    </header>
  );
};

