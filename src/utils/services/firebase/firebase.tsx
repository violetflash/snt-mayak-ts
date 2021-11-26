import {
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword
} from "firebase/auth";


import {useEffect, useState} from "react";
import {useAppDispatch} from "../../../redux";

export const provider = new GoogleAuthProvider();
export const auth = getAuth();

export const useAuth = () => {
    const dispatch = useAppDispatch();
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const observe = onAuthStateChanged(auth, (user: any) => {
            setCurrentUser(user);
            // const userData = {
            //
            // }
            // dispatch(setUser(user));
        });

        return () => observe();
    });

    return currentUser;
};
