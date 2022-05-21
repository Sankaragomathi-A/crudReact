import react,{useContext} from "react";
import { AppContext } from "./context";


const User=({user})=>{

    const {dispatchUSerEvent}=useContext(AppContext)

   

    const handleRemoveUser=()=>{
        
        dispatchUSerEvent('REMOVE_USER',{userId:user.id})
    }



    return(
        <div>
            <div>Create New USer</div>
            



            <h2>{user.name}</h2>
            <p>{user.password}</p>
            <button onClick={handleRemoveUser}>Delete</button>
        </div>
    )

    }
export default User