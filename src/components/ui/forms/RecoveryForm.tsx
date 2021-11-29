import React, {useCallback, useState} from 'react';
import {
    Box,
    Button, Center,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import {EmailIcon} from "@chakra-ui/icons";
import {useNavigate} from 'react-router-dom';
import {AnimatePresence, motion} from "framer-motion";
import {AlertPopup} from "../../AlertPopup/AlertPopup";

const MotionBox = motion(Box);

export const RecoveryForm = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {isOpen, onOpen, onClose} = useDisclosure();
    // let timeoutId: ReturnType<typeof setTimeout>;

    const handleRecovery = useCallback(() => {
        setIsLoading(true);
        const timeoutId = setTimeout(() => {
            onOpen();
            setIsLoading(false);
            clearTimeout(timeoutId);
        }, 1000)
    }, [onOpen]);

    const handleClose = useCallback(() => {
        onClose();
        navigate("/login");
    }, [navigate, onClose]);

    // useEffect(() => {
    //
    //     return () => clearTimeout(timeoutId);
    // }, [timeoutId])

    return (
        <AnimatePresence>
            <MotionBox
                key="recovery"
                maxW="lg" m="50px auto 0"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 50}}
                transition={{duration: 0.5}}
            >
                <Text mb="20px" fontStyle="italic">
                    Для восстановления доступа к аккаунту введите Email для получения ссылки с инструкцией.
                </Text>
                <form>
                    <FormControl id="email" isRequired mb="15px" isDisabled={isLoading}>
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
                    <Center mt="40px">
                        <Button
                            isLoading={isLoading}
                            whiteSpace="nowrap"
                            loadingText="Отправка..."
                            onClick={handleRecovery}
                        >
                            Восстановить
                        </Button>
                    </Center>

                </form>
            </MotionBox>
            <AlertPopup
                desc="Инструкция для восстановления доступа к Вашему аккаунту отправлена на указанную почту."
                isOpen={isOpen}
                onClose={handleClose}
                scheme="green"
                confirmFunc={handleClose}
                confirmText="Ок"
            />
        </AnimatePresence>
    )
};
