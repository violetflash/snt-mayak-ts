import React from 'react';
import {Button} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import { login } from '../../redux';

export const LoginButton = () => {
    const dispatch = useDispatch();

    return (
        <Button
            variant="outline"
            _hover={{ bg: "blue.200", color: "black" }}
            _active={{ bg: "blue.100" }}
            _expanded={{ bg: "blue.200", color: "black" }}
            _focus={{ boxShadow: "outline" }}
            onClick={()=> dispatch(login())}
        >
            Войти
        </Button>
    )
};