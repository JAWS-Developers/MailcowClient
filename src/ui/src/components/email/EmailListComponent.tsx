import React from 'react';
import EmailItem from './EmailItemComponent';
import './EmailListComponent.css';

const EmailListComponent = ({
    emails,
    onSelectEmail,
}: {
    emails: any[];
    onSelectEmail: (email: any) => void;
}) => {
    return (
        <div className="email-list">
            {emails.map((email) => (
                <EmailItem key={email.id} email={email} onSelect={() => onSelectEmail(email)} onDelete={() => {}}/>
            ))}
        </div>
    );
};

export default EmailListComponent;
