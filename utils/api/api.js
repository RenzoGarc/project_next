import axios from "axios";

const BASE_URL = process.env.URL_BACKEND; // Reemplaza con la URL de tu backend

const api = axios.create({
  baseURL: BASE_URL,
  // Puedes agregar configuraciones adicionales aquí, como headers, etc.
});

export const makeGetRequest = async (url, params = {}) => {
  try {
    const response = await api.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("Error making GET request:", error);
    throw error;
  }
};

export const makePostRequest = async (url, data = {}) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    console.error("Error making POST request:", error);
    throw error;
  }
};

export const makePutRequest = async (url, data = {}) => {
  try {
    const response = await api.put(url, data);
    return response.data;
  } catch (error) {
    console.error("Error making PUT request:", error);
    throw error;
  }
};

export const makePatchRequest = async (url, data = {}) => {
  try {
    const response = await api.patch(url, data);
    return response.data;
  } catch (error) {
    console.error("Error making PATCH request:", error);
    throw error;
  }
};

export const makeDeleteRequest = async (url) => {
  try {
    const response = await api.delete(url);
    return response.data;
  } catch (error) {
    console.error("Error making DELETE request:", error);
    throw error;
  }
};
