import { Header } from "@/components/header";
import { SearchInput } from "@/components/search-input";
import { Avatar, Badge, Button, Container, Flex, SimpleGrid, Space, Text } from "@mantine/core";
import classes from "./suitable-candidates.module.css"
import { AuthGuard } from "@/components/auth-guard";
import { useMediaQuery } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { IMemberSuggestion } from "@/models/IMemberSuggestion.ts";
import { Link, useParams } from "react-router-dom";
import getSuitableCandidates from "@/api/get-suitable-candidates.ts";

export const SuitableCandidates = () => {
    const isPhone = useMediaQuery('(max-width: 450px)')
    const [search, setSearch] = useState('')
    const [suggestions, setSuggestions] = useState<IMemberSuggestion[]>([])
    const {hackathon_id, vacancy_id} = useParams()

    useEffect(() => {
        getSuitableCandidates(parseInt(vacancy_id ?? ''))
            .then(setSuggestions)
    }, [])

    const items = suggestions
        .filter(s => s.user.name.includes(search) || s.user.email.includes(search) || s.bio.includes(search))
        .map((suggestion, index) => {
            const badges = suggestion.matches.map((skill, index) => (
                <Badge key={ `${ suggestion.user.id }-${ index }` }>{ skill }</Badge>
            ))

            return (
                <Link to={ `/hackathon/${ hackathon_id }/resume/${ suggestion.user.id }` }>
                    <div
                        className={ classes["border-container"] }
                        key={ index }>
                        <div className={ classes["member-container"] }>
                            <Flex direction='row' justify='space-between'>
                                <div className={ classes["member-bio"] }>
                                    <Avatar/>
                                    <div className={ classes["member-info"] }>
                                        <Text>{ suggestion.user.name }</Text>
                                    </div>
                                </div>

                                <Button size="lg" variant="subtle" px={ 10 }>
                                    {
                                        isPhone
                                            ? <IconPlus size='16px'/>
                                            : 'Пригласить'
                                    }
                                </Button>
                            </Flex>
                            {
                                suggestion.bio && <Text mb="xs">{ suggestion.bio }</Text>
                            }
                            {
                                badges && <Flex gap="xs">{ badges }</Flex>
                            }
                        </div>
                    </div>
                </Link>
            )
        })

    return (
        <AuthGuard role="user">
            <Header variant="user"/>
            <Container mb="md">
                <h1>Подходящие кандидаты</h1>
                <Space h="md"/>
                <SearchInput placeholder="Поиск команд" onChange={ setSearch }/>
                <Space h="md"/>
                <SimpleGrid cols={ 1 } spacing="md">
                    { items }
                </SimpleGrid>
            </Container>
        </AuthGuard>
    );
};
