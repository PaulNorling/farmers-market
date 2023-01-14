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
        <CardMedia
            className='listing-card-img'
            image={listing.image}
        />
         <Typography className="card-text-container" >
            <h4>{listing.item.substring(0, 30)}</h4>
        </Typography>
        <CardContent>
            <Typography className="card-text-container" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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