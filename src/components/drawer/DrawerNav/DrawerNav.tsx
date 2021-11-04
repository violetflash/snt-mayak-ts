import React from 'react';
import {Button, ListItem, UnorderedList} from "@chakra-ui/react";
import { navData } from '../../../utils/constants';

type propsType = {
    onClose: Function
}

export const DrawerNav = ({ onClose } : propsType) => {

    const handleClose = () => {
        onClose();
    };

    const navLinks = navData.map(el => (
        <ListItem key={el.id}>
            <Button onClick={handleClose}>{el.title}</Button>
        </ListItem>
    ));

    return (
        <UnorderedList
            listStyleType="none"
        >
            {navLinks}
        </UnorderedList>
    );

};