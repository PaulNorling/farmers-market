import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

function UserPageCard({listing}) {
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
            <Button size="small">Details</Button>
        </CardActions>
    </Card>
    )
}

export default UserPageCard;