import { getAllSolution, getSingleSolution } from "@/services/api";
import { Solution } from "@/types/Solution";
import { ReactNode, createContext, useEffect, useState } from "react";

type DataContextType = {
    solutionData: Solution[],
}

type Props = {
    children: ReactNode
}

export const DataContext = createContext<DataContextType | null>(null);
export const DataContextProvider = ({ children }: Props) => {

    const [solutionData, setSolutionData] = useState<Solution[]>([]);


//Fazendo requisição da lista de Soluções
    useEffect(() => {
        const getSolutions = getAllSolution();
        getSolutions.then((res) => setSolutionData(res))

    }, [])


    return (
        <DataContext.Provider value={{ solutionData }}>
            {children}
        </DataContext.Provider>
    )
}