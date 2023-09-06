import Image from 'next/image'
import myImage from '../public/images/tutor.jpg'
import quadC from '../public/images/quadCPic.png'
import hoc from '../public/images/hoc-logo.webp'

const Experience = () => {
  return (
    <section className="pt-32 bg-black pb-24 " id="experience">
      <div className="md:grid md:grid-cols-3 items-center px-4 mx-auto max-w-screen-xl">
        <div className="items-center px-4 mx-auto max-w-screen-xl lg:px-6 col-span-2">
          <div className="font-light text-gray-800 sm:text-lg">
            <h2 className="border-t-2 w-48 border-indigo-600 pb-12 text-4xl tracking-tight font-bold text-white">
              Experience
            </h2>
            <div className="mb-12 text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
              <span className="text-indigo-600 text-3xl">TutorOcean</span>, Full
              Stack Developer <br></br>Skills Used:{' '}
              <span className="text-xl">
                <span className="text-indigo-600">Next.js</span>,{' '}
                <span className="text-indigo-600">React.js</span>,{' '}
                <span className="text-indigo-600">MongoDB</span>,{' '}
                <span className="text-indigo-600">Tailwind CSS</span>
              </span>
              <ul className="pl-12 text-xl list-disc">
                <li>
                  Developed REST API endpoints using Node.js to efficiently
                  fetch and query data from a MongoDB database.
                </li>
                <li>
                  Re-created numerous web pages by utilizing React and Next.js
                  which drastically improved SEO.
                </li>
                <li>
                  Implemented various SEO strategies, including appropriate
                  metadata, title tags, and structured data, to optimize website
                  content for search engine crawlers.
                </li>
                <li>
                  Utilized Tailwind CSS to style and format the front-end.
                </li>
              </ul>
            </div>
          </div>
          <div className="font-light text-gray-800 sm:text-lg">
            <div className="mb-12 text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
              <span className="text-indigo-600 text-3xl">TutorOcean</span>, Test
              Automation Developer <br></br>Skills Used:{' '}
              <span className="text-xl">
                <span className="text-indigo-600">Python</span>,{' '}
                <span className="text-indigo-600">Robot Framewrok</span>,{' '}
                <span className="text-indigo-600">Selenium</span>,{' '}
                <span className="text-indigo-600">MongoDB</span>
              </span>
              <ul className="pl-12 text-xl list-disc">
                <li>
                  Developed robust and scalable regression automation tests
                  using Robot Framework and Selenium, ensuring consistent and
                  reliable software quality.
                </li>
                <li>
                  Maintained the pre-existing tests, ensuring reusability,
                  maintainability, and compatibility with evolving software
                  components.
                </li>
                <li>
                  Conducted back-end REST API regression tests to ensure
                  appropriate endpoints were working properly.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden md:flex pl-16 col-start-3">
          <Image
            className="rounded-full"
            src={myImage}
            alt={'TutorOcean Picture'}
          />
        </div>
      </div>
      <div className='border-t-2 border-indigo-600 w-1/2 mx-auto my-12'></div>
      <div className="pt-12 md:grid md:grid-cols-3 items-center px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="hidden md:flex col-span-1 mb-9">
          <Image
            className="rounded-3xl"
            src={quadC}
            alt={''}
            width={270}
            height={300}
          ></Image>
        </div>
        <div className="col-span-2 font-light text-gray-800 sm:text-lg md:pl-12">
          <div className="mb-12 text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
            <span className="text-indigo-600 text-3xl">QuadC</span>, Front-End
            Web Developer <br></br>Skills Used:{' '}
            <span className="text-xl">
              <span className="text-indigo-600">React.js</span>,{' '}
              <span className="text-indigo-600">MongoDB</span>,{' '}
              <span className="text-indigo-600">CSS</span>
            </span>
            <ul className="pl-12 text-xl list-disc">
              <li>
                Developed and implemented feature enhancements on the QuadC
                platform by using React.js.
              </li>
              <li>
                Utilized React components and state management to create
                interactive and dynamic elements.
              </li>
              <li>
                Successfully identified and resolved various bugs in order to
                meet customer needs.
              </li>
              <li>Styled web pages using CSS.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border-t-2 border-indigo-600 w-1/2 mx-auto my-12'></div>
      <div className="pt-12 md:grid md:grid-cols-3 items-center px-4 mx-auto max-w-screen-xl">
        <div className="items-center px-4 mx-auto max-w-screen-xl lg:px-6 col-span-2">
          <div className="font-light text-gray-800 sm:text-lg">
            <div className="mb-12 text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
              <span className="text-indigo-600 text-3xl">House of Commons</span>
              , Automation Software Developer <br></br>Skills Used:{' '}
              <span className="text-xl">
                <span className="text-indigo-600">Robot Framework</span>,{' '}
                <span className="text-indigo-600">Python</span>,{' '}
                <span className="text-indigo-600">Sikuli</span>,{' '}
                <span className="text-indigo-600">Microsoft Azure Dev Ops</span>
              </span>
              <ul className="pl-12 text-xl list-disc">
                <li>
                  Leveraged Robot Framework to build automation scripts for a
                  thick desktop security software, empowering colleagues to
                  accelerate repetitive and complex tasks.
                </li>
                <li>
                  Successfully orchestrated the entire research, design,
                  architecture, and development process all by myself,
                  leveraging my expertise to create a robust solution that
                  surpassed all expectations.
                </li>
                <li>
                  Took charge of integrating the automation scripts into
                  Microsoft's Azure DevOps, empowering cross-functional teams to
                  collaborate effectively, track changes, and deploy the
                  software efficiently.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden md:flex pl-16 col-start-3">
          <Image
            className="rounded-full"
            src={hoc}
            alt={'House of Commons Picture'}
          />
        </div>
      </div>
    </section>
  )
}

export default Experience
