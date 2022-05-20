
import { Card, CardContent, Button } from "@mui/material";
import { AccountHeader } from "./AccountHeader";
import { CreateNote } from "./CreateNote";


export const Account = () => {



    return (
        <div>
            <AccountHeader />
            <Card className="w-[60%] h-[40vh] mx-auto my-[20vh]">
            <div>Notes</div>
            <CreateNote/>
            </Card>
        </div>

    );
}