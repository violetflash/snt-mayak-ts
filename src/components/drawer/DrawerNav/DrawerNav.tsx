import React from 'react';
import {Button, Divider, ListItem, UnorderedList} from "@chakra-ui/react";
import {capitalizeFirst, navData} from '../../../utils/constants';

type propsType = {
    onClose: Function
}

export const DrawerNav = ({ onClose } : propsType) => {

    const handleClose = () => {
        onClose();
    };

    const navLinks = navData.map(el => (
        <ListItem key={el.id}>
            <Button onClick={handleClose} w="100%" mb="20px" p="0" variant="pure">{capitalizeFirst(el.title)}</Button>
        </ListItem>
    ));

    return (
        <UnorderedList
            listStyleType="none"
            p="0"
            m="30px 0 0 0"
        >
            {navLinks}
        </UnorderedList>
    );

};