import React, {useState} from 'react';
import {
    Button, Center, Divider, Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Link, Text, useDisclosure, VStack
} from "@chakra-ui/react";
import {LoginButton} from "../buttons/LoginButton/LoginButton";
import {EmailIcon, ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import { FaKey } from "react-icons/fa"
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {GoogleButton} from "../buttons/GoogleButton/GoogleButton";


export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleLogin = () => {
        setIsLoading(true);
        timeoutId = setTimeout(() => {
            setIsLoading(false);
            clearTimeout(timeoutId);
        }, 1000)
    };

    return (
        <form>
            <FormControl
                id="email"
                isRequired mb="15px"
                isDisabled={isLoading}
            >
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
            <FormControl
                id="password"
                isRequired mb="35px"
                isDisabled={isLoading}
            >
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
                    <Button
                        variant="raw"
                        as={RouterLink}
                        to="/recovery"
                        isDisabled={isLoading}
                        fontWeight="normal"
                    >
                        Забыли пароль?
                    </Button>
                </Flex>
                {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
            </FormControl>
            <Center my="30px" flexDirection="column">
                <Button
                    isLoading={isLoading}
                    loadingText="Выполняется вход..."
                    mb="30px"
                    onClick={handleLogin}
                >
                    Войти
                </Button>
                <Divider/>
                <VStack mt="30px">
                    <Text>или</Text>
                    <GoogleButton/>
                </VStack>
            </Center>

        </form>
    )
};
