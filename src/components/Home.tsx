export const Home = () => {
    return (
        <section className="w-screen h-auto flex flex-col bg-secondary-white">
            <div className="w-full h-[300px] bg-cover bg-center bg-[url('https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                <div className="w-full h-full flex flex-col items-center justify-center bg-black/70 shadow-lg text-white">
                    <p className="text-xl mb-2">Solution Manager</p>
                    <h1 className="text-4xl font-bold">Encontre as possíveis soluções de erros com nosso software.</h1>
                </div>
            </div>
            <div className="container mx-auto flex flex-wrap justify-center gap-20 py-10 lg:justify-start">

                {/* Lista das soluções */}
                <a href="/solutionList">
                    <div className="w-[400px] h-[200px] flex justify-center items-center rounded-lg bg-primary-blue shadow-lg text-white cursor-pointer hover:bg-secondary-blue/90">
                        <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeWidth="2" d="M3 11h18M3 15h18m-9-4v8m-8 0h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                        </svg>

                        <h1 className="text-2xl font-bold ml-2">Lista de Sugestões</h1>
                    </div>
                </a>
            </div>
        </section>
    )
}