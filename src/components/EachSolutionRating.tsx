import { DataContext } from "@/contexts/DataContext"
import { useContext } from "react"

export const EachSolutionRating = () => {

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
                    <div className="flex items-center">
                        <a href="/dashboard" className="bg-white px-3 py-2 rounded-lg text-primary-blue mr-3 cursor-pointer hover:bg-gray-100">Voltar</a>
                        <a href="/addSolution" className="bg-green-500 px-3 py-2 rounded-lg text-white mr-10 cursor-pointer hover:bg-green-500/90">+ Adicionar</a>
                    </div>
                </div>
                <div className="w-full h-auto bg-primary-white">
                    <table className="w-full ">
                        <thead className=" bg-primary-blue text-white ">
                            <tr className="h-[50px] ">
                                <th className="w-[80px] text-start px-10">Código:</th>
                                <th className="w-[400px] text-start px-10">Título:</th>
                                <th className="w-[80px] text-start px-10">Positivo:</th>
                                <th className="w-[80px] text-start px-10">Negativo:</th>
                                <th className="w-[80px] text-start px-10">Média:</th>
                                <th className="w-[150px] text-start px-10">Ações:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                /* Verificando se existe algum valor digitado no input filtro e se o botão foi clicado*/
                                solutionCtx?.codeFilterBtn === true &&

                                /* Caso exista algum valor retornar solução solicitada*/
                                solutionCtx?.solutionData.filter(item => item.errorCode === solutionCtx.codeFilterInput).map((item) => (
                                    <tr key={item.id} className="h-[50px] hover:bg-gray-200">
                                        <td className="w-[80px] text-start px-10 border-b border-primary-blue">{item.errorCode}</td>
                                        <td className="w-[400px] text-start px-10 border-b border-primary-blue">{item.errorTitle}</td>
                                        <td className="w-[80px] text-start px-10 border-b border-primary-blue">{item.ratingPositive}</td>
                                        <td className="w-[80px] text-start px-10 border-b border-primary-blue">{item.ratingNegative}</td>
                                        <td className="w-[80px] text-start px-10 border-b border-primary-blue">{(item.ratingPositive + item.ratingNegative) / 2}</td>
                                        <td className="w-[150px] px-10 border-b border-primary-blue">
                                            <a href={`/solutionDetail?id=${item.id}`} className="px-3 py-2 cursor-pointer w-[80px] mx-1 bg-secondary-blue text-white rounded-lg hover:bg-secondary-blue/90">Solução</a>
                                            <a href={`/editSolution?id=${item.id}`} className="px-3 py-2 cursor-pointer w-[60px] mx-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-500/90">Edit</a>
                                            <a onClick={() => solutionCtx.deleteSingleSolution(item.id)} className="px-3 py-2 cursor-pointer w-[70px] mx-1 bg-red-500 text-white rounded-lg hover:bg-red-500/90">Delete</a>
                                        </td>
                                    </tr>
                                ))
                            }

                            {
                                /* Verificando se o input filtro esta vazio e se o botão de remover filtro foi clicado*/
                                solutionCtx?.codeFilterBtn === false &&

                                /* Caso esteja vazio retorna lista completa de soluções */
                                solutionCtx?.solutionData.map((item) => (
                                    <tr key={item.id} className="h-[50px] hover:bg-gray-200">
                                        <td className="w-[80px] text-start px-10 border-b border-primary-blue">{item.errorCode}</td>
                                        <td className="w-[400px] text-start px-10 border-b border-primary-blue">{item.errorTitle}</td>
                                        <td className="w-[80px] text-start px-10 border-b border-primary-blue">{item.ratingPositive}</td>
                                        <td className="w-[80px] text-start px-10 border-b border-primary-blue">{item.ratingNegative}</td>
                                        <td className="w-[80px] text-start px-10 border-b border-primary-blue">{(item.ratingPositive + item.ratingNegative) / 2}</td>
                                        <td className="w-[150px] px-10 border-b border-primary-blue">
                                            <a href={`/solutionDetail?id=${item.id}`} className="px-3 py-2 cursor-pointer w-[80px] mx-1 bg-secondary-blue text-white rounded-lg hover:bg-secondary-blue/90">Solução</a>
                                            <a href={`/editSolution?id=${item.id}`} className="px-3 py-2 cursor-pointer w-[60px] mx-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-500/90">Edit</a>
                                            <a onClick={() => solutionCtx.deleteSingleSolution(item.id)} className="px-3 py-2 cursor-pointer w-[70px] mx-1 bg-red-500 text-white rounded-lg hover:bg-red-500/90">Delete</a>
                                        </td>
                                    </tr>
                                ))

                            }

                            {
                                /* Caso não retorne nenhum valor no filtro */
                                solutionCtx?.codeFilterBtn === true && solutionCtx?.solutionData.filter(item => item.errorCode === solutionCtx.codeFilterInput).length === 0 &&
                                <tr>
                                    <td></td>
                                    <td className="h-[250px] flex justify-center items-center">
                                        <p className="text-lg">Nenhum resultado encontrado.</p>
                                    </td>
                                    <td></td>
                                </tr>

                            }

                            {
                                /* Caso não retorne nenhum valor na requisição da lista completa */
                                solutionCtx?.codeFilterBtn === false && solutionCtx?.solutionData.length === 0 &&
                                <tr>
                                    <td></td>
                                    <td className="h-[250px] flex justify-center items-center">
                                        <p className="text-lg">Nenhum resultado encontrado.</p>
                                    </td>
                                    <td></td>
                                </tr>

                            }
                        </tbody>
                    </table>
                </div>
                <div className="w-full h-[80px] rounded-b-lg bg-primary-blue">
                    <div className="h-[80px] flex justify-center items-center">
                        <ul className="flex justify-between w-[200px]">
                            <a href=""><li className="px-3 py-1 text-lg rounded-lg bg-white text-primary-blue hover:bg-gray-100">{'<'}</li></a>
                            <a href=""><li className="px-3 py-1 text-lg rounded-lg bg-white text-primary-blue hover:bg-gray-100">1</li></a>
                            <a href=""><li className="px-3 py-1 text-lg rounded-lg bg-white text-primary-blue hover:bg-gray-100">2</li></a>
                            <a href=""><li className="px-3 py-1 text-lg rounded-lg bg-white text-primary-blue hover:bg-gray-100">3</li></a>
                            <a href=""><li className="px-3 py-1 text-lg rounded-lg bg-white text-primary-blue hover:bg-gray-100">{'>'}</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}