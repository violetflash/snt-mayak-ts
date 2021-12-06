import { configureStore } from '@reduxjs/toolkit';
import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux';
import {authSlice, userSlice} from '../slices';

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer,
        [authSlice.name]: authSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatchT = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatchT>();
