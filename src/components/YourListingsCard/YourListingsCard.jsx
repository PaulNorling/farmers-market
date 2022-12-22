import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
//import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function YourListingsCard({listing}) {

    const dispatch = useDispatch();

    function handleDelete() {
        console.log('delete', listing.id)
        dispatch({ type: 'DELETE_LISTING', payload: listing.id });
    }

    return (
        <Card sx={{ maxWidth: 250 }}>
        <Typography>
            {listing.item}
        </Typography>
        <CardMedia
            sx={{ height: 140 }}
            image={listing.image}
        />
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {listing.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={handleDelete} size="small">Delete</Button>
        </CardActions>
    </Card>
    )
}

export default YourListingsCard;