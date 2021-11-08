import React from 'react';
import {PageContainer} from "../components/ui";
import {Box, Center} from "@chakra-ui/react";

export const Questions = () => {
    return (
        <Box className="Questions-page" bg="orange.300">
            <PageContainer>
                <Center>Задать вопрос</Center>
                <Center>Посмотреть другие вопросы и ответы</Center>
            </PageContainer>
        </Box>
    )
};