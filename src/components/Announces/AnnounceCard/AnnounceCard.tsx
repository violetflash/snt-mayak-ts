import React from 'react';
import {useNavigate} from 'react-router-dom';
import {motion} from 'framer-motion';
import {Badge, Flex, Heading, Text, VStack, useMediaQuery, Box, Button, Link} from "@chakra-ui/react";

const infoVariants = {
    responsiveInitial: {
        y: 10,
        opacity: 0,
        height: 0,
        transition: {delay: 0}
    },
    initial: {
        x: -20,
        opacity: 0,
        height: 0,
        transition: {delay: 0}
    },
    responsiveEnter: {
        y: 0,
        opacity: 1,
        height: 'auto',
        transition: {delay: 0.2},
    },
    enter: {
        x: 0,
        opacity: 1,
        height: 'auto',
        transition: {delay: 0.2},
    },
    exit: {
        opacity: 0,
        y: 30,
    },
}

const descVariants = {
    responsiveInitial: {
        opacity: 0,
        y: 10,
        height: 0,
        transition: {delay: 0},

    },
    responsiveEnter: {
        opacity: 1,
        y: 0,
        height: "auto",
        transition: {delay: 0.2},

    },
    initial: {
        opacity: 0,
        x: 20,
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
const MotionBox = motion(Box);

type propsType = {
    id: string,
    date?: string,
    time?: string,
    title: string,
    desc: string,
    index: number,
    activeAnnounce: number
};

export const AnnounceCard = ({ id, date, time, title, desc, index, activeAnnounce }: propsType) => {
    const navigate = useNavigate();
    const [isLargerThan992] = useMediaQuery("(min-width: 992px)")

    if (index !== +activeAnnounce) return null;

    return (
        <Flex
            justify="space-between"
            direction={['column', 'column', 'column', 'row', 'row']}
        >
            <MotionVStack
                flex="0 1 35%"
                m={['0 0 20px 0', '0 0 20px 0', '0 0 20px 0', '0 40px 0 0', '0 40px 0 0']}
                // justify="flex-start
                align="flex-start"
                variants={infoVariants}
                initial={isLargerThan992 ? "initial" : "responsiveInitial"}
                animate={isLargerThan992 ? "enter" : "responsiveEnter"}
            >
                <Heading
                    fontSize={{ base: "20px", md: "24px", lg: "28px" }}
                    width="100%"
                    textAlign={{lg: "left", md: "center", base: "center"}}
                    fontStyle="italic"
                    fontFamily="Roboto"
                >
                    {title}
                    {/*<TitleDecoration*/}
                    {/*    initial={{y: 100, opacity: 0}}*/}
                    {/*    animate={{y: 0, opacity: 1}}*/}
                    {/*    transition={{duration: 0.15, delay: 0.3}}*/}
                    {/*/>*/}
                </Heading>
                <Badge
                    as="i"
                    p="2px 15px"
                    fontSize="lg"
                    bg="orange.300"
                    color="black"
                    margin={{lg: "0 0 10px 0", md: "0 0 0 auto", base: "0 0 0 auto"}}
                >
                    {date} - {time}
                </Badge>
                {/*<AnimatedText text={title}/>*/}
            </MotionVStack>
            <MotionBox
                flex="1"
                variants={descVariants}
                initial={isLargerThan992 ? "initial" : "responsiveInitial"}
                animate={isLargerThan992 ? "enter" : "responsiveEnter"}
            >
                <Text
                    mb="15px"
                    sx={{textIndent: "40px"}}
                    textAlign="justify"
                    p={{lg: "0 15px 0 0", md: "0 15px", base: "0 10px"}}
                >
                    {desc}
                </Text>
                <Flex justify="flex-end">
                    <Button
                        as={Link}
                        onClick={() => navigate(`/announces/${id}`)}
                    >
                        Открыть
                    </Button>
                </Flex>

            </MotionBox>

        </Flex>
    )
};
