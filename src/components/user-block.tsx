import { useLocation } from 'react-router-dom';
import './user-block.css';
import { useState } from 'react';
import { signUserOut } from '../service/auth-service';

export default function UserBlock({ props }: any) {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const location = useLocation();
    const isHomePage: boolean = location.pathname === '/';
    const textColor: string = isHomePage ? '#fff' : '#000';

    const sliceString = (input: string) : string => {
        return input.length > 12 ? input.slice(0, 11) + '...' : input;
    }

    const handleBookingButton = () => window.location.assign("/reserveringer");

    return (
        <div
            className="user-block-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="user-block">
                <img
                    src={props.photoURL}
                    alt={props.displayName}
                    className="user-block-image"
                />
                <h3 style={{ color: textColor }} className="user-block-name">
                    {sliceString(props.displayName)}
                </h3>
            </div>

            {isHovered && (
                <div className="dropdown-menu">
                    <div className="dropdown-content">
                        <button className="dropdown-button" onClick={handleBookingButton} >Reserveringer</button>
                        <button className="dropdown-button" onClick={signUserOut} >Logg ut</button>
                    </div>
                </div>
            )}
        </div>
    );
}