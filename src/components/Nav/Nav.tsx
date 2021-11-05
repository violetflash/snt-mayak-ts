import React from 'react';
import {Box, Button, Container, Flex, ListItem} from "@chakra-ui/react";
import {capitalizeFirst, navData} from "../../utils/constants";

export const Nav = () => {

    const navLinks = navData.map(link => (
        <Button
            key={link.id}
            to={link.route}
            variant="pure"
            p={["0", "0", "0 16px", "0 16px"]}
            color="black"
            fontFamily="Cuprum"
            fontWeight="500"
        >
            {capitalizeFirst(link.title)}
        </Button>
    ))

    return (
        <Box as="nav" className="Nav" bgGradient="linear(to-r, cyan.200, green.300, cyan.200)" py="5px">
            <Container maxW="container.xl">
                <Flex justify={["space-between", "space-between", "space-around", "space-around", "space-around"]} className="Nav-flex-wrapper">
                    {navLinks}
                </Flex>
            </Container>
        </Box>
    )
};