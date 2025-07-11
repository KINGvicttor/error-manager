import { createRating, createSolution, deleteSolution, getAllRating, getAllSolution, getSingleSolutionID, updateRatingSolution, updateSingleSolution } from "@/services/api";
import { Rating } from "@/types/Rating";
import { Solution } from "@/types/Solution";
import { ReactNode, createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

type DataContextType = {
    //array das soluções
    solutionData: Solution[],
    ratingData: Rating[],

    //states inputs para add soluções
    errorCodeInput: string,
    setErrorCodeInput: (s: string) => void;
    errorTitleInput: string,
    setErrorTitleInput: (s: string) => void;
    solutionContentInput: string,
    setSolutionContentInput: (s: string) => void;

    //states inputs para avaliações
    clientRating: boolean | null
    setClientRating: (rating: boolean) => void;
    clientCodeInput: string,
    setClientCodeInput: (clientCode: string) => void;
    clientRatingTextInput: string,
    setClientRatingTextInput: (clientRatingText: string) => void;

    //states filtros
    codeFilterInput: string;
    setCodeFilterInput: (errorCode: string) => void;
    codeFilterBtn: boolean
    getFilterSolution: (errorCode: string) => void;
    initialDate: string,
    setInitialDate: (initialDate: string) => void;
    endDate: string,
    setEndDate: (endDate: string) => void;
    dateFilterBtn: boolean,
    dateFilter: () => void;
    cleanFilter: () => void;

    //functions avaliações
    addRating: (id: string, errorCode: string, clientCode: string, date: string, clientRating: boolean | null, clientRatingText: string, like: number, dislike: number) => void;

    //functions POST, UPDATE, DELETE; SOLUÇÔES
    addSolution: (errorCode: string, errorTitle: string, solutionContent: string) => void;
    updateSolution: (id: string, errorCode: string, errorTitle: string, solutionContent: string) => void;
    deleteSingleSolution: (id: string) => void;
}

type Props = {
    children: ReactNode
}

//criando context e context.provider
export const DataContext = createContext<DataContextType | null>(null);
export const DataContextProvider = ({ children }: Props) => {

    //State para armazenar a requisição get de todas as soluções e avaliações
    const [solutionData, setSolutionData] = useState<Solution[]>([]);
    const [ratingData, setRatingData] = useState<Rating[]>([]);

    //States dos inputs para adicionar nova solução
    const [errorCodeInput, setErrorCodeInput] = useState<string>('')
    const [errorTitleInput, setErrorTitleInput] = useState<string>('')
    const [solutionContentInput, setSolutionContentInput] = useState<string>('')

    //States dos inputs para avaliações
    const [clientRating, setClientRating] = useState<boolean | null>(null)
    const [clientCodeInput, setClientCodeInput] = useState<string>('');
    const [clientRatingTextInput, setClientRatingTextInput] = useState<string>('')

    //states filtros
    const [codeFilterInput, setCodeFilterInput] = useState<string>('');
    const [codeFilterBtn, setCodeFilterBtn] = useState<boolean>(false);
    const [initialDate, setInitialDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [dateFilterBtn, setDateFilterBtn] = useState<boolean>(false);

    //function requisição com Filtro de código
    const getFilterSolution = async (errorCode: string) => {
        if (errorCode != '' && errorCode.length === 6) {
            setCodeFilterBtn(true);
            setCodeFilterInput(errorCode);
        }
    }

    //function para limpar filtro
    const cleanFilter = () => {
        setCodeFilterInput('');
        setInitialDate('');
        setEndDate('');
        setCodeFilterBtn(false);
        setDateFilterBtn(false)
    }

    //filtro de data
    const dateFilter = () => {
        setDateFilterBtn(true)
    }

    //function requisição POST de AVALIAÇÔES
    const addRating = (id: string, errorCode: string, clientCode: string, date: string, clientRating: boolean | null, clientRatingText: string, like: number, dislike: number) => {
        try {
            //verificando se o codigo do cliente foi informado
            if (clientCode != '') {
                updateRatingSolution(id, like, dislike)
                createRating(errorCode, clientCode, date, clientRating as boolean, clientRatingText)

                toast.success("Obrigado pela Avaliação!")
                setTimeout(() => {
                    window.location.reload();
                }, 1000)
            } else {
                toast.error('Codigo de cliente não pode estar vazio.')
            }
        } catch (error) {
            toast.error(`Error: ${error}`)
        }
    }

    //function requisição POST de SOLUÇÕES
    const addSolution = async (errorCode: string, errorTitle: string, solutionContent: string) => {
        try {
            //verificando se todas as informações foram informadas
            if (errorCode != '' && errorTitle != '' && solutionContent != '') {
                await createSolution(errorCode, errorTitle, solutionContent);
                toast.success(`Error: ${errorCode} adicionado com sucesso!`);

                setTimeout(() => {
                    window.location.href = '/solutionTable';

                }, 1000)
            } else {
                toast.error('Por favor preencha todos os campos.')
            }

        } catch (error) {
            toast.error(`Error: ${error}`);
        }
    }

    //function requisição UPDATE de SOLUÇÕES
    const updateSolution = async (id: string, errorCode: string, errorTitle: string, solutionContent: string) => {
        try {
            await updateSingleSolution(id, errorCode, errorTitle, solutionContent);
            toast.success(`Error: ${errorCode} atualizado com sucesso!`);
            setTimeout(() => {
                window.location.href = '/solutionTable';

            }, 1000)
        } catch (error) {
            toast.error(`Error: ${error}`)
        }
    }

    //function requisição DELETE de SOLUÇÕES
    const deleteSingleSolution = (id: string) => {
        try {
            deleteSolution(id);
            window.location.reload();
        } catch (error) {
            toast.error(`Error: ${error}`)
        }
    }

    //functions requisição GET de SOLUÇÔES e AVALIAÇÔES
    useEffect(() => {
        
        //get soluções
        const getSolutions = getAllSolution();
        getSolutions.then((res) => setSolutionData(res));

        //get avaliações
        const getRatings = getAllRating();
        getRatings.then((res) => setRatingData(res));

    }, [])

    return (
        <DataContext.Provider value={{ solutionData, ratingData, errorCodeInput, errorTitleInput, solutionContentInput, clientRating, clientCodeInput, clientRatingTextInput, codeFilterInput, codeFilterBtn, initialDate, endDate, dateFilterBtn, setErrorCodeInput, setErrorTitleInput, setSolutionContentInput, setClientRating, setClientCodeInput, setClientRatingTextInput, setCodeFilterInput, getFilterSolution, setInitialDate, setEndDate, dateFilter, cleanFilter, addRating, addSolution, updateSolution, deleteSingleSolution }}>
            {children}
        </DataContext.Provider>
    )
}