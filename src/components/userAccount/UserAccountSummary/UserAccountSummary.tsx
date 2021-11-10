import React from 'react';
import {Badge, Flex, VStack} from "@chakra-ui/react";
import {UserAvatar} from "../../header";
import {UserName} from "../../ui/UserName/UserName";

type propsType = {
    flex: string
};

export const UserAccountSummary = (props : propsType) => {
    return (
        <VStack
            // direction={{lg: "column", md: "column", sm: "row"}}
            // justify={{lg: "flex-start", md: "flex-start", sm: "space-around"}}
            align={["center", "center", "flex-start", "flex-start"]}
            m={["0 0 20px 0", "0 0 20px 0", "0 20px 0 0", "0 20px 0 0"]}

            {...props}
        >
            <UserAvatar boxSize="120px"/>
            <Flex
                className="user-settings-info"
                p="10px 15px"
                direction="column"
            >
                <UserName/>
                <Badge
                    sx={{alignSelf: "flex-start"}}
                    mt="10px"
                    p="5px 10px"
                    colorScheme="red"
                >
                    email не подтвержден
                </Badge>
            </Flex>

        </VStack>
    )
};
