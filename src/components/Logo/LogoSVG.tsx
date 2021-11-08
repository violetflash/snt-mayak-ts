import React from 'react';
import { useTheme, useColorMode } from '@chakra-ui/react';

type propsType = {
    opacity?: string
}

export const LogoSvg = ({ opacity }: propsType) => {
    const theme = useTheme();
    const mode = useColorMode();
    const windowColor = mode.colorMode === "dark" ? theme.colors.yellow[400] : theme.colors.gray[400];

    return (
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251.17 92.59" opacity={opacity}>
            <polygon fill={theme.colors.gray[400]}
                     points="180.59 75.17 130.41 27.88 130.41 27.88 150.34 0 251.17 92.58 180.59 75.17"/>
            <polygon fill={theme.colors.gray[500]} points="130.41 27.88 100.83 0 150.34 0 130.41 27.88 130.41 27.88"/>
            <rect fill={windowColor} x="109.66" y="46.29" width="12.68" height="12.68"/>
            <rect fill={windowColor} x="128.83" y="46.29" width="12.68" height="12.68"/>
            <rect fill={windowColor} x="109.66" y="64.28" width="12.68" height="12.68"/>
            <rect fill={windowColor} x="128.83" y="64.28" width="12.68" height="12.68"/>
            <polygon fill={theme.colors.cyan[200]}
                     points="100.83 0 68.83 29.39 68.83 17.65 51.49 17.65 51.09 18.15 51.09 26.34 51.16 26.32 51.16 45.61 0 92.58 70.58 75.17 150.34 0 100.83 0"/>
        </svg>
    );
};