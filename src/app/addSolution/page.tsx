'use client'

import { AddSolution } from "@/components/AddSolution";
import { Header } from "@/components/Header";
import { DataContextProvider } from "@/contexts/DataContext";

const Page = () => {
    return (
        <DataContextProvider>
            <div className="w-screen font-roboto bg-primary-white text-black">
                <Header />
                <AddSolution />
            </div>
        </DataContextProvider>
    )
}

export default Page;