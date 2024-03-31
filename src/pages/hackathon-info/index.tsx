import { Container, Text, Image, TextInput, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import classes from "./hackathon-info.module.css"
import { MembersList } from "@/components/members-list";
import { Header } from "@/components/header"
export const HackathonInfo = () => {
  return (
    <>
       <Header variant="user" />
       <Container>
            <h1>Хакатон PROD</h1>
            <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" mah={350} radius="sm" mt="xs" />
            <Text mt="md">Описание самого крутого хакатона на свете</Text>
            <Text mt="xs" mb="md">Количество участников в команде: 5</Text> 
            <h2>Участники</h2>
            <div className={classes["search-container"]}>
                <TextInput placeholder="Поиск среди участников" w="100%" size="md" />
                <Button size="md">
                    <IconSearch width="24" height="24" />
                </Button>
            </div>
            <MembersList />
       </Container>
    </>
  );
};

