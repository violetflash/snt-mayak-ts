import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";

import {
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword
} from "firebase/auth";

import {auth, provider} from "../../utils/services/firebase";

export interface IAuthResponse {
    displayName: string | null;
    email: string | null;
}

export interface IAuthState  extends IAuthResponse {
    isEmailConfirmed: boolean;
    isLoading?: boolean;
    error: string | null;
}

const initialState: IAuthState = {
    displayName: null,
    email: null,
    isEmailConfirmed: false,
    isLoading: false,
    error: null,
};

export interface IUserLoginData {
    email: string;
    password: string;
}



export const loginWithGoogle = createAsyncThunk<IAuthResponse>(
    'loginWithGoogle',
    async (_, thunkAPI) => {
        try {
            const response = await signInWithPopup(auth, provider);
            const displayName = response.user?.displayName;
            const email = response.user?.email;
            return { displayName, email };
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.message })
        }
    }
);

export const authLogout = createAsyncThunk(
    'logout',
    async (_, thunkAPI) => {
        try {
            await auth.signOut();
        }catch(error: any) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const authLogin = createAsyncThunk(
    'login',
    async (formData: IUserLoginData, thunkAPI) => {
        try {
            const response = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            console.log(response);
        } catch (error: any) {
            return thunkAPI.rejectWithValue({error: error.message })
        }
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [loginWithGoogle.pending.type]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [loginWithGoogle.fulfilled.type]: (state, action: PayloadAction<IAuthResponse>) => {
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.isEmailConfirmed = true;
        },
        [loginWithGoogle.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        [authLogout.fulfilled.type]: (state) => {
            state.displayName = initialState.displayName;
            state.email = initialState.email;
            state.isEmailConfirmed = initialState.isEmailConfirmed;
        }
    }
})
