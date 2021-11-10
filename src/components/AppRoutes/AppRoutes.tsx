import React from 'react';
import {Route, Routes} from "react-router-dom";
import { RequireAuth } from '../RequireAuth/RequireAuth';
import {authRoutes, routes } from './routes';

export const AppRoutes = () => {
    const publicRoutes = routes.map((route) => (
        <Route path={route.path} element={route.element}/>
    ));

    const privateRoutes = authRoutes.map((route) => (
        <Route path={route.path} element={<RequireAuth>{route.element}</RequireAuth>}/>
    ))

    return (
        <Routes>
            {publicRoutes}
            {privateRoutes}
        </Routes>
    )
};
