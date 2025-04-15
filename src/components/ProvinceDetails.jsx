import React from 'react';

const ProvinceDetails = ({ province }) => {
    if (!province) {
        return <div>Loading...</div>;
    }

    return (
        <div className="province-details">
            <h1>{province.name}</h1>
            <img src={province.image} alt={`${province.name} scenery`} className="img-fluid" />
            <h2>Culture and Traditions</h2>
            <p>{province.culture}</p>
            <h2>Local Stories</h2>
            <p>{province.stories}</p>
            <h2>Quick Facts</h2>
            <ul>
                <li>Capital: {province.capital}</li>
                <li>Population: {province.population}</li>
                <li>Area: {province.area} km²</li>
            </ul>
        </div>
    );
};

export default ProvinceDetails;