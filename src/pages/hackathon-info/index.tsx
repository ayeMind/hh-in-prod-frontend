import { Container, Text, Image, TextInput, Button, SimpleGrid } from "@mantine/core";
import { Header } from "@/components/header"
import { IconSearch } from "@tabler/icons-react";
import classes from "./hackathon-info.module.css"
import { MembersList } from "@/components/members-list";
export const HackathonInfo = () => {
  return (
    <>
       <Header />
       <Container>
            <h1>Хакатон PROD</h1>
            <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"  />
            <Text mt="md">Описание самого крутого хакатона на свете</Text>
            <Text mt="xs" mb="md">Количество участников в команде: 5</Text> 
            <h2>Участники</h2>
            <div className={classes["search-container"]}>
                <TextInput placeholder="Поиск среди участников" w="90%" />
                <Button>
                    <IconSearch width="24" height="24" />
                </Button>
            </div>
            <MembersList />
       </Container>
    </>
  );
};

