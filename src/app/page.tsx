'use client'

import { Header } from "@/components/Header";
import { Home } from "@/components/Home";
import { ToastContainer } from "react-toastify";

const Page = () => {
  return (
    <div className="w-screen h-screen font-roboto bg-secondary-white text-black">
      <Header />
      <Home />
      <ToastContainer />
    </div>
  )
}

export default Page;