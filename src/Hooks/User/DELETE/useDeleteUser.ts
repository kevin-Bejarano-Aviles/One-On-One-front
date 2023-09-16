import { apiOneOnOne } from "../../../services/createApi";


export const useDeleteUser = () =>{
    
    const deleteUser = async(id:string)=>{
        try {
            const response = await apiOneOnOne.delete(`/api/user/${id}`,{withCredentials:true})
            console.log(response.data);
        } catch (error) {
            console.log(error);
            
        }
    }
    return {
        deleteUser
    }
    
}