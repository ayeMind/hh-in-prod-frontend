import { Avatar, Container, Flex, Text, Badge } from "@mantine/core"
import { Header } from "@/components/header";
import { AuthGuard } from "@/components/auth-guard";

const contacts = ["@petya123", "www.github.com/petya_cool", "petya@gmail.com"]
const techSkills = ["Python", "JavaScript", "Git", "React", "Angular"]
const softSkills = ["Ответственный", "Крутой", "Очень смешной", "Удивительный", "Гениальный", "Сверхразум", "Диктор", "Манимулятор", "Удивительный", "Ответственный", "Крутой",]

export const ResumeView = () => {
    const contactsItems = contacts.map(contact => (
        <Text mb="md">{contact}</Text>
    ))

    const techSkillsItems = techSkills.map(skill => (
        <Badge p="sm" mr="xs" mb="xs">
            <p>{skill}</p>
        </Badge>
    ))

    const softSkillsItems = softSkills.map(skill => (
        <Badge p="sm" mr="xs" mb="xs">
            <p>{skill}</p>
        </Badge>
    ))

  return (
    <AuthGuard role='any'>
       <Header variant="user" />
       <Container>
        <Flex align="center" gap="md">
            <Avatar w={100} h={100} />
            <h2>Петя Петров</h2>
        </Flex>

        <Container mt="xl">
            <h3>Обо мне</h3>
            <Text>Я настолько крутой, что мне даже не нужно ничего тут писать, но тут можно типо дофига текста о себе написать</Text>
        </Container>

        <Container mt="xl">
            <h3>Контакты</h3>
            <Text>{contactsItems}</Text>
        </Container>

        <Container mt="xl">
            <h3>Tech Skills</h3>
            <Container mt="sm" pl={0}>
                {techSkillsItems}
            </Container>
        </Container>

        <Container mt="xl">
            <h3>Soft Skills</h3>
            <Container mt="sm" pl={0}>
                {softSkillsItems}
            </Container>
        </Container>

       </Container>
    </AuthGuard>
  );
};
