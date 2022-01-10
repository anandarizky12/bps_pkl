import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import MyAlert from '../alert/alert';
import { sendAlert } from '../../actions/alertLogin';
import { CircularProgress } from '@material-ui/core';
import { getMyQuestions } from '../../actions/questions';



export default function DraggableDialog({id}) {
  const [open, setOpen] = React.useState(false);
  const [loading , setLoading] = React.useState(false);
  const {userInfo} = useSelector(state => state.userLogin);
  const [alert, setAlert] = React.useState(false);
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  
  };



const handleDelete = () => {
    setLoading(true);
    console.log(id)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + userInfo.token
        }
    }
    return axios.delete('api/question/'+ id, config)
      
        .then(res => {
            setLoading(false);
            setOpen(false);
            setAlert(true);
            dispatch(sendAlert(res.data, 1))
            window.location.reload();
        })
        .catch(err => {
            setLoading(false);
            setAlert(true);
            setOpen(false);
           dispatch(sendAlert(err.request.response, 3));
        });
}

  return (
    <div>
      <MyAlert open={alert} setOpen={setAlert}/>
      <DeleteIcon onClick={handleClickOpen} className="text-gray-500 cursor-pointer hover:text-gray-400"/>

            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="draggable-dialog-title"
          >
           { loading ?
            <DialogContent>
                <CircularProgress />
            </DialogContent>
            :
            <>
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                Warning !
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are You Sure You Want To Delete This?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Cancel
                </Button>
                <Button onClick={handleDelete}>
                    Delete
                </Button>
                </DialogActions>
            </>
            }
            </Dialog>
 
    
    </div>
  );
}