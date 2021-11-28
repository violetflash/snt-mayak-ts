import React from 'react';
import {Flex, WrapItem, Box, Button} from "@chakra-ui/react"
import { UserMenu } from '../UserMenu/UserMenu';

import {UserName} from "../../ui/UserName/UserName";
import { useTypedSelector } from '../../../redux';
import {Link} from "react-router-dom";

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

    return isLoggedIn ? loggedUser : <Button as={Link} to="/login">Вход</Button>;
};
