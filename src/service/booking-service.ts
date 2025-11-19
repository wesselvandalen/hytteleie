import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase.config";
import type { Booking } from "../model/booking";

export async function getBookingById(userId: string, bookingId: string) {
    const ref = doc(db, "users", userId, "bookings", bookingId);
    const snap = await getDoc(ref);

    if (!snap.exists()) return null;
    return { id: snap.id, ...snap.data() };
}

export async function addBookingToUser(userId: string, booking: Omit<Booking, "id">) {
    const bookingsRef = collection(db, "users", userId, "bookings");
    const docRef = await addDoc(bookingsRef, booking);

    return {
        id: docRef.id,
        ...booking
    };
}