import { FC, memo } from "react";
import styles from './vacancy-reply-card.module.css';
import { Avatar, Flex, Text } from "@mantine/core";

export type VacancyReplyCardProps = {
    name: string
    email: string
    onAccept?: () => void
    onDecline?: () => void
    onResumeClick?: () => void
}

export const VacancyReplyCard: FC<VacancyReplyCardProps> = memo(props => {
    return <div className={ styles.card } onClick={ props.onResumeClick }>
        <div className={ styles["member-container"] }>
            <Avatar/>
            <div className={ styles["member-info"] }>
                <Text>{ props.name }</Text>
                <Text>{ props.email }</Text>
            </div>
        </div>

        <Flex gap={ 24 } style={{ cursor: 'pointer' }}>
            <Text c='green' onClick={ props.onAccept }>Принять</Text>
            <Text c='red' onClick={ props.onAccept }>Отклонить</Text>
        </Flex>
    </div>
})