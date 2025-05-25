'use client'

import { Header } from "@/components/Header";
import { SolutionList } from "@/components/SolutionList";

const Page = () => {
    return (
        <div className="w-screen font-roboto bg-primary-white text-black">
            <Header />
            <SolutionList />
        </div>
    )
}

export default Page;