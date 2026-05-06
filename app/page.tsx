'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}