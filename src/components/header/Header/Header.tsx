import React from "react";
import {Box, Divider, Flex, useMediaQuery} from "@chakra-ui/react";
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
        <Box as="header" pt="10px" mb="10px" className="Header">
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
                    {isLessThan480 &&
                    <>
                      <ColorModeSwitcher mr="60px" className="ColorSwitcher"/>
                      <DrawerMenu/>
                    </>
                    }
                </Flex>
            </PageContainer>
            {isLessThan480 && <Divider pt="15px"/>}
        </Box>
    )
};
