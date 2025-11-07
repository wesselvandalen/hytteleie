import { auth, db } from "../config/firebase.config.ts";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function signInEmailAndPassword(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};

export async function signUpEmailAndPassword(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};

export async function signInGoogle() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    // Hvis brukeren ikke finnes
    if (!userDoc.exists() || !userDoc.data()) {
        console.error("Brukeren finnes ikke.");
        return;
    } else {
        return user;
    }
};

export async function registerWithGoogle() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
        await setDoc(userDocRef, {
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            createdAt: new Date()
        });
    }

    console.log(user);

    return user;
};

export function signUserOut() {
    return signOut(auth);
};