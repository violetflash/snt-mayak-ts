import React from 'react';
import {Box, Button, Container, Flex, useColorMode} from "@chakra-ui/react";
import {Link as RouterLink, useLocation} from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion';
import {capitalizeFirst, navData} from "../../utils/constants";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const variant = {
    open: {
        scaleX: 1,
        borderRadius: 0
    },
    close: {
        scaleX: 0,
    }
};

export const Nav = () => {
    const { colorMode } = useColorMode();
    const { pathname } = useLocation();
    const linkBg = colorMode === "light" ? "white" : "gray.800";
    const linkColor = colorMode === "light" ? "yellow.700" : "yellow.400";

    const navLinks = navData.map(link => {
        return (
            <MotionFlex
                key={link.id}
                className="NavLink-flex-container"
                position="relative"
                justify="center"
                align="center"
                height="40px"
                initial="rest"
                // whileHover="hover"
                animate={pathname === link.route ? "open" : 'close'}
                // animate="rest"
            >
                <Button
                    as={RouterLink}
                    to={link.route}
                    variant="pure"
                    // p={["0", "0", "0 16px", "0 16px"]}
                    // p="0 16px"
                    borderRadius="0"
                    // color={colorMode === "light" ? "black" : "white"}
                    color={pathname === link.route ? linkColor : "black"}
                    // bg={pathname === link.route ? linkBg : "inherit"}
                    fontFamily="Cuprum"
                    fontWeight="500"
                    fontSize="lg"
                    zIndex="1"

                >
                    {capitalizeFirst(link.title)}
                </Button>
                <MotionBox
                    position="absolute"
                    bg={linkBg}
                    borderRadius="4px"
                    width="100%"
                    height="40px"
                    zIndex="0"
                    variants={variant}
                />
            </MotionFlex>
        )
    });

    return (
        <Box as="nav" className="Nav" bgGradient="linear(to-r, cyan.200, green.300, cyan.200)">
            <Container maxW="container.xl">
                <AnimatePresence initial={false}>
                    <Flex

                        // justify={["space-between", "space-between", "space-around", "space-around", "space-around"]}
                        justify="space-around"
                        className="Nav-flex-wrapper">
                        {navLinks}
                    </Flex>
                </AnimatePresence>

            </Container>
        </Box>
    )
};
