import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    logged: false,
    name: "Константин Константинович Константинов"
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => {
            state.logged = true;
        },
        logoutOld: (state) => {
            state.logged = false;
        },
    }
});

export const { login, logoutOld } = userSlice.actions;
