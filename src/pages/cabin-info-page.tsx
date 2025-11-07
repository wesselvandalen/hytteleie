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
    }, []);

    const handleCabinFetch = (id: string) => setCabin(getCabinById(id));

    if (!cabin) {
        return <p className='no-cabin-found'>Det finnes ingen hytte med id {cabinId}</p>
    }

    return (
        <div className="cabin-info-container">
            <div className="cabin-info-content">

                <div className="ci-images">
                    <img src={cabin.images[0]} alt="Bilde" className='ci-image-1' />
                    <div>
                        <img src={cabin.images[1]} alt="" className='ci-image-2' />
                        <img src={cabin.images[2]} alt="" className='ci-image-2' />
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

                        <div className="cabin-location">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p>{cabin.location}</p>
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