import { useState } from 'react'

const languages = [
  {
    name: 'Programming Languages',
    description: (
      <div className="font-dm text-gray-400">
        JavaScript, Python, C++, Java, TypeScript, C, C#, Robot Framework
      </div>
    ),
    skills: [
      'JavaScript',
      'Python',
      'C++',
      'Java',
      'TypeScript',
      'C',
      'C#',
      'Robot Framework',
    ],
    key: 0,
  },
  {
    name: 'Database & Data Management',
    description: (
      <div className="font-dm text-gray-400">
        MongoDB, Mongoose, Hashing, SQL, REST-API, Querying, API Testing, HTTP
        methods
      </div>
    ),
    skills: [
      'MongoDB',
      'Mongoose',
      'Hashing',
      'SQL',
      'REST-API',
      'Querying',
      'API Testing',
      'HTTP',
    ],
    key: 1,
  },
  {
    name: 'Libraries and Frameworks',
    description: (
      <div className="font-dm text-gray-400">
        React.js, Next.js, Tailwind CSS, Robot Framework (Selenium, Database
        Library, Sikuli)
      </div>
    ),
    skills: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Selenium',
      'Database Library',
      'Sikuli',
    ],
    key: 2,
  },
  {
    name: 'Version Control & Collaboration',
    description: (
      <div className="font-dm text-gray-400">
        Git, Github, GitLab, Scrum Agile Framework, Jira, Microsoft Azure Dev
        Ops, Asana, Microsoft Teams
      </div>
    ),
    skills: [
      'Git',
      'GitHub',
      'GitLab',
      'Scrum Agile Framework',
      'Jira',
      'Microsoft ADO',
      'Asana',
      'Microsoft Teams',
    ],
    key: 3,
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
    <section className="pt-24 bg-black pb-28" id="skills">
      <div className="items-center px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
        <div className="font-light text-gray-800 sm:text-lg">
          <h2 className="border-t-2 w-32 border-indigo-600 pb-12 text-4xl tracking-tight font-bold text-white">
            Skills
          </h2>
          <div className="mb-12 text-2xl font-dm text-gray-400 grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-8">
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
        <div className="border-t-2 border-indigo-600 w-1/2 mx-auto my-12"></div>
        <div className="grid-cols-1 lg:grid lg:grid-cols-3 lg:gap-4 text-2xl rounded-2xl py-4 px-4 mt-12 text-white ">
          {languages[selectedItem].skills.map((skill, index) => (
            <div key={index} className="rounded-2xl border-gray-200 lg:w-2/3 lg:mx-auto lg:my-auto my-3 bg-gray-900 py-4 text-center text-indigo-600 ">
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
