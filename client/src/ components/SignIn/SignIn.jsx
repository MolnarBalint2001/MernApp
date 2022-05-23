



import { Card, TextField, Button, Alert} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";




export const SignIn = () =>{

    const [message, setMessage] = useState(null);



    const handleSignIn = async() =>{

        const username = document.getElementById("l_username").value;
        const password = document.getElementById("l_password").value;


        const response = await axios.post("http://localhost:5000/api/users/sign_in",{
            username,
            password
        })
        setMessage(response.data.message);

        const data = response.data;
        console.log(data);

        if (data.user){
            localStorage.setItem("token", data.user);
            window.location.href = "/me";
        }


    }



    return (
        <Card className="w-[40%] mx-auto my-[15vh] h-[70vh] grid grid-cols-1 gap-y-10 place-items-center">
        <div className="text-4xl text-blue-500">Sign In</div>
        
        {message ? <Alert severity="error">{message}</Alert> : ""}

        <TextField type="outline-basic" label="Username" className="w-[50%]" size="medium" id="l_username"/>
        <TextField type="outline-basic" label="Password" className="w-[50%]" size="medium" id="l_password" type="password"/>
        <Button className="w-[50%]" size="large" variant="outlined" onClick={handleSignIn}>Sign In</Button>
        <div className="flex flex-row space-x-4 text-lg">
            <p>Haven't got an account?</p>
            <Link to="/" className="text-blue-500 underline">Sign Up</Link>
        </div>
    </Card>
    );

}
