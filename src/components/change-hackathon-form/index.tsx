import {Form, Formik} from "formik";
import {Autocomplete, Button, Container, FileInput, Flex, Image} from "@mantine/core";
import {FormInput} from "@/components/form-input/form-input";
import {FormTextareaInput} from "@/components/form-input/form-textarea-input";
import {FormNumberInput} from "@/components/form-input/form-number-input";
import {IconPlus} from "@tabler/icons-react";
import {Link, useNavigate} from "react-router-dom";
import styles from "@/pages/change-hackathon/change-hackathon.module.css";
import {useState} from "react";
import {createFormik} from "@/utils/create-formik";
import {IHackathon} from "@/models/IHackathon";
import addParticipantToHackathon from "@/api/add-participant-to-hackathon";
import changeHackathon from "@/api/change-hackathon";

export const ChangeHackathonForm = (
    { hackathon, updateHackathonFunc }: { hackathon: IHackathon, updateHackathonFunc: () => void }
) => {
    const navigate = useNavigate()

    const [file, setFile] = useState<File | null>(null)
    const [previewLink, setPreviewLink] = useState<string>(
        hackathon.imageCover ?
            `${import.meta.env.VITE_BACKEND_URL}${hackathon.imageCover}` :
            '/img-placeholder.jpg'
    )
    const [previewError, setPreviewError] = useState<string>('')

    const participants = hackathon.participants.map(item => item.email)
    const [participantInputError, setParticipantInputError] = useState<string>('')
    const [participantInputValue, setParticipantInputValue] = useState<string>('')

    const addParticipant = (email: string) => {
        if(participants.includes(email)) setParticipantInputError("Пользователь уже добавлен")
        else {
            addParticipantToHackathon(hackathon.id, email).then((res) => {
                if(!res) setParticipantInputError("Непредвимиая ошибка")
            })
            updateHackathonFunc()
        }
    }

    const formik = createFormik({
        initialValues: {
            name: hackathon.name,
            description: hackathon.description,
            min_participants: hackathon.min_participants,
            max_participants: hackathon.max_participants,
        },
        onSubmit: async (values) => {
            changeHackathon(hackathon.id, file, values).then(res => {
                if(!res) setParticipantInputError("Непредвиденная ошибка")
                else navigate('/')
            })
        }
    })

    return (
        <Formik { ...formik }>
            <Form>
                <Flex direction="column" gap="md">
                    <FormInput
                        name="name"
                        label="Название хакатона"
                        placeholder="Введите название хакатона"
                    />
                    <FormTextareaInput
                        name="description"
                        label="Описание хакатона"
                        placeholder="Введите описание хакатона"
                    />
                    <FormNumberInput
                        name="min_participants"
                        label="Мин количество участников в команде"
                        disabled
                        placeholder="Введите мин количество участников в команде"
                    />
                    <FormNumberInput
                        name="max_participants"
                        label="Макс количество участников в команде"
                        disabled
                        placeholder="Введите макс количество участников в команде"
                    />
                    <Container p={"0"} w={"100%"}>
                        <FileInput
                            w={"100%"}
                            value={file}
                            onChange={(e) => {
                                if(e) {
                                    setPreviewError('')
                                    setFile(e)
                                    setPreviewLink(URL.createObjectURL(e))
                                } else {
                                    setPreviewError('Некорректное изображение')
                                }
                            }}
                            accept="image/png,image/jpeg"
                            label="Превью хакатона"
                            placeholder="Загрузите картинку"
                            error={previewError}
                        />
                        <Image
                            mt={"xs"}
                            src={previewLink}
                            mah={350}
                            w={"100%"}
                            radius="sm"
                        />
                    </Container>
                    <Flex justify={"space-between"} gap={"xs"} align={participantInputError ? "center" : "flex-end"}>
                        <Autocomplete
                            error={participantInputError}
                            label={`Участники (Всего: ${hackathon.participants.length})`}
                            placeholder={"Введите email участника"}
                            value={participantInputValue}
                            onChange={(e) => {
                                setParticipantInputValue(e)
                                setParticipantInputError('')
                            }}
                            w={"100%"}
                            data={participants}
                            limit={5}
                        />
                        <Button size={"sm"} onClick={() => addParticipant(participantInputValue)}>
                            <IconPlus stroke={2} size={20} />
                        </Button>
                    </Flex>
                    <Button w={"fit-content"} type={"submit"}>Сохранить</Button>
                    <Link
                        to={`/hackathon/org/${hackathon.id}/teams`}
                        className={styles.link}
                    >Смотреть команды</Link>
                </Flex>
            </Form>
        </Formik>
    )
}