import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";
import React from "react";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const {logged} = useSelector(state => state.user);
    let location = useLocation();

    if (!logged) {
        // Если не авторизован, то идет перенаправление с этой страницы на главную, но маршрут запомнится
        // При авторизации произойдет автоматич. перенаправление на эту страницу
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
}
