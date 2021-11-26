import React from 'react';
import { Text } from "@chakra-ui/react";
import {getFirstWord} from "../../../utils/constants";
import {useTypedSelector} from "../../../redux";

type propsType = {
    first?: boolean,
    i?: boolean,
    p?: string
}

export const UserName = ({ first, i, p } : propsType) => {
    const { displayName } = useTypedSelector(state => state.auth);
    return (
        <Text
            fontSize="md"
            as={i ? 'i' : 'span'}
            p={p}
        >
            {first ? getFirstWord(displayName) : displayName}
        </Text>
    )
};
