import React from 'react';
import {
    DrawerContent,
    useDisclosure,
    DrawerCloseButton,
    DrawerOverlay,
    DrawerBody,
    DrawerHeader,
    DrawerFooter,
    Drawer, Divider, IconButton, Box,
} from '@chakra-ui/react';

import DrawerUser from "../DrawerUser/DrawerUser";
import { HamburgerIcon } from '@chakra-ui/icons';
import { LoginButton } from '../../LoginButton/LoginButton';
import { NavMobile } from '../../Nav/NavMobile';
import {LogoSvg} from "../../Logo/LogoSVG";
import { useSelector } from '../../../redux';



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
                        <Box mt="30px" width="100%" height="80px">
                            <LogoSvg opacity="0.5"/>
                        </Box>
                        <NavMobile onClose={onClose}/>
                    </DrawerBody>
                    <DrawerFooter>
                        {/*<Logo/>*/}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
