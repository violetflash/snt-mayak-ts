import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    User,
    createUserWithEmailAndPassword,
    updateProfile
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

export const provider = new GoogleAuthProvider();
export const auth = getAuth();

export interface IAuth {
    user: User;
    isLoggedIn: boolean;
    isLoading: boolean;
    error: string | null;
}

const initialState: IAuth = {
    user: {} as User,
    isLoggedIn: false,
    isLoading: false,
    error: null,
};

export interface IUserLoginData {
    email: string;
    password: string;
}

export interface IUserCreation extends IUserLoginData {
    displayName: string;
}

export const loginWithGoogle = createAsyncThunk<User>(
    'auth/loginWithGoogle',
    async (_, thunkAPI) => {
        try {
            const response = await signInWithPopup(auth, provider);
            return response.user;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message })
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await auth.signOut();
        }catch(error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const loginWithEmailAndPassword = createAsyncThunk(
    'auth/loginWithEmailAndPassword',
    async (loginData: IUserLoginData, thunkAPI) => {
        try {
            const response = await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
            return response.user;
        } catch (error) {
            return thunkAPI.rejectWithValue({error: error.message })
        }
    }
);

export const createAccount = createAsyncThunk(
    'auth/createAccount',
    async (userData: IUserCreation, thunkAPI) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
            await updateProfile(response.user, {
                displayName: userData.displayName
            }).then(() => {
                console.log('Имя пользователя обновлено!')
            }).catch((error) => {
                console.log('Ошибка обновления имени пользователя')
            });
            return response.user;
        } catch (e) {
            return thunkAPI.rejectWithValue({error: e.message})
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: {
        [loginWithGoogle.pending.type]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [loginWithGoogle.fulfilled.type]: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [loginWithGoogle.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },

        [logout.fulfilled.type]: () => ({...initialState,  isLoading: false}),

        [loginWithEmailAndPassword.pending.type]: (state) => {
            state.isLoading = true;
        } ,
        [loginWithEmailAndPassword.fulfilled.type]: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [loginWithEmailAndPassword.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        },

        [createAccount.pending.type]: (state) => {
            state.isLoading = true;
        } ,
        [createAccount.fulfilled.type]: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isLoading = false;
        },
        [createAccount.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

export const {setUser, setLoading} = authSlice.actions;
