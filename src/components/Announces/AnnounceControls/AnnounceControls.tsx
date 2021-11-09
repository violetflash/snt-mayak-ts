import {Button, HStack} from '@chakra-ui/react';
import React from 'react';

type propTypes = {
    num: number,
    activeAnnounce: number,
    setActiveAnnounce: Function
}

export const AnnounceControls = ({ num, activeAnnounce, setActiveAnnounce } : propTypes) => {

    const buttonHandler = (i : number) => setActiveAnnounce(i);

    const buttons = Array.from(Array(num).keys()).map((el, i) => {
        return (
            <Button
                key={el}
                variant="outline"
                transition="all 0.2s"
                _hover={{bg: "orange.100", color: "black"}}
                _active={{ bg: "orange.100"}}
                bg={activeAnnounce === i ? "orange.200" : "transparent"}
                borderColor={activeAnnounce === i ? "orange.200" : "inherit"}
                color={activeAnnounce === i ? "black" : "inherit"}
                onClick={() => buttonHandler(i)}
            >
                {el + 1}
            </Button>
        );
    });

    return (
        <HStack spacing="20px">
            {buttons}
        </HStack>
    )
};
