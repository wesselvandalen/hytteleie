import './home.css';
import background from '../assets/bakgrunn.jpg';

export default function Home() {
    return (
        <div className="home-container">

            <div className="home-section">
                <img src={background} alt="Background" className="home-image" />

                <div className="home-overlay">
                    <h3>Gamle tradisjoner. Ny utsikt.</h3>
                    <p>Vi henter det beste fra norsk byggeskikk og blander det med moderne komfort og estetikk – for deg som vil ha begge deler.</p>
                    <div className="home-btns">
                        <a href="/hytter" className='hytte-btn'>Sjekk ut hyttene </a>
                        <a href="/omoss" className='omoss-btn'>
                            Lær mer om oss
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero-section">
                <div className="hero-content">
                    
                    <div className="perk-box">
                        <h3>20+</h3>
                        <p>år<br/>erfaring</p>
                    </div>

                    <p className='perks-stripe'>|</p>

                    <div className="perk-box">
                        <h3>8</h3>
                        <p>Fantastiske<br/>hytter</p>
                    </div>

                    <p className='perks-stripe'>|</p>

                    <div className="perk-box">
                        <h3>10K+</h3>
                        <p>Fornøyde<br/>kunder</p>
                    </div>

                    <p className='perks-stripe'>|</p>

                    <div className="perk-box">
                        <h3>4.7</h3>
                        <p>Gjennomsnittlig<br/>anmeldelse</p>
                    </div>

                </div>
            </div>

            
        </div>
    );
}