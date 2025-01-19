// CalendarWithPopup.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './CalendarPage.css';
import EventPopup from '../../components/cal/NewEventComponent';
import EventHoverTooltip from '../../components/cal/EventHoverTooltip';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
    const [events, setEvents] = useState([
        { id: 1, title: 'Meeting', start: new Date(), end: new Date(), description: 'Team sync-up' },
    ]);

    const [popupData, setPopupData] = useState(null);
    const [showPopup, setShowPopup] = useState(true);
    const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '', description: '' });

    const handleSelectSlot = ({ start, end }) => {
        setNewEvent({ ...newEvent, start, end });
        setShowPopup(true);
    };

    const handleAddEvent = () => {
        setEvents([...events, { id: events.length + 1, ...newEvent }]);
        setShowPopup(false);
    };

    return (
        <div className="calendar-container">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                selectable
                onSelectSlot={handleSelectSlot}
                style={{ margin: '20px' }}
            />

            {/* Popup for adding events */}
            {!showPopup && (
                <EventPopup
                    newEvent={newEvent}
                    setNewEvent={setNewEvent}
                    handleAddEvent={handleAddEvent}
                    closePopup={() => setShowPopup(false)}
                />
            )}

            {/* Hover tooltip */}
            {popupData && <EventHoverTooltip event={popupData} />}
        </div>
    );
};

export default CalendarPage;