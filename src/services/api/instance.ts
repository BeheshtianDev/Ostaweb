import axios from "axios";

const instance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

instance.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer sometoken`;
        return config;
    },
    (err) => {
        throw new Error(err);
    }
)