import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";

import {
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword
} from "firebase/auth";

import { initializeApp } from "firebase/app";

const app = initializeApp({
    apiKey: process.env.REACT_APP_FB_API,
    authDomain: process.env.REACT_APP_FB_DOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECT,
    storageBucket: process.env.REACT_APP_FB_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_SENDER,
    appId: process.env.REACT_APP_FB_APP,
});

console.log(app.name);

// import {auth, provider} from "../../utils/services/firebase";

export const provider = new GoogleAuthProvider();
export const auth = getAuth();

export interface IAuthUserData {
    displayName: string | null;
    email: string | null;
    avatar: string | null;
}

export interface IAuthState  extends IAuthUserData {
    isLoggedIn: boolean;
    isEmailConfirmed: boolean;
    isLoading?: boolean;
    error: string | null;
}

const initialState: IAuthState = {
    displayName: null,
    email: null,
    avatar: null,
    isLoggedIn: false,
    isEmailConfirmed: false,
    isLoading: false,
    error: null,
};

export interface IUserLoginData {
    email: string;
    password: string;
}



export const loginWithGoogle = createAsyncThunk<IAuthUserData>(
    'loginWithGoogle',
    async (_, thunkAPI) => {
        try {
            const response = await signInWithPopup(auth, provider);
            const displayName = response.user?.displayName;
            const email = response.user?.email;
            const avatar = response.user?.photoURL;
            return { displayName, email, avatar };
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.message })
        }
    }
);

export const logout = createAsyncThunk(
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
    reducers: {
        setUser: (state, action) => {

        },
    },
    extraReducers: {
        [loginWithGoogle.pending.type]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [loginWithGoogle.fulfilled.type]: (state, action: PayloadAction<IAuthUserData>) => {
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.avatar = action.payload.avatar;
            state.isLoggedIn = true;
            state.isEmailConfirmed = true;
        },
        [loginWithGoogle.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        [logout.fulfilled.type]: () => initialState
    }
})
