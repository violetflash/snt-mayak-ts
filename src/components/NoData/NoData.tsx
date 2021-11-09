import React from 'react';
import {Center} from "@chakra-ui/react";

type propsType = {
    text: string
}

export const NoData = ({ text } : propsType) => {
    return (
        <Center
            as="i"
        >
            {text}
        </Center>
    )
};
