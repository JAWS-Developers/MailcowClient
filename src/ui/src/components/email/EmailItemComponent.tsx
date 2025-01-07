import './EmailItemComponent.css';
import { FaRegTrashAlt } from 'react-icons/fa';

const EmailItemComponent = ({
    email,
    onSelect,
    onDelete,
}: {
    email: any;
    onSelect: () => void;
    onDelete: () => void;
}) => {
    const formatDate = (date: string) => {
        const emailDate = new Date(date);
        const now = new Date();

        // Se la data è di oggi, mostra solo l'ora
        if (emailDate.toDateString() === now.toDateString()) {
            return `${emailDate.getHours()}:${emailDate.getMinutes() < 10 ? '0' + emailDate.getMinutes() : emailDate.getMinutes()}`;
        } else {
            return `${emailDate.getDate()}/${emailDate.getMonth() + 1}/${emailDate.getFullYear()}`;
        }
    };

    return (
        <div className="email-item" onClick={onSelect}>
            <div className="email-content">
                <div className="email-header">
                    <div className="email-header-left">
                        <h4>{email.subject}</h4>
                        <p>{email.serder}</p>
                    </div>
                    <div className="email-header-right">
                        <small>{formatDate(email.date_time)}</small>
                    </div>
                </div>
            </div>
            <div className="email-actions">
                <div className="action-delete" onClick={onDelete}>
                    <FaRegTrashAlt />
                </div>
            </div>
        </div>
    );
};

export default EmailItemComponent;
