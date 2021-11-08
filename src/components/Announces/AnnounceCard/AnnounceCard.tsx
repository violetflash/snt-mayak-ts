import React from 'react';
import {motion} from 'framer-motion';
import {Badge, Flex, Heading, Text, VStack} from "@chakra-ui/react";

const infoVariants = {
    initial: {
        y: -200,
        opacity: 0,
        height: 0,
        transition: {delay: 0}
    },
    enter: {
        y: 0,
        opacity: 1,
        height: 'auto',
        transition: {delay: 0.2},
    },
    exit: {
        opacity: 0,
        y: 200,
    },
}

const descVariants = {
    initial: {
        opacity: 0,
        x: 100,
        height: 0,
        transition: {delay: 0},

    },
    enter: {
        opacity: 1,
        x: 0,
        height: "auto",
        transition: {delay: 0.2},

    }
};

const MotionVStack = motion(VStack);
const MotionText = motion(Text);

type propsType = {
    date: string,
    time: string,
    title: string,
    desc: string
};

export const AnnounceCard = ({date, time, title, desc }: propsType) => {
    return (
        <Flex justify="space-between">
            <MotionVStack
                flex="0 1 35%"
                // justify="flex-start
                align="flex-start"
                variants={infoVariants}
                initial={"initial"}
                animate="enter"
            >
                <Badge fontSize="lg" bg="orange.300" color="black">
                    {date} - {time}
                </Badge>
                <Heading>
                    {title}
                    {/*<TitleDecoration*/}
                    {/*    initial={{y: 100, opacity: 0}}*/}
                    {/*    animate={{y: 0, opacity: 1}}*/}
                    {/*    transition={{duration: 0.15, delay: 0.3}}*/}
                    {/*/>*/}
                </Heading>
                {/*<AnimatedText text={title}/>*/}
            </MotionVStack>
            <MotionText
                flex="1"
                variants={descVariants}
                initial="initial"
                animate="enter"
            >
                {desc}
            </MotionText>
        </Flex>
    )
};