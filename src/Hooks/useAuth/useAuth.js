//import  & react external node pakage

import { useContext } from "react"
import { AuthContext } from "../../Context/AuthProvider";

//arrow function
const useAuth = () => {
    return useContext(AuthContext)
}

//export useauth custom hook component
export default useAuth