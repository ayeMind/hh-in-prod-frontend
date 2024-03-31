import { Header } from "@/components/header";
import { ActionIcon, Button, Container, Flex, TextInput, Textarea } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useState } from "react";

export const MyResume = () => {

  const [techSkills, setTechSkills] = useState([{"id": 0, "value": "React"}, {"id": 1, "value": "JavaScript"},])
  const [softSkills, setSoftSkills] = useState([{"id": 0, "value": "Лидер"}, {"id": 1, "value": "Умный чел"},])

  const techSkillsItems = techSkills.map((skill) => (
    <Flex key={skill.id} gap="xs" w="100%" align="center">
        <TextInput w="100%" defaultValue={skill.value} placeholder="Введите tech skill" />
        <ActionIcon variant="transparent" aria-label="Удалить tech skill" onClick={() => {
          setTechSkills(techSkills.filter(techSkill => techSkill.id !== skill.id))
        }}>
          <IconTrash color="pink" />
        </ActionIcon>
    </Flex>
  ))

  const softSkillsItems = softSkills.map((skill) => (
    <Flex key={skill.id} gap="xs" w="100%" align="center">
        <TextInput w="100%" defaultValue={skill.value} placeholder="Введите soft skill" />
        <ActionIcon variant="transparent" aria-label="Удалить soft skill" onClick={() => {
          setSoftSkills(softSkills.filter(softSkill => softSkill.id !== skill.id))
        }}>
          <IconTrash color="pink" />
        </ActionIcon>
    </Flex>
  ))

  return (
    <>
       <Header variant="user" />
       <Container mb="xl">
          <h1>Ваше резюме</h1>
          <Textarea mt="md" placeholder="Опишите себя" />

          <Container mt="xl" px={0}>
            <h3>Контакты</h3>
            <Flex direction="column" gap="sm" mt="md">
              <TextInput placeholder="Телеграм" />
              <TextInput placeholder="Гитхаб" />
              <TextInput placeholder="hh.ru" />
              <TextInput placeholder="Сайт портфолио" />
              <TextInput placeholder="Linkedln" />
            </Flex>
          </Container>

          <Container mt="xl" px={0}>
            <h3>Tech Skills</h3>
            <Flex direction="column" gap="sm" mt="md">
              {techSkillsItems}
            </Flex>
            <Button variant="subtle" mt="xs" onClick={() => {
              setTechSkills(prev => {
                const id = prev.length ? prev[prev.length-1].id + 1 : 0;
                return [...prev, {"id": id, "value": ""}]
              })
            }}>
              Добавить
            </Button>
          </Container>

          <Container mt="xl" px={0}>
            <h3>Soft Skills</h3>
            <Flex direction="column" gap="sm" mt="md">
              {softSkillsItems}
            </Flex>
            <Button variant="subtle" mt="xs" onClick={() => {
              setSoftSkills(prev => {
                const id = prev.length ? prev[prev.length-1].id + 1 : 0;
                return [...prev, {"id": id, "value": ""}]
              })
            }}>
              Добавить
            </Button>
          </Container>

            <Button mt="md">Сохранить</Button>
       </Container>
    </>
  );
};

