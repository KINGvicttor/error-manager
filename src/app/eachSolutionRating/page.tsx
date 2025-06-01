'use client'

import { EachSolutionRating } from "@/components/EachSolutionRating";
import { Header } from "@/components/Header";
import { DataContextProvider } from "@/contexts/DataContext";

const Page = () => {
    return (
        <DataContextProvider>
            <div className="w-screen font-roboto bg-primary-white text-black">
                <Header />
                <EachSolutionRating />
            </div>
        </DataContextProvider>
    )
}

export default Page;