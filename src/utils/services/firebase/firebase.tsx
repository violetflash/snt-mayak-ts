import {
    getAuth,
    onAuthStateChanged,
    // signInWithPopup,
    GoogleAuthProvider,
    // signInWithEmailAndPassword
} from "firebase/auth";


import {useEffect} from "react";
import {useAppDispatch, setUser, setLoading} from "../../../redux";

export const provider = new GoogleAuthProvider();
export const auth = getAuth();

export const useAuth = () => {
    const dispatch = useAppDispatch();
    // const [currentUser, setCurrentUser] = useState<IAuthState | null>(null);

    useEffect(() => {
        const observe = onAuthStateChanged(auth, (user) => {
            dispatch(setLoading(false));
            // setCurrentUser(user);
            if (user) {
                dispatch(setUser(user));
            }
        });

        return () => observe();
    }, [dispatch]);

};
