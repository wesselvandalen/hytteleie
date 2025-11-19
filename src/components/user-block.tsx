import { useLocation } from 'react-router-dom';
import './user-block.css';
import { useState } from 'react';
import { signUserOut } from '../service/auth-service';

export default function UserBlock({ props }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHomePage: boolean = location.pathname === '/';
    const textColor: string = isHomePage ? '#fff' : '#000';

    const sliceString = (input: string): string => {
        return input.length > 12 ? input.slice(0, 11) + '...' : input;
    };

    const handleBookingButton = () => window.location.assign("/reserveringer");
    const handleLogout = () => signUserOut();

    // Lukker menyen hvis man klikker utenfor
    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsOpen(false);
        }
    };

    return (
        <div className="user-block-container" tabIndex={0} onBlur={handleBlur}>
            <div
                className="user-block"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img
                    src={props.photoURL}
                    alt={props.displayName}
                    className="user-block-image"
                />
                <h3 style={{ color: textColor }} className="user-block-name">
                    {sliceString(props.displayName)}
                </h3>
            </div>

            {isOpen && (
                <select
                    className="user-block-select"
                    size={2}
                    onChange={(e) => {
                        const value = e.target.value;
                        if (value === 'bookings') handleBookingButton();
                        if (value === 'logout') handleLogout();
                        setIsOpen(false);
                    }}
                >
                    <option value="bookings">Reserveringer</option>
                    <option value="logout">Logg ut</option>
                </select>
            )}
        </div>
    );
}