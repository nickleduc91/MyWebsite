import { useState } from 'react'
import Image from 'next/image'
import myImage from '../public/images/myImage.jpg'
import Bubbles from '../public/images/bubbles.svg'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Home() {
  return (
    <div className="bg-black pb-52" id="home">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-4xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div className="grid grid-cols-2 gap-1">
              <Image
                className="w-72 h-72 rounded-full"
                src={myImage}
                alt={''}
              />
              <div className="items-center justify-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-3xl text-gray-400">
                  Hey there! I'm,
                </h1>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-indigo-600">
                  Nicholas Leduc
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-400 text-center font-dm max-w-lg">
                  A computer science student at Carleton University passionate
                  about front and back end development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
