import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import './YourListingsCard.css'

function YourListingsCard({listing}) {

    const history = useHistory();

    const dispatch = useDispatch();

    function handleDelete() {
        console.log('delete', listing.id)
        dispatch({ type: 'DELETE_LISTING', payload: listing.id });
    }

    const handleEdit = (listing) => {
        console.log('handleEdit', listing)
        history.push('/edit')
        dispatch({ type: 'SET_EDIT_STATE', payload: listing})
    }

    return (
        <Card className='listing-card' sx={{ maxWidth: 250 }}>
        <Typography>
            {listing.item}
        </Typography>
        <CardMedia
            className='listing-card-img' 
            image={listing.image}
        />
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {listing.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={handleDelete} size="small">Delete</Button>
            <Button onClick={() => handleEdit(listing)} size="small">Edit</Button>
        </CardActions>
    </Card>
    )
}

export default YourListingsCard;