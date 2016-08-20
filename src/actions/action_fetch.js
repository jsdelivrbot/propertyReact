import axios from 'axios';

const API_KEY = '3092nxybyb0otqw18e8nh5nty';
const ROOT_URL = `https://api.airbnb.com/v2/search_results?client_id=${API_KEY}&_limit=6`;

export const FETCH_PROPERTY = 'FETCH_PROPERTY';

export function fetchProperty(city) {
    const url = `${ROOT_URL}&location=${city}`;
    const request = axios.get(url);

    return {
        type: FETCH_PROPERTY,
        payload: request
    };
}