import Head from 'next/head'
import Header from '../components/header'
import Home from '../components/home'
import About from '../components/about'
import Skills from '../components/skills'
import Experience from '../components/experience'
import Education from '../components/education'
import Projects from '../components/projects'
import Footer from '../components/footer'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Nicholas Leduc - Personal Website</title>
        <link rel="icon" href="/images/myImage.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:ital@0;1&family=Lora:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="google-site-verification" content="zjpbTDtoVskaGkpSU8Z80QKLGvfL7sAQ5zZ-XEj4Y5E" />
        <meta
          property="og:title"
          content="Nicholas Leduc - Personal Website"
        ></meta>
        <meta
          name="description"
          content="Welcome to my digital space! Explore my professional journey, skills, and achievements!"
        />
        <meta
          property="og:url"
          content="https://nickleduc.vercel.app/"
        ></meta>
        <meta
          property="og:description"
          content="Welcome to my digital space! Explore my professional journey, skills, and achievements"
        />
      </Head>
      <Header />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Footer />
    </div>
  )
}

export default Index
