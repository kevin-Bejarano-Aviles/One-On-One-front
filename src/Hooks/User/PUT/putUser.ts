import { UpdateUserDTO } from "../../../interfaces/DTO/updateUserDTO"
import { apiOneOnOne } from "../../../services/createApi"

export const usePutUser = ()=>{
    

    const putUser = async (id:string|undefined,data:UpdateUserDTO) =>{
        try {
            const response = await apiOneOnOne.put(`/api/user/${id}`,{
                data
            },{
                withCredentials:true
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
            
        }

    }
    return {
        putUser
    }
}