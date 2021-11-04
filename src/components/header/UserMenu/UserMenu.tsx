import React from 'react';
import {ChevronDownIcon, SettingsIcon} from "@chakra-ui/icons";
import {
    Button,
    Text,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    MenuDivider,
    Portal,
    MenuGroup,
    ComponentWithAs,
    IconProps
} from "@chakra-ui/react";
import { FaPowerOff, FaRegMoneyBillAlt } from "react-icons/fa"
import { useTheme } from '@chakra-ui/react';
import {UserAvatar} from "../UserAvatar/UserAvatar";
import { capitalizeFirst, userMenuLinksData } from "../../../utils/constants";

type userMenuLinkDataType = {
    id: string,
    title: string,
    route: string,
    icon:  ComponentWithAs<"svg", IconProps>
}

const menuBtnSettings = {
    // as: Button,
    justifyContent: "flex-start",
    variant: "ghost",
    borderRadius: "none",
    fontWeight: "normal",
    icon: <SettingsIcon/>
}

export const UserMenu = () => {
    const theme = useTheme();

    const exitHandle = () => {
        console.log('Выход');
    };


    return (
        <Menu>
            {({ isOpen }) => (
                <>
                    <MenuButton
                        as={Button}
                        // display={['flex', 'flex', 'none', 'none']}
                        leftIcon={<ChevronDownIcon transition="all 0.3s" transform={isOpen ? "scaleY(-1)" : 'none'} />}
                        variant="pure"
                        _focus={{boxShadow: "none"}}
                    >
                        <UserAvatar />
                    </MenuButton>
                    <Portal>
                        <MenuList minWidth="400px">
                            <Text casing="uppercase" p="10px 15px" textAlign="right">Alexander Grobovsky</Text>
                            <MenuDivider />
                            <MenuGroup title="Меню">
                                {userMenuLinksData.map((link ): userMenuLinkDataType => (
                                    <MenuItem id={link.id} {...menuBtnSettings} icon={link.icon}>{capitalizeFirst(link.title)}</MenuItem>
                                ))}
                            </MenuGroup>
                            <MenuDivider />
                            <MenuItem
                                // as={Button}
                                ml="auto"
                                width="auto"
                                fontWeight="normal"
                                borderRadius="6px"
                                variant="ghost"
                                icon={<FaPowerOff color={theme.colors.cyan[200]} />}
                                onClick={exitHandle}
                            >
                                Выйти
                            </MenuItem>
                        </MenuList>
                    </Portal>
                </>
                )


            }
        </Menu>
    )
};