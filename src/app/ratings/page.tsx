'use client'

import { Header } from "@/components/Header";
import { Ratings } from "@/components/Ratings";
import { DataContextProvider } from "@/contexts/DataContext";

const Page = () => {
    return (
        <DataContextProvider>
            <div className="w-screen font-roboto bg-secondary-white text-black">
                <Header />
                <Ratings />
            </div>
        </DataContextProvider>
    )
}

export default Page;