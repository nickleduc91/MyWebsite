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
  {
    name: 'REST APIs',
    description: (
      <div className="font-dm text-gray-400">
        {' '}
        Within my second co-op work term, I got a large understanding and
        practice of using and creating{' '}
        <span className="text-indigo-600">REST API</span> functions. I created
        these in order to{' '}
        <span className="text-indigo-600">dynamically fetch</span> data to
        display on the front-end of some of{' '}
        <span className="text-indigo-600">TutorOcean's</span> web pages.
      </div>
    ),
    key: 8,
  },

  {
    name: 'C++',
    description: (
      <div className="font-dm text-gray-400">
        {' '}
        I learned this language in my third year of studies at{' '}
        <span className="text-indigo-600">Carleton University</span> and I
        picked it up really quickly. Used this language to create various
        <span className="text-indigo-600"> object-oriented</span> programs which
        utilized <span className="text-indigo-600">inheritance</span> in order
        to create <span className="text-indigo-600">robust</span> and{' '}
        <span className="text-indigo-600">polymorhic</span> code.
      </div>
    ),
    key: 9,
  },

  {
    name: 'React.js',
    description: (
      <div className="font-dm text-gray-400">
        {' '}
        Applied this framework in order to{' '}
        <span className="text-indigo-600">fix bugs</span> and create
        <span className="text-indigo-600"> enhancements/features</span> on the
        front-end web applications. I applied this skill during my time at{' '}
        <span className="text-indigo-600">QuadC</span> and{' '}
        <span className="text-indigo-600">TutorOcean</span>. Along side this, I
        used
        <span className="text-indigo-600"> React</span> in order to create this
        very <span className="text-indigo-600">website</span>!
      </div>
    ),
    key: 10,
  },

  {
    name: 'Next.js',
    description: (
      <div className="font-dm text-gray-400">
        {' '}
        Created web pages using this{' '}
        <span className="text-indigo-600">React Framework</span> in order to
        increase page
        <span className="text-indigo-600"> speed</span> and{' '}
        <span className="text-indigo-600">performace</span> by utilizing{' '}
        <span className="text-indigo-600">server-side rendering</span>. In
        particular, I did this during my time at{' '}
        <span className="text-indigo-600">TutorOcean</span> and helped to
        drastically increase their <span className="text-indigo-600">SEO</span>{' '}
        score on a variety of web pages.
      </div>
    ),
    key: 11,
  },

  {
    name: 'Robot Framework',
    description: (
      <div className="font-dm text-gray-400">
        {' '}
        Utilized <span className="text-indigo-600">Robot Framework</span> to
        write and update <span className="text-indigo-600">test cases</span> in
        order to find and locate different{' '}
        <span className="text-indigo-600">bugs</span> within both,{' '}
        <span className="text-indigo-600">TutorOcean</span> and{' '}
        <span className="text-indigo-600">QuadC</span>'s product. Ran various
        <span className="text-indigo-600"> regression</span> tests to confirm
        that a recent program or code change did not
        <span className="text-indigo-600"> adversely effect</span> existing
        features.
      </div>
    ),
    key: 12,
  },

  {
    name: 'Git',
    description: (
      <div className="font-dm text-gray-400">
        {' '}
        Gained vast amounts of knowledge in{' '}
        <span className="text-indigo-600">team-oriented</span> programming by
        using different <span className="text-indigo-600">Git</span>{' '}
        repositories such as <span className="text-indigo-600">GitHub</span> and{' '}
        <span className="text-indigo-600">GitLab</span> to share and merge code
        within <span className="text-indigo-600">branches</span>.
      </div>
    ),
    key: 13,
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
      <div className="items-center px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
        <div className="font-light text-gray-800 sm:text-lg">
          <h2 className="border-t-2 w-32 border-indigo-600 pb-12 text-4xl tracking-tight font-bold text-white">
            Skills
          </h2>
          <div className="mb-8 text-2xl font-dm text-gray-400 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8">
            {languages.map((language, index) => (
              <div key={index} className="md:w-72 ">
                <button
                  onClick={() => clickButton(language.key)}
                  type="button"
                  className={classNames(
                    selectedItem === language.key
                      ? 'animate-wiggle bg-indigo-600 text-white cursor-pointer'
                      : 'hover:rounded-xl hover:bg-gray-600 hover:text-gray-300 focus:outline-none transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300',
                    'rounded-xl px-6 border-gray-200 w-full bg-gray-900 py-4 text-center',
                  )}
                >
                  {language.name}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className='border-t-2 border-indigo-600 w-1/2 mx-auto my-12'></div>
        <div className="text-2xl col-span-2 rounded-2xl bg-gray-900 py-4 px-4 mt-12">
          {languages[selectedItem].description}
        </div>
      </div>
    </section>
  )
}

export default Skills
