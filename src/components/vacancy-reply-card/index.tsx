import {FC, memo, useEffect, useState} from "react";
import styles from './vacancy-reply-card.module.css';
import { Avatar, Flex, Text } from "@mantine/core";
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
    }, [])
    // Сделать чтобы при нажатии на member container navigate на просмотр чужого резюме
    return <div className={ styles.card } onClick={ props.onResumeClick }>
        <div className={ styles["member-container"] }>
            <Avatar/>
            <div className={ styles["member-info"] }>
                <Text>{ candidate ? candidate.name : "Загрузка" }</Text>
                <Text>{ candidate ? candidate.email : "Загрузка" }</Text>
            </div>
        </div>

        <Flex gap={ 24 } style={{ cursor: 'pointer' }}>
            <Text c='green' onClick={ props.onAccept }>Принять</Text>
            <Text c='red' onClick={ props.onAccept }>Отклонить</Text>
        </Flex>
    </div>
})