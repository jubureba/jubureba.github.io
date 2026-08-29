import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Stack } from './sections/Stack'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
