import {Box, Button, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';

const buttonStyles = {
    padding: '0',
    minWidth: '0',
    width: '40px',
    height: '16px',
    transform: 'rotate(0deg)',
    transition: '0.5s ease-in-out',
    cursor: 'pointer',
}

const spanStyles = {
    display: 'block',
    height: '4px',
    width: '100%',
    backgroundColor: 'blue.300',
    borderRadius: '9px',
    opacity: 1,
    left: 0,
    transform: 'rotate(0deg)',
    transition: 'all 0.25s ease-in-out',
}

type propTypes = {
    isOpen: boolean,
    onOpen: Function,
    onClose: Function,
}

export const Burger = ({isOpen, onOpen, onClose}: propTypes) => {

    const handleOpen = () => {
        if (isOpen) {
            onClose();
            return;
        }

        onOpen();

    }

    return (
        <Button
            variant="pure"
            className="BurgerMenu"
            position="relative" {...buttonStyles}
            onClick={handleOpen}
            _focus={{boxShadow: 'none'}}
        >
            <Box
                as="span"
                position="absolute"
                {...spanStyles}
                top={isOpen ? '10px' : '0'}
                transform={isOpen ? 'rotate(135deg)' : 'rotate(0)'}
            />
            <Box
                as="span"
                position="absolute"
                top='10px'
                {...spanStyles}
                transform={isOpen ? 'translateX(-20px)' : 'translateX(0)'}
                opacity={isOpen ? 0 : 1}
            />
            <Box
                as="span"
                position="absolute"
                {...spanStyles}
                top={isOpen ? '10px' : '20px'}
                transform={isOpen ? 'rotate(-135deg)' : 'rotate(0)'}
            />
        </Button>
    )
};