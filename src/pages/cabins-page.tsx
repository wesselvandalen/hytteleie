import { useEffect, useState } from 'react';
import './cabins-page.css';
import type { Cabin } from '../model/cabin';
import CabinBlock from '../components/cabin-block';
import { findCabinsByLocation } from '../service/cabins-service';
import { cabins as cabinList } from '../data/cabins';
import CabinFilter from '../components/cabins-filter';

export default function CabinsPage() {
    const [cabins, setCabins] = useState<Cabin[]>(cabinList);
    const [location, setLocation] = useState<string>("");

    useEffect(() => {
        handleFilterCabinsByLocation();
    }, [location]);

    const handleFilterCabinsByLocation = () => {
        if (location === '' || location === null) {
            setCabins(cabins);
            return;
        }
        const filteredCabinData = findCabinsByLocation(location);
        setCabins(filteredCabinData);
    }

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
                        />
                    </div>
                    <div className="cabins-list">
                        {cabins.map((cabin: Cabin) => {
                            return <CabinBlock key={cabin.id} cabin={cabin} />
                        })}
                    </div>
                </div>

            </div>

        </div>
    );
}