import axios from "axios";

const axiosFetch = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true
});

export default axiosFetch;