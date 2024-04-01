import { Header } from "@/components/header";
import { Avatar, Container, Flex, SimpleGrid, Space, Text } from "@mantine/core";
import classes from "./teams-org.module.css";
import { SearchInput } from "@/components/search-input";
import { IconPlus } from "@tabler/icons-react";
import { AuthGuard } from "@/components/auth-guard";

const teams = [{"id": 1, "name": "Крутая команда", "members": [1, 2, 3, 4, 5, 6, 7]}, {"id": 2, "name": "Крутая команда", "members": [2, 5, 8, 1, 4, 6]}, {"id": 3, "name": "Крутая команда", "members": [5, 6, 7]}, {"id": 4, "name": "Крутая команда", "members": [10, 12, 13]}]

export const TeamsOrg = () => {

    const items = teams.map((team, index) => {

        const maxMembersAmount = 8;
        const membersAmount = team.members.length;

        const avatarsItems = Array(maxMembersAmount).fill(0).map((_, index) => (
            (index < membersAmount) ? (
                <Avatar size="md" />
            ) : (
                <Avatar size="md" color="blue">
                    <IconPlus color="#34b1c5" width={15} />
                </Avatar>
            )
        ))
    
        return (
            <div key={index} className={classes["border-container"]}>
                <Flex gap="xs" wrap='wrap'>
                    {avatarsItems}
                </Flex>
                <Text>{team.name}</Text>
            </div>
        )}
    )

  return (
    <AuthGuard role="organizer">
       <Header variant="organizer" />
       <Container>
            <h1>Команды</h1>
            <Space h="md" />
            <SearchInput placeholder="Поиск команд" onChange={()=>{}}/>
            <Space h="md" />
            <SimpleGrid cols={{ base: 1, xs: 2, sm: 3 }} >
                {items}
            </SimpleGrid>
            
       </Container>
    </AuthGuard>
  );
};
