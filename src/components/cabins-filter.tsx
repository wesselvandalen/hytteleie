import { useState } from 'react';
import './cabins-filter.css';

interface CabinFilterProps {
    location: string;
    setLocation: (value: string) => void;
    maxGuests: number | "";
    setMaxGuests: (value: number | "") => void;
    maxPrice: number | "";
    setMaxPrice: (value: number | "") => void;
    amenities: string[];
    setAmenities: (value: string[]) => void;
}

const allAmenities = [
    "peis",
    "kjøkken",
    "badstu",
    "wifi",
    "båt",
    "solnedgang",
    "turstiet",
    "stjernehimmel",
    "strøm",
    "brygge"
];

export default function CabinFilter({
    location,
    setLocation,
    maxGuests,
    setMaxGuests,
    maxPrice,
    setMaxPrice,
    amenities,
    setAmenities
}: CabinFilterProps) {

    const [showAmenities, setShowAmenities] = useState(false);

    const handleAmenityChange = (amenity: string) => {
        if (amenities.includes(amenity)) {
            setAmenities(amenities.filter(a => a !== amenity));
        } else {
            setAmenities([...amenities, amenity]);
        }
    }

    return (
        <div className="filter-box">
            <div className="filter-box-content">

                <div className='filter'>
                    <label>Søk etter sted</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="F.eks. Oslo"
                    />
                </div>

                <div className='filter'>
                    <label>Max gjester</label>
                    <input
                        type="number"
                        value={maxGuests}
                        onChange={(e) => setMaxGuests(e.target.value ? Number(e.target.value) : "")}
                        placeholder="F.eks. 4"
                        min={1}
                    />
                </div>

                <div className='filter'>
                    <label>Max pris per natt</label>
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : "")}
                        placeholder="F.eks. 1000"
                        min={0}
                    />
                </div>

                {/* Collapsible amenities filter */}
                <div className="filter">
                    <div
                        className="amenities-header"
                        onClick={() => setShowAmenities(!showAmenities)}
                        style={{ cursor: 'pointer', fontWeight: 500 }}
                    >
                        Amenities {showAmenities ? "▲" : "▼"}
                    </div>
                    {showAmenities && (
                        <div className="amenities-list">
                            {allAmenities.map(amenity => (
                                <label key={amenity} className="amenity-item">
                                    <input
                                        type="checkbox"
                                        checked={amenities.includes(amenity)}
                                        onChange={() => handleAmenityChange(amenity)}
                                    />
                                    {amenity}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}