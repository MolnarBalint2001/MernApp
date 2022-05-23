
import { TextField, Button } from "@mui/material";
import axios from "axios";
import jwt from "jwt-decode"

export const CreateNote = () =>{


    const createNote = async() =>{
        try {

            const user = jwt(window.localStorage["token"]);
            const title = document.getElementById("create-title").value;
            const desc = document.getElementById("create-desc").value;

            if (!title){
                alert("Please add title!");
            }
           
            


            const response = await axios.post("http://localhost:5000/api/notes",{
                username:user.username,
                title: title,
                description: desc,
                status:false
            });


            window.location.reload();

            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }


    return(
        <div className="w-[30%] flex flex-col space-y-4 mx-auto items-center">
            <div className="text-blue-400 text-2xl">Create Note</div>
            <TextField variant="outlined" label="Title" size="small" className="w-full" id="create-title"/>
            <TextField variant="outlined" label="Description" size="large"  className="w-full" id="create-desc"/>
            <Button variant="outlined" className="w-full" onClick={createNote}>Create</Button>
        </div>
    );
}