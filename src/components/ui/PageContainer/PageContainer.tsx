import React, {FC} from 'react';
import {Container} from "@chakra-ui/react";

interface IContainerProps {
    p?: string;
    children: React.ReactNode;
}

export const PageContainer: FC<IContainerProps> = ({children, p}) => {
    return (
        <Container maxW="container.xl" p={p}>
            {children}
        </Container>
    );
};