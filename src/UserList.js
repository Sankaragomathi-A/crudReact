import react,{useContext} from "react";
import User from "./User";
import { AppContext } from "./context";


function UserList(){
    const { users } =useContext(AppContext)
    return(
        <div>
            Available userlist
            
            {users.map(user=> <User key={user.id} user={user} />)}
        </div>
    )
}
export default UserList