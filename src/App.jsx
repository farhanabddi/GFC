import Hero from './sections/Hero'
import Menu from './sections/Menu'
import Location from './sections/Location'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <Location />
      <Contact />
      <Footer />
    </div>
  )
}

export default App