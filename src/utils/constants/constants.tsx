import React from 'react';
import { ChatIcon, SettingsIcon } from "@chakra-ui/icons";


export const navData = [
    {id: 'nav-1', title: "главная", route: "/"},
    {id: 'nav-2', title: "о снт", route: "/about"},
    {id: 'nav-3', title: "документы", route: "/documents"},
    {id: 'nav-4', title: "контакты", route: "/contacts"},
];

export const userMenuLinksData = [
    {id: 'settings', title: "Настройки аккаунта", route: "/account-settings", icon: <SettingsIcon/>},
    {id: 'appeal', title: "Задать вопрос", route: "/questions", icon: <ChatIcon/>},
]

export const capitalizeFirst = (str: string) => {
    return str[0].toUpperCase() + str.slice(1);
}

export const capitalizeAll = (str: string) => {
    return str.split(' ').map((word) => capitalizeFirst(word)).join(' ');
};

export const getFirstWord = (str : string) => str.split(' ')[0];