import React from 'react';
import {PageContainer} from "../components/ui";
import {Box, Center, Flex} from "@chakra-ui/react";
import { UserAccountSummary, UserAccountTabs } from '../components/userAccount';

export const UserSettings = () => {
    return (
        <Box className="User settings">
            <PageContainer>
                <Center mt="20px">настройки аккаунта</Center>
                <Flex
                    className="user-settings-flex-container"
                    direction={["column", "column", "row", "row"]}
                    mt="30px"
                >
                    <UserAccountSummary flex="0 0 30%"/>
                    <UserAccountTabs flex="1 0 auto"/>
                </Flex>
            </PageContainer>
        </Box>
    )
};