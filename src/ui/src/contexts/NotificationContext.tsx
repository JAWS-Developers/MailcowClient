// Notification System with Context and TypeScript for React Vite
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import './NotificationContext.css';

interface Notification {
    id: number;
    message: string;
    type: 'info' | 'success' | 'error';
}

interface NotificationContextType {
    addNotification: (message: string, type: 'info' | 'success' | 'error') => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = (): NotificationContextType => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};

interface NotificationProviderProps {
    children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = (message: string, type: 'info' | 'success' | 'error') => {
        const id = Date.now();
        setNotifications((prev) => [...prev, { id, message, type }]);
    };

    const removeNotification = (id: number) => {
        setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    };

    return (
        <NotificationContext.Provider value={{ addNotification }}>
            {children}
            <div className="notification-container">
                {notifications.map(({ id, message, type }) => (
                    <Notification
                        key={id}
                        message={message}
                        type={type}
                        onClose={() => removeNotification(id)}
                    />
                ))}
            </div>
        </NotificationContext.Provider>
    );
};

interface NotificationProps {
    message: string;
    type: 'info' | 'success' | 'error';
    onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {  
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`notification ${type}`} onClick={onClose}>
            <span>{message}</span>
            <button className="close">&times;</button>
        </div>
    );
};