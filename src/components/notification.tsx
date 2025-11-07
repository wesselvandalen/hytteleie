import {useEffect} from "react";
import './notification.css';

const Notification = ({ message, onClose } : any) => {

    useEffect(() => {
        const timeInSeconds = 6000; // 6 sekund
        const timer = setTimeout(onClose, timeInSeconds);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="notification-popup">
            {message}
        </div>
    );
};

export default Notification;