import React from 'react';
import {Flex, WrapItem, Button, Text} from "@chakra-ui/react"
import { UserMenu } from '../UserMenu/UserMenu';

export const User = () => {
    const loggedUser = true;

    const login = <Button
        variant="outline"
        _hover={{ bg: "blue.200", color: "black" }}
        _active={{ bg: "blue.100" }}
        _expanded={{ bg: "blue.200", color: "black" }}
        _focus={{ boxShadow: "outline" }}
    >
        Войти</Button>

    const logged =
        <WrapItem>
            <Flex align="center">
                <Text display={['none', 'none', 'block', 'block']}>Александр</Text>
                <UserMenu/>
            </Flex>
        </WrapItem>
    ;

    return loggedUser ? logged : login;
};