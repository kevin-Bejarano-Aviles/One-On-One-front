import { CreateActionableDTO } from "../../../interfaces/DTO/createAtionableDTO";
import { apiOneOnOne } from "../../../services/createApi";

export const useAddActionable = () => {
    const addActionable = async (data:CreateActionableDTO) => {
        try {
            const response = await apiOneOnOne.post(`/api/actionable`,{
                data
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        addActionable
    }
}