import {
    About,
    AnnounceIdPage,
    Contacts,
    Documents,
    LoginPage,
    NotFound,
    Questions,
    Recovery,
    UserSettings
} from "../../pages";
import React from "react";

export const routes = [
    {path: "/about", element: <About/>},
    {path: "/documents", element: <Documents/>},
    {path: "/contacts", element: <Contacts/>},
    {path: "/questions", element: <Questions/>},
    {path: "/announces/:id", element: <AnnounceIdPage/>},
    {path: "/login", element: <LoginPage/>},
    {path: "/recovery", element: <Recovery/>},
    {path: "/*", element: <NotFound/>},
];

export const authRoutes = [
    {path: "/account-settings", element: <UserSettings/>}
];
