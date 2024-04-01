import { Container, Text, Image, TextInput, Button } from "@mantine/core";
import { Header } from "@/components/header"
import { IconSearch } from "@tabler/icons-react";
import { MembersList } from "@/components/members-list";
import { AuthGuard } from "@/components/auth-guard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IUser } from "@/models/IUser";
import fetchHackathonById from "@/api/fetch-hackathon-by-id";
import classes from "./hackathon-info.module.css";  

export const HackathonInfo = () => {

  const { hackathon_id } = useParams();
  const [members, setMembers] = useState<IUser[]>([] as IUser[]);
  const [preview, setPreview] = useState<string>("img-placeholder.jpg");
  const [minMembersAmount, setMinMembersAmount] = useState<number>(0);
  const [maxMembersAmount, setMaxMembersAmount] = useState<number>(0);

  useEffect(() => {    
    fetchHackathonById(parseInt(hackathon_id as string)).then(data => {
      if (!data) return null;
      setPreview(`${import.meta.env.VITE_BACKEND_URL}${data.imageCover}`);
      setMembers(data.participants)
      setMinMembersAmount(data.minParticipants)
      setMaxMembersAmount(data.maxParticipants)
    });
  }, [])

  return (
    <AuthGuard role='user'>
       <Header variant='user' />
       <Container pb={"100px"}>
            <h1>Хакатон PROD</h1>
            <Image src={preview} mah={350} radius="sm" mt="xs" />
            <Text mt="md">Описание самого крутого хакатона на свете</Text>
            <Text mt="xs" mb="md">Количество участников в команде: от {minMembersAmount} до {maxMembersAmount}</Text> 
            <h2>Участники</h2>
            <div className={classes["search-container"]}>
                <TextInput placeholder="Поиск среди участников" w="100%" size="md" />
                <Button size="md">
                    <IconSearch width="24" height="24" />
                </Button>
            </div>
            <MembersList members={members} />
       </Container>
    </AuthGuard>
  );
};