
import { TextField, Button } from "@mui/material";

export const CreateNote = () =>{

    return(
        <div className="w-[30%] flex flex-col space-y-4 mx-auto">
            <TextField variant="outlined" label="Title" size="small"/>
            <TextField variant="outlined" label="Description" size="large"/>
            <Button variant="outlined">Create</Button>
        </div>
    );
}