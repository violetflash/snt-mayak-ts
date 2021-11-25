import {createSlice, createAsyncThunk, SerializedError, PayloadAction} from "@reduxjs/toolkit";

import {
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword
} from "firebase/auth";

export interface IAuthResponse {
    displayName: string | null;
    email: string | null;
    isEmailConfirmed: boolean;
}

export interface AuthStateI  extends IAuthResponse {
    isLoading?: boolean;
    error: SerializedError | null;
}

const initialState: AuthStateI = {
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

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const loginByGoogle = createAsyncThunk<IAuthResponse>(
    'loginByGoogle',
    async (req, thunkAPI) => {
        try {
            const response = await signInWithPopup(auth, provider);
            const displayName = response.user?.displayName;
            const email = response.user?.email;
            const isEmailConfirmed = true;
            return { displayName, email, isEmailConfirmed };
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message })
        }
    }
);

export const logout = createAsyncThunk(
    'logout',
    async (_, thunkAPI) => {
        try {
            await auth.signOut();
        }catch(error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const login = createAsyncThunk(
    'login',
    async (formData: IUserLoginData, thunkAPI) => {
        try {
            const response = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        } catch (error) {
            return thunkAPI.rejectWithValue({error: )
        }
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [loginByGoogle.fulfilled.type]: (state, action: PayloadAction<PayLoad>) => {
            state.displayName = action.payload.displayName;
            state.email = action.payload.email;
            state.authenticated = true;
        },
        [loginByGoogle.rejected.type]: (state, action: PayloadAction<>) => {

        };
    }
})
