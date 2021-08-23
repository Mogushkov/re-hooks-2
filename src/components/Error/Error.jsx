import useJsonFetch from '../../hooks/useJsonFetch';

function Error() {

    const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_URL}/error`);
    
    return (
        <>
        <h2>получение 500 ошибки</h2>
        {error && <p>error</p>}
        </>
    )
}

export default Error