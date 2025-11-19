import { useState } from "react";
import Notification from "./notification";

interface FormData {
    name: string;
    email: string;
    adres: string;
    phonenumber: string;
    special_request: string;
    adults: number;
    children: number;
    pets: number;
}

export default function PersonaliaForm({ handleShowInfo }: any) {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        adres: "",
        phonenumber: "",
        special_request: "",
        adults: 2,
        children: 0,
        pets: 0
    });
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.adults < 1 || formData.children < 0 || formData.pets < 0) {
            setNotificationMessage("Det må minst være én voksen, og det kan ikke være negative tall på barna eller kjæledyr.");
            setShowNotification(true);
            return;
        }

        if (formData.name === '' || formData.adres === '' || formData.email === '' || formData.phonenumber === '') {
            setNotificationMessage("Fyll inn personsdetaljene dine for å kunne fortsette.");
            setShowNotification(true);
            return;
        }
        
        sessionStorage.setItem("formdata", JSON.stringify(formData));
        handleShowInfo(true);
    };

    return (
        <div className="personaliaform">

            <form className="oc-form">
                <div className="form-group">
                    <label htmlFor="name">Navn</label>
                    <input type="text" id="name" name="name" required placeholder='Ole Nordmann'
                        value={formData.name}
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-post</label>
                    <input type="email" id="email" name="email" required placeholder='olenordmann@gmail.no'
                        value={formData.email}
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="phonenumber">Telefonnummer</label>
                    <input type="tel" id="phonenumber" name="phonenumber" required placeholder='472 89 116'
                        value={formData.phonenumber}
                        onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="adres">Adresse</label>
                    <input type="text" id="adres" name="adres" required placeholder='Elgveien 12, 2614 Lillehammer'
                        value={formData.adres}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <p>Antall personer</p>
                    <div className="inner-input">
                        <label htmlFor="numberOfPeopleAdults">Voksne (18+):</label>
                        <input type="number" id="numberOfPeopleAdults" name="numberOfPeopleAdults" required placeholder='2'
                            onChange={handleChange}
                            min="0"
                        />
                    </div>
                    <div className="inner-input">
                        <label htmlFor="numberOfPeopleChildren">Barn:</label>
                        <input type="number" id="numberOfPeopleChildren" name="numberOfPeopleChildren" required placeholder='0'
                            onChange={handleChange}
                            min="0"
                        />
                    </div>
                    <div className="inner-input">
                        <label htmlFor="numberOfPeoplePets">Kjæledyr:</label>
                        <input type="number" id="numberOfPeoplePets" name="numberOfPeoplePets" required placeholder='0'
                            onChange={handleChange}
                            min="0"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="special_request">Spesielle ønsker eller behov</label>
                    <textarea id="special_request" name="special_request" rows={4} placeholder='f.eks. allergier, tilgjengelighet'
                        value={formData.special_request}
                        onChange={handleChange}
                    />
                </div>

                {showNotification && (
                    <Notification
                        message={notificationMessage}
                        onClose={() => setShowNotification(false)}
                    />
                )}

                <button type="submit" className="submit-button" onClick={handleSubmit}>
                    Gå til reserveringsoversikten
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </form>
        </div>
    );
}