'use client'

import { Header } from "@/components/Header";
import { Home } from "@/components/Home";

const Page = () => {
  return (
    <div className="w-screen font-roboto bg-primary-white text-black">
      <Header />
      <Home />
    </div>
  )
}

export default Page;