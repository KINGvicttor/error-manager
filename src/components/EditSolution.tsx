import { DataContext } from "@/contexts/DataContext"
import { getSingleSolution } from "@/services/api"
import { Solution } from "@/types/Solution"
import { useContext, useEffect, useState } from "react"

export const EditSolution = () => {

    const solutionCtx = useContext(DataContext);

    //States para update
    const [updateId, setUpdateId] = useState<string>('')
    const [updateErrorCode, setUpdateErrorCode] = useState<string>('')
    const [updateErrorTitle, setUpdateErrorTitle] = useState<string>('')
    const [updateSolutionContent, setUpdateSolutionContent] = useState<string>('')


    //Pegando parametro da url e fazendo requisição na api de acordo com o id
    useEffect(() => {
        const params = window.location.search.substring(4)
        const getSolution = getSingleSolution(params)
        getSolution.then((res) => {
            setUpdateId(res.id);
            setUpdateErrorCode(res.errorCode);
            setUpdateErrorTitle(res.errorTitle);
            setUpdateSolutionContent(res.solutionContent);
        })
    }, [])

    return (
        <section className="w-screen h-[calc(100vh-80px)] flex flex-col bg-secondary-white">
            <div className="container mx-auto flex justify-center items-center p-10">
                <div className="w-[600px] flex flex-col justify-start items-center bg-primary-white rounded-lg">

                    <div className="w-full h-[60px] flex items-center justify-between rounded-t-lg bg-primary-blue">
                        <h1 className="ml-4 text-lg text-white">Editar solução:</h1>
                        <a href="./" className="flex text-white hover:underline cursor-pointer mr-4">
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                            </svg>
                            <p className="ml-1">Voltar ao início</p>
                        </a>
                    </div>

                    <div className="flex flex-col mt-4">
                        <label className="text-sm text-primary-blue mb-1" htmlFor="">Digite o código do erro:</label>
                        <input
                            className="bg-secondary-white px-3 py-2 w-[300px] border-primary-blue border-2 rounded-lg outline-0"
                            type="text" value={updateErrorCode} onChange={(e) => setUpdateErrorCode(e.target.value)} pattern="\d*" maxLength={6} minLength={6} placeholder="Digite o código do erro" required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-primary-blue mt-4 mb-1" htmlFor="">Digite o título do erro:</label>
                        <input
                            className="bg-secondary-white px-3 py-2 w-[300px] border-primary-blue border-2 rounded-lg outline-0"
                            type="text" value={updateErrorTitle} onChange={(e) => setUpdateErrorTitle(e.target.value)} placeholder="Digite o título do erro:" required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-primary-blue mt-4 mb-1" htmlFor="">Digite a solução:</label>
                        <textarea
                            className="bg-secondary-white px-3 py-2 w-[300px] border-primary-blue border-2 rounded-lg outline-0"
                            value={updateSolutionContent} onChange={(e) => setUpdateSolutionContent(e.target.value)} placeholder="Digite a solução:"></textarea>
                    </div>

                    <input type="hidden" value={updateId} />
                    <button onClick={() => solutionCtx?.updateSolution(updateId, updateErrorCode, updateErrorTitle, updateSolutionContent)} className="bg-yellow-500 w-[150px] mt-4 mb-4 px-3 py-2  rounded-lg text-white cursor-pointer hover:bg-yellow-500/90">Editar</button>
                </div>
            </div>
        </section>
    )
}