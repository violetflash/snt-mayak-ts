import {
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword
} from "firebase/auth";

import firebase from "firebase/compat";
import {useEffect, useState} from "react";

export const provider = new GoogleAuthProvider();
export const auth = getAuth();


if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.REACT_APP_FB_API,
        authDomain: process.env.REACT_APP_FB_DOMAIN,
        projectId: process.env.REACT_APP_FB_PROJECT,
        storageBucket: process.env.REACT_APP_FB_BUCKET,
        messagingSenderId: process.env.REACT_APP_FB_SENDER,
        appId: process.env.REACT_APP_FB_APP,
    });
}




export const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const observe = onAuthStateChanged(auth, (user: any) => setCurrentUser(user));

        return () => observe();
    });

    return currentUser;
};
