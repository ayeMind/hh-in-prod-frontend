import { Container, Text, Badge } from "@mantine/core"
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
            if (data?.telegram) setContacts(prev => [...prev, data.telegram as string ])
            if (data?.hhLink) setContacts(prev => [...prev, data.hhLink as string])
            if (data?.personalWebsite) setContacts(prev => [...prev, data.personalWebsite as string])
            return;
        })
    }, [])

    const contactsItems = contacts.map(contact => (
        <Text mb="md">{contact}</Text>
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
 
        {resume?.bio && <Container mt="xl">
            <h3>Обо мне</h3>
            <Text>
                {resume?.bio}
            </Text>
        </Container>}

        {contacts.length > 0 && <Container mt="xl">
            <h3>Контакты</h3>
            <Text>{contactsItems}</Text>
        </Container>}

        {resume?.techStack && <Container mt="xl">
            <h3>Tech Skills</h3>
            <Container mt="sm" pl={0}>
                {techSkillsItems}
            </Container>
        </Container>}

        {resume?.softSkills && <Container mt="xl">
            <h3>Soft Skills</h3>
            <Container mt="sm" pl={0}>
                {softSkillsItems}
            </Container>
        </Container>}

        {!resume?.softSkills && !resume?.bio && contacts.length === 0 && !resume?.techStack && (
            <Text>У пользователя пустое резюме</Text>
        )}

       </Container>
    </AuthGuard>
  );
};
