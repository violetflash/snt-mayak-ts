import React from 'react';
import {Flex, Skeleton} from "@chakra-ui/react";

export const HeaderUserSkeleton = () => {
    return (
        <Flex align="center">
            <Skeleton width="80px" height="20px"/>
            <Skeleton ml="20px" rounded="md" width="65px" height="65px"/>
        </Flex>
    )
};