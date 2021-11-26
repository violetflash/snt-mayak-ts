import React, {useEffect} from "react";
import {ChakraProvider} from "@chakra-ui/react";
import "@fontsource/cuprum/500.css";
import "@fontsource/roboto/500.css";
import "@fontsource/literata/700.css";

import { theme } from "../../theme";
import {AppRoutes} from "../AppRoutes/AppRoutes";

import { useAuth } from "../../utils/services/firebase";

export const App = () => {
    const user = useAuth();



    return (
        <ChakraProvider theme={theme}>
            <AppRoutes/>
        </ChakraProvider>
    )
};
