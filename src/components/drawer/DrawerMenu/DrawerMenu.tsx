import React from 'react';
import {
    DrawerContent,
    useDisclosure,
    DrawerCloseButton,
    DrawerOverlay,
    DrawerBody,
    DrawerHeader,
    DrawerFooter,
    Drawer, Divider, IconButton, Box, Button,
} from '@chakra-ui/react';

import DrawerUser from "../DrawerUser/DrawerUser";
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavMobile } from '../../Nav/NavMobile';
import {LogoSvg} from "../../Logo/LogoSVG";
import { useTypedSelector } from '../../../redux';
import {Link} from "react-router-dom";



export const DrawerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef(null);

    const { isLoggedIn } = useTypedSelector(state => state.auth);

    const headerContent = isLoggedIn ? <DrawerUser onClose={onClose}/> : <Button as={Link} to="/login">Вход</Button>;

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
