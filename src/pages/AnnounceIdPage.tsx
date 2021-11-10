import React from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {PageContainer} from "../components/ui";
import {Button, Center} from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons';

export const AnnounceIdPage = () => {
    const params = useParams();
    const navigate = useNavigate();


    const goBackHandle = () => {
        navigate(-1); //назад ???
    };

    return (
        <PageContainer>
            <Button
                as="a"
                onClick={goBackHandle}
                leftIcon={<ArrowBackIcon/>}
            >
                Назад
            </Button>
            <Center>
                Это страница страница отдельной, открытой по ссылке новостью c ID: [{params.id}]
            </Center>
        </PageContainer>

    )
};
