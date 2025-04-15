import axios from 'axios';

const API_BASE_URL = 'https://api.indonesia-tourism.com';

export const fetchProvinces = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/provinces`);
        return response.data;
    } catch (error) {
        console.error('Error fetching provinces:', error);
        throw error;
    }
};

export const fetchEventsByProvince = async (provinceId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/events?provinceId=${provinceId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching events for province ${provinceId}:`, error);
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

export const fetchAIRecommendations = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/recommendations`);
        return response.data;
    } catch (error) {
        console.error('Error fetching AI recommendations:', error);
        throw error;
    }
};