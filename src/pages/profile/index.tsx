import { Header } from "@/components/header";
import { Button, Container, Flex, Select, TextInput } from "@mantine/core";
import { AuthGuard } from "@/components/auth-guard";
import { createFormik } from "@/utils/create-formik.ts";
import useUser from "@/hooks/use-user.ts";
import { Form, Formik } from "formik";
import { FormInput } from "@/components/form-input/form-input.tsx";
import { FormNumberInput } from "@/components/form-input/form-number-input.tsx";
import updateProfile from "@/api/update-profile.ts";
import { cities } from "@/utils/cities.ts"
import { useState } from "react";

export const Profile = () => {
    return (
        <AuthGuard role='user'>
            <Header variant="default"/>
            <Container size={ "md" }>
                <h1>Ваш профиль</h1>
                <Content/>
            </Container>
        </AuthGuard>
    )
}

const Content = () => {
    const {user, setUser} = useUser()
    const [city, setCity] = useState<string | null>(user!.city ?? null)

    const formik = createFormik({
        initialValues: {
            name: user!.name,
            age: user!.age ? user!.age!.toString() : '',
            workExp: user!.workExp ? user!.workExp!.toString() : '',
        },
        onSubmit: async (values) => {
            console.log(values)
            const response = await updateProfile({
                name: values.name,
                age: parseInt(values.age) ?? null,
                city: city ?? '',
                workExp: parseInt(values.workExp) ?? null,
            })

            if (response) {
                setUser(response)
            } else {
                console.error('failed to update profile')
            }
        }
    })

    return <Formik { ...formik }>
        <Form>
            <Flex direction="column" gap={ "md" } mt='lg'>
                <FormInput
                    name='name'
                    label="Имя"
                    placeholder="Имя"
                />
                <TextInput
                    value={ user!.email }
                    label="Email"
                    placeholder="Email"
                    disabled
                />
                <FormNumberInput
                    name='age'
                    label="Возраст"
                    placeholder="Возраст"
                />
                <Select
                    name='city'
                    label="Город"
                    placeholder="Город"
                    searchable
                    nothingFoundMessage='Не выбран'
                    data={ cities }
                    value={ city }
                    onChange={ setCity }
                />
                <FormNumberInput
                    name='workExp'
                    label="Стаж работы (лет)"
                    placeholder="Стаж работы"
                />
                <Button
                    type='submit'
                    w={ "fit-content" }>
                    Сохранить
                </Button>
            </Flex>
        </Form>
    </Formik>
}