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
                        <a href="/ideen" className='omoss-btn'>
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
                        <h3><CountUp end={4} duration={2} enableScrollSpy={true} />.<CountUp end={7} duration={2} enableScrollSpy={true} /></h3>
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

            <div className="hero-section">
                <div className="hero-content">
                    <div className="features-box">
                        <h3>Noen grunner til hvorfor kunder elsker oss</h3>
                        <p>Her er noen grunner til hvorfor du bør velge HytteLeie</p>

                        <div className="features">
                            <div className="feature-box">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.7221 8.26596C15.2107 8.10312 15.4549 8.02169 15.6174 8.07962C15.7587 8.13003 15.87 8.24127 15.9204 8.38263C15.9783 8.54507 15.8969 8.78935 15.734 9.27789L14.2465 13.7405C14.2001 13.8797 14.1769 13.9492 14.1374 14.007C14.1024 14.0582 14.0582 14.1024 14.007 14.1374C13.9492 14.1769 13.8797 14.2001 13.7405 14.2465L9.27789 15.734C8.78935 15.8969 8.54507 15.9783 8.38263 15.9204C8.24127 15.87 8.13003 15.7587 8.07962 15.6174C8.02169 15.4549 8.10312 15.2107 8.26596 14.7221L9.75351 10.2595C9.79989 10.1203 9.82308 10.0508 9.8626 9.99299C9.8976 9.94182 9.94182 9.8976 9.99299 9.8626C10.0508 9.82308 10.1203 9.79989 10.2595 9.75351L14.7221 8.26596Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='feature-title'>Utforsk muligheter</p>
                                <p className='feature-description'>Hos oss finner du muligheten til å utforske hele fedrelandet fra ett sted - PC-en din.</p>
                            </div>

                            <div className="feature-box">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 11L11 13L15.5 8.5M9.9 19.2L11.36 21.1467C11.5771 21.4362 11.6857 21.5809 11.8188 21.6327C11.9353 21.678 12.0647 21.678 12.1812 21.6327C12.3143 21.5809 12.4229 21.4362 12.64 21.1467L14.1 19.2C14.3931 18.8091 14.5397 18.6137 14.7185 18.4645C14.9569 18.2656 15.2383 18.1248 15.5405 18.0535C15.7671 18 16.0114 18 16.5 18C17.8978 18 18.5967 18 19.1481 17.7716C19.8831 17.4672 20.4672 16.8831 20.7716 16.1481C21 15.5967 21 14.8978 21 13.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V13.5C3 14.8978 3 15.5967 3.22836 16.1481C3.53284 16.8831 4.11687 17.4672 4.85195 17.7716C5.40326 18 6.10218 18 7.5 18C7.98858 18 8.23287 18 8.45951 18.0535C8.76169 18.1248 9.04312 18.2656 9.2815 18.4645C9.46028 18.6137 9.60685 18.8091 9.9 19.2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='feature-title'>24/7 kundesupport</p>
                                <p className='feature-description'>Trenger du hjelp med noe? Vårt team står klar for deg, døgnet rundt.</p>
                            </div>

                            <div className="feature-box">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='feature-title'>Billigste priser</p>
                                <p className='feature-description'>HytteLeie tilbyr de billigste prisene når det gjelder hytter og ferien.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}