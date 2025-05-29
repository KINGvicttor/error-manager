import { createSolution, deleteSolution, getAllSolution } from "@/services/api";
import { Solution } from "@/types/Solution";
import { ReactNode, createContext, useEffect, useState } from "react";

type DataContextType = {
    //array das soluções
    solutionData: Solution[],
    filterData: Solution[],

    //states inputs para add soluções
    errorCodeInput: string,
    setErrorCodeInput: (s: string) => void;
    errorTitleInput: string,
    setErrorTitleInput: (s: string) => void;
    solutionContentInput: string,
    setSolutionContentInput: (s: string) => void;

    //states filtros
    codeFilterInput: string;
    setCodeFilterInput: (errorCode: string) => void;
    codeFilterBtn: boolean
    getFilterSolution: (errorCode: string) => void;
    cleanFilter: () => void;

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
    const [filterData, setFilterData] = useState<Solution[]>([])

    //States dos inputs para adicionar nova solução
    const [errorCodeInput, setErrorCodeInput] = useState<string>('')
    const [errorTitleInput, setErrorTitleInput] = useState<string>('')
    const [solutionContentInput, setSolutionContentInput] = useState<string>('')

    //states filtros
    const [codeFilterInput, setCodeFilterInput] = useState<string>('');
    const [codeFilterBtn, setCodeFilterBtn] = useState<boolean>(false);

    //function requisição com Filtro de código
    const getFilterSolution = async (errorCode: string) => {
        if (errorCode != '' && errorCode.length === 6) {
            setCodeFilterBtn(true);
            setCodeFilterInput(errorCode);
        }
    }

    //function para limpar filtro
    const cleanFilter = () => {
        setCodeFilterBtn(false);
        setCodeFilterInput('');
    }

    //function requisição POST 
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

    //function requisição da lista de Soluções
    useEffect(() => {
        const getSolutions = getAllSolution();
        getSolutions.then((res) => setSolutionData(res))

    }, [])


    return (
        <DataContext.Provider value={{ solutionData, filterData, errorCodeInput, errorTitleInput, solutionContentInput, codeFilterInput, codeFilterBtn, setErrorCodeInput, setErrorTitleInput, setSolutionContentInput, setCodeFilterInput, getFilterSolution, cleanFilter, addSolution, deleteSingleSolution }}>
            {children}
        </DataContext.Provider>
    )
}