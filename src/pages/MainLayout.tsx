import React from 'react';
import { Outlet } from "react-router-dom";
import {Header} from "../components";
import {Nav} from "../components/Nav/Nav";
import {Box, Flex, useMediaQuery} from "@chakra-ui/react";
import {Footer} from "../components/Footer/Footer";

export const MainLayout = () => {
    const [isLargerThan480] = useMediaQuery("(min-width: 479px)")

    return (
        <Flex className="App-flex-wrapper" direction="column" minH="100%">
            <Header/>
            {isLargerThan480 && <Nav/>}
            <Box className="App-content"  flex="1 0 auto" w="100%">
                <Outlet/>
            </Box>
            <Footer/>
        </Flex>
    )
};