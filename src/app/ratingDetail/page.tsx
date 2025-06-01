'use client'

import { Header } from "@/components/Header";
import { RatingDetail } from "@/components/RatingDetail";
import { DataContextProvider } from "@/contexts/DataContext";

const Page = () => {
    return (
        <DataContextProvider>
            <div className="w-screen font-roboto bg-secondary-white text-black">
                <Header />
                <RatingDetail />
            </div>
        </DataContextProvider>
    )
}

export default Page;