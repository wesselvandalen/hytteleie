import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import './succes-page.css';
import { useContext, useEffect, useState } from 'react';
import type { Booking } from '../model/booking';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../contexts/auth-context';
import type { AuthContextType } from '../model/auth-context';
import { getBookingById } from '../service/booking-service';

export default function SuccesPage() {
    const { width, height } = useWindowSize();
    const bookingId: any = useParams();
    const { user } = useContext(AuthContext) as AuthContextType;
    const [booking, setBooking] = useState<Booking>();

    useEffect(() => {
        if (!user) return;     
        fetchBooking();
    }, [user]);

    const fetchBooking = async () => {
        if (!user) {
            console.error("No user");
            return;
        }
        const response: any = await getBookingById(user.uid, bookingId.bookingId);
        setBooking(response);
    }

    if (!booking) {
        return <p>There is no booking found.</p>
    }

    console.log(booking);

    return (
        <div className="sp-container">
            <div className="sp-content">
                <Confetti
                    width={width}
                    height={height}
                />

                <div className="auth-top">
                    <div className="auth-title">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 10.5L11 12.5L15.5 8M20 21V7.8C20 6.11984 20 5.27976 19.673 4.63803C19.3854 4.07354 18.9265 3.6146 18.362 3.32698C17.7202 3 16.8802 3 15.2 3H8.8C7.11984 3 6.27976 3 5.63803 3.32698C5.07354 3.6146 4.6146 4.07354 4.32698 4.63803C4 5.27976 4 6.11984 4 7.8V21L6.75 19L9.25 21L12 19L14.75 21L17.25 19L20 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3>Hytta di er reservert!</h3>
                    </div>
                    <p>Kos deg på hytteturen din! Du skal snart få en e-post av oss med alle detaljene på {booking.email}.</p>
                </div>

            </div>
        </div>
    );
}