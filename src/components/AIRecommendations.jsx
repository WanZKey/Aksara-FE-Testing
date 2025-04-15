import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AIRecommendations = () => {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const response = await axios.get('/api/recommendations');
                setRecommendations(response.data);
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            }
        };

        fetchRecommendations();
    }, []);

    return (
        <div className="ai-recommendations">
            <h2>AI Recommendations for Tourist Destinations</h2>
            <ul className="list-group">
                {recommendations.map((recommendation, index) => (
                    <li key={index} className="list-group-item">
                        {recommendation.name} - {recommendation.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AIRecommendations;