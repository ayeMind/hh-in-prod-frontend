import { FC, memo, useState } from "react";
import { Button, Flex, Modal, Select } from "@mantine/core";
import { createFormik } from "@/utils/create-formik.ts";
import * as yup from 'yup';
import { Form, Formik } from "formik";
import { FormInput } from "@/components/form-input/form-input.tsx";
import { ITeamVacancy } from "@/models/ITeamVacancy";
import sendTeamInviteEmail from "@/api/send-team-invite-email";

export type TeamInvitePopupProps = {
    listVacancies: ITeamVacancy[] | null
    opened: boolean
    onClose: () => void
    onSubmit: (email: string) => void
}

export const TeamInvitePopup: FC<TeamInvitePopupProps> = memo(props => {

    const [selectedVacancy, setSelectedVacancy] = useState<ITeamVacancy | null>(null);

    const formik = createFormik({
        initialValues: {
            email: '',
            vacancy: null,
        },
        validationSchema: yup.object({
            email: yup.string().required('Введите email').email('Неверный email')
        }),
        onSubmit: (values) => {
            if (!selectedVacancy) {
                return;
            }

            sendTeamInviteEmail(selectedVacancy.id, { "email": values.emailq })
            
        },
    })


    const selectVacancy = (value: string | null) => {
        if (!props.listVacancies) return null;
        const vacancy = props.listVacancies.find(vacancy => vacancy.name === value)
        vacancy && setSelectedVacancy(vacancy)
        console.log(vacancy);
        
    }
    
    return <Modal opened={ props.opened } onClose={ props.onClose } title="Пригласить в команду" centered>
        <Formik {...formik}>
            <Form>
                <Flex direction='column' gap={12}>
                    <Select onChange={selectVacancy} name='vacancy' data={props.listVacancies ? props.listVacancies.map(vacancy => vacancy.name) : []} />
                    <FormInput name='email' size='md' placeholder="Введите email участника"/>
                    <Button type="submit">Отправить приглашение</Button>
                </Flex>
            </Form>
        </Formik>
    </Modal>
})