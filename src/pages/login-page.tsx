import './auth-page.css';
import { useState } from 'react';
import { signInGoogle, signInEmailAndPassword } from '../service/auth-service';
import googleIcon from '../assets/icons/google.png';
import Notification from '../components/notification';

export default function LoginPage() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

    async function handleLoginEmail(e: any) {
        e.preventDefault();

        try {
            await signInEmailAndPassword(email, password);
            window.location.assign("/");
        } catch (error: any) {
            setNotificationMessage(error.message);
            setShowNotification(true);
        }
    }

    async function handleLoginGoogle(e: any) {
        e.preventDefault();

        try {
            await signInGoogle();
            window.location.assign('/');
        } catch (error: any) {
            setNotificationMessage(error);
            setShowNotification(true);
        }
    };

    return (
        <div className="auth-page-container">
            <div className="auth-page-content">

                <div className="auth-top">
                    <div className="auth-title">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3>Logg inn</h3>
                    </div>
                    <p>Velkommen tilbake! Klar for et nytt eventyr i naturen?</p>
                </div>

                <form className="auth-form" onSubmit={handleLoginEmail}>

                    <input
                        className="input-text"
                        type="email"
                        name="email"
                        placeholder='E-post'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input type="password"
                        className="input-text"
                        name="password"
                        placeholder='Passord'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {showNotification && (
                        <Notification
                            message={notificationMessage}
                            onClose={() => setShowNotification(false)}
                        />
                    )}

                    <button className="auth-button" type="submit">Logg på</button>

                </form>

                <p className="or-line">ELLER</p>

                <div className="providers-container">
                    <button onClick={handleLoginGoogle}>
                        <img src={googleIcon} alt="Google ikon" />
                        Logg på med Google
                    </button>
                </div>


            </div>
        </div>
    );
}