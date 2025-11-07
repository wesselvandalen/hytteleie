import { useLocation } from 'react-router-dom';
import './footer.css';

export default function Footer() {
    const location = useLocation();
    const isHomePage: boolean = location.pathname === '/';

    const footerBackground: string = isHomePage ? '#0e0e0e' : '#fff';
    const aColor: string = isHomePage ? '#fff' : '#000';

    return (
        <footer className="footer" style={{ backgroundColor: footerBackground }}>
            <div className="footer-content" style={{ color: aColor }}>
                <div className="footer-section">
                    <h3>HytteLeie</h3>
                    <p className='copyright'>Copyright &#169; {new Date().getFullYear()}</p>
                </div>
                <div className="footer-section">
                    <h3>Følg oss</h3>
                    <a style={{ color: aColor }} href="https://x.com/?lang=nb" target='_blank'>X</a>
                    <a style={{ color: aColor }} href="https://www.instagram.com/" target='_blank'>Instagram</a>
                    <a style={{ color: aColor }} href="https://www.facebook.com/" target='_blank'>Facebook</a>
                </div>
                <div className="footer-section">
                    <h3>Sider</h3>
                    <a style={{ color: aColor }} href="/">Hjemmeside</a>
                    <a style={{ color: aColor }} href="/hytter">Hytter</a>
                    <a style={{ color: aColor }} href="/omoss">Om oss</a>
                </div>
                <div className="footer-section">
                    <h3>Bli med</h3>
                    <a style={{ color: aColor }} href="/register">Lag ny konto</a>
                    <a style={{ color: aColor }} href="/login">Logg på</a>
                </div>
                <div className="footer-section">
                    <h3>Mer</h3>
                    <a style={{ color: aColor }} href="/vilkår">Vilkår</a>
                </div>
            </div>
        </footer>
    );
}