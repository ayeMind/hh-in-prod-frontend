import { FC, memo, ReactNode } from "react";
import { Center, Loader } from "@mantine/core";
import useUser from "@/hooks/use-user.ts";

export type AuthGuardProps = {
    children?: ReactNode
}

export const AuthGuard: FC<AuthGuardProps> = memo(props => {
    const {user} = useUser()

    if (!user) {
        return <Center w='100vw' h='100vh'>
            <Loader size="md"/>
        </Center>
    }

    return props.children
})