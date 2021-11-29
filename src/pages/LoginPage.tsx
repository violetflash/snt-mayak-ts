import React from 'react';
import {PageContainer, SectionTitle, TabsLayout} from "../components/ui";
import {LoginForm, RegisterForm} from "../components/ui";
import {useNavigate} from 'react-router-dom';
import { useTypedSelector } from '../redux';

export const LoginPage = () => {
    const navigate = useNavigate();
    const {isLoggedIn} = useTypedSelector(state => state.auth);


    if (isLoggedIn) {
        navigate("/");
    }

    return (
        <PageContainer p="0 0 60px">
            <SectionTitle text="Вход на сайт"/>
            <TabsLayout titles={["Войти", "Зарегистрироваться"]} components={[<LoginForm/>, <RegisterForm/>]}/>
        </PageContainer>
    )
};