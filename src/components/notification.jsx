import { AiOutlineCheckCircle, AiOutlineInfoCircle, AiOutlineWarning, AiOutlineCloseCircle, AiOutlineClose } from 'react-icons/ai';
import './notification.css';

const Notification = ({ type = "info", message, onClose }) => {

    const icons = {
        success: <AiOutlineCheckCircle />,
        info: <AiOutlineInfoCircle />,
        warning: <AiOutlineWarning />,
        error: <AiOutlineCloseCircle />,
    };

    return (
        <div className={`notification ${type}`}>
            {/* icon */}
            {icons[type]}
            {/* message */}
            {message}
            {/* close button */}
            <AiOutlineClose color='white' className='closeBtn' onClick={onClose} />
        </div>
    );
}

export default Notification;
