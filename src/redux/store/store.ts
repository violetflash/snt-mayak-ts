import { configureStore } from '@reduxjs/toolkit';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import {authSlice, userSlice} from '../slices';

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [authSlice.name]: authSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
