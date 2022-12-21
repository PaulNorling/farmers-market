import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import {useHistory} from 'react-router-dom';

function UserPageCard({listing}) {

    const history = useHistory();

    function handleClick() {
        console.log('clicked')
        history.push(`/detail/${listing.id}`)
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
            <Button onClick={handleClick}size="small">Details</Button>
        </CardActions>
    </Card>
    )
}

export default UserPageCard;