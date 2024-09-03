import Image from 'next/image'
import myImage from '../public/images/list.png'
import KHI from '../public/images/khi.jpg'

const Projects = () => {
  return (
    <section className="pt-32 bg-black pb-24 " id="projects">
      <div className="md:grid md:grid-cols-3 items-center px-4 mx-auto max-w-screen-xl">
        <div className="items-center px-4 mx-auto max-w-screen-xl lg:px-6 col-span-2">
          <div className="font-light text-gray-800 sm:text-lg">
            <h2 className="border-t-2 w-48 border-indigo-600 pb-12 text-4xl tracking-tight font-bold text-white">
              Projects
            </h2>
            <div className="mb-12 text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
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
      <div className='border-t-2 border-indigo-600 w-1/2 mx-auto my-12'></div>
      <div className="pt-0 md:pt-12 md:grid md:grid-cols-3 items-center px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="hidden md:flex col-span-1">
          <Image
            className="rounded-3xl"
            src={KHI}
            alt={''}
            width={300}
            height={300}
          ></Image>
        </div>
        <div className="items-center px-4 mx-auto max-w-screen-xl lg:px-6 col-span-2">
          <div className="font-light text-gray-800 sm:text-lg">
            <div className="mb-12 text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
              <a
                href="https://www.krewhomeinspectors.ca/"
                target="_blank"
                className="hover:text-indigo-800 text-indigo-600 text-3xl"
              >
                Krew Home Inspectors{' '}
                <span className="-ml-2 ri-links-line"></span>
              </a>
              , Contracted Website
              <br />
              <br />
              <span className="text-xl">Skills Used:</span>{' '}
              <span className="text-xl">
                <span className="text-indigo-600">Next.js</span>,{' '}
                <span className="text-indigo-600">React.js</span>,{' '}
                <span className="text-indigo-600">Tailwind CSS</span>,{' '}
                <span className="text-indigo-600">Jira</span>
              </span>
              <ul className="pl-12 text-xl list-disc">
                <li>
                  Collaborated with two colleagues to develop a front-end
                  website for a client, utilizing React.js and Next.js
                  frameworks to deliver a highly optimized and performant user
                  interface
                </li>
                <li>
                  Successfully enhanced the site's SEO by strategically adding
                  appropriate meta data to each page and submitting sitemaps to
                  search engines, improving discoverability and optimizing the
                  indexing process
                </li>
                <li>
                  Demonstrated strong project management skills by organizing
                  and conducting weekly meetings with the client and team
                  members, fostering collaboration and ensuring alignment on
                  goals and objectives
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
