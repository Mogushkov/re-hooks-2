import useJsonFetch from '../../hooks/useJsonFetch';

function Data() {

    const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_URL}/data`);
    
    return (
        <>
        <h2>успешное получение данных</h2>
        {data && <p>data</p>}
        </>
    )
}

export default Data