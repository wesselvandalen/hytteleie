import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import './succes-page.css';
import { useEffect, useState } from 'react';
import { getCabinById } from '../service/cabins-service';
import type { Cabin } from '../model/cabin';
import { getColorByCategory, getFirstXSentences, makePriceReadable } from '../service/utils';

export default function SuccesPage() {
    const { width, height } = useWindowSize()
    const [cabin, setCabin] = useState<Cabin>();

    useEffect(() => {
        handleCabinFetch();
        sessionStorage.clear();
    }, []);

   const handleCabinFetch = async () => {
        const cabinId: string | null = sessionStorage.getItem("cabinId");
        if (cabinId) {
            const fetchedCabin: any = await getCabinById(cabinId);
            setCabin(fetchedCabin);
        }
    };

    if (!cabin) {
        return <p>Cabin kunne ikke hentes...</p>
    }

    return (
        <div className="sp-container">
            <div className="sp-content">
                <Confetti
                    width={width}
                    height={height}
                />

                <div className="auth-top">
                    <div className="auth-title">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 10.5L11 12.5L15.5 8M20 21V7.8C20 6.11984 20 5.27976 19.673 4.63803C19.3854 4.07354 18.9265 3.6146 18.362 3.32698C17.7202 3 16.8802 3 15.2 3H8.8C7.11984 3 6.27976 3 5.63803 3.32698C5.07354 3.6146 4.6146 4.07354 4.32698 4.63803C4 5.27976 4 6.11984 4 7.8V21L6.75 19L9.25 21L12 19L14.75 21L17.25 19L20 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3>Hytta di er reservert!</h3>
                    </div>
                    <p>Kos deg på ferien din! Du skal snart få en e-post av oss med alle detaljene.</p>
                </div>

                <div className="oop-section">
                    <div className="cabin-wrapper">
                        <img src={cabin.images[0]} alt="Hytte bilde" className="cabin-wrapper-img" />
                        <div className="cabin-wrapper-info">
                            <div className="title-tags-container">
                                <h3 className='cabin-wrapper-title'>{cabin.title}</h3>
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

                            <p className='cabin-description'>{getFirstXSentences(cabin.description, 2)}</p>

                            <div className="cabin-amenities">
                                {cabin.amenities.map((amenity: string, index: number) => {
                                    return <p key={index}>{amenity}</p>
                                })}
                            </div>

                            <p className='cabin-max-guests'>Maks. antall gjester: {cabin.maxGuests}</p>
                            <p className='cabin-wrapper-price'>Pris per natt: {makePriceReadable(cabin.pricePerNight)} kr</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}