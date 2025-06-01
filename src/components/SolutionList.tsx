import { DataContext } from "@/contexts/DataContext"
import { useContext } from "react"

export const SolutionList = () => {

    const solutionCtx = useContext(DataContext);

    return (
        <section className="w-screen h-[calc(100vh-80px)] flex flex-col bg-secondary-white">
            <div className="container mx-auto flex flex-col justify-center items-center py-10">
                <div className="w-full h-[80px] flex justify-between items-center rounded-t-lg bg-primary-blue">
                    <div className="flex items-center">
                        <p className="text-sm text-white ml-10">Filtrar pelo código:</p>
                        <input
                            className="ml-2 px-1 bg-white outline-0 rounded-lg"
                            value={solutionCtx?.codeFilterInput} onChange={(e) => solutionCtx?.setCodeFilterInput(e.target.value)} type="text" pattern="\d*" maxLength={6} />
                        <button onClick={() => solutionCtx?.getFilterSolution(solutionCtx.codeFilterInput)} className="bg-white rounded-lg px-3 ml-2 border-transparent text-primary-blue cursor-pointer hover:bg-gray-100">Filtrar</button>
                        <button onClick={() => solutionCtx?.cleanFilter()} className="bg-white rounded-lg px-3 ml-2 border-transparent text-primary-blue cursor-pointer hover:bg-gray-100">Limpar Filtro</button>
                    </div>
                </div>
                <div className="w-full bg-primary-white p-10 rounded-b-lg">
                    <ul className="w-[250px] list-disc ml-4">

                        {
                            //Lista com filtro
                            solutionCtx?.codeFilterBtn === true &&
                            solutionCtx?.solutionData.filter(item => item.errorCode === solutionCtx.codeFilterInput).map(item => (
                                <li key={item.id}>
                                    <a href={`/solutionDetail/?id=${item.id}`} className="flex ml-10 text-primary-blue text-lg hover:underline">
                                        <span>{item.errorCode}</span>
                                        <p className="ml-2">- {item.errorTitle}</p>
                                    </a>
                                </li>
                            ))

                        }
                        {
                            //Lista sem filtro
                            solutionCtx?.codeFilterBtn === false &&
                            solutionCtx?.solutionData.map(item => (
                                <li key={item.id}>
                                    <a href={`/solutionDetail/?id=${item.id}`} className="flex ml-10 text-primary-blue text-lg hover:underline">
                                        <span>{item.errorCode}</span>
                                        <p className="ml-2">- {item.errorTitle}</p>
                                    </a>
                                </li>
                            ))

                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}