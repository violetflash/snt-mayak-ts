import React from 'react';
import {Box, Flex, IconButton} from "@chakra-ui/react";
import {UserAvatar} from "../../header";
import {userMenuLinksData} from "../../../utils/constants";
import {ColorModeSwitcher} from "../../header/ColorModeSwitcher";
import {Logout} from "../../Logout/Logout";
import {UserName} from "../../ui/UserName/UserName";

type propsType = {
    onClose: Function
};

const DrawerUser = ({ onClose }: propsType) => {


    const handleClose = () => {
        onClose();
    };

    const userLinks = userMenuLinksData.map(link => (
        <IconButton
            key={link.id}
            aria-label={link.title}
            icon={link.icon}
            to={link.route}
            variant="pure"
            mr="15px"
            onClick={handleClose}
        />
    ))

    return (
        <Box>
            <Flex align="flex-end" p="30px 0  16px 0">
                <UserAvatar/>
                <Box ml="15px">
                    <UserName/>
                </Box>

                {/*<Heading size="md">Константинов Константин Константинович</Heading>*/}
            </Flex>
            {/*<Divider/>*/}
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
