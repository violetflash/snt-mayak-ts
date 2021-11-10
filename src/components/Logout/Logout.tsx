import React from 'react';
import {Button, useDisclosure, useTheme} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import {AlertPopup} from "../AlertPopup/AlertPopup";
import { FaPowerOff } from "react-icons/fa";
import { logout } from '../../redux';
import {useDispatch} from "react-redux";

export const Logout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const theme = useTheme();
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log('bye bye!');
        dispatch(logout());
        navigate("/" );
    };

    return (
        <>
            <Button
                // ml="auto"
                width="auto"
                fontWeight="normal"
                borderRadius="6px"
                variant="ghost"
                leftIcon={<FaPowerOff color={theme.colors.cyan[100]} />}
                onClick={onOpen}
            >
                Выйти
            </Button>
            <AlertPopup text="Выйти из аккаунта?" isOpen={isOpen} onClose={onClose} confirmFunc={handleLogout}/>
        </>
    )
};
