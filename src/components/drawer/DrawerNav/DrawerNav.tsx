import React from 'react';
import {Button, ListItem, UnorderedList} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {AnimatePresence, motion } from 'framer-motion';
import {capitalizeFirst, navData} from '../../../utils/constants';

type propsType = {
    onClose: Function
};

const MotionListItem = motion(ListItem);
const MotionList = motion(UnorderedList);

const listVariants = {
    closed: {
        transition: {
            staggerChildren: 0.15,
            // staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.15,
            // staggerDirection: 1
        }
    }
};

const itemVariants = {
    closed: {

        opacity: 0,
        y: 10,
    },
    open: {
        opacity: 1,
        y: 0,

    },

};


export const DrawerNav = ({ onClose } : propsType) => {
    const { path } = useLocation();

    const handleClose = () => {
        onClose();
    };

    const navLinks = navData.map(el => (
        <MotionListItem
            variants={itemVariants}
            key={el.id}
            transition={{staggerChildren: 1.3}}
        >
            <Button
                as={RouterLink}
                to={el.route}
                onClick={handleClose}
                w="100%"
                mb="20px"
                p="0"
                variant="pure"
            >
                {capitalizeFirst(el.title)}
            </Button>
        </MotionListItem>
    ));

    return (
        <AnimatePresence>
            <MotionList
                initial="closed"
                animate="open"
                exit="closed"
                variants={listVariants}
                listStyleType="none"
                p="0"
                m="30px 0 0 0"
            >
                {navLinks}
            </MotionList>
        </AnimatePresence>
    );
};
