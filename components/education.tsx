import Image from 'next/image'
import CarletonPic from '../public/images/carleton.png'

const Education = () => {
  return (
    <section className="bg-black pt-24 pb-24" id="education">
      <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-4 lg:py-10 lg:px-6">
        <div className="font-light text-gray-800 sm:text-lg col-span-3">
          <h2 className="border-t-2 w-48 border-indigo-600 pb-12 text-4xl tracking-tight font-bold text-white">
            Education
          </h2>
          <p className="mb-8 rounded-lg text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
            I am Currently enrolled in my third year at{' '}
            <span className="text-indigo-600">Carleton University</span>.
            Computer science is the degree I'm pursuing and I'm in the software
            engineering stream. I have already completed 2 co-op work terms for
            a total of 8 months of experience in the work force.
          </p>
          <p className="w-80 mb-6 rounded-lg text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
            <span className="text-indigo-600">CGPA</span>: 11.21/12 (A)
          </p>
          <p className="w-80 mb-12 rounded-lg text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
            <span className="text-indigo-600">GPA</span>: 10.71/12 (A-)
          </p>
        </div>
        <div className="hidden md:flex pl-4">
          <Image
            src={CarletonPic}
            alt={'Carleton U Picture'}
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  )
}

export default Education
