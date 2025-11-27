import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import MenuSection from './Menu'
import { Toaster } from "react-hot-toast";



export default function Home() {
  return (
    <div>
      <Toaster position="top-center" />
      <Navbar />
      <Hero />
      <MenuSection />
    </div>
  )
}
