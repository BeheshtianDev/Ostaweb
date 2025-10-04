import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://your-api-base-url.com/api", // Your API base URL here
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
