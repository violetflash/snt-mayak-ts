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
    Drawer, Divider, Flex,
} from '@chakra-ui/react';
import { Burger } from '../../ui/Burger/Burger';
import { UserAvatar } from '../../header';
import {DrawerNav} from "../DrawerNav/DrawerNav";

export const DrawerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef(null)

    return (
        <>
            <Burger isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Flex>
                            <UserAvatar/>

                        </Flex>
                    </DrawerHeader>
                    <Divider/>
                    <DrawerBody>
                        <DrawerNav onClose={onClose}/>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue">Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}