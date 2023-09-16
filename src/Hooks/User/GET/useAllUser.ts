import { useEffect, useState } from "react";
import { AllUsers, Users } from "../../../interfaces/Response/allUsers";
import { apiOneOnOne } from "../../../services/createApi";



export const useAllUsers = ({initialTake=10,initialSkip=0}) => {
    const [allUsers, setAllUsers] = useState<Users[]>([]);
    const [takeUsers, setTakeUsers] = useState(initialTake);
    const [skipUsers, setSkipUsers] = useState(initialSkip);
    useEffect(() => {
        getAllUsers(takeUsers,skipUsers)
    }, [takeUsers,skipUsers]);


    const getAllUsers = async(take:number,skip:number)=>{
        try {
            const response = await apiOneOnOne.get<AllUsers>(`/api/user?take=${take}&skip=${skip}`,{
                withCredentials:true
            })
            setAllUsers(response.data.message)
        } catch (error) {
            console.log(error);
        }
    }

    const updateTake = (value:number = 1)=>{
        setTakeUsers((current)=>current + value);
    }

    const updateSkip = (value:number)=>{
        setSkipUsers((current)=>current +value)
    }
    return {
        allUsers,
        takeUsers,
        skipUsers,
        updateSkip,
        updateTake
    }
}