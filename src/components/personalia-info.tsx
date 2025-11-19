import { useContext, useEffect, useState } from "react";
import { makePriceReadable } from "../service/utils";
import { addBookingToUser } from "../service/booking-service";
import { AuthContext } from "../contexts/auth-context";
import type { AuthContextType } from "../model/auth-context";

export default function PersonaliaInfo() {
    const [cabin, setCabin] = useState<any>();
    const [formData, setFormData] = useState<any>({});
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [days, setDays] = useState(0);
    const { user } = useContext(AuthContext) as AuthContextType;

    useEffect(() => {
        handleCabinFetch();
        handleFormDataFetch();
        handleDatumsFetch();
    }, []);

    const handleCabinFetch = async () => {
        const cabinData: any = sessionStorage.getItem("cabin");
        const response: any = JSON.parse(cabinData);
        setCabin(response.props);
    };

    const handleFormDataFetch = () => {
        const formDataData: string | null = sessionStorage.getItem("formdata");
        if (formDataData) {
            setFormData(JSON.parse(formDataData));
        }
    };

    const handleDatumsFetch = () => {
        const datumsData: string | null = sessionStorage.getItem("datums");
        if (datumsData) {
            const parsedData: any = JSON.parse(datumsData);
            setStartDate(turnDateIntoReadableString(parsedData.startDate));
            setEndDate(turnDateIntoReadableString(parsedData.endDate));
            setDays(parsedData.numberOfDays);
        }
    };

    const turnDateIntoReadableString = (date: any): string => {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0'); 
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const placeOrder = async () => {
        const cabinId: any = cabin.id;

        const booking = {
            cabinId: cabinId,
            price: cabin.pricePerNight * days,
            startDate: startDate,
            endDate: endDate,
            name: formData.name,
            email: formData.email,
            phonenumber: formData.phonenumber,
            adres: formData.adres,
            adults: formData.adults,
            children: formData.children,
            pets: formData.pets,
            special_request: formData.special_request
        };

        const response = await addBookingToUser(user.uid, booking);
        const bookingId: string = response.id;
        window.location.assign(`/suksess/${bookingId}`);
    };

    if (!cabin) {
        return <p>Det er ingen cabin</p>;
    }

    return (
        <div className="personaliainfo-container">
            <div className="oop-section">
                <p className="bold">Personlig informasjon</p>
                <div className="oop-form-data">
                    <p>Navn: {formData.name}</p>
                    <p>E-post: {formData.email}</p>
                    <p>Telefon: {formData.phone}</p>
                    <p>Adresse: {formData.address}</p>
                    <p>Eventuelt spesielle behov: {formData.message}</p>
                </div>
                <br /><br />
                <div className="oop-form-data">
                    <p>Antall vokse: {formData.numberOfPeopleAdults}</p>
                    <p>Antall barn: {formData.numberOfPeopleChildren}</p>
                    <p>Antall kjæledyr: {formData.numberOfPeoplePets}</p>
                </div>
            </div>

            <div className="oop-section">
                <p className="bold">Valgte datoene:</p>
                <div className="oop-form-data">
                    <p>Startdato: {startDate}</p>
                    <p>Sluttdato: {endDate}</p>
                    <p>Antall netter: {days}</p>
                </div>
            </div>

            <div className="oop-section">
                <p className="bold">Totalpris</p>
                <div className="oop-form-data">
                    <p>{makePriceReadable(cabin.pricePerNight * days)} kr</p>
                </div>
            </div>

            <button onClick={placeOrder} className="order-btn">
                Reserver hytta
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21V3M3 12H17M17 12L10 5M17 12L10 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}