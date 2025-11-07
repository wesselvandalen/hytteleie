import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase.config.ts";
import { AuthContext } from "./auth-context.ts";
import { doc, getDoc } from "firebase/firestore";

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser: any) => {
            if (currentUser) {
                const userDocRef = doc(db, "users", currentUser.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    setUser(currentUser);
                } else {
                    console.warn(`Brukeren finnes ikke.`);
                }
            } else {
                setUser(null);
            }
        })
        return () => unsubscribe();
    }, [])

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}