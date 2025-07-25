'use client'

import { Header } from "@/components/Header";
import { SolutionTable } from "@/components/SolutionTable";
import { DataContextProvider } from "@/contexts/DataContext";

const Page = () => {
    return (
        <DataContextProvider>
            <div className="w-screen font-roboto bg-primary-white text-black">
                <Header />
                <SolutionTable />
            </div>
        </DataContextProvider>
    )
}

export default Page;