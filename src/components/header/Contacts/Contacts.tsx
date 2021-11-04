import React from 'react';
import {Flex, Text, Link} from "@chakra-ui/react";
import {EmailIcon, PhoneIcon} from '@chakra-ui/icons';

export const Contacts = () => {
    return (
        <Flex direction="column" align="flex-end" className="Contacts" >
            <Text fontSize="sm">Председатель:</Text>
            <Link color="orange.300" href="tel:+71234567890"><PhoneIcon mr="10px"/> +7(123)456-78-90</Link>
            <Link href="mailto:mail@snt-mayak.ru" fontSize="sm"><EmailIcon fontSize="xl" mr="10px"/> mail@snt-mayak.ru</Link>
        </Flex>
    )
};