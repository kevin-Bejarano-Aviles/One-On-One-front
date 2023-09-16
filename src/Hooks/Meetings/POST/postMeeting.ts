import { CreateMeetingDTO } from "../../../interfaces/DTO/createMeetingDTO";
import { apiOneOnOne } from "../../../services/createApi";

export const useAddMeeting = ()=>{
    const addMeeting = async(data:CreateMeetingDTO)=>{
        try {
            const response = await apiOneOnOne.post(`/api/meeting`,{
                data
            })
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        addMeeting
    }
}