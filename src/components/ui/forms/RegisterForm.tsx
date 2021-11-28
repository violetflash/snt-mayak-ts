import React, {useState} from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement
} from "@chakra-ui/react";
import {EmailIcon, ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import {FaKey, FaUser} from "react-icons/fa";
import {LoginButton} from "../buttons";

export const RegisterForm = () => {
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
            <FormControl id="password" isRequired mb="15px">
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
                {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
            </FormControl>
            <FormControl id="password" isRequired mb="15px">
                <FormLabel>Повторите пароль:</FormLabel>
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
                {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
            </FormControl>
            <FormControl id="name" isRequired mb="35px">
                <FormLabel>Ваше имя:</FormLabel>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={FaUser} color="gray.300" />}
                    />
                    <Input type="email" autoComplete="off"/>
                </InputGroup>

                {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
            </FormControl>
            <LoginButton/>
        </form>
    )
};