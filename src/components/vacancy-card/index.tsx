import { FC, memo } from "react";
import styles from './vacancy-card.module.css';
import { Text } from "@mantine/core";
import applyForJob from "@/api/apply-for-job";

export type VacancyCardProps = {
    id: number
    name: string
    keywords: string[]
    canSendResume: boolean
    onClick?: () => void
}

export const VacancyCard: FC<VacancyCardProps> = memo(props => {
    return <div className={ styles.card } onClick={ props.onClick }>
        <Text fs='16px' fw={ 500 }>{ props.name }</Text>
        <Text fs='16px'>{ props.keywords.join(', ') }</Text>
        {
            props.canSendResume && <Text
                fs='16px' c='blue'
                onClick={() => applyForJob(props.id)}
            >Отправить свое резюме</Text>
        }
    </div>
})