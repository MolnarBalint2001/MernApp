
import { Card, CardContent, Button, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useEffect, useState } from "react";
import { AccountHeader } from "./AccountHeader";
import { CreateNote } from "./CreateNote";
import axios from "axios";
import { Note } from "./Note";
import jwt from "jwt-decode";



export const Account = () => {

    const [data, setData] = useState(null);
    const [username, setUsername] = useState("");


    useEffect(() => {
        const token = window.localStorage["token"];


        fetch("http://localhost:5000/api/users/me",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    token: token
                })
            })
            .then(res => res.json())
            .then(res => {
                if (res.valid) {
                    const user = jwt(token);
                    setUsername(user.username);
                    getNotes();
                }
                else {
                    window.location.pathname = "/sign_in"
                }
            })



    }, []);


    const getNotes = async () => {

        try {

            const token = await window.localStorage["token"];
            const user = jwt(token);
            const response = await axios.post("http://localhost:5000/api/notes/getNotes", {
                username: user.username
            });
            const data = response.data.notes
            setData(data);
        } catch (error) {
            console.log(error)
        }



    }

    return (
        <div>

            <AccountHeader username={username} />

            <Card className="w-[60%] h-fit mx-auto my-[20vh] grid grid-cols-1 place-items-start gap-y-10">
                <div className="bg-blue-400 w-full text-center text-white text-4xl p-1">Notes</div>
                <CreateNote />

                <table className="w-full mt-[10vh]">
                    <thead >
                        <tr>
                            <td className="text-xl text-blue-500 text-center">ID</td>
                            <td className="text-xl text-blue-500 text-center">Title</td>
                            <td className="text-xl text-blue-500 text-center">Description</td>
                            <td className="text-xl text-blue-500 text-center">Status</td>
                            <td className="text-xl text-blue-500 text-center" colSpan="2">Options</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? data.map((e) => {
                            return <Note id={e._id} title={e.title} desc={e.description} status={e.done} />
                        }) : ""}
                    </tbody>
                </table>

            </Card>


        </div>

    );
}