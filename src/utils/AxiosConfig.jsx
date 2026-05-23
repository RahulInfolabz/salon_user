import axios from "axios";
import CheckToken from "./CheckToken";
import Logout from "./Logout";
const apiUrl = import.meta.env.VITE_BASE_URL;

let api = axios.create({
    baseURL: `${apiUrl}`
})


api.interceptors.request.use((config) => {
    let token = CheckToken();
    if (token) {
        config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
})


api.interceptors.response.use(res => res,
    (error) => {
        if (error.response.status === 401) {
            Logout();
        }
    }
)


export default api;