import { SimpleGrid } from "@mantine/core";
import { MemberCard } from "@/components/member-card";
import { IUser } from "@/models/IUser";

interface Props {
  members: IUser[];
}

export const MembersList = ({members}: Props) => {

    const items = members.map((member, index) => (
        <MemberCard key={index} { ...member } />
    ))

    return (
        <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md">
            { items }
        </SimpleGrid>
    );
};
