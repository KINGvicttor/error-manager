export const Header = () => {
    return (
        <div className="w-screen h-[80px]  bg-primary-blue">
            <div className="h-full container mx-auto flex justify-between items-center text-white">
                <div className="flex justify-start items-center w-[350px] bg-primary-blue">
                    <div className="w-1 h-10 mr-2 ml-2 bg-secondary-blue"></div>
                    <h1 className="text-4xl font-bold text-primary-white">Solution Manager</h1>
                </div>
                <div className="w-[500px] hidden lg:inline">
                    <nav>
                        <ul className="flex items-center justify-between w-[450px]">
                            <a href="./"><li className="text-lg border-b-2 border-transparent hover:border-white">Inicio</li></a>
                            <a href="/dashboard"><li className="text-lg border-b-2 border-transparent hover:border-white">Dashboard</li></a>
                            <a href="/addSolution"><li className="text-lg border-b-2 border-transparent hover:border-white">Cadastro</li></a>
                            <a href="/solutionList"><li className="text-lg border-b-2 border-transparent hover:border-white">Lista de soluções</li></a>
                        </ul>
                    </nav>
                </div>
                <div className="w-[350px] items-center justify-end text-black hidden lg:flex">
                    <input
                        className="bg-primary-white rounded-l-lg px-3 py-1 outline-0"
                        type="text" name="" id="" placeholder="Pesquisar solução..." />
                    <button className="bg-primary-white text-primary-blue px-1 py-1 rounded-r-lg cursor-pointer">
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                        </svg>
                    </button>
                </div>
                <div className="w-[350px] flex justify-end items-center lg:hidden">
                    <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6H6m12 4H6m12 4H6m12 4H6" />
                    </svg>
                </div>
            </div>
        </div>
    )
} 