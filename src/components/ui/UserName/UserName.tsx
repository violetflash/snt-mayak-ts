import React from 'react';
import {useSelector} from "react-redux";
import { Text } from "@chakra-ui/react";
import {getFirstWord} from "../../../utils/constants";

type propsType = {
    first?: boolean,
    i?: boolean,
    p?: string
}

export const UserName = ({ first, i, p } : propsType) => {
    const { name } = useSelector(state => state.user);
    return (
        <Text
            fontSize="md"
            as={i ? 'i' : 'span'}
            p={p}
        >
            {first ? getFirstWord(name) : name}
        </Text>
    )
};