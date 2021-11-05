import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/cuprum/500.css";
import "@fontsource/roboto/500.css";
import "@fontsource/literata/700.css";

import * as React from "react";
import { Header } from "../header";
import { theme } from "../../theme";
import {Nav} from "../Nav/Nav";
import { useMediaQuery } from "@chakra-ui/react";


export const App = () => {
    const [isLargerThan480] = useMediaQuery("(min-width: 479px)")

    return (
        <ChakraProvider theme={theme}>
            <Header/>
            {isLargerThan480 && <Nav/>}
        </ChakraProvider>
    )
};