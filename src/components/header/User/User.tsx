import React from 'react';
import {Flex, WrapItem, Box} from "@chakra-ui/react"
import { UserMenu } from '../UserMenu/UserMenu';

import { LoginButton } from '../../LoginButton/LoginButton';
import {UserName} from "../../ui/UserName/UserName";
import { useSelector } from '../../../redux';

export const User = () => {
    const { logged } = useSelector(state => state.user);

    const loggedUser =
        <WrapItem>
            <Flex align="center">
                <Box display={['none', 'none', 'block', 'block']}>
                    <UserName first/>
                </Box>
                <UserMenu/>
            </Flex>
        </WrapItem>
    ;

    return logged ? loggedUser : <LoginButton/>;
};
