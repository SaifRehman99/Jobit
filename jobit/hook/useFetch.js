import { useState, useEffect } from "react";
import axios from "axios";

import { RAPID_API_KEY } from "@env";

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            "X-RapidAPI-Key": "dec4b7dae1mshaf187605d7cf935p1e1114jsnf08e3e5367b3",
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
    };

    const getData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response?.data?.data);
        } catch (error) {
            setError(error);
            alert("Error Occur....");
        } finally {
            setIsLoading(false);
        }
    };

    const refetch = () => {
        getData();
    };

    useEffect(() => {
        getData();
    }, []);

    return { data, isLoading, error, refetch };
};

export default useFetch;
