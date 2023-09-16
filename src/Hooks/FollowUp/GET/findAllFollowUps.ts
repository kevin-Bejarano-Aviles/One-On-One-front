import { useState, useEffect } from 'react';
import { apiOneOnOne } from "../../../services/createApi";
import { AllFollowUPS, FollowUps } from '../../../interfaces/Response/allFollowUps';


export const useAllFollowUps = ({initialTake=10,initialSkip=0}) => {
    const [allFollowUps, setAllFollowUps] = useState<FollowUps[]>([]);
    const [takeFollowUps, setTakeFollowUps] = useState(initialTake);
    const [skipFollowUps, setSkipFollowUps] = useState(initialSkip);

    useEffect(() => {
        getAllFollowUps(takeFollowUps,skipFollowUps)
    }, [takeFollowUps,skipFollowUps]);


    const getAllFollowUps = async(take:number,skip:number)=>{
        try {
            const response = await apiOneOnOne.get<AllFollowUPS>(`/api/follow-up?take=${take}&skip=${skip}`,{
                withCredentials:true
            });

            setAllFollowUps(response.data.message)
        } catch (error) {
            console.log(error);
        }

    }
    const updateTake = (value:number = 1)=>{
        setTakeFollowUps((current)=>current + value);
    }

    const updateSkip = (value:number)=>{
        setSkipFollowUps((current)=>current +value)
    }
    return {
        allFollowUps,
        takeFollowUps,
        skipFollowUps,
        updateSkip,
        updateTake
    }
}