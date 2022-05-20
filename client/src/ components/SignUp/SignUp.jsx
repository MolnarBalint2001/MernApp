
import { Card, TextField, Button } from "@mui/material"
import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import Aos from "aos";
import { Message } from "../Message/Message";



export const SignUp = () => {

    const [message, setMessage] = useState(null);


    const handleSignUp = async () =>{

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const confirm = document.getElementById("confirm").value;
        
        if (password !== confirm){
            alert("Password does not match to confirm!")
        }
        else{


            try{
                const response = await axios.post("http://localhost:5000/api/users",{
                    username: username,
                    password: password,
                });
                setMessage(response.data.message);
                if (response.data.message === "User was created successfully!"){


                    setTimeout(()=>{
                        window.location.href = "/sign_in"
                    }, 3000);
                   
                }
            }
            catch (err){
                console.log(err)
            }  
        }
    }




    return (
        <Card className="w-[40%] mx-auto my-[15vh] h-[70vh] grid grid-cols-1 gap-y-10 place-items-center">
            <div className="text-4xl text-blue-500">Sign Up</div>
            <Message status={message}/>
            <TextField type="outline-basic" label="Username" className="w-[50%]" id="username" required/>
            <TextField type="outline-basic" label="Password" className="w-[50%]" id="password" type="password" required/>
            <TextField type="outline-basic" label="Confirm password" className="w-[50%]" id="confirm" type="password" required/>
            <Button className="w-[50%]" size="large" variant="outlined" onClick={handleSignUp} >Sign up</Button>
            <div className="flex flex-row space-x-4 text-lg">
                <p>Already have an account?</p>
                <Link to="/sign_in" className="text-blue-500 underline">Sign In</Link>
            </div>
        </Card>
    );



}
