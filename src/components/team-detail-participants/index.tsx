import {MemberCard} from "@/components/member-card";
import {Button, SimpleGrid} from "@mantine/core";
import {TeamInvitePopup} from "@/components/team-invite-popup";
import {useDisclosure} from "@mantine/hooks";

export const TeamDetailParticipants = () => {
    const [opened, {close, open}] = useDisclosure(false)
    return (
        <>
            <SimpleGrid cols={ {base: 1, xs: 2, sm: 3} } spacing="md" mt={ 12 } mb={ 36 }>
                <MemberCard name='Иван Иванов' email='vanya@gmail.com'/>
                <MemberCard name='Петя Петров' email='petya@gmail.com'/>
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