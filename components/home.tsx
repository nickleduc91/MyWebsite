import Image from 'next/image'
import myImage from '../public/images/myImage.jpg'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Home = () => {
  return (
    <div className="bg-black pb-52" id="home">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-4xl pt-20 md:pb-32 sm:pt-48">
            <div className="md:grid md:grid-cols-2 md:gap-1 pb-12">
              <Image
                className="hidden md:flex w-72 h-72 rounded-full"
                src={myImage}
                alt={'me'}
                priority
              />
              <div className="items-center justify-center">
                <h1 className="md:text-4xl font-bold tracking-tight text-center text-3xl text-gray-400">
                  Hey there! I'm,
                </h1>
                <h1 className="md:text-5xl text-4xl font-bold tracking-tight text-center smtext-6xl text-indigo-600">
                  Nicholas Leduc
                </h1>
                <p className="mt-6 md:text-xl text-lg leading-8 text-gray-400 text-center font-dm max-w-lg">
                  A computer science student at Carleton University passionate
                  about front and back-end development.
                </p>
                <p className="mt-6 md:text-xl text-lg leading-8 text-gray-400 text-center font-dm max-w-lg">
                  Don't be afraid to take a scroll!
                </p>
                <div className="animate-bounce  -mt-4 pt-24 flex flex-col items-center justify-center">
                  <ChevronDownIcon
                    className="animate-pulse text-indigo-600 h-24 w-24 items-center"
                    aria-hidden="true"
                  />
                  <ChevronDownIcon
                    className="animate-pulse -mt-20 text-indigo-600 h-32 w-32 items-center"
                    aria-hidden="true"
                  />
                  <ChevronDownIcon
                    className="animate-pulse -mt-28 text-indigo-600 h-40 w-40 items-center"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                className="md:hidden w-72 h-72 rounded-full"
                src={myImage}
                alt={''}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
