'use client'

import { Header } from "@/components/Header";
import { SolutionList } from "@/components/SolutionList";
import { DataContextProvider } from "@/contexts/DataContext";

const Page = () => {
    return (
        <DataContextProvider>
            <div className="w-screen font-roboto bg-primary-white text-black">
                <Header />
                <SolutionList />
            </div>
        </DataContextProvider>
    )
}

export default Page;