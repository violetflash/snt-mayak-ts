import {About, AnnounceIdPage, Contacts, Documents, Main, NotFound, Questions, UserSettings} from "../../pages";
import React from "react";

export const routes = [
    {path: "/about", element: <About/>},
    {path: "/documents", element: <Documents/>},
    {path: "/contacts", element: <Contacts/>},
    {path: "/questions", element: <Questions/>},
    {path: "/announces/:id", element: <AnnounceIdPage/>},
    {path: "/*", element: <NotFound/>},
];

export const authRoutes = [
    {path: "/account-settings", element: <UserSettings/>}
];
