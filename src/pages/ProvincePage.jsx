import React from 'react';
import { useParams } from 'react-router-dom';
import ProvinceDetails from '../components/ProvinceDetails';
import EventListings from '../components/EventListings';

const ProvincePage = () => {
    const { provinceId } = useParams();

    return (
        <div className="container">
            <h1 className="mt-4">Province Information</h1>
            <ProvinceDetails provinceId={provinceId} />
            <h2 className="mt-4">Upcoming Events</h2>
            <EventListings provinceId={provinceId} />
        </div>
    );
};

export default ProvincePage;