import {FC, memo, useEffect, useState} from "react";
import styles from './vacancy-reply-card.module.css';
import {Avatar, Flex, Text, UnstyledButton} from "@mantine/core";
import {IUser} from "@/models/IUser";
import fetchProfileById from "@/api/fetch-profile-by-id";

export type VacancyReplyCardProps = {
    candidate_id: number,
    onAccept?: () => void
    onDecline?: () => void
    onResumeClick?: () => void
}

export const VacancyReplyCard: FC<VacancyReplyCardProps> = memo(props => {
    const [candidate, setCandidate] = useState<IUser | null>()
    useEffect(() => {
        fetchProfileById(props.candidate_id).then(setCandidate)
        console.log("ABOBA", props.candidate_id)
    }, [])
    return <div className={ styles.card }>
        <div className={ styles["member-container"] } onClick={ props.onResumeClick }>
            <Avatar/>
            <div className={ styles["member-info"] }>
                <Text>{ candidate ? candidate.name : "Загрузка" }</Text>
                <Text>{ candidate ? candidate.email : "Загрузка" }</Text>
            </div>
        </div>

        <Flex gap={ 24 } style={{ cursor: 'pointer' }}>
            <UnstyledButton c='green' onClick={ props.onAccept }>Принять</UnstyledButton>
            <UnstyledButton c='red' onClick={ props.onDecline }>Отклонить</UnstyledButton>
        </Flex>
    </div>
})