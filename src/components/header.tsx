import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/auth-context';
import './header.css';
import { useLocation } from 'react-router-dom';
import type { AuthContextType } from '../model/auth-context';
import UserBlock from './user-block';

export default function Header() {
    const location = useLocation();
    const isHomePage: boolean = location.pathname === '/';
    const { user } = useContext(AuthContext) as AuthContextType;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const aColor: string = isHomePage ? '#fff' : '#000';
    const borderBottomColor: string = isHomePage ? 'none' : 'rgba(0, 0, 0, .1) solid 1px';
    const backgroundColor: string = isHomePage ? 'transparent' : '#fff';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header-container" style={{ borderBottom: borderBottomColor, backgroundColor: backgroundColor }}>
            <div className="header-content">
                <button className="ham-btn" onClick={toggleMenu}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={aColor} strokeWidth="2">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>

                <div className={`header-dock ${isMenuOpen ? 'open' : ''}`}>
                    <a style={{ color: isHomePage && !isMenuOpen ? '#fff' : '#000' }} href="/hytter">Hytter</a>
                    <a style={{ color: isHomePage && !isMenuOpen ? '#fff' : '#000' }} href="/ideen">Idéen bak</a>
                </div>

                <a href="/" className='header-logo' style={{ color: aColor }}>
                    HytteLeie
                </a>

                <div className={`header-dock ${isMenuOpen ? 'open' : ''}`}>
                    {user ?
                        <>
                            <UserBlock props={user} key={1} />
                        </>
                        :
                        <>
                            <a style={{ color: isHomePage && !isMenuOpen ? '#fff' : '#000' }} href="/register">Registrer</a>
                            <a style={{ color: isHomePage && !isMenuOpen ? '#fff' : '#000' }} href="/login">Logg inn</a>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}