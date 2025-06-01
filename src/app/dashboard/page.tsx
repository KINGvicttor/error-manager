'use client'

import { Dashboard } from "@/components/Dashboard"
import { Header } from "@/components/Header"
import { DataContextProvider } from "@/contexts/DataContext"

const Page = () => {
    return (
        <section className="w-screen h-screen font-roboto bg-secondary-white text-black">
            <DataContextProvider>
                <Header />
                <Dashboard />
            </DataContextProvider>
        </section>
    )
}

export default Page;