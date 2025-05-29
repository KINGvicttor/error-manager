'use client'

import { Header } from "@/components/Header";
import { SolutionDetail } from "@/components/SolutionDetail";
import { DataContextProvider } from "@/contexts/DataContext";

const Page = () => {
    return (
        <DataContextProvider>
            <div className="w-screen font-roboto bg-primary-white text-black">
                <Header />
                <SolutionDetail />
            </div>
        </DataContextProvider>
    )
}
export default Page;