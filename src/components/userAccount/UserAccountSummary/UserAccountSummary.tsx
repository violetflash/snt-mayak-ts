import React from 'react';
import {Badge, Button, Flex, VStack} from "@chakra-ui/react";
import {UserAvatar} from "../../header";
import {UserName} from "../../ui/UserName/UserName";
import {useTypedSelector} from "../../../redux";

type propsType = {
    flex: string
};

export const UserAccountSummary = (props : propsType) => {
    const {isEmailConfirmed} = useTypedSelector(state => state.auth);
    // const isEmail    Confirmed = false;
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
                align={["center", "center", "flex-start", "flex-start"]}
            >
                <UserName/>
                <Badge
                    sx={{alignSelf: "flex-start"}}
                    mt="10px"
                    p="5px 10px"
                    colorScheme={isEmailConfirmed ? "green" : "red"}
                >
                    {isEmailConfirmed ? "email подтвержден" : "email не подтвержден"}
                </Badge>
                {!isEmailConfirmed &&
                    <Button
                        sx={{alignSelf: "flex-start"}}
                        p="0"
                        fontSize="13px"
                        fontWeight="regular"
                        variant="raw"
                        colorScheme="gray"
                        rounded="false"
                        borderBottom="1px dashed"
                    >
                      отправить запрос на подтверждение
                    </Button>
                }
            </Flex>

        </VStack>
    )
};
