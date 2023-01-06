import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import './YourListingsCard.css'

function YourListingsCard({listing}) {

    const history = useHistory();

    const dispatch = useDispatch();

    function handleDelete() {
        console.log('delete', listing.id)
        dispatch({ type: 'DELETE_FAVORITE', 
                   payload: listing.id    
                })
        dispatch({ type: 'DELETE_LISTING',
                   payload: listing.id });

    }

    const handleEdit = (listing) => {
        console.log('handleEdit', listing)
        history.push(`/edit/${listing.id}`)
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
            {listing.description.substring(0, 30)}...
            </Typography>
        </CardContent>
        <CardActions className='icons'>
            {/* <Button onClick={handleDelete} size="small">Delete</Button> */}
            <Tooltip title="Delete">
                <IconButton onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Edit">
                <IconButton onClick={() => handleEdit(listing)}>
                    <EditIcon className='edit-icon' />
                </IconButton>
            </Tooltip>
            {/* <Button onClick={() => handleEdit(listing)} size="small">Edit</Button> */}
        </CardActions>
    </Card>
    )
}

export default YourListingsCard;