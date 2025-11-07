import './cabins-filter.css';

interface CabinFilterProps {
    location: string;
    setLocation: (value: string) => void;
}

export default function CabinFilter({location, setLocation }: CabinFilterProps) {
    return (
        <div className="filter-box">
            <div className="filter-box-content">
                <div className='filter'>
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Søk etter sted
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}