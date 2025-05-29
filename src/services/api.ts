import { Solution } from "@/types/Solution";
import axios from "axios";


const baseUrl = axios.create({
    baseURL: "http://localhost:3000"
})

//Solicitar todas as soluções
export const getAllSolution = async (): Promise<Solution[]> => {
    const res = await baseUrl.get('/solution');
    return res.data;
}

//Solicita uma solução especifica
export const getSingleSolution = async (id: string): Promise<Solution> => {
    const res = await baseUrl.get(`/solution/${id}`);
    return res.data;
}

export const deleteSolution = (id: string) => {
    const res = baseUrl.delete(`/solution/${id}`);
    window.location.reload();
}