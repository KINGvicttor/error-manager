'use client'

import { Header } from "@/components/Header";
import { SolutionDetail } from "@/components/SolutionDetail";

const Page = () => {
    return (
        <div className="w-screen font-roboto bg-primary-white text-black">
            <Header/>
            <SolutionDetail />
        </div>
    )
}
export default Page;