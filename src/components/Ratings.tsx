import { DataContext } from "@/contexts/DataContext"
import { useContext, useState } from "react"

export const Ratings = () => {

    const solutionCtx = useContext(DataContext);

    const convertDate = (date: string) => {
        const dateSplit = date.split("/");
        const newDate = dateSplit[0].concat(dateSplit[1]).concat(dateSplit[2]);
        return newDate
    }

    return (
        <section className="w-screen h-[calc(100vh-80px)] flex flex-col bg-secondary-white">
            <div className="container mx-auto flex flex-col justify-center items-center py-10 bg-secondary-white">
                <div className="w-full h-[80px] flex justify-between items-center rounded-t-lg bg-primary-blue">
                    <div className="flex items-center">
                        <p className="text-sm text-white ml-10">Filtrar por um <br /> periodo de tempo:</p>
                        <input
                            className="ml-2 px-1 bg-white outline-0 rounded-lg"
                            value={solutionCtx?.initialDate} onChange={(e) => solutionCtx?.setInitialDate(e.target.value)} type="text" placeholder="Data inicial"/>
                            <input
                            className="ml-2 px-1 bg-white outline-0 rounded-lg"
                            value={solutionCtx?.endDate} onChange={(e) => solutionCtx?.setEndDate(e.target.value)} type="text" placeholder="Data final"/>
                        <button onClick={() => solutionCtx?.dateFilter()} className="bg-white rounded-lg px-3 ml-2 border-transparent text-primary-blue cursor-pointer hover:bg-gray-100">Filtrar</button>
                        <button onClick={() => solutionCtx?.cleanFilter()} className="bg-white rounded-lg px-3 ml-2 border-transparent text-primary-blue cursor-pointer hover:bg-gray-100">Limpar Filtro</button>
                    </div>
                    <div className="flex items-center">
                        <a href="/dashboard" className="bg-white px-3 py-2 rounded-lg text-primary-blue mr-3 cursor-pointer hover:bg-gray-100">Voltar</a>
                    </div>
                </div>
                <div className="w-full h-auto bg-primary-white">
                    <table className="w-full table-fixed">
                        <thead className=" bg-primary-blue text-white ">
                            <tr className="h-[50px] ">
                                <th className="w-[40px] text-start px-10">Código de erro:</th>
                                <th className="w-[40px] text-start px-10">Código de cliente:</th>
                                <th className="w-[40px] text-start px-10">Avaliação:</th>
                                <th className="w-[150px] text-start px-10">Comentário:</th>
                                <th className="w-[80px] text-start px-10">Data:</th>
                                <th className="w-[80px] text-start px-10">Ações:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                /* Verificando se existe algum valor digitado no input filtro e se o botão foi clicado*/
                                solutionCtx?.dateFilterBtn === true &&

                                /* Caso exista algum valor retornar solução solicitada*/
                                solutionCtx?.ratingData.filter(item => convertDate(item.date) >= solutionCtx?.initialDate && convertDate(item.date) <= solutionCtx?.endDate).map((item) => (
                                    <tr key={item.id} className="h-[50px] hover:bg-gray-200">
                                        <td className="w-[40px] text-start px-10 border-b border-primary-blue">{item.errorCode}</td>
                                        <td className="w-[40px] text-start px-10 border-b border-primary-blue">{item.clientCode}</td>
                                        {item.rating === true &&
                                            <td className="w-[80px] text-start px-10 border-b border-primary-blue bg-green-500"></td>
                                        }
                                        {item.rating === false &&
                                            <td className="w-[80px] text-start px-10 border-b border-primary-blue bg-red-500"></td>
                                        }
                                        <td className="w-[150px] text-start px-10 border-b border-primary-blue">{item.ratingText}</td>
                                        <td className="w-[80px] text-start px-10 border-b border-primary-blue">{item.date.substring(0, 10)}</td>
                                        <td className="w-[150px] px-10 border-b border-primary-blue">
                                            <a href={`/solutionDetail?id=${item.id}`} className="px-3 py-2 cursor-pointer w-[80px] mx-1 bg-secondary-blue text-white rounded-lg hover:bg-secondary-blue/90">+ Detalhes</a>
                                        </td>
                                    </tr>
                                ))
                            }

                            {
                                /* Verificando se o input filtro esta vazio e se o botão de remover filtro foi clicado*/
                                solutionCtx?.dateFilterBtn === false &&

                                /* Caso esteja vazio retorna lista completa de soluções */
                                solutionCtx?.ratingData.map((item) => (
                                    <tr key={item.id} className="h-[50px] hover:bg-gray-200">
                                        <td className="w-[40px] text-start px-10 border-b border-primary-blue">{item.errorCode}</td>
                                        <td className="w-[40px] text-start px-10 border-b border-primary-blue">{item.clientCode}</td>
                                        {item.rating === true &&
                                            <td className="w-[80px] text-start px-10 border-b border-primary-blue bg-green-500"></td>
                                        }
                                        {item.rating === false &&
                                            <td className="w-[80px] text-start px-10 border-b border-primary-blue bg-red-500"></td>
                                        }
                                        <td className="w-[150px] text-start px-10 border-b border-primary-blue">{item.ratingText}</td>
                                        <td className="w-[80px] text-start px-10 border-b border-primary-blue">{item.date.substring(0, 10)}</td>
                                        <td className="w-[150px] px-10 border-b border-primary-blue">
                                            <a href={`/solutionDetail?id=${item.id}`} className="px-3 py-2 cursor-pointer w-[80px] mx-1 bg-secondary-blue text-white rounded-lg hover:bg-secondary-blue/90">+ Detalhes</a>
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