import { useEffect, useState } from "react";
import { apiOneOnOne } from "../../../services/createApi";
import { OneUser, User } from '../../../interfaces/Response/oneUser';

export const useOneUser = (id:string| undefined) => {
    const [oneUser, setOneUser] = useState<User>();
    useEffect(() => {
        getOneUser(id)
    }, [id]);


    const getOneUser = async(id:string|undefined) =>{
        try {
            const response = await apiOneOnOne.get<OneUser>(`/api/user/${id}`,{withCredentials:true})
            setOneUser(response.data.message)
        } catch (error) {
            console.log(error);
            
        }
    }

    return {
        oneUser
    }
        
    
}