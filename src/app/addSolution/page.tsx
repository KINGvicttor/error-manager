'use client'

import { AddSolution } from "@/components/AddSolution";
import { Header } from "@/components/Header";

const Page = () => {
    return (
        <div className="w-screen font-roboto bg-primary-white text-black">
            <Header  />
            <AddSolution />
        </div>
    )
}

export default Page;