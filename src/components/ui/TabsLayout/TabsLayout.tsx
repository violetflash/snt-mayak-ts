import React from 'react';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {useTypedSelector} from "../../../redux";

interface TabsLayoutProps {
    titles: string[];
    components: React.ReactComponentElement<any>[]
}

export const TabsLayout = ({titles, components}: TabsLayoutProps) => {
    const {isLoading} = useTypedSelector(state => state.auth);
    return (
        <Tabs
            m="0 auto"
            maxW="lg"
            p="0 0 20px"
        >
            <TabList>
                {titles.map(title => <Tab isDisabled={isLoading} key={title}>{title}</Tab>)}
            </TabList>

            <TabPanels>
                {components.map((comp, idx) => (
                    <TabPanel key={idx}>
                        {comp}
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    )
};
