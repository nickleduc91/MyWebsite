import Image from 'next/image'
import CarletonPic from '../public/images/carleton.png'

const Education = () => {
  return (
    <section className="bg-black pt-24 pb-24" id="education">
      <div className="px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
        <div className="font-light text-gray-800 sm:text-lg col-span-3">
          <h2 className="border-t-2 w-48 border-indigo-600 pb-12 text-4xl tracking-tight font-bold text-white">
            Education
          </h2>
          <p className="mb-8 text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
            I am Currently enrolled in my fourth year at{' '}
            <span className="text-indigo-600">Carleton University</span>.
            Computer science is the degree I'm pursuing and I'm in the software
            engineering stream. I have completed 4 co-op work terms for
            a total of 16 months of experience in the work force.
          </p>
          <div className="lg:grid grid-cols-3">
            <p className="w-80 mb-12  text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
              <span className="text-indigo-600">GPA</span>: 11.21/12 (A)
            </p>
            <p className="w-80 mb-12  text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
              <span className="text-indigo-600">GPA</span>: 10.71/12 (A-)
            </p>
            <p className="w-80 mb-12  text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
                <span className="text-indigo-600">Expected Graduation</span>: April 2025
              </p>
          </div>
          <div className="hidden md:flex justify-center">
              <Image
                src={CarletonPic}
                alt={'Carleton U Picture'}
                width={270}
                height={270}
              />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Education
