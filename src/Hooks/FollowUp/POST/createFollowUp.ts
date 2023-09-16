import { CreateFollowUpDTO } from "../../../interfaces/DTO/createFolloUpDTO";
import { apiOneOnOne } from "../../../services/createApi";

export const useAddFollowUp = () => {
    const addFollowUp = async (data:CreateFollowUpDTO) => {
        try {
            const response = await apiOneOnOne.post(`/api/follow-up`,{
                data
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        addFollowUp
    }
}