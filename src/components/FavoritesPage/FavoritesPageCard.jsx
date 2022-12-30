import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function FavoritesPageCard({listing}) {

    console.log('FavoritesPageCard' ,listing)

    const history = useHistory();

    const dispatch = useDispatch();

    function handleDelete() {
        dispatch({ type: 'DELETE_FAVORITE', 
                    payload: listing.bookmark_listings_id
                })
        dispatch({ type: 'FETCH_FAVORITES_BY_USER' });
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
            <Button onClick={handleDelete} size="small">Remove</Button>
        </CardActions>
    </Card>
    )
}

export default FavoritesPageCard;