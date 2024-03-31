import {Container, Group, Text, Flex} from "@mantine/core";
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
          {link.label}
        </Link>
    ));


  return (
    <header>
      <Flex component={Container} size="md" justify={"space-between"} align={"center"} p="md">
        <Text size="md">LOGO</Text>
        <Group gap="md" >
          {items}
        </Group>

      </Flex>
    </header>
  );
};

