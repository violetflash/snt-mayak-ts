import React from 'react';
import {Button, useColorModeValue} from "@chakra-ui/react";
import {login, useAppDispatch, useTypedSelector} from '../../../../redux';
import {Link, useLocation, useNavigate,} from 'react-router-dom';
import {loginWithGoogle} from "../../../../redux";
// import {LoaderSpinner} from "../ui";

interface ILoginButton {
    onClick?: () => void;
}

export const LoginButton = ({onClick}: ILoginButton) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const {isLoading} = useTypedSelector(state => state.auth);
    const bgVariants = useColorModeValue("orange.300", "orange.400");

    //смотрим, был ли сохранен последний маршрут?
    // const from = location.state?.from?.pathname || "/";

    // const loginHandle = () => {
    //     dispatch(login());
    //     dispatch(loginWithGoogle());
    //     // перенаправление на сохраненный маршрут при авторизации
    //     // navigate(from, { replace: true });
    // };

    return (
        <Button
            as={Link} to="/login"
            colorScheme="gray"
            isLoading={isLoading}
            // spinner={<LoaderSpinner/>}
            loadingText="Войти"
            variant="outline"
            borderColor={pathname === "/login" ? bgVariants : "inherit"}
            // _hover={{ bg: "blue.200", color: "black" }}
            // _active={{ bg: "blue.100" }}
            // _expanded={{ bg: "blue.200", color: "black" }}
            onClick={onClick}
        >
            Войти
        </Button>
    )
};
