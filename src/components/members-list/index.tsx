import { SimpleGrid } from "@mantine/core";
import { MemberCard } from "@/components/member-card";

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
        <MemberCard { ...member } />
    ))

    return (
        <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md">
            { items }
        </SimpleGrid>
    );
};
