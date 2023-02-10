import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuth";


const ProtectedRoute=({children})=>{

    let {user}=useUserAuth();
    console.log("user",user);

    if(!user){

        return <Navigate to="/login"/>;
    }

    return children;
}

export default ProtectedRoute;