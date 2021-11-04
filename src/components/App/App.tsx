import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/cuprum/500.css";
import "@fontsource/roboto/500.css";
import "@fontsource/literata/700.css";

import * as React from "react";
import { Header } from "../header";
import { theme } from "../../theme";

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Header/>
        </ChakraProvider>
    )
};