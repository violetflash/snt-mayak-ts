import React from 'react';
import {Button} from "@chakra-ui/react";
import {login, useAppDispatch, useTypedSelector} from '../../redux';
import {useLocation, useNavigate,  } from 'react-router-dom';
import {loginWithGoogle} from "../../redux";

export const LoginButton = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const {isLoading} = useTypedSelector(state => state.auth);

    //смотрим, был ли сохранен последний маршрут?
    const from = location.state?.from?.pathname || "/";

    const loginHandle = () => {
        dispatch(login());
        dispatch(loginWithGoogle());
        // перенаправление на сохраненный маршрут при авторизации
        navigate(from, { replace: true });
    };

    return (
        <Button
            colorScheme="gray"
            isLoading={isLoading}
            loadingText="Войти"
            variant="outline"
            _hover={{ bg: "blue.200", color: "black" }}
            _active={{ bg: "blue.100" }}
            _expanded={{ bg: "blue.200", color: "black" }}
            _focus={{ boxShadow: "outline" }}
            onClick={loginHandle}
        >
            Войти
        </Button>
    )
};
