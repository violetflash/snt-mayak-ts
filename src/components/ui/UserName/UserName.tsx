import React from 'react';
import {useSelector} from "react-redux";
import { Text } from "@chakra-ui/react";
import {getFirstWord} from "../../../utils/constants";

type propsType = {
    first?: boolean
}

export const UserName = ({ first } : propsType) => {
    const { name } = useSelector(state => state.user);
    return (
        <Text fontSize="md">
            {first ? getFirstWord(name) : name}
        </Text>
    )
};