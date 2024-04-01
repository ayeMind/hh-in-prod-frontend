import { Header } from "@/components/header";
import { SearchInput } from "@/components/search-input";
import { Avatar, Badge, Button, Container, Flex, SimpleGrid, Space, Text } from "@mantine/core";
import classes from "./suitable-candidates.module.css"
import { AuthGuard } from "@/components/auth-guard";

const members = [
  {name: "Иван Иванов", description: "Очень крутой человек", techSkills: ["React", "Angular", "WASM"]},
  {name: "Иван Иванов", description: "Очень крутой человек", techSkills: ["React", "Angular", "WASM"]},
  {name: "Иван Иванов", description: "Очень крутой человек", techSkills: ["React", "Angular", "WASM"]},
  {name: "Иван Иванов", description: "Очень крутой человек", techSkills: ["React", "Angular", "WASM"]},
  {name: "Иван Иванов", description: "Очень крутой человек", techSkills: ["React", "Angular", "WASM"]},
  {name: "Иван Иванов", description: "Очень крутой человек", techSkills: ["React", "Angular", "WASM"]},
  {name: "Иван Иванов", description: "Очень крутой человек", techSkills: ["React", "Angular", "WASM"]},
  {name: "Иван Иванов", description: "Очень крутой человек", techSkills: ["React", "Angular", "WASM"]},
]

export const SuitableCandidates = () => {

  const items = members.map((member, index) => {

    const badges = member.techSkills.map((skill, index) => (
      <Badge key={index}>{skill}</Badge>
    ))

      return (
        <div className={classes["border-container"]}>
          <div key={index} className={classes["member-container"]}>
            <div className={classes["member-bio"]}>
                <Avatar />
                <div className={classes["member-info"]}>
                    <Text>{member.name}</Text>
                </div>
            </div>

            <Text mb="xs">{member.description}</Text>

            <Flex gap="xs">
              {badges}
            </Flex>
          </div>
          <Button size="lg" variant="subtle">Пригласить</Button>
       </div>
      )
    })

  return (
    <AuthGuard role="user">
       <Header variant="user" />
       <Container mb="md">
            <h1>Подходящие кандидаты</h1>
            <Space h="md" />
            <SearchInput placeholder="Поиск команд" onChange={() => {}} />
            <Space h="md" />
            <SimpleGrid cols={1} spacing="md" >
              {items}
            </SimpleGrid>
       </Container>
    </AuthGuard>
  );
};
