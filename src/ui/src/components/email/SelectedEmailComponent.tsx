import React from 'react';
import './SelectedEmailComponent.css';

const SelectedEmailComponent = ({ email }: { email: any }) => {
    return (
        <div className="selected-email">
            <h2>{email.subject}</h2>
            <p>{email.body}</p>
            <div className="email-metadata">
                <small>Da: {email.sender}</small>
                <small>Data: {email.date}</small>
            </div>
        </div>
    );
};

export default SelectedEmailComponent;
