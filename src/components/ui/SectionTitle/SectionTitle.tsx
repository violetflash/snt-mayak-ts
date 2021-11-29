import React, {FC} from 'react';
import {Center, Heading, useColorModeValue} from "@chakra-ui/react";
import {capitalizeFirst} from "../../../utils/constants";

interface IPageTitle {
    text: string;
}

export const SectionTitle:FC<IPageTitle> = ({text}) => {
    const decorBg = useColorModeValue("orange.200", "orange.500");
    return (
        <Center my="30px">
            <Heading
                sx={{position: "relative", display: "inline-block"}}
                _before={{
                    position: "absolute",
                    content: "''",
                    width: "100%",
                    height: "20px",
                    bg: decorBg,
                    bottom: 0,
                    zIndex: -1
                }}
            >
                {capitalizeFirst(text)}
            </Heading>
        </Center>
    )
};
