import React, { useState, useEffect } from 'react';
import EmailList from '../../components/email/EmailListComponent';
import SelectedEmail from '../../components/email/SelectedEmailComponent';
import './MailPage.css';
import { useLoading } from '../../contexts/LoadingContext';

const MailPage = () => {
    const { setLoadingStatus } = useLoading();
    const [emails, setEmails] = useState<any[]>([{
        id: 1,
        serder: "t.coupek@gmail.com",
        subject: "Caio zubit",
        date_time: "2025-01-06 15:36:11"
    }]);
    const [selectedEmail, setSelectedEmail] = useState<any>(null);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const fetchEmails = async (pageNumber: number) => {
        
    };

    useEffect(() => {
        fetchEmails(page);
    }, [page]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const bottom =
            e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
            e.currentTarget.clientHeight;
        if (bottom && hasMore) {
            setPage((prev) => prev + 1);
        }
    };

    return (
        <div className="mail-page">
            <div className="email-list-container" onScroll={handleScroll}>
                <EmailList
                    emails={emails}
                    onSelectEmail={(email) => setSelectedEmail(email)}
                />
            </div>
            <div className="selected-email-container">
                {selectedEmail ? (
                    <SelectedEmail email={selectedEmail} key={null} />
                ) : (
                    <div className='no-email-div'>
                        <h3>Please select an email</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MailPage;
