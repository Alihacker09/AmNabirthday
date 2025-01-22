"use client"
import React from 'react'
import SplitText from './_components/SplitText'
import Image from 'next/image'
import Lovebutton from './_components/Lovebutton'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  return (
    <div className="flex justify-center items-center h-screen flex-col space-y-4 relative"> 
    <div className='w-96 h-96 rounded-full bg-gradient-to-r from-pink-500 to-red-500 absolute -z-10 top-20 opacity-20 blur-3xl'>
    </div>
     <div className='w-96 h-96 rounded-full bg-gradient-to-r from-pink-500 to-red-500 absolute -z-10 bottom-20 lg:right-96 opacity-20 blur-3xl'>
    </div>
    <Image src="/love-bg.png" width={400} height={400} alt="crush" />
      <SplitText className={"lg:text-7xl text-5xl font-bold font-calligraffitti bg-gradient-to-r from-pink-500 to-red-500  bg-clip-text text-transparent p-4" }>Welcome, My Crush!</SplitText>
      <Lovebutton text="See Your Surprise!"  onClick={() => router.push("/surprise")} />
    </div>
  )
}

export default Page