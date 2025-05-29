import { Solution } from "@/types/Solution";
import axios from "axios";


const baseUrl = axios.create({
    baseURL: "http://localhost:3000"
})


//Solicita criação da solução - POST
export const createSolution = async (errorCode: string, errorTitle: string, solutionContent: string) => {
    await baseUrl.post('/solution', {
        errorCode: errorCode,
        errorTitle: errorTitle,
        solutionContent: solutionContent
    });
}

//Solicitar todas as soluções - READ ALL
export const getAllSolution = async (): Promise<Solution[]> => {
    const res = await baseUrl.get('/solutions');
    return res.data;
}

//Solicita uma solução especifica (utilizando id como parametro) - READ SINGLE
export const getSingleSolution = async (id: string): Promise<Solution> => {
    const res = await baseUrl.get(`/solution/${id}`);
    return res.data;
}

//Solicita remoção da solução _ DELETE
export const deleteSolution = (id: string) => {
    baseUrl.delete(`/solution/${id}`);
    window.location.reload();
}