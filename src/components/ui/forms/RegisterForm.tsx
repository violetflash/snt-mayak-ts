import React, {useState} from 'react';
import {
    Button, Center,
    FormControl,
    FormLabel,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement, useDisclosure
} from "@chakra-ui/react";
import {EmailIcon, ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import {FaKey, FaUser} from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import {AlertPopup} from "../../AlertPopup/AlertPopup";

export const RegisterForm = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {isOpen, onOpen, onClose} = useDisclosure();
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleRegister = () => {
        setIsLoading(true);
        timeoutId = setTimeout(() => {
            onOpen();
            setIsLoading(false);
            clearTimeout(timeoutId);
        }, 1000)
    };

    const handleClose = () => {
        onClose();
        navigate("/");
    };

    return (
        <form>
            <FormControl id="email" isRequired mb="15px">
                <FormLabel>Email:</FormLabel>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<EmailIcon color="gray.300"/>}
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
                        children={<Icon as={FaKey} color="gray.300"/>}
                    />
                    <Input type={showPassword ? 'text' : 'password'} autoComplete="off"/>
                    <InputRightElement>
                        <Button
                            variant={'ghost'}
                            onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                            }>
                            {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
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
                        children={<Icon as={FaKey} color="gray.300"/>}
                    />
                    <Input type={showPassword ? 'text' : 'password'} autoComplete="off"/>
                    <InputRightElement>
                        <Button
                            variant={'ghost'}
                            onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                            }>
                            {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
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
                        children={<Icon as={FaUser} color="gray.300"/>}
                    />
                    <Input type="email" autoComplete="off"/>
                </InputGroup>

                {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
            </FormControl>
            <Center>
                <Button
                    isLoading={isLoading}
                    loadingText="Регистрация..."
                    onClick={handleRegister}
                >
                    Зарегистрировать
                </Button>
            </Center>
            <AlertPopup
                desc="Регистрация завершена успешно. Выполнен вход на сайт."
                isOpen={isOpen}
                onClose={handleClose}
                scheme="green"
                confirmFunc={handleClose}
                confirmText="Ок"
            />
        </form>
    )
};
