import React from 'react';
import {PageContainer, ReturnButton, SectionTitle, RecoveryForm} from "../components/ui";

export const Recovery = () => {
    return (
        <PageContainer>
            <SectionTitle text="Восстановление пароля"/>
            <ReturnButton/>
            <RecoveryForm/>
        </PageContainer>
    )
};