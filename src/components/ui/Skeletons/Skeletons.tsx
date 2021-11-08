import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import {Box, Flex, Skeleton} from "@chakra-ui/react";

type propsType = {
    type: string
}

export const Skeletons = ({type}: propsType) => {
    if (type === 'announce') {
        return (
            <Flex justify="space-between">
                <Box
                    flex="0 1 35%"
                >
                    <Box mb="20px">
                        <Skeleton width="160px" height="25px"/>
                    </Box>
                    <Box>
                        <Skeleton width="290px" height="40px"/>
                    </Box>
                </Box>
                <Box
                    flex="1"
                >
                    <Skeleton width="100%" height="20px" mt={2}/>
                    <Skeleton width="100%" height="20px" mt={2}/>
                    <Skeleton width="100%" height="20px" mt={2}/>
                    <Skeleton width="100%" height="20px" mt={2}/>
                </Box>
            </Flex>
        )
    }

    return (
        <div>
            Skeleton
        </div>
    )
};