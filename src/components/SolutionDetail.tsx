import { getSingleSolution } from "@/services/api";
import { Solution } from "@/types/Solution";
import { useEffect, useState } from "react"

export const SolutionDetail = () => {

    const [singleSolution, setSingleSolution] = useState<Solution>()

    //Pegando parametro da url e fazendo requisição na api de acordo com o id
    useEffect(() => {
        const params = window.location.search.substring(4)
        const getSolution = getSingleSolution(params)
        getSolution.then((res) => setSingleSolution(res))
    }, [])

    return (
        <section className="w-screen bg-secondary-white">
            <div className="container mx-auto w-full h-[calc(100vh-80px)] py-10">
                {
                    <div key={singleSolution?.id} className="w-full flex flex-col">
                        <div className="w-full overflow-y-scroll rounded-b-lg">
                            <div className="flex items-center justify-between bg-primary-blue h-[60px] rounded-t-lg  text-white">
                                <h1 className="ml-4 text-xl"><span>{singleSolution?.errorCode}</span> - {singleSolution?.errorTitle}</h1>
                                <a href="/solutionList" className="flex mr-4 hover:underline">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                                    </svg>
                                    <p className="ml-1">Voltar a lista</p>
                                </a>
                            </div>
                            <div className="bg-primary-white p-4 text-black">
                                <p className=" text-lg">Solução:</p>
                                <p className="">{singleSolution?.solutionContent}</p>
                            </div>
                        </div>
                        <div className="w-full h-[200px] mt-4">
                            <div className="w-full h-[60px] flex items-center rounded-t-lg bg-primary-white">
                                <button className="flex items-center cursor-pointer">
                                    <svg className="w-6 h-6 ml-4 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <p className="ml-1 mr-4">0</p>
                                <button className="flex items-center cursor-pointer">
                                    <svg className="w-6 h-6 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <p className="ml-1">0</p>
                            </div>
                            <div className="w-full px-4 py-1 h-[140px] flex flex-col items-start bg-primary-white rounded-b-lg">
                                <p>A Solução foi útil? Deixe sua avaliação:</p>
                                <div className="flex mt-2">
                                    <input
                                        className="px-3 py-2 w-[250px] border-primary-blue border-2 rounded-lg outline-0 bg-secondary-white"
                                        type="text" name="" id="" pattern="\d*" maxLength={6} placeholder="Código de Cliente:" />
                                    <input
                                        className="px-3 py-2 ml-4  w-[250px] border-primary-blue border-2 rounded-lg outline-0 bg-secondary-white"
                                        type="text" name="" id="" placeholder="Deixe sua avaliação:" />
                                    <button className="bg-green-500 rounded-lg px-3 py-2 text-white ml-2 cursor-pointer hover:bg-green-500/90">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}