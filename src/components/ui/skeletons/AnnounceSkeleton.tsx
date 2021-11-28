import React from 'react';
import {Box, Center, Flex, Skeleton} from "@chakra-ui/react";

export const AnnounceSkeleton = () => {
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
                    <Box>
                        <Skeleton
                            width="290px"
                            height="30px"
                            m={["0 auto 20px", "0 auto 20px", "0 0 20px", "0 0 20px",]}
                        />
                    </Box>
                    <Box mb="15px">
                        <Skeleton
                            width="160px"
                            height="30px"
                            m={["0 auto 0 0", "0 auto 0 0", "0", "0"]}
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
};