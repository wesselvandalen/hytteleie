import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './calender.css';
import { makePriceReadable } from "../service/utils";
import Notification from "./notification";

export default function Calendar({ props }: any) {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');

    const handleStartDateChange = (date: any) => {
        if (date) {
            setStartDate(date < new Date() ? new Date() : date);
        }
    }

    const handleEndDateChange = (date: any) => {
        if (date) {
            setEndDate(date < new Date() ? new Date() : date);
        }
    }

    const calculateDaysBetweenDates = (): number => {
        const oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((startDate.getTime() - endDate.getTime()) / oneDay));
    };

    const calculatePriceTotalNight = (): number => {
        const differenceInDays = calculateDaysBetweenDates();
        return props ? (differenceInDays * Number(props.pricePerNight)) : 0;
    };

    const handleorderCabinButton = () => {
        if (calculateDaysBetweenDates() === 0) {
            setNotificationMessage("Du må minst booke denne hytta for én natt!");
            setShowNotification(true);
            return;
        }

        if (endDate < startDate) {
            setNotificationMessage("Sluttdatoen kan ikke være før startdatoen!");
            setShowNotification(true);
            return;
        }

        sessionStorage.setItem("datums", JSON.stringify({ startDate, endDate, 'pricePerNight': props.pricePerNight, 'numberOfDays': calculateDaysBetweenDates() }));
        sessionStorage.setItem("cabinId", props.id);
        window.location.assign("/kassen");
    }

    return (
        <div className="calender-top">
            <div className="calender-container">
                <div className="calender-block">
                    <h3>Velg en startdato</h3>
                    <DatePicker
                        selected={startDate}
                        onChange={handleStartDateChange}
                    />
                </div>
                <div className="calender-block">
                    <h3>Velg en sluttdato</h3>
                    <DatePicker
                        selected={endDate}
                        onChange={handleEndDateChange}
                    />
                </div>
                {showNotification && (
                    <Notification
                        message={notificationMessage}
                        onClose={() => setShowNotification(false)}
                    />
                )}
            </div>

            <div className="calender-bottom">
                <p className="calender-price"><span>Pris per natt:</span><span>{makePriceReadable(props.pricePerNight)} kr</span></p>
                <p className="calender-price"><span>Antall dager:</span><span>{calculateDaysBetweenDates()} dag{calculateDaysBetweenDates() === 1 ? '' : 'er'}</span></p>
                <p className="calender-price"><span>Totalprisen:</span><span>{makePriceReadable(calculatePriceTotalNight())} kr</span></p>

                <button className="order-cabin-btn" onClick={handleorderCabinButton}>
                    Bestill hytta
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}