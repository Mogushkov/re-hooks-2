import useJsonFetch from '../../hooks/useJsonFetch';

function Loading() {

    const [data, loading, error] = useJsonFetch(`${process.env.REACT_APP_URL}/loading`);

    return (
        <>
        <h2>индикатор загрузки</h2>
        {loading && <p>loading</p>}
        </>
    )
}

export default Loading