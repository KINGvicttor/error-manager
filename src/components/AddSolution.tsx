import { DataContext } from "@/contexts/DataContext"
import { useContext, useRef } from "react"

export const AddSolution = () => {

    const solutionCtx = useContext(DataContext);

    return (
        <section className="w-screen h-[calc(100vh-80px)] flex flex-col bg-secondary-white">
            <div className="container mx-auto flex justify-center items-center p-10">
                <div className="w-[600px] h-[400px] flex flex-col justify-start items-center bg-primary-white rounded-lg">

                    <div className="w-full h-[60px] flex items-center justify-between rounded-t-lg bg-primary-blue">
                        <h1 className="ml-4 text-lg text-white">Adicionar solução:</h1>
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
                            className="bg-secondary-white px-3 py-2 border-primary-blue border-2 rounded-lg outline-0"
                            value={solutionCtx?.errorCodeInput}   onChange={(e) => solutionCtx?.setErrorCodeInput(e.target.value)} type="text" name="" id="" pattern="\d*" maxLength={6} minLength={6} placeholder="Digite o código do erro" required/>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-primary-blue mt-4 mb-1" htmlFor="">Digite o título do erro:</label>
                        <input
                            className="bg-secondary-white px-3 py-2 border-primary-blue border-2 rounded-lg outline-0"
                            value={solutionCtx?.errorTitleInput}   onChange={(e) => solutionCtx?.setErrorTitleInput(e.target.value)} type="text" name="" id="" placeholder="Digite o título do erro:" required/>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-primary-blue mt-4 mb-1" htmlFor="">Digite a solução:</label>
                        <input
                            className="bg-secondary-white px-3 py-2 border-primary-blue border-2 rounded-lg outline-0"
                            value={solutionCtx?.solutionContentInput}   onChange={(e) => solutionCtx?.setSolutionContentInput(e.target.value)} type="text" name="" id="" placeholder="Digite a solução" required/>
                    </div>
                    <button onClick={() => solutionCtx?.addSolution(solutionCtx?.errorCodeInput, solutionCtx.errorTitleInput, solutionCtx.solutionContentInput)} className="bg-green-500 w-[150px] mt-8 px-3 py-2 rounded-lg text-white cursor-pointer hover:bg-green-500/90">+ Add</button>
                </div>
            </div>
        </section>
    )
}