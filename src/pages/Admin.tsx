import React from 'react';
import {PageContainer} from "../components/ui";
import {Box, Center} from "@chakra-ui/react";

export const Admin = () => {
    return (
        <Box className="About-page" bg="cyan.100">
            <PageContainer>
                <Center my="50px">Управление контентом сайта</Center>
            </PageContainer>
        </Box>
    )
};