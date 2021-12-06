import React, {useEffect} from "react";
import {ChakraProvider} from "@chakra-ui/react";
import "@fontsource/cuprum/500.css";
import "@fontsource/roboto/500.css";
import "@fontsource/literata/700.css";
import { theme } from "../../theme";
import {AppRoutes} from "../AppRoutes/AppRoutes";
import {setUser, useAppDispatch} from "../../redux";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../utils/services/firebase/firebase";

// import { useAuth } from "../../utils/services/firebase";

export const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const observe = onAuthStateChanged(auth, (user) => {
            // dispatch(setLoading(false));
            console.log('hit!')
            console.log(user);
            if (user) {
                dispatch(setUser(user));
            }
        });

        return () => observe();
    }, [dispatch]);

    return (
        <ChakraProvider theme={theme}>
            <AppRoutes/>
        </ChakraProvider>
    )
};
