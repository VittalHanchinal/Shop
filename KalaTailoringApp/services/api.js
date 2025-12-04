import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// IMPORTANT: Change this to your backend URL
// For local testing: use your computer's IP address (not localhost)
// For production: use your deployed backend URL
const API_BASE_URL = 'http://192.168.0.7:8080/api'; // Updated with detected IP

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add token to requests
api.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Auth APIs
export const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
};

// Blouse APIs
export const getBlouseCustomers = async (blouseType) => {
    const response = await api.get(`/customers/blouse/${blouseType}`);
    return response.data;
};

export const addBlouseCustomer = async (customer) => {
    const response = await api.post('/customers/blouse', customer);
    return response.data;
};

export const getCompletedBlouseCustomers = async (blouseType) => {
    const response = await api.get(`/customers/blouse/completed/${blouseType}`);
    return response.data;
};

// Pico APIs
export const getPicoCustomers = async () => {
    const response = await api.get('/customers/pico');
    return response.data;
};

export const addPicoCustomer = async (customer) => {
    const response = await api.post('/customers/pico', customer);
    return response.data;
};

export const getCompletedPicoCustomers = async () => {
    const response = await api.get('/customers/pico/completed');
    return response.data;
};

// Saree APIs
export const getSareeCustomers = async () => {
    const response = await api.get('/customers/saree');
    return response.data;
};

export const addSareeCustomer = async (customer) => {
    const response = await api.post('/customers/saree', customer);
    return response.data;
};

export const getCompletedSareeCustomers = async () => {
    const response = await api.get('/customers/saree/completed');
    return response.data;
};

// Customer APIs
export const getCustomerById = async (id) => {
    const response = await api.get(`/customers/${id}`);
    return response.data;
};

export const updateCustomer = async (id, customer) => {
    const response = await api.put(`/customers/${id}`, customer);
    return response.data;
};

export const markCustomerComplete = async (id) => {
    const response = await api.post(`/customers/${id}/complete`);
    return response.data;
};

export const markPicoComplete = async (id) => {
    const response = await api.post(`/customers/pico/${id}/complete`);
    return response.data;
};

export const markSareeComplete = async (id) => {
    const response = await api.post(`/customers/saree/${id}/complete`);
    return response.data;
};

// Billing APIs
export const searchByNumber = async (number) => {
    const response = await api.get(`/billing/search?number=${number}`);
    return response.data;
};

export default api;
