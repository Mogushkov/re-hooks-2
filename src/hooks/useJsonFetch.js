import {useState, useEffect} from 'react';

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            
            try {
                const response = await fetch(url, opts);

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const json = await response.json();
                setData(json)
                setError(null)

            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url, opts]);

    return [data, loading, error]
}