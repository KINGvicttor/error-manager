import { GetSingleRating } from "@/services/api";
import { Rating } from "@/types/Rating";
import { useEffect, useState } from "react";

export const RatingDetail = () => {

    const [singleRating, setSingleRating] = useState<Rating>();


    useEffect(() => {
        const params = window.location.search.substring(4);
        const getSolution = GetSingleRating(params);
        getSolution.then((res) => setSingleRating(res));
    }, [])

    return (
        <section className="w-screen bg-secondary-white">
            <div className="container mx-auto w-full h-[calc(100vh-80px)] p-10">
                {
                    <div key={singleRating?.id} className="w-full flex flex-col">
                        <div className="w-full overflow-y-scroll rounded-b-lg">
                            <div className="flex items-center justify-between bg-primary-blue h-[60px] rounded-t-lg  text-white">
                                <h1 className="ml-4 text-xl"><span>Codigo de erro: {singleRating?.errorCode}</span> - Codigo de cliente: {singleRating?.clientCode} - <span>Data: {singleRating?.date}</span></h1>
                                <a href="/ratings" className="flex mr-4 hover:underline">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                                    </svg>
                                    <p className="ml-1">Voltar a lista</p>
                                </a>
                            </div>
                            <div className="bg-primary-white p-4 text-black flex items-center">
                                <p className="text-lg">Avaliação:</p>
                                {singleRating?.rating === true &&
                                    <div className="bg-green-500 w-[50px] h-[20px] mx-2"></div>
                                }
                                {singleRating?.rating === false &&
                                    <div className="bg-red-500 w-[50px] h-[20px] mx-2"></div>
                                }
                                <p id="content" className="">{singleRating?.ratingText}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}