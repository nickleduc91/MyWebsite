const About = () => {
  return (
    <section className="bg-black pb-24 pt-24" id="about">
      <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-4 lg:py-10 lg:px-6">
        <div className="font-light text-gray-800 sm:text-lg col-span-3">
          <h2 className="border-t-2 w-48 border-indigo-600 pb-12 text-4xl tracking-tight font-bold text-white">
            About me
          </h2>
          <p className="mb-12 rounded-lg text-2xl font-dm text-gray-400 border-gray-900 rounded-2xl bg-gray-900 py-4 px-4">
            Hey thanks for visiting my website, let me tell you a little about
            myself. I am in the midst of my third year at{' '}
            <span className="text-indigo-600">Carleton University </span>
            studying <span className="text-indigo-600">computer science</span>.
            I am 20 years old and I absolutely love sports. From a young age, I
            fell in love with team-oriented sports, especially{' '}
            <span className="text-indigo-600">hockey</span>. Due to this, I love
            to work under pressure and I thrive under a team environment. In my
            free time, I love to work out at the gym, hangout with friends and
            of course, play sports.
          </p>
        </div>
        <div className="">
          <img
            className="w-full rounded-lg"
            src="https://img.freepik.com/free-photo/top-view-unrecognizable-hacker-performing-cyberattack-night_1098-18706.jpg?w=740&t=st=1673310056~exp=1673310656~hmac=701cca00ac40ecd94048a680c794f463c910f8f31ece1ec84f1a0fedd60348f7"
            alt="office content 1"
          />
        </div>
      </div>
    </section>
  )
}

export default About
