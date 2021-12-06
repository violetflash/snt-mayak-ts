import React, {useCallback, useState} from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import {
    Button, Center,
    FormControl,
    FormLabel,
    Icon,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement, useDisclosure, FormErrorMessage
} from "@chakra-ui/react";
import {EmailIcon, ViewIcon, ViewOffIcon} from "@chakra-ui/icons";
import {FaKey, FaUser} from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import {AlertPopup} from "../../AlertPopup/AlertPopup";
import {setLoading, useAppDispatch, useTypedSelector} from "../../../redux";

interface Values {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
}


export const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {isLoading} = useTypedSelector(state => state.auth);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const {isOpen, onOpen, onClose} = useDisclosure();
    // let timeoutId: ReturnType<typeof setTimeout>;

    const handleRegister = useCallback(() => {
        dispatch(setLoading(true));
        const timeoutId = setTimeout(() => {
            onOpen();
            dispatch(setLoading(false));
            clearTimeout(timeoutId);
        }, 1000)
    }, [dispatch, onOpen]);

    const handleClose = () => {
        onClose();
        navigate("/");
    };

    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    confirmPassword: "",
                    name: ""
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        handleRegister();
                    }, 500);
                }}
            >
                <Form>
                    <Field name='name' validate={validateName}>
                        {({ field, form }) => (
                            <FormControl isInvalid={form.errors.name && form.touched.name}>
                                <FormLabel htmlFor='name'>First name</FormLabel>
                                <Input {...field} id='name' placeholder='name' />
                                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <FormControl
                        isDisabled={isLoading}
                        id="email"
                        isRequired
                        mb="15px">
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
                    <FormControl
                        isDisabled={isLoading}
                        id="password"
                        isRequired
                        mb="15px"
                    >
                        <FormLabel>Пароль:</FormLabel>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<Icon as={FaKey} color="gray.300"/>}
                            />
                            <Input type={showPassword ? 'text' : 'password'} autoComplete="off"/>
                            <InputRightElement>
                                <Button
                                    isDisabled={isLoading}
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
                    <FormControl
                        isDisabled={isLoading}
                        id="password"
                        isRequired mb="15px"
                    >
                        <FormLabel>Повторите пароль:</FormLabel>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<Icon as={FaKey} color="gray.300"/>}
                            />
                            <Input type={showPassword ? 'text' : 'password'} autoComplete="off"/>
                            <InputRightElement>
                                <Button
                                    isDisabled={isLoading}
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
                    <FormControl
                        isDisabled={isLoading}
                        id="name"
                        isRequired
                        mb="35px"
                    >
                        <FormLabel>Ваше имя:</FormLabel>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<Icon as={FaUser} color="gray.300"/>}
                            />
                            <Input type="text" autoComplete="off"/>
                        </InputGroup>

                        {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
                    </FormControl>
                    <Center>
                        <Button
                            isLoading={isLoading}
                            loadingText="Регистрация..."
                            type="submit"
                        >
                            Зарегистрировать
                        </Button>
                    </Center>
                </Form>
            </Formik>
            <AlertPopup
                // desc="Регистрация завершена успешно. Выполнен вход на сайт."
                isOpen={isOpen}
                onClose={handleClose}
                scheme="green"
                confirmFunc={handleClose}
                confirmText="Ок"
            >
                <Text>Регистрация завершена успешно.</Text>
                <Text>Выполнен вход на сайт.</Text>
            </AlertPopup>
        </>
    )
};
