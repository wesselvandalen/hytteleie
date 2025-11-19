import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import './succes-page.css';
import { useContext, useEffect, useState } from 'react';
import type { Booking } from '../model/booking';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../contexts/auth-context';
import type { AuthContextType } from '../model/auth-context';
import { getBookingById } from '../service/booking-service';
import { makePriceReadable } from '../service/utils';

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

                {/* https://www.npmjs.com/package/react-confetti */}
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={50}
                    opacity={.4}
                />

                <div className="auth-top">
                    <div className="auth-title">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 10.5L11 12.5L15.5 8M20 21V7.8C20 6.11984 20 5.27976 19.673 4.63803C19.3854 4.07354 18.9265 3.6146 18.362 3.32698C17.7202 3 16.8802 3 15.2 3H8.8C7.11984 3 6.27976 3 5.63803 3.32698C5.07354 3.6146 4.6146 4.07354 4.32698 4.63803C4 5.27976 4 6.11984 4 7.8V21L6.75 19L9.25 21L12 19L14.75 21L17.25 19L20 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3>Hytta di er reservert!</h3>
                    </div>
                    <p>Kos deg på hytteturen din! Du skal snart få en e-post av oss med alle detaljene på {booking.email}</p>
                </div>

                <div className="sp-info">
                    <div className="booking-card">
                        <h2 className="booking-name">{booking.name}s booking</h2>
                        <div className="booking-grid">
                            {/* Left: Booking Information */}
                            <div className="booking-section">
                                <h3>Booking detaljer</h3>
                                <p><strong>Hytte id:</strong> {booking.cabinId}</p>
                                <p><strong>Antall voksne:</strong> {booking.adults}</p>
                                <p><strong>Antall barn:</strong> {booking.children}</p>
                                <p><strong>Antall kjæledyr:</strong> {booking.pets}</p>
                                <p><strong>Totalpris:</strong> {makePriceReadable(booking.price)} kr</p>
                                {booking.special_request && (
                                    <p><strong>Spesielle behov:</strong> {booking.special_request}</p>
                                )}
                                <p><strong>Start dato:</strong> {booking.startDate}</p>
                                <p><strong>Slutt dato:</strong> {booking.endDate}</p>
                            </div>

                            {/* Right: User Information */}
                            <div className="booking-section">
                                <h3>Brukerinformasjon</h3>
                                <p><strong>Navn:</strong> {booking.name}</p>
                                <p><strong>E-post:</strong> {booking.email}</p>
                                <p><strong>Telefonnummer:</strong> {booking.phonenumber}</p>
                                <p><strong>Adresse:</strong> {booking.adres}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}