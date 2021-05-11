import axios from "axios";
const UNSPLASH_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
  },
});
