import React from 'react';
import {ChevronDownIcon, SettingsIcon} from "@chakra-ui/icons";
import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    MenuDivider,
    Portal,
    MenuGroup,
    Flex
} from "@chakra-ui/react";

import {UserAvatar} from "../UserAvatar/UserAvatar";
import {capitalizeFirst, userMenuLinksData} from "../../../utils/constants";
import {Logout} from '../../Logout/Logout';
import { UserName } from '../../ui/UserName/UserName';


// type userMenuLinkDataType = {
//     id: string,
//     title: string,
//     route: string,
//     icon:  ComponentWithAs<"svg", IconProps>
// }

const menuBtnSettings = {
    justifyContent: "flex-start",
    variant: "ghost",
    borderRadius: "none",
    fontWeight: "normal",
    icon: <SettingsIcon/>
}

export const UserMenu = () => {

    const menuLinks = userMenuLinksData.map(link => (
        <MenuItem
            key={link.id}
            {...menuBtnSettings}
            icon={link.icon}
        >
            {capitalizeFirst(link.title)}
        </MenuItem>
    ));

    return (
        <Menu >
            {({isOpen}) => (
                <>
                    <MenuButton
                        as={Button}
                        // display={['flex', 'flex', 'none', 'none']}
                        leftIcon={<ChevronDownIcon transition="all 0.3s" transform={isOpen ? "scaleY(-1)" : 'none'}/>}
                        variant="pure"
                        p="0 0 0 20px"
                        height="65px"
                        _focus={{boxShadow: "none"}}
                    >
                        <UserAvatar/>
                    </MenuButton>
                    <Portal>
                        <MenuList minWidth="400px">
                            <Flex p="10px 15px" justify="flex-end" >
                                <UserName i/>
                            </Flex>
                            <MenuDivider/>
                            <MenuGroup title="Меню">
                                {menuLinks}
                            </MenuGroup>
                            <MenuDivider/>
                            <Flex justify="flex-end" p="0 0.4rem">
                                <Logout/>
                            </Flex>
                        </MenuList>
                    </Portal>
                </>
            )}
        </Menu>
    )
};