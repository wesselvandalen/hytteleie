import type { Cabin } from '../model/cabin';
import './cabin-block.css';
import { getColorByCategory, getFirstXSentences, makePriceReadable } from '../service/utils';

interface CabinProps {
    cabin: Cabin;
}

export default function CabinBlock({ cabin }: CabinProps) {
    return (
        <a className="cabin-container" href={`/hytter/${cabin.id}`}>
            <img src={cabin.images[0]} alt={cabin.title} />
            <div className="cabin-info">
                
                <div className="title-tags-container">
                    <h3 className='cabin-title'>{cabin.title}</h3>
                    <div className="cabin-tags">
                        {cabin.categories.map((tag: string, index: number) => {
                            return <p style={{ backgroundColor: getColorByCategory(tag) }} key={index}>{tag}</p>
                        })}
                    </div>
                </div>

                <div className="cabin-location">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>{cabin.location}</p>
                </div>

                <p className='cabin-description'>{getFirstXSentences(cabin.description, 1)}</p>

                {/* <div className="cabin-amenities">
                    {cabin.amenities.map((amenity: string, index: number) => {
                        return <p key={index}>{amenity}</p>
                    })}
                </div> */}

                <p className='cabin-max-guests'>Maks. antall gjester: {cabin.maxGuests}</p>
            </div>
            <p className='cabin-price'>Pris per natt: {makePriceReadable(cabin.pricePerNight)} kr</p>
        </a>
    );
}