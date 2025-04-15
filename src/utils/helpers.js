export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

export const calculateAge = (birthDate) => {
    const ageDiff = Date.now() - new Date(birthDate).getTime();
    return Math.floor(ageDiff / (1000 * 3600 * 24 * 365.25));
};