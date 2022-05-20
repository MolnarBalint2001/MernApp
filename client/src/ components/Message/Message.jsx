
import { Alert } from "@mui/material"


export const Message = (props) =>{


    console.log(typeof(props.status))

    if (props.status === "User already exist!"){

        return(
            <Alert severity="error" size="large">{props.status}</Alert>
        );

    }
    else if (props.status === "User was created successfully!"){
        return (
            <Alert severity="success">{props.status}</Alert>
        );
    }
    else{
        return ""
    }




}