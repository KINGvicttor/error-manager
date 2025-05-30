'use client'

import { EditSolution } from "@/components/EditSolution";
import { Header } from "@/components/Header";
import { DataContextProvider } from "@/contexts/DataContext";

const Page = () => {
    return (
        <DataContextProvider>
            <div className="w-screen font-roboto bg-primary-white text-black">
                <Header />
                <EditSolution />
            </div>
        </DataContextProvider>
    )
}

export default Page;