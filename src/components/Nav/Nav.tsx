import React from 'react';
import {Box, Button, Container, Flex, useColorMode} from "@chakra-ui/react";
import {Link as RouterLink, useLocation} from "react-router-dom";
import {motion} from 'framer-motion';
import {capitalizeFirst, navData} from "../../utils/constants";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const variant = {
    hover: {
        scaleX: 1,
        borderRadius: 0
    },
    rest: {
        scaleX: 0,
    }
};

export const Nav = () => {
    const { colorMode } = useColorMode();
    const { pathname } = useLocation();
    const linkBg = colorMode === "light" ? "white" : "gray.800";
    const linkColor = colorMode === "light" ? "gray.800" : "white";
    console.log(colorMode);

    const navLinks = navData.map(link => (
        <MotionFlex
            key={link.id}
            className="NavLink-flex-container"
            position="relative"
            justify="center"
            align="center"
            height="40px"
            initial="rest"
            // whileHover="hover"
            animate={pathname === link.route ? "hover" : 'rest'}
            // animate="rest"
        >
            <Button
                as={RouterLink}
                _focus={{ boxShadow: "none"}}
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
    ));

    return (
        <Box as="nav" className="Nav" bgGradient="linear(to-r, cyan.200, green.300, cyan.200)">
            <Container maxW="container.xl">
                <Flex

                    // justify={["space-between", "space-between", "space-around", "space-around", "space-around"]}
                    justify="space-around"
                    className="Nav-flex-wrapper">
                    {navLinks}
                </Flex>
            </Container>
        </Box>
    )
};
