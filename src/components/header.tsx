import { useContext, useState, useEffect } from 'react';
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
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1080);

    // Handle resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1080);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const linkColor = isHomePage ? '#fff' : '#000';
    const headerStyle = {
        borderBottom: isHomePage ? 'none' : '1px solid rgba(0,0,0,0.1)',
        backgroundColor: isHomePage ? 'transparent' : '#fff',
    };

    // --- Desktop Header ---
    const DesktopHeader = (
        <div className="header-content">
            <nav className="header-dock">
                <a style={{ color: linkColor }} href="/hytter">Hytter</a>
                <a style={{ color: linkColor }} href="/ideen">Idéen bak</a>
            </nav>

            <a href="/" className="header-logo" style={{ color: linkColor }}>
                HytteLeie
            </a>

            <nav className="header-dock">
                {user ? <UserBlock props={user} key={1} /> : (
                    <>
                        <a style={{ color: linkColor }} href="/register">Registrer</a>
                        <a style={{ color: linkColor }} href="/login">Logg inn</a>
                    </>
                )}
            </nav>
        </div>
    );

    // --- Mobile Header ---
    const MobileHeader = (
        <div className="header-content mobile-header">
            <button className="ham-btn" onClick={toggleMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={linkColor} strokeWidth="2">
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </button>

            <a href="/" className="header-logo" style={{ color: linkColor }}>
                HytteLeie
            </a>

            <nav className={`header-dock mobile-dock ${isMenuOpen ? 'open' : ''}`}>
                <a style={{ color: '#000' }} href="/hytter">Hytter</a>
                <a style={{ color: '#000' }} href="/ideen">Idéen bak</a>
                {user ? <UserBlock props={user} key={1} /> : (
                    <>
                        <a style={{ color: '#000' }} href="/register">Registrer</a>
                        <a style={{ color: '#000' }} href="/login">Logg inn</a>
                    </>
                )}
            </nav>
        </div>
    );

    return (
        <header className="header-container" style={headerStyle}>
            {isMobile ? MobileHeader : DesktopHeader}
        </header>
    );
}