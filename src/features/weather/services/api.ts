import axios from 'axios'
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY

const api = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5`,
  params: { appid: API_KEY, locale: 'pt_br' }
})

export default api