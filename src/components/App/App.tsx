import * as React from "react";
import {ChakraProvider} from "@chakra-ui/react";
import "@fontsource/cuprum/500.css";
import "@fontsource/roboto/500.css";
import "@fontsource/literata/700.css";

import { theme } from "../../theme";

import {AppRoutes} from "../AppRoutes/AppRoutes";
import { initializeFirebase } from "../../utils/services/firebase";



export const App = () => {
    initializeFirebase();
    return (
        <ChakraProvider theme={theme}>
            <AppRoutes/>
        </ChakraProvider>
    )
};