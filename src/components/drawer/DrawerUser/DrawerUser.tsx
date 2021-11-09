import React from 'react';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import {Box, Flex, IconButton} from "@chakra-ui/react";
import {UserAvatar} from "../../header";
import {userMenuLinksData} from "../../../utils/constants";
import {Logout} from "../../Logout/Logout";
import {UserName} from "../../ui/UserName/UserName";

type propsType = {
    onClose: Function
};

const DrawerUser = ({ onClose }: propsType) => {
    const {pathname} = useLocation();

    const handleClose = () => {
        onClose();
    };

    const userLinks = userMenuLinksData.map(link => (
        <IconButton
            as={RouterLink}
            key={link.id}
            aria-label={link.title}
            icon={link.icon}
            to={link.route}
            variant="pure"
            mr="15px"
            bg={pathname === link.route ? "orange.300" : "transparent"}
            color={pathname === link.route ? "black" : "inherit"}
            onClick={handleClose}
        />
    ))

    return (
        <Box>
            <Flex align="center" p="30px 0  16px 0">
                <UserAvatar/>
                <Box ml="15px">
                    <UserName first/>
                </Box>
            </Flex>
            <Flex justify="space-between" pt="16px">
                <Box>
                    {userLinks}
                </Box>
                <Logout/>
            </Flex>
        </Box>
    );
};

export default DrawerUser;
