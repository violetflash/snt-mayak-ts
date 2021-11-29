import React from 'react';
import {PageContainer, ReturnButton, SectionTitle, RecoveryForm} from "../components/ui";

export const Recovery = () => {
    return (
        <PageContainer p="0 0 100px">
            <SectionTitle text="Восстановление пароля"/>
            <ReturnButton/>
            <RecoveryForm/>
        </PageContainer>
    )
};