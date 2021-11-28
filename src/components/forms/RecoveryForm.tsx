import React from 'react';
import {Box, Button, FormControl, FormLabel, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {EmailIcon} from "@chakra-ui/icons";

export const RecoveryForm = () => {
    return (
        <Box maxW="lg" m="50px auto 0">
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
        </Box>
    )
};