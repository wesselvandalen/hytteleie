import { useParams } from 'react-router-dom';
import './cabin-info-page.css';
import { useContext, useEffect, useState } from 'react';
import { getCabinById } from '../service/cabins-service';
import { getColorByCategory, getIconByAmenity } from '../service/utils';
import Calender from '../components/calender';
import { AuthContext } from '../contexts/auth-context';
import type { AuthContextType } from '../model/auth-context';

export default function CabinInfoPage() {
    const { cabinId } = useParams();
    const [cabin, setCabin] = useState<any>();
    const { user } = useContext(AuthContext) as AuthContextType;

    useEffect(() => {
        if (cabinId) handleCabinFetch(cabinId);
    }, [cabinId]);

    const handleCabinFetch = async (id: string) => {
        const fetchedCabin = await getCabinById(id);
        setCabin(fetchedCabin);
    };

    if (!cabin) {
        return <p className='no-cabin-found'>Det finnes ingen hytte med id {cabinId}</p>
    }

    return (
        <div className="cabin-info-container">
            <div className="cabin-info-content">

                <div className="ci-images">
                    <img src={cabin.images[0]} alt={`${cabin.title} utseendet`} className='ci-image-1' />
                    <div>
                        <img src={cabin.images[1]} alt={`${cabin.title} innsiden`} className='ci-image-2' />
                        <img src={cabin.images[2]} alt={`${cabin.title} plantegning`} className='ci-image-2' />
                    </div>
                </div>

                <div className="ci-info">
                    <div className="ci-cabin-info">

                        <div className="ci-title-tags">
                            <h3 className='ci-name'>{cabin.title}</h3>
                            <div className="ci-tags">
                                {cabin.categories.map((tag: string, index: number) => {
                                    return <p style={{ backgroundColor: getColorByCategory(tag) }} key={index}>{tag}</p>
                                })}
                            </div>
                        </div>

                        <div className="ci-stats">
                            <div className="cabin-location">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>{cabin.location}</p>
                            </div>

                            <div className="cabin-location">
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p>Maks antall gjester: {cabin.maxGuests}</p>
                            </div>
                        </div>

                        <p className='cabin-description'>{cabin.description}</p>

                        <div className="ci-amenities">
                            <h3 className='ci-amenities-titel'>Fasiliteter</h3>
                            <div className="line" />

                            <div className="ci-amenities-grid">
                                {cabin.amenities.map((amenity: string, index: number) => {
                                    return <p key={index}>
                                        {getIconByAmenity(amenity)}
                                        {amenity}
                                    </p>
                                })}
                            </div>
                        </div>

                    </div>

                    <div className="ci-cabin-reserve">
                        <div className="ci-cabin-reserve-content">
                            <h3 className='ci-reserve-title'>Reserver denne hytta</h3>
                            <div className="line" />

                            {user ?
                                <Calender props={cabin} />
                                :
                                <p>Du må være pålogget for å kunne bruke kalenderen.</p>
                            }
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}