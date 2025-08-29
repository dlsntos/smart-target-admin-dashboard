import axios from 'axios';

const API_BASE = "http://localhost:5000";

export const createSale = (saleData) => {
  return axios.post(`${API_BASE}/api/sales`, saleData);
};