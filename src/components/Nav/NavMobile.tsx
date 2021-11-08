import React from 'react';
import {Button, ListItem, UnorderedList} from "@chakra-ui/react";
import {Link as RouterLink, useLocation} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';
import {capitalizeFirst, navData} from '../../utils/constants';

type propsType = {
    onClose: Function
};

const MotionListItem = motion(ListItem);
const MotionList = motion(UnorderedList);
const MotionButton = motion(Button);

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


export const NavMobile = ({onClose}: propsType) => {
    const {pathname} = useLocation();

    const handleClose = () => {
        onClose();
    };

    const navLinks = navData.map(el => (
        <MotionListItem
            variants={itemVariants}
            key={el.id}
        >
            <MotionButton
                position="relative"
                as={RouterLink}
                to={el.route}
                onClick={handleClose}
                w="100%"
                mb="20px"
                p="0"
                variant="pure"
                color={pathname === el.route && "orange.400"}
                textStyle={pathname === el.route && "italic"}
            >
                {capitalizeFirst(el.title)}
            </MotionButton>
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
                p="0 0 30px"
                m="30px 0 0 0"
            >
                {navLinks}
                <ListItem
                    // width: "100%",
                    height="5px"
                    bottom="-10px"
                    borderRadius="0 0 4px 4px"
                    bg="gray.300"
                    opacity="0.6"
                />
            </MotionList>
        </AnimatePresence>
    );
};
