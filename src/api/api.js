import axios from 'axios';

const API_BASE = "http://localhost:5000";

export const createSale = (saleData) => {
  return axios.post(`${API_BASE}/api/sales`, saleData);
};

export const fetchFeedbackData = (feedbackData) => {
  return axios.get(`${API_BASE}/api/get-feedback`, feedbackData);
};

export const fetchSalesData = (salesData) => {
  return axios.get(`${API_BASE}/api/get-sales`, salesData);
};