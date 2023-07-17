import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTg3MzdkZmM5YTZmMDE3MDc4ZWVjZGMzYzNhMTE0NyIsInN1YiI6IjY0YjU1YWJkMGJiMDc2MDE0ZTRmY2M4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rVo_V-ARtgAdq7bT1G1-8_7gNqh8ODDqdFIE0aqCT7U';

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};