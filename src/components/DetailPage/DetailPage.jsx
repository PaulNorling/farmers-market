import { useParams } from 'react-router-dom';

function DetailPage() {
    const params = useParams();
    console.log('detail', params.id)
    return(
        <h1>Details!</h1>
    )
}

export default DetailPage;