import React from 'react';
import './NewEventComponent.css';

const EventPopupComponent = ({ newEvent, setNewEvent, handleAddEvent, closePopup }) => {
    return (
        <div className="popup-container">
            <div className="popup-header">
                <h2>New event</h2>
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

                </div>


            </div>



            <div className="footer">
                <button className="add-event-btn" onClick={handleAddEvent}>Add Event</button>

            </div>


        </div>
    );
};

export default EventPopupComponent;
