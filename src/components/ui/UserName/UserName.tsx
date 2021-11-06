import React from 'react';
import {useSelector} from "react-redux";
import { Text } from "@chakra-ui/react";
import {getFirstWord} from "../../../utils/constants";

type propsType = {
    first?: boolean,
    i?: boolean
}

export const UserName = ({ first, i } : propsType) => {
    const { name } = useSelector(state => state.user);
    return (
        <Text fontSize="md" as={i ? 'i' : 'span'}>
            {first ? getFirstWord(name) : name}
        </Text>
    )
};