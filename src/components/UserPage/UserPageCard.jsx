import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import {useHistory} from 'react-router-dom';
//import {useDispatch, useSelector} from 'react-redux';
import './UserPageCard.css'

function UserPageCard({listing}) {

    //const dispatch = useDispatch();

    const history = useHistory();

    //const user = useSelector(store => store.user)

    function handleClick() {
        console.log('userPageCard', listing)
        history.push(`/detail/${listing.id}`)
        //fetch favorites before detail page load to give time for loop
        // dispatch({ type: 'FETCH_FAVORITE', payload: user.id});
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
            <Button onClick={handleClick}size="small">Details</Button>
        </CardActions>
    </Card>
    )
}

export default UserPageCard;