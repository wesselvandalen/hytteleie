import { useEffect, useState } from "react";
import { getCabinById } from "../service/cabins-service";
import type { Cabin } from "../model/cabin";
import { makePriceReadable } from "../service/utils";

export default function PersonaliaInfo() {
    const [cabin, setCabin] = useState<Cabin | null>(null);
    const [formData, setFormData] = useState<any>({});
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
    const [days, setDays] = useState(0);

    useEffect(() => {
        handleCabinFetch();
        handleFormDataFetch();
        handleDatumsFetch();
    }, []);

    const handleCabinFetch = async () => {
        const cabinId: string | null = sessionStorage.getItem("cabinId");
        if (cabinId) {
            const fetchedCabin = await getCabinById(cabinId);
            setCabin(fetchedCabin);
        }
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

    const placeOrder = () => {
        window.location.assign("/suksess");
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