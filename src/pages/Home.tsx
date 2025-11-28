import About from '../components/About'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import MenuSection from './Menu'
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MenuSection />
      <About />
      <Footer />
    </div>
  )
}
