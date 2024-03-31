import { SimpleGrid, Avatar, Text } from "@mantine/core";
import classes from "./members-list.module.css"

const members = [
    {name: "Иван Иванов", email: "ivan@gmail.com"},
    {name: "Иван Иванов", email: "ivan@gmail.com"},
    {name: "Иван Иванов", email: "ivan@gmail.com"},
    {name: "Иван Иванов", email: "ivan@gmail.com"},
    {name: "Иван Иванов", email: "ivan@gmail.com"},
    {name: "Иван Иванов", email: "ivan@gmail.com"},
    {name: "Иван Иванов", email: "ivan@gmail.com"},
    {name: "Иван Иванов", email: "ivan@gmail.com"},
    {name: "Иван Иванов", email: "ivan@gmail.com"},
]

export const MembersList = () => {

    const items = members.map(member => (
        <div className={classes["member-container"]}>
            <Avatar />
            <div className={classes["member-info"]}>
                <Text>{member.name}</Text>
                <Text>{member.email}</Text>
            </div>
       </div>
    ))

  return (

    <SimpleGrid cols={{ base: 1, xs: 2, sm: 3 }} spacing="md" >
       {items}
    </SimpleGrid>
  );
};
