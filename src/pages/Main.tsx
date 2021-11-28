import React from 'react';
import {Box, Center, Heading} from "@chakra-ui/react";
import {PageContainer, SectionTitle} from "../components/ui";
import {Announces} from "../components/Announces/Announces";

export const Main = () => {
    return (
        <Box >
            <PageContainer>
                <SectionTitle text="объявления"/>
                <Announces/>
            </PageContainer>
        </Box>
    );
};
