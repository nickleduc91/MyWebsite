import codeImage from '../public/images/code.webp'
import Image from 'next/image'

const About = () => {
  return (
    <section className="bg-black pb-24 pt-24" id="about">
      <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-4 lg:py-10 lg:px-6">
        <div className="font-light text-gray-800 sm:text-lg col-span-3">
          <h2 className="border-t-2 w-48 border-indigo-600 pb-12 text-4xl tracking-tight font-bold text-white">
            About me
          </h2>
          <p className="mb-12 rounded-lg text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
            Welcome to my website! I'm Nick, a 21-year-old computer science
            student currently in my fourth year at{' '}
            <span className="text-indigo-600">Carleton University</span>. My
            love for hockey and team-oriented activities has shaped my ability
            to work well under pressure and excel in collaborative environments.
            <br></br> <br></br>
            Recently, I've also discovered a liking for tennis and pickleball!
            When I'm not studying, I enjoy working out, spending time with
            friends, and staying active. Thanks for stopping by to learn a bit
            about me!
          </p>
        </div>
        <div className="hidden md:flex">
          <Image
            className="w-full rounded-lg"
            src={codeImage}
            alt="Code image"
          />
        </div>
      </div>
    </section>
  )
}

export default About
