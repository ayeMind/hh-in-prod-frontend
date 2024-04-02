import { FC, memo } from "react";
import classes from "./member-card.module.css";
import { Avatar, Text, ActionIcon } from "@mantine/core";
import useUser from "@/hooks/use-user";
import { IconTrash } from "@tabler/icons-react";

export type MemberCardProps = {
    name: string;
    email: string;
    creator?: number;
    onClick?: () => void;
}

export const MemberCard: FC<MemberCardProps> = memo(props => {

    const {user} = useUser()

    return <div className={ classes["border-container"] }>
        <div className={ classes["member-container"] } onClick={ props.onClick }>
            <Avatar/>
            <div className={ classes["member-info"] }>
                <Text>{ props.name }</Text>
                <Text>{ props.email }</Text>
            </div>
        </div>
        {user && props.creator && props.creator === user.id && (
            <ActionIcon onClick={() => {}} variant="transparent">
                <IconTrash color="pink" />
            </ActionIcon>)}
        </div>
    
})