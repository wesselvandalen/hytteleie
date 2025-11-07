import './not-found-page.css';
import picture from '../assets/notfound.png';

export default function NotFoundPage() {
    return (
        <div className="nf-page">
            <div className="nf-content">
                <img src={picture} alt="404 not found." />
                <h3>Feilmelding 404 - Siden ble ikke funnet</h3>
                <p>Denne hytta fant vi ikke dessverre... Har du lyst til å se på de andre <a href="/hytter">hyttene våre</a>?</p>
            </div>
        </div>
    );
}