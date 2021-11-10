import {About, AnnounceIdPage, Contacts, Documents, Main, Questions, UserSettings} from "../../pages";
import React from "react";

export const routes = [
    {path: "/", element: <Main/>},
    {path: "/about", element: <About/>},
    {path: "/documents", element: <Documents/>},
    {path: "/contacts", element: <Contacts/>},
    {path: "/questions", element: <Questions/>},
    {path: "/announces/:id", element: <AnnounceIdPage/>},
];

export const authRoutes = [
    {path: "/account-settings", element: <UserSettings/>}
];
