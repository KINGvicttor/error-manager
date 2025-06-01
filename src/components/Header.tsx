export const Header = () => {
    return (
        <div className="w-screen h-[80px]  bg-primary-blue">
            <div className="h-full container mx-auto flex justify-between items-center text-white  px-10 ">
                <div className="flex justify-start items-center w-[350px] bg-primary-blue">
                    <h1 className="text-4xl font-bold text-primary-white">Solution Manager</h1>
                </div>
                <div className="w-[500px] hidden lg:flex justify-end">
                    <nav>
                        <ul className="flex items-center justify-between w-[450px]">
                            <a href="./"><li className="text-lg border-b-2 border-transparent hover:border-white">Inicio</li></a>
                            <a href="/dashboard"><li className="text-lg border-b-2 border-transparent hover:border-white">Dashboard</li></a>
                            <a href="/addSolution"><li className="text-lg border-b-2 border-transparent hover:border-white">Cadastro</li></a>
                            <a href="/solutionList"><li className="text-lg border-b-2 border-transparent hover:border-white">Lista de soluções</li></a>
                        </ul>
                    </nav>
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