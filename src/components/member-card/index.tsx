import { FC, memo } from "react";
import classes from "./member-card.module.css";
import { Avatar, Text } from "@mantine/core";

export type MemberCardProps = {
    name: string;
    email: string;
    onClick?: () => void;
}

export const MemberCard: FC<MemberCardProps> = memo(props => {
    return <div className={ classes["member-container"] } onClick={ props.onClick }>
        <Avatar/>
        <div className={ classes["member-info"] }>
            <Text>{ props.name }</Text>
            <Text>{ props.email }</Text>
        </div>
    </div>
})