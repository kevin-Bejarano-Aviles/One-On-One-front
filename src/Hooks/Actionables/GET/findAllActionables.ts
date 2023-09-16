import { useEffect, useState } from "react";
import { apiOneOnOne } from "../../../services/createApi";
import { Actionables, AllActionables } from "../../../interfaces/Response/allActionables";



export const useAllActionables = ({initialTake=10,initialSkip=0}) => {
    const [allActionables, setAllActionables] = useState<Actionables[]>([]);
    const [takeActionables, setTakeActionables] = useState(initialTake);
    const [skipActionables, setSkipActionables] = useState(initialSkip);
    useEffect(() => {
        getAllActionables(takeActionables,skipActionables)
    }, [takeActionables,skipActionables]);


    const getAllActionables = async(take:number,skip:number)=>{
        try {
            const response = await apiOneOnOne.get<AllActionables>(`/api/actionables?take=${take}&skip=${skip}`,{
                withCredentials:true
            })
            setAllActionables(response.data.message)
        } catch (error) {
            console.log(error);
        }
    }

    const updateTake = (value:number = 1)=>{
        setTakeActionables((current)=>current + value);
    }

    const updateSkip = (value:number)=>{
        setSkipActionables((current)=>current +value)
    }
    return {
        allActionables,
        takeActionables,
        skipActionables,
        updateSkip,
        updateTake
    }
}