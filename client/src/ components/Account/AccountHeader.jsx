

import {Link} from "react-router-dom"


export const AccountHeader = (props) =>{


    return (
        <div className="w-[100%] h-[50px] bg-blue-400 text-white flex flex-row justify-around items-center ">
            <div>Note Application</div>
            <div>{props.username}</div>
            <Link to="/sign_in">Logout</Link>
        </div>
    );

}