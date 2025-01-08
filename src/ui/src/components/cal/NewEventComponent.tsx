import React from 'react';
import './NewEventComponent.css';

const NewEventComponent = ({ newEvent, setNewEvent, handleAddEvent, closePopup }) => {
    return (
        <div className="popup-container">
            <div className="popup-header">
                <h2>New Event</h2>
                <button className="cancel-btn" onClick={closePopup}>Cancel</button>
            </div>

            <div className="fields">
                <div className="field">
                    <input
                        type="text"
                        placeholder="Event Title"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    />
                </div>

                <div className="field">
                    <textarea
                        placeholder="Description"
                        value={newEvent.description}
                        onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    />
                </div>

                <div className="field">
                    <input
                        type="text"
                        placeholder="Location"
                        value={newEvent.location}
                        onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    />
                </div>

                <div className="field">
                    <input
                        type="text"
                        placeholder="Organizer"
                        value={newEvent.organizer}
                        onChange={(e) => setNewEvent({ ...newEvent, organizer: e.target.value })}
                    />
                </div>

                <div className="field">
                    <input
                        type="number"
                        placeholder="Max Participants"
                        value={newEvent.maxParticipants}
                        onChange={(e) => setNewEvent({ ...newEvent, maxParticipants: e.target.value })}
                    />
                </div>

                <div className="date-time-all-day">
                    <div className="field">
                        <input
                            type="date"
                            placeholder="Start Date"
                            value={newEvent.startDate}
                            onChange={(e) => setNewEvent({ ...newEvent, startDate: e.target.value })}
                        />
                    </div>

                    <div className="field">
                        <input
                            type="time"
                            placeholder="Start Time"
                            value={newEvent.startTime}
                            onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
                            disabled={newEvent.allDay}
                        />
                    </div>

                    <div className="field">
                        <input
                            type="date"
                            placeholder="End Date"
                            value={newEvent.endDate}
                            onChange={(e) => setNewEvent({ ...newEvent, endDate: e.target.value })}
                        />
                    </div>

                    <div className="field">
                        <input
                            type="time"
                            placeholder="End Time"
                            value={newEvent.endTime}
                            onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
                            disabled={newEvent.allDay}
                        />
                    </div>

                    <div className="checkbox-field">
                        <label>
                            <input
                                type="checkbox"
                                checked={newEvent.allDay}
                                onChange={(e) => setNewEvent({ ...newEvent, allDay: e.target.checked })}
                            />
                            All Day Event
                        </label>
                    </div>
                </div>

                <div className="field">
                    <select
                        value={newEvent.eventType}
                        onChange={(e) => setNewEvent({ ...newEvent, eventType: e.target.value })}
                    >
                        <option value="">Select Event Type</option>
                        <option value="meeting">Meeting</option>
                        <option value="workshop">Workshop</option>
                        <option value="conference">Conference</option>
                        <option value="webinar">Webinar</option>
                    </select>
                </div>
            </div>

            <div className="footer">
                <button className="add-event-btn" onClick={handleAddEvent}>Add Event</button>
            </div>
        </div>
    );
};

export default NewEventComponent;
