import React from 'react';
import {PageContainer} from "../components/ui";
import {Box, Center} from "@chakra-ui/react";

export const UserSettings = () => {
    return (
        <Box className="User settings" bg="cyan.600">
            <PageContainer>
                <Center>настройки аккаунта</Center>
            </PageContainer>
        </Box>
    )
};