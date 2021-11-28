import React from 'react';
import {Box, Button, FormControl, FormLabel, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {EmailIcon} from "@chakra-ui/icons";
import {AnimatePresence, motion} from "framer-motion";

const MotionBox = motion(Box);

export const RecoveryForm = () => {
    return (
        <AnimatePresence>
            <MotionBox
                maxW="lg" m="50px auto 0"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}

            >
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
                    <Button>Восстановить</Button>
                </form>
            </MotionBox>
        </AnimatePresence>
    )
};