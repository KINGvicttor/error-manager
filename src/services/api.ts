import { Rating } from "@/types/Rating";
import { Solution } from "@/types/Solution";
import axios from "axios";

const baseUrl = axios.create({
    baseURL: "http://localhost:3000"
})


//---------- requisições para soluções ----------
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
export const getSingleSolutionID = async (id: string): Promise<Solution> => {
    const res = await baseUrl.get(`/solution/${id}`);
    return res.data;
}

//Solicita uma solução especifica (utilizando codeError como parametro) - READ SINGLE
export const getSingleSolutionCode = async (codeError: string): Promise<Solution> => {
    const res = await baseUrl.get(`/solution/${codeError}`);
    return res.data;
}

//solicita alteração da solução - UPDATE
export const updateSingleSolution = async (id: string, errorCode: string, errorTitle: string, solutionContent: string) => {
    await baseUrl.put(`/solution/${id}`, {
        errorCode: errorCode,
        errorTitle: errorTitle,
        solutionContent: solutionContent,
    })
}

//Solicita remoção da solução _ DELETE
export const deleteSolution = (id: string) => {
    baseUrl.delete(`/solution/${id}`);
    window.location.reload();
}


//---------- requisições para avaliação ----------
//Solicitando criação da Avaliação
export const createRating = async (errorCode: string, clientCode: string, date: string, rating: boolean | null, ratingText: string) => {
    await baseUrl.post('/rating', {
        errorCode: errorCode,
        clientCode: clientCode,
        date: date,
        rating: rating,
        ratingText: ratingText
    })
}

//Solicitando lista de todas as Avaliações
export const getAllRating = async (): Promise<Rating[]> => {
    const res = await baseUrl.get('/ratings');
    return res.data
}


export const updateRatingSolution = async (id: string, ratingPositive: number, ratingNegative: number) => {
    await baseUrl.put(`/rating/${id}`, {
        ratingPositive: ratingPositive,
        ratingNegative: ratingNegative
    })
}