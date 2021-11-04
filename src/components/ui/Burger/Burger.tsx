import { Box, Button } from '@chakra-ui/react';
import React from 'react';

type propsType = {
    isOpened: boolean
}

const buttonStyles = {
    padding: '0',
    width: '24px',
    height: '16px',
    transform: 'rotate(0deg)',
    transition: '0.5s ease-in-out',
    cursor: 'pointer',
}

const spanStyles = {
    display: 'block',
    height: '3px',
    width: '100%',
    backgroundColor: 'blue.300',
    borderRadius: '9px',
    opacity: 1,
    left: 0,
    transform: 'rotate(0deg)',
    transition: '0.25s ease-in-out',
}

export const Burger = ({ isOpened }: propsType) => {
    return (
        <Button variant="pure" className="BurgerMenu" position="relative" {...buttonStyles}>
            <Box
                as="span"
                position="absolute"
                top='0'
                {...spanStyles}
            />
            <Box
                as="span"
                position="absolute"
                top='7px'
                {...spanStyles}
            />
            <Box
                as="span"
                position="absolute"
                top='14px'
                {...spanStyles}
            />
        </Button>
    )
};