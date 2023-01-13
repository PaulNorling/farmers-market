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
import Swal from 'sweetalert2'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './YourListingsCard.css'
import { CenterFocusStrong } from '@mui/icons-material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    margin: 2,
  };


function YourListingsCard({listing}) {

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    const history = useHistory();

    const dispatch = useDispatch();

    function handleDelete() {
        Swal.fire({
            // title: 'Error!',
            text: 'Are you sure you want to delete?',
            icon: 'question',
            confirmButtonText: 'DELETE',
            showCancelButton: true,
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch({ type: 'DELETE_LISTING',
                    payload: listing.id });
            } 
            // else if (result.isDenied) {
            //   Swal.fire('Changes are not saved', '', 'info')
            // }
          })
          
        // console.log('delete', listing.id)
        // dispatch({ type: 'DELETE_FAVORITE', 
        //            payload: listing.id    
        //         })
        // dispatch({ type: 'DELETE_LISTING',
        //            payload: listing.id });

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
            <Tooltip title="Delete">
                <IconButton onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>

            {/* <Modal
                open={open}
                onClose={handleClose}
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Confirm Delete
                </Typography>
            <Button id='delete-confirm' variant="contained" onClick={handleDelete}>Delete</Button>
            </Box>
          </Modal> */}

            <Tooltip title="Edit">
                <IconButton onClick={() => handleEdit(listing)}>
                    <EditIcon className='edit-icon' />
                </IconButton>
            </Tooltip>
        </CardActions>
    </Card>
    )
}

export default YourListingsCard;