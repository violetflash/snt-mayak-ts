import React from 'react';
import {Box, Text, Flex, useColorModeValue} from "@chakra-ui/react";

import {LogoSvg} from "./LogoSVG";

export const Logo = () => {
    const decorBg = useColorModeValue("orange.300", "orange.400");
    return (

        <Flex as="figure" align="center" flexDirection="column" className="Logo">
            <Box width="90px" height="30px">
                <LogoSvg/>
            </Box>
            <Flex
                as="figcaption"
                align="flex-end"
                mt="-1px"
                position="relative"
                _before={{
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "3px",
                    bottom: "-6px",
                    borderRadius: "0 0 4px 4px",
                    bg: decorBg,
                    opacity: "0.6",
                }}
            >
                <Text fontSize="md" lineHeight="1" fontFamily="logo">снт</Text>
                <Text fontSize="xl" lineHeight="1" fontFamily="logo" ml="10px" casing="uppercase">маяк</Text>
            </Flex>
            {/*<Code color="cyan.500">hello</Code>*/}
        </Flex>
    );
};