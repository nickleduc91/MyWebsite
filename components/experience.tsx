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
              <div className="pb-5">
                <span className="text-indigo-600 text-3xl">
                  House of Commons
                </span>
                , Full Stack Developer
              </div>
              Skills Used:{' '}
              <span className="text-xl">
                <span className="text-indigo-600">ASP.NET MVC</span>,{' '}
                <span className="text-indigo-600">ASP.NET Web API</span>,{' '}
                <span className="text-indigo-600">JavaScript</span>,{' '}
                <span className="text-indigo-600">jQuery</span>,{' '}
                <span className="text-indigo-600">Microsoft Azure Portal</span>
              </span>
              <ul className="pl-12 text-xl list-disc">
                <li>
                  Developed and maintained ASP.NET web apps utilizing the MVC
                  design pattern alongside jQuery, AJAX, and Bootstrap to build
                  new features and resolve accessibility and usability bugs,
                  improving user experience on 10+ applications.
                </li>
                <li>
                  Utilized Entity Framework Core and LINQ to efficiently access
                  data from SQL databases, ensuring smooth data retrieval within
                  .NET Web API services.
                </li>
                <li>
                  •Managed Web Apps/Services, Web Application Fire Walls, and
                  Key Vaults within the Microsoft Azure Cloud Portal, ensuring
                  efficient resource handling.
                </li>
              </ul>
            </div>
          </div>
          <div className="font-light text-gray-800 sm:text-lg">
            <div className="mb-12 text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
              <div className="pb-5">
                <span className="text-indigo-600 text-3xl">
                  House of Commons
                </span>
                , Automation Software Developer
              </div>
              Skills Used:{' '}
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
      <div className="border-t-2 border-indigo-600 w-1/2 mx-auto my-12"></div>
      <div className="pt-0 md:pt-12 md:grid md:grid-cols-3 items-center px-4 mx-auto max-w-screen-xl">
        <div className="hidden md:flex col-span-1 mb-9">
          <Image
            className="rounded-full"
            src={myImage}
            alt={''}
            width={270}
          ></Image>
        </div>
        <div className="items-center px-4 mx-auto max-w-screen-xl lg:px-6 col-span-2">
          <div className="font-light text-gray-800 sm:text-lg">
            <div className="mb-12 text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
              <div className="pb-5">
                <span className="text-indigo-600 text-3xl">TutorOcean</span>,
                Full Stack Developer
              </div>
              Skills Used:{' '}
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
                  Re-created numerous web pages utilizing React and Next.js
                  resulting in significant improvements in SEO and page speed
                  through SSR.
                </li>
                <li>
                  Developed feature enhancements and resolved bugs on the
                  platform using React.js and styling with Tailwind CSS.
                </li>
                <li>
                  Automated REST API and UI regression tests using Robot
                  Framework to ensure maintainability with the evolving
                  software.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-indigo-600 w-1/2 mx-auto my-12"></div>
      <div className="pt-0 md:pt-12 md:grid md:grid-cols-3 items-center px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="col-span-2 font-light text-gray-800 sm:text-lg md:pl-12">
          <div className="mb-12 text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
            <div className="pb-5">
              <span className="text-indigo-600 text-3xl">TutorOcean</span>,
              Front-End Web Developer
            </div>
            Skills Used:{' '}
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
        <div className="hidden md:flex col-start-3 mb-9 pl-36">
          <Image
            className="rounded-3xl"
            src={quadC}
            alt={''}
            width={250}
          ></Image>
        </div>
      </div>
    </section>
  )
}

export default Experience
