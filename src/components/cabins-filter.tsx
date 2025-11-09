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
                    <label>Min. antall gjester</label>
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
                    kr
                </div>

                <div className="filter amenities-filter">
                    <label>Fasiliteter:</label>
                    <div className="amenities-row">
                        {allAmenities.map((amenity) => (
                            <label key={amenity} className="amenity-checkbox">
                                <input
                                    type="checkbox"
                                    checked={amenities.includes(amenity)}
                                    onChange={() => handleAmenityChange(amenity)}
                                />

                                {/* https://stackoverflow.com/a/1026087/24017710 */}
                                {/* Gjør at første bokstaven blir stor, og resten små. */}
                                {String(amenity).charAt(0).toUpperCase() + String(amenity).slice(1)}
                            </label>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}