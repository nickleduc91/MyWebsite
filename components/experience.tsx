import Image from 'next/image'
import myImage from '../public/images/tutor.jpg'
import quadC from '../public/images/quadCPic.png'

const Experience = () => {
  return (
    <section className="pt-32 bg-black pb-24 " id="experience">
      <div className="md:grid md:grid-cols-3 items-center px-4 mx-auto max-w-screen-xl">
        <div className="items-center px-4 mx-auto max-w-screen-xl lg:px-6 col-span-2">
          <div className="font-light text-gray-800 sm:text-lg">
            <h2 className="border-t-2 w-48 border-indigo-600 pb-12 text-4xl tracking-tight font-bold text-white">
              Experience
            </h2>
            <div className="mb-12 rounded-lg text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
              <span className="text-indigo-600 text-3xl">TutorOcean</span>,
              Front-End Web Development <br></br>Skills Used:{' '}
              <span className="text-xl">
                <span className="text-indigo-600">Next.js</span>,{' '}
                <span className="text-indigo-600">React.js</span>,{' '}
                <span className="text-indigo-600">MongoDB</span>,{' '}
                <span className="text-indigo-600">Tailwind CSS</span>
              </span>
              <ul className="pl-12 text-xl list-disc">
                <li>
                  Re-created the /places, /schools, and /topics pages, along
                  with their children.
                </li>
                <li>
                  Did this using Next JS in order to drastically improve page
                  speed and SEO performace{' '}
                </li>
                <li>Styled them using a CSS framework; Tailwind</li>
              </ul>
            </div>
          </div>
          <div className="font-light text-gray-800 sm:text-lg">
            <div className="mb-12 rounded-lg text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
              <span className="text-indigo-600 text-3xl">TutorOcean</span>,
              Back-End Web Development <br></br>Skills Used:{' '}
              <span className="text-xl">
                <span className="text-indigo-600">TypeScript</span>,{' '}
                <span className="text-indigo-600">MongoDB</span>
              </span>
              <ul className="pl-12 text-xl list-disc">
                <li>
                  Created various REST-API functions in order to fetch
                  appropriate data from the Mongo database utilizing TypeScript
                  and YAML files.
                </li>
              </ul>
            </div>
          </div>
          <div className="font-light text-gray-800 sm:text-lg">
            <div className="mb-12 rounded-lg text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
              <span className="text-indigo-600 text-3xl">TutorOcean</span>, Test
              Automation Development <br></br>Skills Used:{' '}
              <span className="text-xl">
                <span className="text-indigo-600">Python</span>,{' '}
                <span className="text-indigo-600">Robot Framewrok</span>,{' '}
                <span className="text-indigo-600">MongoDB</span>
              </span>
              <ul className="pl-12 text-xl list-disc">
                <li>
                  Used Robot Framework to create new regression test cases in
                  order to find bugs in newly developed features
                </li>
                <li>
                  Maintained the pre-existing test cases to ensure they can be
                  up to date with the latest changes to the product.
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
      <div className="pt-12 md:grid md:grid-cols-3 items-center px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="hidden md:flex col-span-1">
          <Image
            className="rounded-3xl"
            src={quadC}
            alt={''}
            width={300}
            height={300}
          ></Image>
        </div>
        <div className="col-span-2 font-light text-gray-800 sm:text-lg md:pl-12">
          <div className="mb-12 rounded-lg text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
            <span className="text-indigo-600 text-3xl">QuadC</span>, Front-End
            Web Development <br></br>Skills Used:{' '}
            <span className="text-xl">
              <span className="text-indigo-600">React.js</span>,{' '}
              <span className="text-indigo-600">MongoDB</span>,{' '}
              <span className="text-indigo-600">CSS</span>
            </span>
            <ul className="pl-12 text-xl list-disc">
              <li>
                Fixed various bugs throughout the website which were reported by
                customers or the testing team
              </li>
              <li>
                Developed various front-end enhancements and features for the
                website based on customer's feedback and demand
              </li>
              <li>Styled them using CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
