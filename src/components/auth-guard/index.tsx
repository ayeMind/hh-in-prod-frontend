import { FC, memo, ReactNode, useEffect, useState } from "react";
import { Center, Loader } from "@mantine/core";
import useUser from "@/hooks/use-user.ts";
import { UserRole } from "@/models/IUser.ts";
import { useNavigate } from "react-router-dom";

export type AuthGuardProps = {
    children?: ReactNode,
    role: UserRole | 'any',
}

export const AuthGuard: FC<AuthGuardProps> = memo(props => {
    const {user, loading} = useUser()
    const navigate = useNavigate()
    const [roleCorrect, setRoleCorrect] = useState(false)
    
    useEffect(() => {
        if (!loading) {
            if (user?.role == 'user' && props.role != 'user') {
                navigate('/')
            } else {
                setRoleCorrect(true)
            }
            
            if (user?.role == 'organizer' && props.role != 'organizer') {
                navigate('/')
            } else {
                setRoleCorrect(true)
            }
        } 
        
        if (props.role == 'any') {
            setRoleCorrect(true)
        }
    }, [user, loading])

    if (!user || !roleCorrect) {
        return <Center w='100vw' h='100vh'>
            <Loader size="md"/>
        </Center>
    }

    return props.children
})