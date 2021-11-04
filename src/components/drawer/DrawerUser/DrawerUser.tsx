import React from 'react';
import {Box, Flex, Heading} from "@chakra-ui/react";
import {UserAvatar} from "../../header";

const DrawerUser = () => {
    return (
        <Box>
            <Flex>
                <UserAvatar/>
                <Heading>Александр Гробовский</Heading>
            </Flex>
            {/*<UserMenuLinks/>*/}
        </Box>

    );

};

export default DrawerUser;