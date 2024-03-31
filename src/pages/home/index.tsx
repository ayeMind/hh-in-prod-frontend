import { Header } from "@/components/header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        navigate('/hackathons/user')
    }, [])

    return (
        <>
            <Header/>
        </>
    );
};