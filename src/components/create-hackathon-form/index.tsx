import {Form, Formik} from "formik";
import {Autocomplete, Button, Container, FileInput, Flex, Image} from "@mantine/core";
import {FormInput} from "@/components/form-input/form-input";
import {FormTextareaInput} from "@/components/form-input/form-textarea-input";
import {FormNumberInput} from "@/components/form-input/form-number-input";
import {IconMinus, IconPlus} from "@tabler/icons-react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {createFormik} from "@/utils/create-formik";
import createHackathon, {CreateHackathonPayload} from "@/api/create-hackathon";

export const CreateHackathonForm = () => {
    const navigate = useNavigate()

    const [file, setFile] = useState<File | null>(null)
    const [previewLink, setPreviewLink] = useState<string>('/img-placeholder.jpg')
    const [previewError, setPreviewError] = useState<string>('')

    const [participants, setParticipants] = useState<string[]>([])
    const [participantInputError, setParticipantInputError] = useState<string>('')
    const [participantInputValue, setParticipantInputValue] = useState<string>('')

    const addParticipant = (email: string) => {
        if(participants.includes(email)) setParticipantInputError("Пользователь уже добавлен")
        else setParticipants([...participants, email])
    }
    const deleteParticipant = (email: string) => {
        if(!participants.includes(email)) setParticipantInputError("В списке нет такого участника")
        else setParticipants(participants.filter((item) => item != email))
    }

    const formik = createFormik({
        initialValues: {
            name: '',
            description: '',
            min_participants: 1,
            max_participants: 5,
        },
        onSubmit: async (values, formikHelpers) => {
            if(!previewLink || previewLink == '/img-placeholder.jpg' || !file) {
                setPreviewError('Ошибка загрузки картинки')
                return;
            }
            if(!(values.max_participants <= 10 && values.max_participants >= 1)) {
                formikHelpers.setFieldError('max_participants', 'Введите кол-во участников от 1 до 10')
                return
            }
            if(values.min_participants < 1 || values.min_participants >= 10) {
                formikHelpers.setFieldError('min_participants', 'Введите кол-во участников от 1 до 10')
                return
            }
            if(values.min_participants > values.max_participants) {
                formikHelpers.setFieldError('min_participants', 'Минимальное количество участников не может превышать максимальное')
                return
            }
            const data = {
                ...values,
                participants: participants,
            } as CreateHackathonPayload

            createHackathon(file, data).then(res => {
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
                        placeholder="Введите мин количество участников в команде"
                    />
                    <FormNumberInput
                        name="max_participants"
                        label="Макс количество участников в команде"
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
                            src={previewLink && file ? previewLink : "../img-placeholder.jpg"}
                            mah={350}
                            w={"100%"}
                            radius="sm"
                        />
                    </Container>
                    <Flex justify={"space-between"} gap={"xs"} align={"flex-end"}>
                        <Autocomplete
                            error={participantInputError}
                            label={`Участники (Всего: ${participants.length})`}
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
                        <Button size={"sm"} onClick={() => deleteParticipant(participantInputValue)}>
                            <IconMinus stroke={2} size={20} />
                        </Button>
                        <Button size={"sm"} onClick={() => addParticipant(participantInputValue)}>
                            <IconPlus stroke={2} size={20} />
                        </Button>
                    </Flex>
                    <Button w={"fit-content"} type={"submit"}>Создать</Button>
                </Flex>
            </Form>
        </Formik>
    )
}