import React, { useEffect, useState } from 'react';

const EventListings = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Fetch events from an API or a local source
        const fetchEvents = async () => {
            // Replace with your API call
            const response = await fetch('/api/events');
            const data = await response.json();
            setEvents(data);
        };

        fetchEvents();
    }, []);

    const countdownTimer = (eventDate) => {
        const now = new Date().getTime();
        const distance = new Date(eventDate).getTime() - now;

        if (distance < 0) {
            return "Event has passed";
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    return (
        <div className="event-listings">
            <h2>Upcoming Events</h2>
            <ul className="list-group">
                {events.map((event) => (
                    <li key={event.id} className="list-group-item">
                        <h5>{event.title}</h5>
                        <p>{event.description}</p>
                        <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                        <p>Countdown: {countdownTimer(event.date)}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventListings;