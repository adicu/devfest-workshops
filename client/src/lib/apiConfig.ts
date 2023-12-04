import axios from 'axios';

const apiUrl = process.env.NODE_ENV === 'production' ? 'https://flickpicks.fly.dev' : 'http://localhost:8000';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export { apiUrl, fetcher };
