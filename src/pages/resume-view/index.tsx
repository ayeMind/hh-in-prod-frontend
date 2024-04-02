import { Container, Text, Badge, Box } from "@mantine/core"
import { Header } from "@/components/header";
import { AuthGuard } from "@/components/auth-guard";
import { useEffect, useState } from "react";
import { fetchResume } from "@/api/fetch-resume";
import { IResume } from "@/models/IResume";
import { useParams } from "react-router-dom";

export const ResumeView = () => {
    const [resume, setResume] = useState<IResume | null>(null)
    const [contacts, setContacts] = useState<string[]>([])

    const { hackathon_id, user_id } = useParams()

    useEffect(() => {
        fetchResume(parseInt(user_id as string), parseInt(hackathon_id as string)).then(data => {
            setResume(data)
            const contacts = [data?.telegram, data?.githubLink, data?.hhLink].filter(contact => !!contact)
            setContacts(contacts as string[])
            return;
        })  
    }, [])

    const contactsItems = contacts.map(contact => (
        <Text mt="md">{contact}</Text>
    ))

    const techSkillsItems = resume?.techStack.map(skill => (
        <Badge p="sm" mr="xs" mb="xs">
            <p>{skill}</p>
        </Badge>
    ))

    const softSkillsItems = resume?.softSkills.map(skill => (
        <Badge p="sm" mr="xs" mb="xs">
            <p>{skill}</p>
        </Badge>
    ))

  return (
    <AuthGuard role='any'>
       <Header variant="user" />
       <Container>
 
        {resume?.bio && <Box mt="xl">
            <h3>Обо мне</h3>
            <Text>
                {resume?.bio}
            </Text>
        </Box>}

        {contacts.length > 0 && <Box mt="xl">
            <h3>Контакты</h3>
            <Text>{contactsItems}</Text>
        </Box>}

        {resume?.techStack && <Box mt="xl">
            <h3>Tech Skills</h3>
            <Container mt="sm" pl={0}>
                {techSkillsItems}
            </Container>
        </Box>}

        {resume?.softSkills && <Box mt="xl">
            <h3>Soft Skills</h3>
            <Container mt="sm" pl={0}>
                {softSkillsItems}
            </Container>
        </Box>}

        {!resume?.softSkills && !resume?.bio && contacts.length === 0 && !resume?.techStack && (
            <Text>У пользователя пустое резюме</Text>
        )}

       </Container>
    </AuthGuard>
  );
};
