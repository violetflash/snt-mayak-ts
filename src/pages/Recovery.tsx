import React from 'react';
import {PageContainer, ReturnButton, SectionTitle} from "../components/ui";
import {RecoveryForm} from "../components";

export const Recovery = () => {
    return (
        <PageContainer>
            <SectionTitle text="Восстановление пароля"/>
            <ReturnButton/>
            <RecoveryForm/>
        </PageContainer>
    )
};