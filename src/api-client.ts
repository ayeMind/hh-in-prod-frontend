import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.API_URL,
    validateStatus: (status) => status != 500,
})

apiClient.interceptors.request.use((config) => {
    const authToken = localStorage.getItem("auth_token")

    if (authToken) {
        config.headers['Authorization'] = `Bearer ${authToken}`
    }

    return config
})

export default apiClient