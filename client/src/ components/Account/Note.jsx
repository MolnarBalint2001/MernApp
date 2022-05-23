
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import axios from "axios";
import { useEffect, useState } from "react";
import { getFormControlUnstyledUtilityClasses } from "@mui/base";






export function Note(props) {



    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
        window.location.reload();
    }


    const handleUpdateNote = async () => {



        try{
            const id = document.getElementById("update-id").innerText;
            const title = document.getElementById("update-title").value;
            const desc = document.getElementById("update-desc").value;
            const status = document.getElementById("update-status").value;
    
    
            console.log(id, title, desc,status  );
            const response = await axios.put(`http://localhost:5000/api/notes/${id}`, {
                id: id,
                title: title,
                description: desc,
                status:status
            });
            console.log(response);
            handleClose();

        }
        catch (error){
            console.log(error);
        }
      


    }




    const deleteNote = async () => {
        const id = document.getElementById("id").innerText;

        const response = await axios.delete(`http://localhost:5000/api/notes/${id}`);
        window.location.reload();
    }


    console.log(props)
    return (
        <tr className="text-center">
            <td id="id">{props.id}</td>
            <td>{props.title}</td>
            <td>{props.desc}</td>
            <td><Checkbox checked={props.status} /></td>
            <td><Button variant="contained" onClick={handleClickOpen} endIcon={<ChangeCircleIcon />}>Edit</Button></td>
            <td><Button variant="outlined" onClick={deleteNote} startIcon={<DeleteIcon />}>Delete</Button></td>

            <Dialog open={open} onClose={handleClose} id={props.id}>
                <DialogTitle className="text-center bg-blue-400 text-white">Update customer</DialogTitle>
                <DialogContent className="dialog-content grid grid-cols-1 place-items-center gap-y-4">
                    <DialogContentText className="flex flex-col space-y-2">
                        <div>Fill those field which one you would like to update!</div>
                        <div className="flex flex-row space-x-1 justify-center">
                            <div>ID:</div>
                            <div id="update-id">{props.id}</div>
                        </div>
                    </DialogContentText>

                    <TextField
                        autoFocus
                        id="update-title"
                        label="Update title"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        id="update-desc"
                        label="Update description"
                        fullWidth

                    />
                    <div className="flex flex-row space-x-2 items-center text-gray-500">
                        <div>Status:</div>
                        <Checkbox id="update-status"/>
                    </div>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleUpdateNote}>Update</Button>
                </DialogActions>

            </Dialog>
        </tr>
    );

}
