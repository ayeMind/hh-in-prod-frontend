import {MemberCard} from "@/components/member-card";
import {Button, SimpleGrid} from "@mantine/core";
import {TeamInvitePopup} from "@/components/team-invite-popup";
import {useDisclosure} from "@mantine/hooks";
import {IUser} from "@/models/IUser";

export const TeamDetailParticipants = ({ members }: { members: IUser[] }) => {
    const [opened, {close, open}] = useDisclosure(false)
    return (
        <>
            <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md" mt={ 12 } mb={ 36 }>
                { members.map((member: IUser) => {
                    return <MemberCard key={member.id} name={member.name} email={member.email} />
                }) }
                <Button variant='outline' h="100%" mih='50px' onClick={ open }>Добавить</Button>
            </SimpleGrid>

            {/* Invite popup  */ }
            <TeamInvitePopup
                opened={ opened }
                onClose={ close }
                onSubmit={ email => {
                    close()
                    console.log(email)
                }}
            />
        </>

    )
}