import {Route, Routes} from "react-router-dom";
import {MainLayout} from "../../pages/MainLayout";
import {Admin, Main} from "../../pages";
import * as React from "react";
import {authRoutes, routes} from "./routes";
import {RequireAuth} from "../RequireAuth/RequireAuth";


export const AppRoutes = () => {
    const publicRoutes = routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}/>
    ));

    const privateRoutes = authRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>}/>
    ));

    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Main/>}/>
                {publicRoutes}
                {privateRoutes}
            </Route>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
    )
};
