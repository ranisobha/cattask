import axios from "axios";

const BASE_URL = 'https://api.thecatapi.com/v1';

const configInterceptor = (req) => {
  const accessToken = JSON.parse(localStorage.getItem("profile"))?.accessToken;
  if (accessToken) {
    req.headers["Content-Type"] = "application/json";
    req.headers.Authorization = `Bearer ${accessToken}`;
  }
  return req;
};

export const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use(configInterceptor);

export const handleApiError = async (error) => {
  try {
    const errorMessage =
      error.response?.data?.message || "An unexpected error occurred.";
    const data = null;
    return { error: errorMessage, data };
  } catch (err) {
    throw new Error("An unexpected error occurred.");
  }
};