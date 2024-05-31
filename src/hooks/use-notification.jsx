import { useCallback, useState } from 'react';
import Notification from '../components/notification';

const useNotification = (position = "top-right") => {
    const [notifications, setNotifications] = useState([]);

    const triggerNotification = useCallback((notificationProps) => {
        const id = Date.now();
        setNotifications(prev => [...prev, { ...notificationProps, id }]);

        setTimeout(() => {
            setNotifications(prev => prev.filter(notification => notification.id !== id));
        }, notificationProps.duration);
    }, []);

    const removeNotification = useCallback((id) => {
        setNotifications(prev => prev.filter(notification => notification.id !== id));
    }, []);

    const NotificationComponent = (
        <div className={`${position}`}>
            {notifications.map(notification => (
                <Notification key={notification.id} {...notification} onClose={() => removeNotification(notification.id)} />
            ))}
        </div>
    );

    return { NotificationComponent, triggerNotification };
}

export default useNotification;
