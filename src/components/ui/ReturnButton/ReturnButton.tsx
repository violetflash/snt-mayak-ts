import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Link} from "@chakra-ui/react";
import {ArrowBackIcon} from "@chakra-ui/icons";

export const ReturnButton = () => {
    const navigate = useNavigate();
    return (
        <Button as={Link} leftIcon={<ArrowBackIcon/>} variant="raw" onClick={() => navigate(-1)}>
            Назад
        </Button>
    )
};