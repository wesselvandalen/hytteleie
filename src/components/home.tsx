import './home.css';
import background from '../assets/bakgrunn.jpg';
import CountUp from 'react-countup';

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
                        <h3><CountUp end={20} duration={2} enableScrollSpy={true} suffix="+" /></h3>
                        <p>år<br />erfaring</p>
                    </div>

                    <p className='perks-stripe'>|</p>

                    <div className="perk-box">
                        <h3><CountUp end={8} duration={2} enableScrollSpy={true} /></h3>
                        <p>Fantastiske<br />hytter</p>
                    </div>

                    <p className='perks-stripe'>|</p>

                    <div className="perk-box">
                        <h3><CountUp end={10} duration={2} enableScrollSpy={true} suffix="K+" /></h3>
                        <p>Fornøyde<br />kunder</p>
                    </div>

                    <p className='perks-stripe'>|</p>

                    <div className="perk-box">
                        <h3><CountUp end={4} duration={2} enableScrollSpy={true} /></h3>
                        <p>Gjennomsnittlig<br />anmeldelse</p>
                    </div>

                </div>
            </div>

            <div className="hero-section">
                <div className="hero-content">
                    <div className="story-box">
                        <div className="story-box-left">
                            <img src="https://www.hytteavisen.no/getfile.php/4903199.973.kbbwnswbwjqjaq/V-hytta.jpg" alt="Hytte" />
                        </div>

                        <div className="story-box-right">
                            <h3>Hytter over hele landet</h3>
                            <p>Drømmer du om en helg i rolig natur, en aktiv familieferie eller en romantisk høsttur ved peisen? Vi tilbyr et stort utvalg hytter over hele landet — ved kysten, ved innsjøer, i fjellheimen og i idylliske bygder. Hver hytte er komfortabelt utstyrt og inspisert for å sikre høy standard, slik at du kan fokusere på opplevelsen.</p>
                            <p>Velg etter beliggenhet, størrelse eller fasiliteter, og bruk vårt enkle bookingsystem for å finne det som passer deg. Trenger du tips til aktiviteter eller lokale opplevelser? Våre lokale verter deler gjerne favorittstedene sine.</p>

                            <a href="/hytter" className='story-box-button'>
                                Sjekk ut hyttene våre
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}