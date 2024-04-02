import { FC, memo } from "react";
import styles from './vacancy-card.module.css';
import { Text } from "@mantine/core";
import applyForJob from "@/api/apply-for-job";

export type VacancyCardProps = {
    id: number
    name: string
    keywords: string[]
    canSendResume: 'canSend' | 'cantSend' | 'sended'
    onClick?: () => void
}

export const VacancyCard: FC<VacancyCardProps> = memo(props => {
    return <div className={ styles.card } onClick={ props.onClick }>
        <Text fs='16px' fw={ 500 }>{ props.name }</Text>
        <Text fs='16px'>{ props.keywords.join(', ') }</Text>
        {
            props.canSendResume == 'canSend' ?
                <Text
                    fs='16px' c='blue'
                    onClick={() => {
                        applyForJob(props.id).then(window.location.reload)
                    }}
                >Отправить свое резюме</Text> :
                props.canSendResume == 'sended' ?
                    <Text fs='16px' c='blue'>Вы уже отправили своё резюме</Text> :
                        <></>
        }
    </div>
})