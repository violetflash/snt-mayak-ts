import {
    createSlice,
    createAsyncThunk,
    SerializedError
} from "@reduxjs/toolkit";

import {
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export interface AuthStateI {
    displayName?: string | null;
    email?: string | null;
    authenticated?: boolean;
    error?: SerializedError;
}

const initialState: AuthStateI = {
    displayName: undefined,
    email: undefined,
    authenticated: undefined,
    error: undefined,
};

interface PayLoad {
    displayName?: string | null;
    email?: string | null;
}

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const loginButton = createAsyncThunk<AuthStateI, PayLoad>(
    'login',
    async (req, thunkAPI) => {
        try {
            if (req.displayName === null) {
                const response = await signInWithPopup(auth, provider);
                const displayName = response.user?.displayName;
                const email = response.user?.email;
                return { displayName, email } as PayLoad;
            } else {
                const displayName = req.displayName;
                const email = req.email;
                return {displayName, email} as PayLoad;
            }
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message })
        }
    }
);