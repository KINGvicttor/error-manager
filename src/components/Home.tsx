export const Home = () => {
    return (
        <section className="w-screen h-auto flex flex-col bg-secondary-white">
            <div className="container mx-auto flex flex-wrap justify-center gap-20 py-10 lg:justify-start">

                {/* Adicionar nova solução */}
                <a href="/addSolution">
                    <div className="w-[400px] h-[200px] flex justify-center items-center rounded-lg bg-green-600 shadow-lg text-white cursor-pointer hover:bg-green-600/90">
                        <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h1 className="text-2xl font-bold ml-2">Adicionar nova Sugestão</h1>
                    </div>
                </a>

                {/* Lista das soluções */}
                <a href="/solutionList">
                    <div className="w-[400px] h-[200px] flex justify-center items-center rounded-lg bg-secondary-blue shadow-lg text-white cursor-pointer hover:bg-secondary-blue/90">
                        <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeWidth="2" d="M3 11h18M3 15h18m-9-4v8m-8 0h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                        </svg>

                        <h1 className="text-2xl font-bold ml-2">Lista de Sugestões</h1>
                    </div>
                </a>
            </div>
            <div className="container mx-auto flex flex-wrap justify-center gap-20 py-10 border-t-2 border-primary-white lg:justify-start">

                {/* Adicionar nova solução */}
                <a href="">
                    <div className="w-[400px] h-[200px] flex justify-center items-center rounded-lg bg-primary-blue shadow-lg text-white cursor-pointer hover:bg-primary-blue/90">
                        <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                        </svg>
                        <h1 className="text-2xl font-bold ml-4"> Avaliação média do <br /> total das Sugestões:</h1>
                    </div>
                </a>

                {/* Adicionar nova solução */}
                <a href="">
                    <div className="w-[400px] h-[200px] flex justify-center items-center rounded-lg bg-primary-blue shadow-lg text-white cursor-pointer hover:bg-primary-blue/90">
                        <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z" />
                        </svg>
                        <h1 className="text-2xl font-bold ml-4">Avaliação média de <br /> cada Sugestão</h1>
                    </div>
                </a>
            </div>
        </section>
    )
}