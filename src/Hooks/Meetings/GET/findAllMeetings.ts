import { AllMeetings, Meetings } from "../../../interfaces/Response/allMeetings";
import { useState, useEffect } from 'react';
import { apiOneOnOne } from "../../../services/createApi";


export const useAllMeetings = ({initialTake=10,initialSkip=0}) => {
    const [allMeetings, setAllMeetings] = useState<Meetings[]>([]);
    const [takeMeetings, setTakeMeetings] = useState(initialTake);
    const [skipMeetings, setSkipMeetings] = useState(initialSkip);

    useEffect(() => {
        getAllMeetings(takeMeetings,skipMeetings)
    }, [takeMeetings,skipMeetings]);


    const getAllMeetings = async(take:number,skip:number)=>{
        try {
            const response = await apiOneOnOne.get<AllMeetings>(`/api/meeting?take=${take}&skip=${skip}`,{
                withCredentials:true
            });

            setAllMeetings(response.data.message)
        } catch (error) {
            console.log(error);
        }

    }
    const updateTake = (value:number = 1)=>{
        setTakeMeetings((current)=>current + value);
    }

    const updateSkip = (value:number)=>{
        setSkipMeetings((current)=>current +value)
    }
    return {
        allMeetings,
        takeMeetings,
        skipMeetings,
        updateSkip,
        updateTake
    }
}