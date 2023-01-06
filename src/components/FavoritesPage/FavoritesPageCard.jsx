import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

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

    function handleClick() {
        console.log('favoritesPageCard', listing.bookmark_listings_id)
        history.push(`/detail/${listing.bookmark_listings_id
        }`)
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
            <Tooltip title="Delete">
                <IconButton onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            <Button onClick={handleClick}size="small">Details</Button>
        </CardActions>
    </Card>
    )
}

export default FavoritesPageCard;