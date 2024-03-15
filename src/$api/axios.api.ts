import axios from "axios";

export const API_URL = "http://62.113.104.41:4200";

export const $axios = axios.create({
  baseURL: `${API_URL}/api/v1`,
});
