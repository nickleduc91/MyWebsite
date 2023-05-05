import Image from 'next/image'
import myImage from '../public/images/list.png'

const Projects = () => {
  return (
    <section className="pt-24 bg-black pb-24 " id="projects">
      <div className="md:grid md:grid-cols-3 items-center px-4 mx-auto max-w-screen-xl">
        <div className="items-center px-4 mx-auto max-w-screen-xl lg:px-6 col-span-2">
          <div className="font-light text-gray-800 sm:text-lg">
            <h2 className="border-t-2 w-48 border-indigo-600 pb-12 text-4xl tracking-tight font-bold text-white">
              Projects
            </h2>
            <div className="mb-12 rounded-lg text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
              <a
                href="https://twodue.vercel.app/"
                target="_blank"
                className="hover:text-indigo-800 text-indigo-600 text-3xl"
              >
                TwoDue <span className="-ml-2 ri-links-line"></span>
              </a>
              , Time management task board program
              <br />
              <br />
              <a
                href="https://github.com/nickleduc91/twodue"
                target="_blank"
                className="text-xl hover:text-indigo-800 text-indigo-600"
              >
                Repository <span className="-ml-2 ri-links-line"></span>
              </a>
              <br />
              <span className="text-xl">Skills Used:</span>{' '}
              <span className="text-xl">
                <span className="text-indigo-600">Next.js</span>,{' '}
                <span className="text-indigo-600">React.js</span>,{' '}
                <span className="text-indigo-600">MongoDB</span>,{' '}
                <span className="text-indigo-600">Tailwind CSS</span>
              </span>
              <ul className="pl-12 text-xl list-disc">
                <li>
                  Created the front-end by constructing components using React
                  and Next.js
                </li>
                <li>Styled the program using Tailwind CSS</li>
                <li>
                  Engineered the back-end by using the built in Next.js api to
                  create end-points in order to fetch data from the database
                </li>
                <li>
                  Stored all the user data in MongoDB (User info, tasks, boards)
                  so that all information is saved automatically and data is not
                  lost
                </li>
                <li>
                  Implemented a login system using Next Auth so that user's can
                  save their info through the account they create{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden md:flex pl-16 col-start-3">
          <Image className="" src={myImage} alt={'TutorOcean Picture'} />
        </div>
      </div>
    </section>
  )
}

export default Projects
