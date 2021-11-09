import {Box, Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import React from 'react';

type propsType = {
    flex: string
}
export const UserAccountTabs = (props : propsType) => {
    return (
        <Box {...props}>
            <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                    <Tab>Информация</Tab>
                    <Tab>Безопасность</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <p>Общие данные:</p>
                        <p>Логин на сайте - нередактируемый</p>
                        <p>Почта - нередактируемая</p>
                        <p>Что можно редактировать:</p>
                        <p>ФИО</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Смена пароля</p>
                        <p>Удаление аккаунта?</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
};