import {createSlice} from '@reduxjs/toolkit';

interface IAlertData {
    text: string;
    description?: string;
    declineText?: string;
    confirmTex: string;
    onConfirm: () => void;
    onClose: () => void;
}

interface IAlert {
    isOpened: boolean;
    alertData: IAlertData;
}

const initialState: IAlert = {
    isOpened: false,
    alertData: {} as IAlertData
}

export const alertModalSlice = createSlice({
    name: "alertModal",
    initialState,
    reducers: {

    }
})