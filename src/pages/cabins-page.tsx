import { useEffect, useState } from 'react';
import './cabins-page.css';
import type { Cabin } from '../model/cabin';
import CabinBlock from '../components/cabin-block';
import { findCabins } from '../service/cabins-service';
import CabinFilter from '../components/cabins-filter';

export default function CabinsPage() {
    const [cabins, setCabins] = useState<Cabin[]>([]);
    const [location, setLocation] = useState<string>("");
    const [maxGuests, setMaxGuests] = useState<number | "">("");
    const [maxPrice, setMaxPrice] = useState<number | "">("");
    const [amenities, setAmenities] = useState<string[]>([]);

    useEffect(() => {
        const fetchCabins = async () => {
            const filtered = await findCabins({ location, maxGuests, maxPrice, amenities });
            setCabins(filtered);
        };
        fetchCabins();
    }, [location, maxGuests, maxPrice, amenities]);


    return (
        <div className="cabins-page-container">
            <div className="cabins-page-content">
                <h3 className='cp-title'>Fantastiske hytter, rimelige priser</h3>
                <p className='cp-description'>Unn deg en pause – naturen er bare et klikk unna.</p>

                <div className="cabin-innhold">
                    <div className="cabin-filters">
                        <h3 className='cabin-filters-title'>Filtre</h3>
                        <CabinFilter
                            location={location}
                            setLocation={setLocation}
                            maxGuests={maxGuests}
                            setMaxGuests={setMaxGuests}
                            maxPrice={maxPrice}
                            setMaxPrice={setMaxPrice}
                            amenities={amenities}
                            setAmenities={setAmenities}
                        />
                    </div>
                    <div className="cabins-list">
                        {cabins.map(cabin => (
                            <CabinBlock key={cabin.id} cabin={cabin} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}