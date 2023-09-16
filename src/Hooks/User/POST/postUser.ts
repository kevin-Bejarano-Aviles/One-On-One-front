import { apiOneOnOne } from "../../../services/createApi";


export const useAddUser = ()=>{
    const addUser = async(name:string,lastName:string) =>{
        try {
            const response = await apiOneOnOne.post(`/api/user`,{
                name,
                lastName
            })
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return {addUser}
}