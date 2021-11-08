import React from 'react';
import {Box, Center, Heading} from "@chakra-ui/react";
import {PageContainer} from "../components/ui";
import {Announces} from "../components/Announces/Announces";

export const Main = () => {
    return (
        <Box >
            <PageContainer>
                <Center m="30px 0 30px">
                    <Heading>
                        Объявления
                    </Heading>
                </Center>

                <Announces/>
            </PageContainer>
        </Box>
    );
};
