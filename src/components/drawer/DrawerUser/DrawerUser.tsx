import React from 'react';
import {Box, Button, Divider, Flex, Heading, IconButton} from "@chakra-ui/react";
import {UserAvatar} from "../../header";
import {userMenuLinksData} from "../../../utils/constants";
import {ColorModeSwitcher} from "../../header/ColorModeSwitcher";

type propsType = {
    onClose: Function
};

const DrawerUser = ({ onClose }: propsType) => {

    const handleClose = () => {
        onClose();
    };

    const logoutHandle = () => {
        onClose();
        console.log('logout');
    }

    const userLinks = userMenuLinksData.map(link => (
        <IconButton
            key={link.id}
            aria-label={link.title}
            icon={link.icon}
            to={link.route}
            variant="outline"
            mr="15px"
            onClick={handleClose}
        />
    ))

    return (
        <Box>
            <Flex align="flex-end" p="16px 0">
                <UserAvatar/>
                <Heading size="md" ml="15px">Александр Гробовский</Heading>
            </Flex>
            <Divider/>
            <Flex justify="space-between" pt="16px">
                <Box>
                    <ColorModeSwitcher mr="15px"/>
                    {userLinks}
                </Box>
                <Button colorScheme="teal" onClick={logoutHandle}>Выйти</Button>
            </Flex>
        </Box>
    );
};

export default DrawerUser;