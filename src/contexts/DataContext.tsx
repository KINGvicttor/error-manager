import { createSolution, deleteSolution, getAllSolution } from "@/services/api";
import { Solution } from "@/types/Solution";
import { ReactNode, createContext, useEffect, useState } from "react";

type DataContextType = {
    //array das soluções
    solutionData: Solution[],

    //states inputs para add soluções
    errorCodeInput: string,
    setErrorCodeInput: (s: string) => void;

    errorTitleInput: string,
    setErrorTitleInput: (s: string) => void;

    solutionContentInput: string,
    setSolutionContentInput: (s: string) => void;

    //functions POST, UPDATE, DELETE
    addSolution: (errorCode: string, errorTitle: string, solutionContent: string) => void;
    deleteSingleSolution: (id: string) => void;
}

type Props = {
    children: ReactNode
}

export const DataContext = createContext<DataContextType | null>(null);
export const DataContextProvider = ({ children }: Props) => {

    //State para armazenar a requisição get de todas as soluções
    const [solutionData, setSolutionData] = useState<Solution[]>([]);

    //States dos inputs para adicionar nova solução
    const [errorCodeInput, setErrorCodeInput] = useState<string>('')
    const [errorTitleInput, setErrorTitleInput] = useState<string>('')
    const [solutionContentInput, setSolutionContentInput] = useState<string>('')

    //fazendo requisição POST 
    const addSolution = async (errorCode: string, errorTitle: string, solutionContent: string) => {
        await createSolution(errorCode, errorTitle, solutionContent);
        window.location.href = '/solutionList';
    }

    //UPDATE


    //DELETE

    const deleteSingleSolution = (id: string) => {
        deleteSolution(id);
        window.location.reload();
    }

    //Fazendo requisição da lista de Soluções
    useEffect(() => {
        const getSolutions = getAllSolution();
        getSolutions.then((res) => setSolutionData(res))

    }, [])


    return (
        <DataContext.Provider value={{ solutionData, errorCodeInput, errorTitleInput, solutionContentInput, setErrorCodeInput, setErrorTitleInput, setSolutionContentInput, addSolution, deleteSingleSolution }}>
            {children}
        </DataContext.Provider>
    )
}