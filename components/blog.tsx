import { useState } from 'react'

const languages = [
  {
    name: 'JavaScript',
    description: (
      <div className="font-dm text-gray-400">
        Out of all the languages out there, I am the most profficient with{' '}
        <span className="text-indigo-600">JavaScript</span>. I have lots of
        experience using different frameworks along side this language such as{' '}
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
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Blog = () => {
  const [selectedItem, setSelectedItem] = useState(0)
  const clickButton = (index: number) => {
    setSelectedItem(index)
  }

  return (
    <section className="bg-black pt-8">
      <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-10 lg:px-6">
        <div className="font-light text-gray-800 sm:text-lg">
          <h2 className="mb-4 text-3xl tracking-tight font-lora text-white">
            About me
          </h2>
          <p className="mb-8 rounded-lg text-xl font-dm text-gray-400">
            Hey thanks for visiting my website, let me tell you a little about
            myself. I am in the midst of my third year at{' '}
            <span className="text-indigo-600">Carleton University </span>
            studying <span className="text-indigo-600">computer science</span>.
            I am 20 years old and I absolutely love sports. From a young age, I
            fell in love with team-oriented sports, especially{' '}
            <span className="text-indigo-600">hockey</span>. Due to this, I love
            to work under pressure and I thrive under a team environment. In my
            free time, I love to work out at the gym, hangout at friends and of
            course, play sports.
          </p>
          <h2 className="mb-8 text-3xl tracking-tight font-lora text-white">
            Experienced languages
          </h2>
          <div className="flex grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 font-dm w-60 text-white">
              {languages.map((language, index) => (
                <div key={index}>
                  <button
                    onClick={() => clickButton(language.key)}
                    type="button"
                    className={classNames(
                      selectedItem === language.key
                        ? 'bg-indigo-600 text-white cursor-pointer'
                        : 'hover:rounded-xl hover:bg-gray-900 hover:text-gray-500 focus:outline-none focus:ring-0 focus:bg-gray-900 focus:text-gray-600 transition cursor-pointer',
                      'rounded-xl text-left px-6 py-2 border-gray-200 w-full font-normal',
                    )}
                  >
                    {language.name}
                  </button>
                </div>
              ))}
            </div>
            {languages[selectedItem].description}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            className="w-full rounded-lg"
            src="https://img.freepik.com/free-photo/top-view-unrecognizable-hacker-performing-cyberattack-night_1098-18706.jpg?w=740&t=st=1673310056~exp=1673310656~hmac=701cca00ac40ecd94048a680c794f463c910f8f31ece1ec84f1a0fedd60348f7"
            alt="office content 1"
          ></img>
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg ml-12"
            src="https://img.freepik.com/free-vector/stream-binary-code-design-vector_53876-161367.jpg?w=740&t=st=1673310022~exp=1673310622~hmac=c64e868736d071c083ad4251fcd2aebcf2d4a35292bd0b002b3a233f64a3d081"
            alt="office content 2"
          ></img>
        </div>
      </div>
    </section>
  )
}

export default Blog
