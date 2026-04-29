import axios from "axios";


// the api call
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Login response
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


// DEBUG: log every request
api.interceptors.request.use((config) => {
  console.log("🚀 API REQUEST:", config.method?.toUpperCase(), config.url, config.data);
  return config;
});

// DEBUG: log every response
api.interceptors.response.use(
  (res) => {
    console.log("✅ API RESPONSE:", res.data);
    return res;
  },
  (err) => {
    console.error("❌ API ERROR:", err.response?.data || err.message);
    return Promise.reject(err);
  }
);

export default api;