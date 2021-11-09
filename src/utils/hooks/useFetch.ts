import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url : string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true)
        setData(null);
        setError(null);
        const source = axios.CancelToken.source();
        const timeoutId = setTimeout(() => {
            axios.get(url, {cancelToken: source.token})
                .then(res => {
                    setLoading(false);
                    //checking for multiple responses for more flexibility
                    //with the url we send in.
                    res.data && setData(res.data);
                    // res.content && setData(res.content);
                })
                .catch(err => {
                    setLoading(false)
                    setError(`Произошла ошибка. Описание ошибки: ${err.message}`);
                })
        }, 1000);

        return () => {
            source.cancel();
            clearTimeout(timeoutId);
        }
    }, [url])

    return {data, loading, error}
};
