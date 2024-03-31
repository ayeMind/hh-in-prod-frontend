import { Container, Group, Text, Flex, Divider, Burger, Drawer } from "@mantine/core"
import { Link } from "react-router-dom"
import classes from "./styles.module.css"
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

const links = [
    {link: '/hackathon/1/teams', label: 'Команды'},
    {link: '/resume', label: 'Мое резюме'},
    {link: '/profile', label: 'Профиль'},
];


export const Header = () => {
    const isMobile = useMediaQuery('(max-width: 500px)')
    const [opened, {toggle, close}] = useDisclosure();

    const items = links.map((link) => (
        <Link
            className={ classes["link"] }
            data-active={ window.location.pathname === link.link || undefined }
            key={ link.label }
            to={ link.link }>
            { link.label }
        </Link>
    ));

    return (
        <header className={ classes["header"] }>
            <Container size="md">
                <Flex justify={ "space-between" } align={ "center" } py="md">
                    <Text size="md" fw={ "600" }>LOGO</Text>
                    {
                        isMobile
                            ? <Burger
                                onClick={ toggle }
                                opened={ opened }/>
                            : <Group gap="md">
                                { items }
                            </Group>
                    }
                    {
                        isMobile && <Drawer
                            opened={ opened }
                            onClose={ close }
                            size='100%'
                            title={ <Text size="md" fw={ "600" }>LOGO</Text> }>
                            <Flex gap="md" direction={"column"}>
                                { items }
                            </Flex>
                        </Drawer>
                    }
                </Flex>
                <Divider w={ "100%" } mb="xl"/>
            </Container>
        </header>
    );
};
