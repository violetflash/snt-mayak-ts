import React from 'react';
import {ChevronDownIcon, SettingsIcon} from "@chakra-ui/icons";
import {Button, Text, Menu, MenuButton, MenuItem, MenuList, MenuDivider, Portal, MenuGroup} from "@chakra-ui/react";
import { FaPowerOff, FaRegMoneyBillAlt } from "react-icons/fa"
import { useTheme } from '@chakra-ui/react';
import {UserAvatar} from "../UserAvatar/UserAvatar";

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
                                <MenuItem {...menuBtnSettings} tabIndex={1} autoFocus={true}>Настройки аккаунта</MenuItem>
                                <MenuItem {...menuBtnSettings} tabIndex={0} icon={<FaRegMoneyBillAlt/>}>Мои объявления</MenuItem>
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