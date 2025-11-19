export interface Booking {
    id: string;
    cabinId: string;
    price: number;
    startDate: string;
    endDate: string;
    name: string;
    email: string;
    phonenumber: string;
    adres: string;
    adults: number;
    children: number;
    pets: number;
    special_request: string;
}