import React from 'react';
import {Button} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import { login } from '../../redux';
import {useLocation, useNavigate,  } from 'react-router-dom';

export const LoginButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    //смотрим, был ли сохранен последний маршрут?
    const from = location.state?.from?.pathname || "/";

    const loginHandle = () => {
        dispatch(login());
        // перенаправление на сохраненный маршрут при авторизации
        navigate(from, { replace: true });
    };

    return (
        <Button
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
