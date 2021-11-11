import React from 'react';
import {PageContainer} from "../components/ui";
import {Box, Center} from "@chakra-ui/react";

export const NotFound = () => {
    return (
        <Box className="About-page" bg="cyan.100">
            <PageContainer>
                <Center my="50px">Такой страницы нет существует!</Center>
            </PageContainer>
        </Box>
    )
};