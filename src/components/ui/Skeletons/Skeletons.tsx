import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import {Box, Center, Flex, Skeleton, SkeletonCircle, SkeletonText} from "@chakra-ui/react";

type propsType = {
    type: string
}

export const Skeletons = ({type}: propsType) => {
    if (type === 'announce') {
        return (
            <>
                <Center mb="30px">
                    <Box><Skeleton width="40px" height="40px"/></Box>
                    <Box ml="20px"><Skeleton width="40px" height="40px"/></Box>
                </Center>
                <Flex
                    justify="space-between"
                    direction={['column', 'column', 'column', 'row', 'row']}
                >
                    <Box
                        flex="0 1 37%"
                    >
                        <Box mb="15px">
                            <Skeleton
                                width="160px"
                                height="30px"
                                margin={{lg: "0", md: "0 0 0 auto", base: "0 0 0 auto"}}
                            />
                        </Box>
                        <Box>
                            <Skeleton
                                width="290px"
                                height="40px"

                                margin={{lg: "0", md: "0 auto 20px", base: "0 auto 20px"}}
                            />
                        </Box>
                    </Box>
                    <Box
                        flex="1"
                    >
                        <Skeleton width="90%" height="20px" mt={2} ml="auto"/>
                        <Skeleton width="100%" height="20px" mt={2}/>
                        <Skeleton width="100%" height="20px" mt={2}/>
                        <Skeleton width="100%" height="20px" mt={2}/>
                    </Box>
                </Flex>
            </>

        )
    }

    if (type === 'header-user') {
        return (
            <Flex align="center">
                <Skeleton width="80px" height="20px"/>
                <Skeleton ml="20px" rounded="md" width="65px" height="65px"/>
            </Flex>
        )
    }

    return (
        <div>
            Skeleton
        </div>
    )
};
