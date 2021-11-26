import {Navigate, useLocation} from "react-router-dom";
import React from "react";
import {useTypedSelector} from "../../redux";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const {isLoggedIn} = useTypedSelector(state => state.auth);
    let location = useLocation();

    if (!isLoggedIn) {
        // Если не авторизован, то идет перенаправление с этой страницы на главную, но маршрут запомнится
        // При авторизации произойдет автоматич. перенаправление на эту страницу
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
}
