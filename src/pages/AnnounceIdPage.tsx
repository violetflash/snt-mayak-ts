import React from 'react';
import {useParams} from 'react-router-dom';
import {PageContainer} from "../components/ui";
import {Center} from "@chakra-ui/react";

export const AnnounceIdPage = () => {
    const params = useParams();
    console.log(params.id);

    return (
        <PageContainer>
            <Center>
                Это страница страница отдельной, открытой по ссылке новостью c ID: [{params.id}]
            </Center>
        </PageContainer>

    )
};