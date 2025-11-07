import './about-page.css';

export default function AboutPage() {
    return (
        <div className="about-page-container">
            <div className="about-page-content">
                <h3 className='cp-title'>Om oss</h3>
                <p className='cp-description'>Litt om bedriften og skaperen - <a href="https://wesseldalen.eu" target='_blank'>Wessel van Dalen</a>.</p>

                <p>Hytte Leie er et personlig prosjekt til <a href="https://wesseldalen.eu" target='_blank'>Wessel van Dalen</a>, for å vise frem ferdighetene sine med React TypeScript, Firebase og Firestore.</p>

                <p>Hos Hytte Leie kan du opprette en konto, utforske alle tilgjengelige hytter og leie dem for ønsket periode. Ta en pause fra hverdagen, slapp av i naturen og finn roen i vakre omgivelser.</p>

                <p>Hvis du har noen spørsmål, kan du alltid sende en e-post til <a href="mailto:wesselvandalen@gmail.com">wesselvandalen@gmail.com</a></p>
            </div>
        </div>
    );
}