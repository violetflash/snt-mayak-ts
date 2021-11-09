import * as React from "react";
import {Box, ChakraProvider, Flex} from "@chakra-ui/react";
import "@fontsource/cuprum/500.css";
import "@fontsource/roboto/500.css";
import "@fontsource/literata/700.css";
import { useMediaQuery } from "@chakra-ui/react";
import { Header } from "../header";
import { theme } from "../../theme";
import {Nav} from "../Nav/Nav";
import {Footer} from "../Footer/Footer";
import {AppRoutes} from "../AppRoutes/AppRoutes";


export const App = () => {
    const [isLargerThan480] = useMediaQuery("(min-width: 479px)")

    return (
        <ChakraProvider theme={theme}>
            <Flex className="App-flex-wrapper" direction="column" minH="100%">
                <Header/>
                {isLargerThan480 && <Nav/>}
                <Box className="App-content-flex-wrapper"  flex="1 0 auto" w="100%">
                    <AppRoutes/>
                </Box>
                <Footer/>
            </Flex>

        </ChakraProvider>
    )
};