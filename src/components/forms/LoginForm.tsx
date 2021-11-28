import React, {useState} from 'react';
import {
    Button, Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Link
} from "@chakra-ui/react";
import {LoginButton} from "../LoginButton/LoginButton";
import {EmailIcon, ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import { FaKey } from "react-icons/fa"
import {Link as RouterLink} from "react-router-dom";


export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form>
            <FormControl id="email" isRequired mb="15px">
                <FormLabel>Email:</FormLabel>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<EmailIcon color="gray.300" />}
                    />
                    <Input type="email" autoComplete="off"/>
                </InputGroup>

                {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
            </FormControl>
            <FormControl id="password" isRequired mb="35px">
                <FormLabel>Пароль:</FormLabel>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={FaKey} color="gray.300" />}
                    />
                    <Input type={showPassword ? 'text' : 'password'} autoComplete="off"/>
                    <InputRightElement>
                        <Button
                            variant={'ghost'}
                            onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                            }>
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Flex justify="flex-end" mt="5px">
                    <Link as={RouterLink} to="/recovery" >Забыли пароль?</Link>
                </Flex>
                {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
            </FormControl>
            <LoginButton/>
        </form>
    )
};