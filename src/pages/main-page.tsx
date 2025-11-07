import './main-page.css';
import Home from '../components/home';

export default function MainPage() {
    return (
        <div className="main-page-container">
            <div className="main-page-content">
                <Home/>
            </div>
        </div>  
    );
}