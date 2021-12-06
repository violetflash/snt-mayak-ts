import React, {useCallback, useState} from 'react';
import {Formik, Form} from 'formik';
import * as yup from 'yup';
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
import {createAccount, setLoading, useAppDispatch, useTypedSelector} from "../../../redux";

interface Values {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
}


export const RegisterForm = () => {
    const validateSchema = yup.object().shape({
        email: yup.string().email('Введите корректный email').required("Обязательное поле"),
        password: yup.string().required("Обязательное поле"),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required("Обязательное поле"),
        name: yup.string().required("Обязательное поле"),
    });
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {isLoading} = useTypedSelector(state => state.auth);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const {isOpen, onOpen, onClose} = useDisclosure();
    // let timeoutId: ReturnType<typeof setTimeout>;

    // const handleRegister = useCallback(() => {
    //     dispatch(setLoading(true));
    //     const timeoutId = setTimeout(() => {
    //         onOpen();
    //         dispatch(setLoading(false));
    //         clearTimeout(timeoutId);
    //     }, 1000)
    // }, [dispatch, onOpen]);

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
                validateOnBlur
                validationSchema={validateSchema}
                onSubmit={(values: Values) => {
                    // handleRegister();
                    console.log(values);
                    setTimeout(() => {
                        // alert(JSON.stringify(values, null, 2));
                        onOpen();
                        dispatch(createAccount({
                            displayName: values.name,
                            email: values.email,
                            password: values.password
                        }))
                    }, 500);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      isValid,
                      handleSubmit,
                      dirty//изменялись ли значения вход форме
                  }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormControl
                            isDisabled={isLoading}
                            isInvalid={!!(errors.email && touched.email)}
                            isRequired
                            mb="15px">
                            <FormLabel>Email:</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<EmailIcon color="gray.300"/>}
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    autoComplete="off"
                                />
                            </InputGroup>
                            {errors.email && touched.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                            {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
                        </FormControl>
                        <FormControl
                            isInvalid={!!(errors.password && touched.password)}
                            isDisabled={isLoading}
                            isRequired
                            mb="15px"
                        >
                            <FormLabel>Пароль:</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<Icon as={FaKey} color="gray.300"/>}
                                />
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="off"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
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
                            {errors.password && touched.password && <FormErrorMessage>{errors.password}</FormErrorMessage>}
                            {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
                        </FormControl>
                        <FormControl
                            isInvalid={!!(errors.confirmPassword && touched.confirmPassword)}
                            isDisabled={isLoading}
                            isRequired
                            mb="15px"
                        >
                            <FormLabel>Повторите пароль:</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<Icon as={FaKey} color="gray.300"/>}
                                />
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="off"
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                />
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
                            {errors.confirmPassword && touched.confirmPassword && <FormErrorMessage>{errors.confirmPassword}</FormErrorMessage>}
                            {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
                        </FormControl>
                        <FormControl
                            isInvalid={!!(errors.name && touched.name)}
                            isDisabled={isLoading}
                            isRequired
                            mb="35px"
                        >
                            <FormLabel>Ваше имя:</FormLabel>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents="none"
                                    children={<Icon as={FaUser} color="gray.300"/>}
                                />
                                <Input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    autoComplete="off"
                                />
                            </InputGroup>
                            {errors.name && touched.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
                            {/*<FormHelperText>We'll never share your email.</FormHelperText>*/}
                        </FormControl>
                        <Center>
                            <Button
                                isDisabled={!isValid && !dirty}
                                isLoading={isLoading}
                                loadingText="Регистрация..."
                                type="submit"
                            >
                                Зарегистрировать
                            </Button>
                        </Center>
                    </Form>
                )}
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
                <Text>На указанную эл. адрес мы отправили ссылку на подтверждение. Пожалуйста, пройдите по ней и затем обновите эту страницу.</Text>
                <Text>Вход на сайт выполнен с ограничениями.</Text>
            </AlertPopup>
        </>
    )
};
