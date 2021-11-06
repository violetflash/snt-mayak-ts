import React from 'react';
import {Box, Center} from "@chakra-ui/react";
import {PageContainer} from "../components/ui";

export const Main = () => {
    return (
        <Box bg="red.100">
            <PageContainer>
                <Center>
                    Главная страница
                </Center>
            </PageContainer>
        </Box>
    );
};
