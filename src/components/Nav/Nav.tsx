import React from 'react';
import { Box, Button, Container, Flex, useColorMode } from "@chakra-ui/react";
import {Link as RouterLink, useLocation} from "react-router-dom";
import {capitalizeFirst, navData} from "../../utils/constants";

export const Nav = () => {
    const { colorMode } = useColorMode();
    const { pathname } = useLocation();
    const linkBg = colorMode === "light" ? "white" : "gray.800";
    console.log(colorMode);
    const navLinks = navData.map(link => (
        <Button
            as={RouterLink}
            key={link.id}
            to={link.route}
            variant="pure"
            p={["0", "0", "0 16px", "0 16px"]}
            borderRadius="0"
            // color={colorMode === "light" ? "black" : "white"}
            bg={pathname === link.route ? linkBg : "inherit"}
            fontFamily="Cuprum"
            fontWeight="500"
        >
            {capitalizeFirst(link.title)}
        </Button>
    ))

    return (
        <Box as="nav" className="Nav" bgGradient="linear(to-r, cyan.200, green.300, cyan.200)">
            <Container maxW="container.xl">
                <Flex
                    justify={["space-between", "space-between", "space-around", "space-around", "space-around"]}
                    className="Nav-flex-wrapper">
                    {navLinks}
                </Flex>
            </Container>
        </Box>
    )
};