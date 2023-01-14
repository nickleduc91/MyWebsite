import { useState } from 'react'

const languages = [
  {
    name: 'JavaScript',
    description: (
      <div className="font-dm text-gray-400">
        Out of all the languages out there, I am the most proficient with{' '}
        <span className="text-indigo-600">JavaScript</span>. I have lots of
        experience using different frameworks alongside this language such as{' '}
        <span className="text-indigo-600">React</span>, and{' '}
        <span className="text-indigo-600">Next</span> JS.
      </div>
    ),
    key: 0,
  },
  {
    name: 'HTML',
    description: (
      <div className="font-dm text-gray-400">
        I've been using <span className="text-indigo-600">HTML</span> ever since
        I learned JavaScript way back in 2020. I have taken adavantage of React
        in order to display content by using{' '}
        <span className="text-indigo-600">HTML</span> from within{' '}
        <span className="text-indigo-600">JSX</span> files.
      </div>
    ),
    key: 1,
  },
  {
    name: 'CSS',
    description: (
      <div className="font-dm text-gray-400">
        {' '}
        I have used <span className="text-indigo-600">CSS</span> to style all
        the work from my experience in front-end web development. I have also
        utilized frameworks such as{' '}
        <span className="text-indigo-600">Tailwind</span> to make life even
        easier when writing <span className="text-indigo-600">CSS</span> code
        for front-end styling.
      </div>
    ),
    key: 2,
  },
  {
    name: 'Python',
    description: (
      <div className="font-dm text-gray-400">
        {' '}
        <span className="text-indigo-600">Python</span> was the first language I
        learned at Carleton University. I got the opportunity to also implement
        this language when doing{' '}
        <span className="text-indigo-600">test automation</span> at my former
        co-op placement.
      </div>
    ),
    key: 3,
  },
  {
    name: 'C',
    description: (
      <div className="font-dm text-gray-400">
        {' '}
        Even though <span className="text-indigo-600">C</span> is the most
        recent language I've learned, I still enjoy it a lot! I first learned
        this in my second year of studies at{' '}
        <span className="text-indigo-600">Carleton</span> and I'm hoping to
        continue on doing exactly that in the near future.{' '}
      </div>
    ),
    key: 4,
  },
  {
    name: 'Java',
    description: (
      <div className="font-dm text-gray-400">
        {' '}
        The very first langauge I ever learned to code in was{' '}
        <span className="text-indigo-600">Java</span>. This language is the main
        reason why I fell in love with programming and why I want it to be apart
        of my future.{' '}
      </div>
    ),
    key: 5,
  },
  {
    name: 'TypeScript',
    description: (
      <div className="font-dm text-gray-400">
        {' '}
        I first learned <span className="text-indigo-600">
          TypeScript
        </span> at <span className="text-indigo-600">TutorOcean</span> working
        in my second ever co-op work term. I implemented and used this language
        when working on some back-end work for fetching data from the{' '}
        <span className="text-indigo-600">Mongo</span> database.
      </div>
    ),
    key: 6,
  },
  {
    name: 'MongoDB',
    description: (
      <div className="font-dm text-gray-400">
        {' '}
        Throughout my first 2 co-op workterms, the database that was utilized
        was <span className="text-indigo-600">Mongo</span>. I had to filter and
        query accordingly through the DB when working on the back-end and test
        automation.
      </div>
    ),
    key: 7,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Skills = () => {
  const [selectedItem, setSelectedItem] = useState(0)
  const clickButton = (index: number) => {
    setSelectedItem(index)
  }

  return (
    <section className="pt-24 bg-black pb-24" id="skills">
      <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-5 lg:py-10 lg:px-6">
        <div className="font-light text-gray-800 sm:text-lg col-span-3">
          <h2 className="border-t-2 w-32 border-indigo-600 pb-12 text-4xl tracking-tight font-bold text-white">
            Skills
          </h2>
          <div className="mb-8 text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4 grid grid-cols-2">
            {languages.map((language, index) => (
              <div key={index} className="w-52">
                <button
                  onClick={() => clickButton(language.key)}
                  type="button"
                  className={classNames(
                    selectedItem === language.key
                      ? 'bg-indigo-600 text-white cursor-pointer'
                      : 'hover:rounded-xl hover:bg-gray-600 hover:text-gray-300 focus:outline-none focus:ring-0 focus:bg-gray-900 focus:text-gray-600 transition cursor-pointer',
                    'rounded-xl text-left px-6 py-2 border-gray-200 w-full font-normal',
                  )}
                >
                  {language.name}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="text-2xl col-span-2 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4 mt-12">
          {languages[selectedItem].description}
        </div>
      </div>
    </section>
  )
}

export default Skills
