import { FC, memo } from "react";
import { NumberInput, NumberInputProps } from "@mantine/core";
import { useField, useFormikContext } from "formik";

export type FormNumberInputProps = {
    name: string
    placeholder?: string;
} & NumberInputProps

export const FormNumberInput: FC<FormNumberInputProps> = memo(props => {
    const [field, meta] = useField(props.name);
    const {isSubmitting} = useFormikContext()

    const error = !!meta.error && meta.touched ? meta.error : undefined

    return <NumberInput { ...field } disabled={ isSubmitting } error={ error } { ...props } />
})