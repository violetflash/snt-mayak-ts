import React from 'react';
import {
    DrawerContent,
    useDisclosure,
    DrawerCloseButton,
    DrawerOverlay,
    DrawerBody,
    DrawerHeader,
    DrawerFooter,
    Drawer, Divider, IconButton,
} from '@chakra-ui/react';

import { useSelector } from "react-redux";

import {DrawerNav} from "../DrawerNav/DrawerNav";
import DrawerUser from "../DrawerUser/DrawerUser";
import { HamburgerIcon } from '@chakra-ui/icons';
import { LoginButton } from '../../LoginButton/LoginButton';


export const DrawerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef(null);

    const { logged } = useSelector(state => state.user);

    const headerContent = logged ? <DrawerUser onClose={onClose}/> : <LoginButton/>;

    return (
        <>
            {/*<Burger isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>*/}
            <IconButton icon={<HamburgerIcon/>} aria-label="Открыть меню" onClick={onOpen}/>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
                size="full"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        {headerContent}
                    </DrawerHeader>
                    <Divider/>
                    <DrawerBody>
                        <DrawerNav onClose={onClose}/>
                    </DrawerBody>

                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}