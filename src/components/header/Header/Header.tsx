import React from "react";
import {Box, Container, Flex, useMediaQuery} from "@chakra-ui/react";
import {Logo} from "../../Logo/Logo";
import {ColorModeSwitcher} from "../ColorModeSwitcher";
import {User} from "../User/User";
import {Contacts} from "../Contacts/Contacts";
import { DrawerMenu } from "../../drawer";
import {PageContainer} from "../../ui";

export const Header = () => {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
    const [isLargerThan480] = useMediaQuery("(min-width: 480px)")
    const [isLessThan480] = useMediaQuery("(max-width: 479px)")

    return (
        <Box as="header" py="10px" className="Header">
            <PageContainer>
                <Flex justify="space-between" align="center" className="Header-content">
                    <Logo/>
                    {isLargerThan768 && <Contacts/>}
                    {isLargerThan480 &&
                    <Flex align="center" className="flex-wrapper">
                      <ColorModeSwitcher mr="60px" className="ColorSwitcher"/>
                      <User/>
                    </Flex>
                    }
                    {isLessThan480 && <DrawerMenu/>}
                </Flex>
            </PageContainer>
        </Box>
    )
};