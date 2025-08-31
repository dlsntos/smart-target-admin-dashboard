import axios from "axios";

const API_BASE = "http://localhost:5000";

export const createSale = async (data) => {
  const res = await axios.post(`${API_BASE}/api/sales`, data);
  return res;
};

export const fetchFeedbackData = (feedbackData) => {
  return axios.get(`${API_BASE}/api/get-feedback`, feedbackData);
};

export const fetchSalesData = () => {
  return axios.get(`${API_BASE}/api/get-sales`);
};
