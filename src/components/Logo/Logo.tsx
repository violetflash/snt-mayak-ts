import React from 'react';
import { Box, Text, Flex } from "@chakra-ui/react";
import { useTheme, useColorMode } from '@chakra-ui/react';

export const Logo = () => {
    const theme = useTheme();
    const mode = useColorMode();

    const windowColor = mode.colorMode === "dark" ? theme.colors.yellow[400] : theme.colors.gray[200];

    const MAYAK_LOGO =
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251.17 92.59">
            <polygon fill={theme.colors.gray[400]}
                     points="180.59 75.17 130.41 27.88 130.41 27.88 150.34 0 251.17 92.58 180.59 75.17"/>
            <polygon fill={theme.colors.gray[500]} points="130.41 27.88 100.83 0 150.34 0 130.41 27.88 130.41 27.88"/>
            <rect fill={windowColor} x="109.66" y="46.29" width="12.68" height="12.68"/>
            <rect fill={windowColor} x="128.83" y="46.29" width="12.68" height="12.68"/>
            <rect fill={windowColor} x="109.66" y="64.28" width="12.68" height="12.68"/>
            <rect fill={windowColor} x="128.83" y="64.28" width="12.68" height="12.68"/>
            <polygon fill={theme.colors.cyan[200]}
                     points="100.83 0 68.83 29.39 68.83 17.65 51.49 17.65 51.09 18.15 51.09 26.34 51.16 26.32 51.16 45.61 0 92.58 70.58 75.17 150.34 0 100.83 0"/>
        </svg>;

    return (
        // <chakra.img src={MAYAK_LOGO} />
        <Flex as="figure" align="center" flexDirection="column" className="Logo">
            <Box width="90px" height="30px">
                {MAYAK_LOGO}
            </Box>
            <Flex
                as="figcaption"
                align="flex-end"
                mt="-3px"
                position="relative"
                _before={{
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "3px",
                    bottom: "-5px",
                    borderRadius: "0 0 4px 4px",
                    bg: "gray.400",
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