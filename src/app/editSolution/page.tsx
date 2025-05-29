'use client'

import { EditSolution } from "@/components/EditSolution";
import { Header } from "@/components/Header";

const Page = () => {
    return (
        <div className="w-screen font-roboto bg-primary-white text-black">
            <Header  />
            <EditSolution />
        </div>
    )
}

export default Page;