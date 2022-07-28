import axios from "axios";

const API_KEY = process.env.VITE_APP_OPEN_WEATHER_MAP_KEY;

const api = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5`,
  params: { appid: API_KEY, lang: "pt_br", units: "metric" },
});

export default api;
