import React from 'react';
import {Flex, WrapItem, Box} from "@chakra-ui/react"
import { UserMenu } from '../UserMenu/UserMenu';
import {UserName} from "../../ui/UserName/UserName";
import { useTypedSelector } from '../../../redux';
import {LoginButton} from "../../ui/";

export const User = () => {
    const { isLoggedIn } = useTypedSelector(state => state.auth);

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

    return isLoggedIn ? loggedUser : <LoginButton/>;
};
