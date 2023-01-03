import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import {useHistory} from 'react-router-dom';
import './UserPageCard.css'

function UserPageCard({listing}) {

    const history = useHistory();

    function handleClick() {
        console.log('userPageCard', listing)
        history.push(`/detail/${listing.id}`)
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
                {listing.description.substring(0, 30)}...
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={handleClick}size="small">Details</Button>
        </CardActions>
    </Card>
    )
}

export default UserPageCard;