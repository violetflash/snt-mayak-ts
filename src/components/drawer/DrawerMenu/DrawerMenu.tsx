import React from 'react';
import {
    Button,
    DrawerContent,
    Input,
    useDisclosure,
    DrawerCloseButton,
    DrawerOverlay,
    DrawerBody,
    DrawerHeader,
    DrawerFooter,
    Drawer, Divider, Flex, IconButton,
} from '@chakra-ui/react';
import { Burger } from '../../ui/Burger/Burger';
import { UserAvatar } from '../../header';
import {DrawerNav} from "../DrawerNav/DrawerNav";
import DrawerUser from "../DrawerUser/DrawerUser";
import { HamburgerIcon } from '@chakra-ui/icons';


export const DrawerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef(null)

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
                        <DrawerUser onClose={onClose}/>
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