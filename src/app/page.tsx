'use client'

import { Header } from "@/components/Header";
import { Home } from "@/components/Home";

const Page = () => {
  return (
    <div className="w-screen h-screen font-roboto bg-secondary-white text-black">
      <Header />
      <Home />
    </div>
  )
}

export default Page;