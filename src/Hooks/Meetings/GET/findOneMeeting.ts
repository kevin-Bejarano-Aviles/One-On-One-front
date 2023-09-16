import { useEffect, useState } from "react";
import { apiOneOnOne } from "../../../services/createApi";


export const useOneMeeting = (id:string|undefined) => {
    const [oneMeeting, setoneMeeting] = useState();

    useEffect(() => {
        
    }, [id]);

    const getOne = async(id:string|undefined) => {
        try {
            const response = await apiOneOnOne.get(`/api/meeting/${id}`,{withCredentials:true})
            
        } catch (error) {
            console.log(error);
        }
    }
}