import { useContext } from "react"
import { AuthContext } from "../controller/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
  };
  
  export default useAuth;