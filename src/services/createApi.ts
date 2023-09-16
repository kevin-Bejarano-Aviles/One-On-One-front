import axios from "axios";


export const apiOneOnOne = axios.create({
    baseURL:'http://localhost:8080'

})